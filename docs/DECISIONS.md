# 維護決策

## 2026-09-12：建立 Windows-first 維護型 fork

**決定**：fork `deancourse/git-worktree-demo`，保留 MIT License 與完整歷史。本線預設分支沿用 `master`。本線聚焦繁中文件、雙重專案定位標注、Windows 開發 gate、Windows CI，以及逐筆審查的上游追蹤。

**理由**：`git-worktree-demo` 是 Dean Course 建立的 Git Worktree 代理多分支協作教學與實戰示範平台，內部承載了 SalesPilot CRM（React 18 + Vite 6）完整首頁與 `.agent/skills/` 技能套件。本 fork 補足 Windows 11 原生開發／驗收骨架、繁體中文維護入口，以及可審計的上游追蹤機制。

**限制**：

- 不把 fork 包裝成原創專案，不移除原作者 dean 與官方連結。
- 上游更新必須逐筆審查。
- PR、push、release 一律指向 `SanHsien/salespilot-crm`。

## 2026-09-12：專案命名改為 SalesPilot CRM（ADR-0001 修訂）

**決定**：GitHub Repository 名稱與本機專案目錄正式命名為 `salespilot-crm`，`package.json` 的 `name` 設為 `salespilot-crm`。

**理由與維護者指示**：
- **實質內容優先於上游名詞**：專案內容實質上是 SalesPilot CRM 官網首頁與相關代理協作套件，專案名稱應優先貼近專案實質內容，而非受限於上游的教學 demo 命名（`git-worktree-demo`）。
- **當初考量與糾正教訓**：AI 當初提議保留 `git-worktree-demo` 是為了迎合全自動化工具鏈的 1:1 對稱與過去 fork 慣性；但維護者明確指示「符合專案內容更重要」。命名為 `salespilot-crm` 能更清晰地代表專案功能與品牌價值，且上游追蹤工具（`tools/upstream_baseline.json`）具備完整 `repo` URL 支援，名稱不對稱完全不影響未審查提交追蹤。

**配套調整**：
1. GitHub Repository 正式更名為 `SanHsien/salespilot-crm`。
2. 本地工作目錄更名為 `C:\Users\SanHsien\OneDrive\文件\GitHub\salespilot-crm`。
3. `origin` remote 指向 `https://github.com/SanHsien/salespilot-crm.git`。
4. 機械硬閘門更新：`gh repo set-default SanHsien/salespilot-crm`。

## 2026-09-12：上游 pycache 清理與依賴建置授權（ADR-0002）

**決定**：
1. 上游意外提交的 `.pyc` 二進位編譯檔案已從 Git 追蹤移除，並在 `.gitignore` 加入標準 Python 快取規則。
2. 建立 `pnpm-workspace.yaml` 明確設定 `allowBuilds: esbuild: true`，消除 Windows 11 原生 pnpm 12 互動式授權卡頓。
3. 修正 `.agent/skills/ui-ux-pro-max/scripts/` 中的 Ruff 靜態分析警告（未使用變數與多餘 f-string），確保代碼整潔。

## 2026-09-12：上游分支、PR 與 Issue 首次盤點結論

**決定**：
1. **上游分支**：`upstream/master` 與示範分支 `upstream/feature/landing-page-enhancements`。本 fork 唯一長期跟隨分支為 `upstream/master`。
2. **上游 PR（共 11 筆）**：
   - `#1` OPEN：作者自身提交的 landing-page-enhancements PR（i18n、主題切換等示範 feature）。
   - `#2`~`#26` OPEN：學員／社群提交的各項練習 PR。
   - 由於 upstream 尚未合併任一 PR 進 master，且為教學練習展示，本 fork 維護線維持 master 為基準。
3. **上游 Issue**：共 0 筆。
4. **水位鎖定**：`tools/upstream_baseline.json` 鎖定 Commit `cb539426d2c807e0a3866827a69e485dceceee1e`、PR 水位 `26`、Issue 水位 `0`。
