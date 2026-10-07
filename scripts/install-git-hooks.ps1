#Requires -PSEdition Core
# install-git-hooks - idempotent installation of caller-supplied git hook templates.
#
# Reads the templates under -TemplateDir, substitutes the repo root and writes them
# into <RepoRoot>/.git/hooks. Installation is content-compared, so re-running is a
# no-op unless the template or the repo location changed. Hook policy belongs to the
# calling repository; this script only owns the install mechanism.
#
# -RepoRoot is resolved to an absolute path before substitution: git invokes hooks
# from a working directory that depends on how it was called (`git -C <dir> push`
# is not the repo root), so a relative location would install a working hook that
# breaks the moment anyone pushes from elsewhere.
#
# A core.hooksPath that points at a directory which does not exist makes every hook
# unreachable and is always misconfiguration, so it is cleared here (repository
# scope only, with before/after and the command printed). A core.hooksPath that
# points at a real directory is a caller decision and is still refused.
[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)][string]$RepoRoot,
    [Parameter(Mandatory = $true)][string]$TemplateDir
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$gitDir = Join-Path $RepoRoot '.git'
if (-not (Test-Path -LiteralPath $gitDir -PathType Container)) {
    throw "install-git-hooks: not a git worktree: $RepoRoot"
}
# Substitute an absolute location into the templates (see the header note).
$resolvedRepoRoot = Resolve-Path -LiteralPath $RepoRoot -ErrorAction SilentlyContinue |
    Select-Object -First 1
if ($null -eq $resolvedRepoRoot) {
    throw "install-git-hooks: -RepoRoot disappeared during installation: $RepoRoot"
}
# Canonicalize through the filesystem: Get-Item FullName expands 8.3 short names
# (RUNNER~1 → runneradmin) and normalizes casing. Without this, callers that pass
# a short-form absolute path (node os.tmpdir() on some CI runners) produce hook
# content differing from the long-form first install, and the content-compared
# idempotent re-run would report "installed" forever instead of "unchanged"
# (run 37074198235 实测). Resolve-Path alone does NOT expand short names.
$RepoRoot = (Get-Item -LiteralPath $resolvedRepoRoot.Path).FullName
# Pinned git dir, taken from the canonicalized root: the guard above already proved
# <RepoRoot>/.git is a directory, so this addresses exactly this repository and lets
# every git call below survive an inherited GIT_DIR (see Get-GitConfigValue).
$gitDir = Join-Path $RepoRoot '.git'
$resolvedTemplateDir = Resolve-Path -LiteralPath $TemplateDir -ErrorAction SilentlyContinue |
    Select-Object -First 1
if ($null -ne $resolvedTemplateDir) { $TemplateDir = $resolvedTemplateDir.Path }
# core.hooksPath redirects hook lookup away from .git/hooks. Two shapes are told
# apart, because only one of them is a caller decision this installer must obey
# (both measured in GFSoftware/Workspace/tmp/triple-closeout-20261006/_h1/PROOF.md):
#   * the configured directory EXISTS -> a real, working redirection. Refuse,
#     install nothing, leave the configuration untouched. That judgement is not
#     weakened by the self-heal below.
#   * the configured directory does NOT exist -> no hook is reachable from it, so
#     it is never a deliberate configuration; it is residue (a leaked fixture
#     value; in the field it was a deleted temp directory that also dead-ended the
#     family gate). Clearing it is the repair, not a bypass: it is cleared only in
#     the scope that holds it (this repository's own config, never machine-wide),
#     and before/after plus the exact command are printed so the change stays
#     reviewable and replayable by a human.
function Get-GitConfigValue {
    param(
        [Parameter(Mandatory = $true)][string]$RepoRoot,
        [Parameter(Mandatory = $true)][string]$Key,
        [switch]$Local
    )
    # Every git call is pinned with --git-dir to THIS repository: a bare
    # `git -C <repo> config` follows an inherited absolute GIT_DIR instead (the
    # shape git exports when it runs a hook, and what a GUI client passes down),
    # which would make the probe - and the unset below - read and rewrite some
    # unrelated repository's config. Measured in _h1/PROOF.md (G1 hijack, E5 pin).
    $argv = @('-C', $RepoRoot, '--git-dir', $gitDir, 'config')
    if ($Local) { $argv += '--local' }
    $argv += @('--get', $Key)
    $out = & git @argv 2>$null
    if ($LASTEXITCODE -ne 0) { return '' }
    if ($null -eq $out) { return '' }
    return (@($out) | Select-Object -First 1 | ForEach-Object { [string]$_ }).Trim()
}

$configuredHooksPath = Get-GitConfigValue -RepoRoot $RepoRoot -Key 'core.hooksPath'
if (-not [string]::IsNullOrWhiteSpace($configuredHooksPath)) {
    # Relative hooksPath is resolved against the repository root, same as git does.
    $targetedHooksDir = if ([IO.Path]::IsPathRooted($configuredHooksPath)) {
        $configuredHooksPath
    } else {
        Join-Path $RepoRoot $configuredHooksPath
    }
    if (Test-Path -LiteralPath $targetedHooksDir -PathType Container) {
        Write-Output "install-git-hooks: core.hooksPath is '$configuredHooksPath'; .git/hooks would be ignored, nothing installed."
        exit 1
    }
    $unsetCommand = "git -C `"$RepoRoot`" config --local --unset core.hooksPath"
    $localHooksPath = Get-GitConfigValue -RepoRoot $RepoRoot -Key 'core.hooksPath' -Local
    if ([string]::IsNullOrWhiteSpace($localHooksPath)) {
        # Dangling but not ours: it comes from global/system config, and rewriting
        # machine-wide configuration is not this installer's to do.
        $origin = & git -C $RepoRoot --git-dir $gitDir config --show-origin --get core.hooksPath 2>$null
        $originText = if ($null -eq $origin) { '<unknown>' } else { (@($origin) | Select-Object -First 1) -as [string] }
        Write-Output "install-git-hooks: core.hooksPath '$configuredHooksPath' does not exist (origin: $originText); it is not this repository's own setting, so it is not cleared here. Nothing installed."
        Write-Output "  named remedy (human action): git config --global --unset core.hooksPath"
        exit 1
    }
    & git -C $RepoRoot --git-dir $gitDir config --local --unset core.hooksPath
    if ($LASTEXITCODE -ne 0) {
        throw "install-git-hooks: clearing the dangling core.hooksPath failed (git exit=$LASTEXITCODE): $unsetCommand"
    }
    $remainingHooksPath = Get-GitConfigValue -RepoRoot $RepoRoot -Key 'core.hooksPath'
    if (-not [string]::IsNullOrWhiteSpace($remainingHooksPath)) {
        throw "install-git-hooks: core.hooksPath is still '$remainingHooksPath' after the unset; refusing to install into a redirected location. Re-run: $unsetCommand"
    }
    Write-Output "install-git-hooks: core.hooksPath pointed at '$configuredHooksPath', a directory that does not exist - unreachable hooks, cleared."
    Write-Output "  before:  core.hooksPath = $configuredHooksPath"
    Write-Output "  command: $unsetCommand"
    Write-Output "  after:   core.hooksPath = <unset>"
}

if (-not (Test-Path -LiteralPath $TemplateDir -PathType Container)) {
    throw "install-git-hooks: template directory missing: $TemplateDir"
}
$repoRootForward = ($RepoRoot -replace '\\', '/').TrimEnd('/')
$installed = 0
foreach ($template in @(Get-ChildItem -LiteralPath $TemplateDir -File)) {
    $target = Join-Path (Join-Path $gitDir 'hooks') $template.Name
    # sh rejects CRLF, so normalize however the template was checked out.
    $content = ([IO.File]::ReadAllText($template.FullName)).Replace("`r`n", "`n")
    $content = $content.Replace('__GF_REPO_ROOT__', $repoRootForward)
    $existing = $null
    if (Test-Path -LiteralPath $target -PathType Leaf) {
        $existing = ([IO.File]::ReadAllText($target)).Replace("`r`n", "`n")
    }
    if ($null -ne $existing -and $existing -eq $content) {
        Write-Output "  unchanged: $($template.Name)"
        continue
    }
    [IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($target)) | Out-Null
    [IO.File]::WriteAllText($target, $content, [Text.UTF8Encoding]::new($false))
    if (-not $IsWindows) { & chmod +x $target }
    Write-Output "  installed: $($template.Name)"
    $installed++
}
Write-Output "install-git-hooks: OK ($installed installed, rest unchanged)."
