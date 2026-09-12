# Fork 維護說明

本 repo fork 自 [`deancourse/git-worktree-demo`](https://github.com/deancourse/git-worktree-demo)，
沿用 MIT License 與完整 Git 歷史。

## 為什麼維護 fork

- 本專案表面為 SalesPilot CRM 官網首頁（React 18 + Vite 6），核心定位為 Git Worktree 與 Agent 技能（`git-worktree-design`、`git-smart-commit`、`git-pr-description`、`skill-development`、`ui-ux-pro-max`）的實戰示範平台。
- 採 Windows-first 維護：Windows 11 + PowerShell 是主要開發、除錯與完整驗收環境。
- 公開入口維持繁體中文為主，英文鏡像放 [`README.en.md`](README.en.md)。
- 建立可重現的 Windows 開發 gate、Windows CI job，以及逐筆審查的上游追蹤（涵蓋 commit、PR 與 issue 水位）。
- 產品執行路徑以上游為準；本線不發佈第三方套件或變更上游授權。

**回貢判準：修的是上游的 bug 就送回去；這裡獨創的文件／Windows 維護骨架留在這裡。**
回貢前必須在當次對話取得維護者明確同意；「fork」「建開發環境」「開 PR」都不是同意。

## 與上游的差異

| 項目 | 說明 |
|---|---|
| `README.md` | 繁中主檔；加入 fork 維護資訊、雙重定位說明與快速入口 |
| `README.en.md` | 原始上游說明保留 |
| `AGENTS.md` / `CLAUDE.md` / `GEMINI.md` | 本 fork 的 AI 維護單一真相源 |
| `NOTICE.md` / `FORK.md` / `LICENSE` | 來源、授權與同步說明 |
| `tools/dev_check.ps1` | Windows 本機一鍵 gate（compile / ruff / pytest / check_links / vite build） |
| `tools/bootstrap_dev.ps1` | Windows 本機一鍵初始化與驗收（Python venv + pnpm install） |
| `tools/test_product.ps1` | Windows 原生產品測試執行腳本（驗證 Vite build、UI/UX agent skills、worktree workflow） |
| `requirements-dev.txt` | 維護測試工具（pytest, ruff） |
| `pnpm-workspace.yaml` | 自動放行 esbuild 原生二進位建置，免互動提示 |
| `.github/workflows/ci.yml` | 純 Windows 原生 CI (windows-latest Python 3.10–3.14 矩陣 + Node.js 22 + pnpm) |
| `.github/workflows/upstream-check.yml` | 每週對 `upstream/master` 做未審查 commit、PR、issue 水位檢查 |
| `.github/workflows/dependency-freshness.yml` | 每月依賴新鮮度檢查 |
| `.github/workflows/codeql.yml` | CodeQL 安全掃描工作流程（JavaScript + Python） |
| `docs/DECISIONS.md`、`docs/UPSTREAM.md`、`docs/DEVELOPMENT.md` | fork 維護文件 |
| `REVIEW.md` | 全庫風險快照 |

核心程式在 `src/`，代理技能在 `.agent/`，以上游為準。

## 分支與 remote

- `origin/master`：SanHsien 維護線，也是唯一長期分支。
- 日常修改在本機跑 gate 後直接推 `origin/master`。
- `upstream/master`：deancourse 原始專案，只追蹤、不推送。
- Dependabot 或外部 fork 的變更走 PR，讀 diff 並通過 CI 後再合併。

不要 `git push upstream`。同步方式見 [`docs/UPSTREAM.md`](docs/UPSTREAM.md)。

## 換一台電腦怎麼開發

```powershell
git clone https://github.com/SanHsien/git-worktree-demo.git
cd git-worktree-demo
# `gh repo clone` 已會加上 `upstream` remote；若沒有：
# git remote add upstream https://github.com/deancourse/git-worktree-demo.git
pwsh -NoProfile -File tools\bootstrap_dev.ps1
```

詳細開發流程請參閱 [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md)。
