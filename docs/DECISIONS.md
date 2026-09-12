# 維護決策

## 2026-09-12：建立 Windows-first 維護型 fork

**決定**：fork `deancourse/git-worktree-demo`，保留 MIT License 與完整歷史。本線預設分支沿用 `master`。本線聚焦繁中文件、雙重專案定位標注、Windows 開發 gate、Windows CI，以及逐筆審查的上游追蹤。

**理由**：`git-worktree-demo` 是 Dean Course 建立的 Git Worktree 代理多分支協作教學與實戰示範平台，內部承載了 SalesPilot CRM（React 18 + Vite 6）完整首頁與 `.agent/skills/` 技能套件。本 fork 補足 Windows 11 原生開發／驗收骨架、繁體中文維護入口，以及可審計的上游追蹤機制。

**限制**：

- 不把 fork 包裝成原創專案，不移除原作者 dean 與官方連結。
- 上游更新必須逐筆審查。
- PR、push、release 一律指向 `SanHsien/git-worktree-demo`。

## 2026-09-12：專案命名評估與決策（ADR-0001）

**決定**：GitHub Repository 名稱維持 `git-worktree-demo`，並在 README 標題、GitHub Description 與文檔全面突出 `SalesPilot CRM` 與 `Git Worktree 代理協作` 雙重定位。

**理由**：
1. **上游 1:1 追蹤不失真**：GitHub 上的 fork 與上游 `deancourse/git-worktree-demo` 保持同名，使自動化上游檢測工具、git remote fetch 與未來 sync 毫無阻抗。
2. **與 SanHsien 體系規範一致**：SanHsien 所有 fork（如 `markitdown`、`hung-yi-lee-skill`、`khoj`、`opencodex`）一律保持與母 repo 同名。
3. **反映本質價值**：此專案真正具備教學與重複使用價值的是 Git Worktree 與 Agent 協作工作流（`git-worktree-design`、`git-smart-commit`、`git-pr-description`），SalesPilot CRM 則是該工作流之示範載體。

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
