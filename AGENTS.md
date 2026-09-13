# AGENTS.md

給 Codex、Claude Code、Cursor、Antigravity 與其他自動化代理在本專案工作時的指引。產品與使用方式先讀 [`README.md`](README.md)；開發與驗收細節見 [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md)。

## 專案定位

這是 [`deancourse/git-worktree-demo`](https://github.com/deancourse/git-worktree-demo) 的 MIT License fork。
核心價值是作為 Git Worktree 多分支代理協作示範平台，內建 React 18 + Vite 6 SalesPilot CRM 官網應用，以及 `.agent/skills/` 與 `.agent/workflows/` 代理技能庫。

`origin` 是 `SanHsien/salespilot-crm`（預設分支 `master`），`upstream` 是原作者 repo（預設分支 `master`）。
保留上游作者、MIT License 與產品程式。本 fork 的維護差異記在 [`FORK.md`](FORK.md) 與 [`docs/DECISIONS.md`](docs/DECISIONS.md)。

主要開發與完整驗收環境是 **Windows 11 + PowerShell**。本 fork 為純 Windows 維護線，所有測試與工作流程均在 Windows 原生環境執行。

## 硬性邊界

- 不提交使用者輸入檔案、專有文件、API key、token、私鑰或 `.env`。
- 不推送到 `upstream`。上游同步先跑 `python tools/check_upstream_updates.py`，逐筆審查後再 merge / cherry-pick；不盲目覆蓋 fork 文件與 Windows gate。
- 不要把維護 gate 改成非 Windows 環境。維護環境（`requirements-dev.txt`）僅安裝 pytest 與 ruff。
- 不把 fork 包裝成原創產品，不移除上游作者 dean 或官方連結。

## 技術與資料流

- 前端架構：`src/`（React 18 + Vite 6，SalesPilot CRM 官網）。
- 代理技能庫：`.agent/skills/`（`git-worktree-design`、`git-smart-commit`、`git-pr-description`、`skill-development`、`ui-ux-pro-max`）。
- 代理工作流：`.agent/workflows/exec-worktree-spec.md`。
- 維護工具：`tools/`（Windows gate、上游檢查、相對連結檢查、依賴新鮮度）。
- 維護測試：`tools/tests/`。獨立於產品代碼。

## 開發原則

- 一般變更直接推 `origin/master`，不開短期功能分支、不開維護 PR。只有在需要他人審查、或改動風險高到值得先讓 CI 在 PR 上跑一輪時，才退回 **branch → PR → CI → merge**。
- 修 bug 先補可重現失敗測試，再做最小修正。
- 不為了套格式而大改上游程式；Ruff 只閘維護工具與腳本的 E9（語法）與 F（pyflakes）。
- 使用繁體中文回覆；使用者文件以繁中為主，公開入口同步維護 [`README.en.md`](README.en.md)。
- 提交訊息用 Conventional Commit。Dependabot 或外部 fork 的變更走 PR，讀 diff 並通過 CI 後再合併。
- `REVIEW.md` 是風險快照，不是每個一般 bug 的流水帳。
- 不 force-push `master`，不刪 `upstream` remote。

## 上游處理

1. `git fetch upstream master`
2. `python tools/check_upstream_updates.py --strict`
3. 逐筆判斷是否與繁中 README、Windows gate、發佈閘門或測試衝突。
4. 可同步的提交用 merge；只需要部分修正時 cherry-pick 或最小重做。
5. 跑 `pwsh -NoProfile -File tools\dev_check.ps1`
6. 採用／略過寫進 [`docs/DECISIONS.md`](docs/DECISIONS.md)，驗證後才推進 `tools/upstream_baseline.json`

Baseline 代表「已審查」，不代表「全部已合併」。
