# 開發環境

維護者與 AI 接手用的開發文件。產品使用方式在 [`README.md`](../README.md)；上游同步在 [`UPSTREAM.md`](UPSTREAM.md)；決策在 [`DECISIONS.md`](DECISIONS.md)。

## 架構

```text
src/                           SalesPilot CRM 官網前端原始碼（React 18 + Vite 6）
  ├── components/              UI 元件庫（Navbar, Hero, Features, Pricing 等）
  ├── data/                    組態資料（文案、導覽、定價）
  └── index.css                全域樣式與 CSS 變數設計系統
.agent/
  ├── skills/                  代理技能庫（git-worktree-design, git-smart-commit 等）
  └── workflows/               代理工作流程規範（exec-worktree-spec.md）
tools/                         fork 維護工具（Windows gate、上游檢查、連結檢查、依賴新鮮度）
  └── tests/                   維護契約測試
docs/                          fork 維護與架構決策文件
```

## 本機開發（Windows 11 原生）

### 維護骨架與環境初始化

```powershell
python -m venv .venv
.venv\Scripts\python -m pip install --upgrade pip
.venv\Scripts\python -m pip install -r requirements-dev.txt
pnpm install
$env:PYTHONUTF8 = "1"
pwsh -NoProfile -File tools\dev_check.ps1
```

等價一鍵指令：

```powershell
pwsh -NoProfile -File tools\bootstrap_dev.ps1
```

### 啟動前端開發伺服器

```powershell
pnpm dev
```

### 執行產品測試

本 repo 提供專用 Windows 原生產品測試腳本 `tools/test_product.ps1`：

```powershell
pwsh -NoProfile -File tools\test_product.ps1
```

## Canonical Gate

`tools\dev_check.ps1` 會依序執行：

1. `compileall` 檢查 `tools` 與 `.agent/skills/ui-ux-pro-max/scripts` 的 Python 語法。
2. `ruff check --select E9,F` 檢查語法錯誤與 pyflakes 警報。
3. `pytest` 執行維護契約測試。
4. `check_links.py` 檢查所有維護文件的相對 Markdown 連結。
5. `pnpm build` 驗證 Vite 前端生產環境構建。
