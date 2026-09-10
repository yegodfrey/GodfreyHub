# GfHvigorRuntime - pinned Node/hvigor/SDK resolution plus profile-aware daemon
# and per-app user-home policy, shared by test.ps1 and its behavioral self-tests.
#
# Determinism: the Node, Hvigor and SDK binaries are pinned to one DevEco Studio
# installation. Because the environment is pinned, warm-daemon mode is just as
# deterministic as --no-daemon; release keeps --no-daemon as the from-zero
# evidence profile.
#
# Per-app isolation: change/nightly builds run under HVIGOR_USER_HOME scoped to
# the app, so each app owns its daemon and caches and warm daemons can coexist
# across lanes. Shared module write sets (GFKit source products, Introspect and
# Stargaze native caches) remain serialized by the family build mutex in
# GfBuildMutex.ps1 - user-home isolation does not lift that contract.
Set-StrictMode -Version Latest

function Get-GfHvigorUserHomeRoot {
    # Workspace/ is the family's unversioned artifact root and survives
    # temp-cleaners that would wipe %TEMP% mid-build. Resolved lazily so test
    # harnesses can import the module from any layout.
    return (Join-Path (Resolve-Path (Join-Path $PSScriptRoot '..\..\..\..')).Path 'Workspace/tmp/hvigor-homes')
}

function Resolve-DevEcoStudioRoot {
    # Single source of truth for the pinned DevEco installation: env override
    # first, then the recorded D:\ install, then C:\. Node, Hvigor, ohpm and
    # the SDK must all be derived from the SAME installation (mixed installs
    # break --no-daemon runs in ways that look like tool bugs).
    $homeCandidates = [Collections.Generic.List[string]]::new()
    if (-not [string]::IsNullOrWhiteSpace($env:DEVECO_STUDIO_HOME)) {
        $homeCandidates.Add($env:DEVECO_STUDIO_HOME)
    }
    $homeCandidates.Add('D:\Program Files\Huawei\DevEco Studio')
    $homeCandidates.Add('C:\Program Files\Huawei\DevEco Studio')
    foreach ($studioRoot in $homeCandidates) {
        $node = Join-Path $studioRoot 'tools\node\node.exe'
        $hvigor = Join-Path $studioRoot 'tools\hvigor\bin\hvigorw.js'
        $sdkRoot = Join-Path $studioRoot 'sdk'
        if ((Test-Path -LiteralPath $node -PathType Leaf) -and
            (Test-Path -LiteralPath $hvigor -PathType Leaf) -and
            (Test-Path -LiteralPath $sdkRoot -PathType Container)) {
            # Keep Node, Hvigor and the SDK on one DevEco installation. A stale
            # inherited DEVECO_SDK_HOME is only exposed by --no-daemon runs and
            # otherwise makes deterministic local suites fail before task setup.
            $env:DEVECO_STUDIO_HOME = $studioRoot
            $env:DEVECO_SDK_HOME = $sdkRoot
            return $studioRoot
        }
    }
    throw 'GodfreyMCP hub_family_test: DevEco Studio Node/hvigor runtime was not found.'
}

function Resolve-HvigorInvocation {
    param(
        [string[]]$Arguments = @(),
        [string]$App = '',
        [ValidateSet('', 'change', 'nightly', 'release')][string]$Profile = ''
    )

    $studioRoot = Resolve-DevEcoStudioRoot
    $node = Join-Path $studioRoot 'tools\node\node.exe'
    $hvigor = Join-Path $studioRoot 'tools\hvigor\bin\hvigorw.js'
    $resolvedArguments = Get-GfHvigorArguments -Arguments $Arguments -Profile $Profile
    Set-GfHvigorUserHomeForApp -App $App -Profile $Profile
    return [pscustomobject]@{ FileName = $node; Arguments = @($hvigor) + $resolvedArguments }
}

function Get-GfHvigorArguments {
    param(
        [string[]]$Arguments = @(),
        [ValidateSet('', 'change', 'nightly', 'release')][string]$Profile = ''
    )

    $resolved = [Collections.Generic.List[string]]::new()
    foreach ($argument in @($Arguments)) {
        $resolved.Add([string]$argument)
    }
    # Warm daemon for iterative profiles; release stays from-zero --no-daemon.
    # Determinism is preserved because Resolve-HvigorInvocation pins the same
    # Node/SDK/hvigor environment that the daemonless path used.
    if ($Profile -ne '' -and $Profile -ne 'release') {
        for ($i = $resolved.Count - 1; $i -ge 0; $i--) {
            if ($resolved[$i] -eq '--no-daemon') { $resolved.RemoveAt($i) }
        }
    }
    return @($resolved)
}

function Set-GfHvigorUserHomeForApp {
    param(
        [string]$App = '',
        [ValidateSet('', 'change', 'nightly', 'release')][string]$Profile = ''
    )

    if ([string]::IsNullOrWhiteSpace($App) -or $Profile -eq '' -or $Profile -eq 'release') {
        return
    }
    $safeApp = ($App -replace '[^A-Za-z0-9_.-]', '_')
    $home = Join-Path (Get-GfHvigorUserHomeRoot) $safeApp
    [IO.Directory]::CreateDirectory($home) | Out-Null
    $env:HVIGOR_USER_HOME = $home
}

# Export via return of module import; explicit export list keeps the surface tight.
Export-ModuleMember -Function @(
    'Resolve-DevEcoStudioRoot',
    'Resolve-HvigorInvocation',
    'Get-GfHvigorArguments',
    'Set-GfHvigorUserHomeForApp'
)
