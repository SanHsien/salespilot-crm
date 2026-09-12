[CmdletBinding()]
param()

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location -LiteralPath $repoRoot

$venvPython = Join-Path $repoRoot ".venv\Scripts\python.exe"
if (Test-Path -LiteralPath $venvPython) {
    $pythonExe = $venvPython
} else {
    $pythonExe = (Get-Command python -ErrorAction Stop).Source
}

$env:PYTHONUTF8 = "1"
$env:PYTHONIOENCODING = "utf-8"

function Invoke-Step {
    param(
        [Parameter(Mandatory)]
        [string]$Label,
        [Parameter(Mandatory)]
        [scriptblock]$Action
    )

    Write-Host "==> $Label"
    & $Action
    if ($LASTEXITCODE -ne 0) {
        throw "$Label failed with exit code $LASTEXITCODE"
    }
}

Invoke-Step -Label "Compile maintained Python" -Action {
    & $script:pythonExe -m compileall -q tools .agent/skills/ui-ux-pro-max/scripts
}

Invoke-Step -Label "Ruff (E9 + F)" -Action {
    & $script:pythonExe -m ruff check --select E9,F --target-version py310 tools .agent/skills/ui-ux-pro-max/scripts
}

Invoke-Step -Label "Pytest (fork tools)" -Action {
    & $script:pythonExe -m pytest -c tools/pytest.ini tools/tests
}

Invoke-Step -Label "Check Markdown links" -Action {
    & $script:pythonExe tools\check_links.py
}

Invoke-Step -Label "Frontend Build (Vite)" -Action {
    pnpm build
}

Write-Host "WINDOWS DEV CHECK GREEN"
