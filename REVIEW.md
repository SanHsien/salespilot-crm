# Repository review（Windows-only）

- Review date: 2026-09-12
- Review baseline: `cb539426d2c807e0a3866827a69e485dceceee1e`
- Remediation: 同日 fork-local overlay（不回貢）
- Upstream reviewed through: `cb539426d2c807e0a3866827a69e485dceceee1e`
- Primary environment: Windows 11、PowerShell、Node.js 22、pnpm 12、Python 3.14.7（本機 gate）；產品前端為 React 18 + Vite 6
- Status: 維護骨架與產品相依環境全面可用。已完成建立 Windows 原生門禁與驗收。

## 結論

這個 fork 適合作為 Windows 本機、給 Agent 維護的 Git Worktree 代理協作示範線。產品行為跟隨 `deancourse/git-worktree-demo` `cb53942`，再加上本線維護骨架：繁體中文維護文件、雙重定位標注、Windows 原生 1-click gate、純 Windows 原生維護 CI、每週上游水位追蹤（commit、PR、issue）以及每月依賴新鮮度檢查。

## 本輪實證

### 審查當下（`cb53942`）

```text
git rev-parse HEAD
→ cb539426d2c807e0a3866827a69e485dceceee1e

gh repo set-default --view
→ SanHsien/salespilot-crm
```

實查結果：
- 上游 repository 為 `deancourse/git-worktree-demo`，採 MIT License。
- 上游 PR 水位為 `#26`，Issue 水位為 `#0`。
- 上游意外提交了 `__pycache__/*.pyc` 檔案，本 fork 已移除追蹤並配置 `.gitignore`。
- 上游未配置 GitHub Actions workflows，本 fork 建立了純 Windows 原生 CI 工作流程。

## 已修 findings

| ID | 嚴重度 | 做了什麼 |
|---|---|---|
| R-01 | P2 | 清理上游納管的 `__pycache__/*.pyc` 二進位檔，`.gitignore` 補齊 Python 快取與維護報表忽略規則 |
| R-02 | P2 | 修復 `.agent/skills/ui-ux-pro-max/scripts/` 中 14 個 Ruff 語法與未定義/未使用變數警報 |
| R-03 | P2 | 配置 `pnpm-workspace.yaml` 自動放行 esbuild 原生執行檔建置，確保 Windows 11 原生非互動式建置順暢 |
| R-04 | P2 | 補齊根目錄 `LICENSE` 檔案（MIT License），載明 dean 與 SanHsien 著作權標記 |
| R-05 | P2 | 建立 `FORK.md`、`NOTICE.md`、`SECURITY.md`、`AGENTS.md`、`CLAUDE.md`、`GEMINI.md`，明定對外邊界 |
| R-06 | P3 | `README.md`（繁體中文主入口）與 `README.en.md`（英文鏡像）雙向互指，並標明 upstream 與雙重專案定位 |
| R-07 | P2 | 建立 `tools/dev_check.ps1`、`tools/bootstrap_dev.ps1` 與 `tools/test_product.ps1` 規範 Windows 門禁 |
| R-08 | P2 | 建立獨立維護測試目錄 `tools/tests/` 與獨立 `tools/pytest.ini`，配置合約測試 |
| R-09 | P2 | 建立純 Windows 原生 CI（`ci.yml`、`codeql.yml`、`upstream-check.yml`、`dependency-freshness.yml`） |
| R-10 | P2 | 建立上游追蹤水位防重複巡檢機制，鎖定 PR `#26`、Issue `#0` |

## 接受、不改契約

| ID | 嚴重度 | 處理 |
|---|---|---|
| - | - | （無。所有已識別項目皆已妥善處理完畢） |

## 尚未宣稱範圍

- **不宣稱** 已將任何修改提交回原作者上游（依 fork 維護政策，所有 PR/commit 僅限於 `SanHsien/salespilot-crm`）。
