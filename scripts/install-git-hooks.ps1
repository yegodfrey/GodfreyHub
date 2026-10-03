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
$resolvedTemplateDir = Resolve-Path -LiteralPath $TemplateDir -ErrorAction SilentlyContinue |
    Select-Object -First 1
if ($null -ne $resolvedTemplateDir) { $TemplateDir = $resolvedTemplateDir.Path }
# core.hooksPath redirects hook lookup away from .git/hooks; installing there
# would silently dead-end. Leave the configuration untouched and say so.
$configuredHooksPath = & git -C $RepoRoot config core.hooksPath
if (-not [string]::IsNullOrWhiteSpace($configuredHooksPath)) {
    Write-Output "install-git-hooks: core.hooksPath is '$configuredHooksPath'; .git/hooks would be ignored, nothing installed."
    exit 1
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
