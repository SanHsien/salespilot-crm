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

Write-Host "--> 1. Verify Vite build artifacts"
pnpm build
if ($LASTEXITCODE -ne 0) {
    throw "Frontend build failed"
}
$distHtml = Join-Path $repoRoot "dist\index.html"
if (-not (Test-Path -LiteralPath $distHtml)) {
    throw "dist\index.html not found"
}
$htmlContent = Get-Content -Path $distHtml -Raw -Encoding utf8
if ($htmlContent -notmatch "SalesPilot CRM") {
    throw "dist\index.html does not contain SalesPilot CRM title"
}

Write-Host "--> 2. Verify Agent UI/UX Search Skill"
$searchOutput = (& $script:pythonExe ".agent/skills/ui-ux-pro-max/scripts/search.py" "react" --stack react) -join "`n"
if ($LASTEXITCODE -ne 0 -or $searchOutput -notmatch "UI Pro Max Stack Guidelines") {
    throw "UI/UX Search skill failed"
}

Write-Host "--> 3. Verify Agent UI/UX Design System Generator"
$dsOutput = (& $script:pythonExe ".agent/skills/ui-ux-pro-max/scripts/search.py" "crm" --design-system -p "SalesPilot") -join "`n"
if ($LASTEXITCODE -ne 0 -or $dsOutput -notmatch "SalesPilot") {
    throw "Design system generator failed"
}

Write-Host "--> 4. Verify Worktree Workflow Specification"
$workflowFile = Join-Path $repoRoot ".agent\workflows\exec-worktree-spec.md"
if (-not (Test-Path -LiteralPath $workflowFile)) {
    throw "exec-worktree-spec.md not found"
}

Write-Host "--> 5. Verify Core Agent Skills Presence"
$requiredSkills = @("git-worktree-design", "git-smart-commit", "git-pr-description", "skill-development", "ui-ux-pro-max")
foreach ($skill in $requiredSkills) {
    $skillDir = Join-Path $repoRoot ".agent\skills\$skill"
    if (-not (Test-Path -LiteralPath $skillDir)) {
        throw "Skill $skill not found in .agent/skills"
    }
}

Write-Host "PRODUCT TESTS GREEN"
