# SalesPilot CRM（Git Worktree 代理協作實戰示範平台）

> 一站式業務管理平台官網首頁，結合 Git Worktree 多分支並行與 AI 代理技能（Agent Skills）之實戰示範專案。
>
> 繁體中文維護主入口｜English mirror & upstream notes: [`README.en.md`](README.en.md)
>
> 本 repo 為 [`deancourse/git-worktree-demo`](https://github.com/deancourse/git-worktree-demo) 的 Windows-first 維護型 fork，遵循 [MIT License](LICENSE)。維護方針請見 [`FORK.md`](FORK.md)。

---

## 🎯 專案定位與特色

本專案具有**雙重核心定位**：
1. **SalesPilot CRM 官網首頁**：基於 React 18 + Vite 6 打造之現代化業務管理平台首頁，具備深色主題、Glassmorphism 毛玻璃導覽列、微動畫、全響應式斷點與 A11y 支援。
2. **Git Worktree 代理多分支協作工作流**：內建 `.agent/skills/`（`git-worktree-design`、`git-smart-commit`、`git-pr-description`、`skill-development`、`ui-ux-pro-max`）與 `.agent/workflows/exec-worktree-spec.md`，提供 AI 代理在多個獨立 Worktree 下並行開發特性之標準流程。

## 🚀 技術棧

- **前端框架**：React 18 + Vite 6
- **樣式系統**：Vanilla CSS（CSS Custom Properties 變數系統）
- **字型**：Google Fonts（Inter + Noto Sans TC）
- **代理技能**：Python 3.10+（`ui-ux-pro-max` BM25 檢索與設計系統產生器）
- **維護與測試**：PowerShell 7+、Python `pytest`、`ruff`

## 📁 專案結構

```text
src/
├── main.jsx                # 應用程式入口
├── App.jsx                 # 根組件
├── index.css               # 全域樣式 & 設計系統
├── components/             # UI 組件（Navbar, Hero, Pricing 等）
└── data/                   # 文案與組態模組（Config-Driven）
.agent/
├── skills/                 # 代理技能套件（git-worktree-design 等）
└── workflows/              # 代理工作流程（exec-worktree-spec.md）
tools/                      # Windows 原生維護工具與門禁
docs/                       # 維護與決策文件（DEVELOPMENT, DECISIONS, UPSTREAM）
```

## 🏁 快速開始（Windows 11 原生）

```powershell
# 一鍵初始化環境（安裝 Node 依賴與 Python 維護環境，並執行 gate 驗證）
pwsh -NoProfile -File tools\bootstrap_dev.ps1

# 啟動開發伺服器（預設 http://localhost:3000）
pnpm dev

# 執行 Canonical Windows 門禁（compileall, ruff, pytest, link check, vite build）
pwsh -NoProfile -File tools\dev_check.ps1

# 執行產品與代理功能驗收
pwsh -NoProfile -File tools\test_product.ps1
```

## 🛠️ 維護與品質標準

本 fork 建立於 Windows 11 原生環境，實施以下維護機制：
- **預設 Repo 閘門**：`gh repo set-default SanHsien/git-worktree-demo`，杜絕意外向 upstream 發 PR。
- **純 Windows 原生 CI**：在 `windows-latest` 上跨 Python 3.10~3.14 矩陣與 Node.js 執行門禁。
- **上游增量水位追蹤**：逐筆審核 upstream commit、PR 與 issue。
- **依賴新鮮度監控**：每月排程比對最新版本。

詳細開發規範與架構決策請參閱：
- [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md)：開發與驗收完整手冊
- [`docs/DECISIONS.md`](docs/DECISIONS.md)：架構決策紀錄（ADR）
- [`docs/UPSTREAM.md`](docs/UPSTREAM.md)：上游同步與追蹤手冊
- [`AGENTS.md`](AGENTS.md)：AI 代理協作規範
- [`REVIEW.md`](REVIEW.md)：全庫架構與品質審查快照

## 📜 授權條款與版權

- 本專案基於 [MIT License](LICENSE) 授權開源。
- 上游原始作者為 dean ([deancourse](https://github.com/deancourse/git-worktree-demo))。
- 完整授權與版權聲明請見 [`NOTICE.md`](NOTICE.md)。
