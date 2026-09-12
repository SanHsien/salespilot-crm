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

## 2026-09-12：上游分支、PR 與 Issue 盤點與引進決策（ADR-0003）

**決定**：
1. **引進上游 PR #1（feature/landing-page-enhancements）**：
   - 上游分支 `feature/landing-page-enhancements`（Commit `6ad338e`）為作者 Dean Lin 示範 Git Worktree 多特性協作的完整功能集合（包含多語系 i18n、深淺主題切換、FAQ 問答手風琴、年繳月繳定價切換、Loading 載入頁、Cookie 同意橫幅）。
   - 本 fork 將其審查後完整引進，並針對程式碼進行 8 項品質與安全性加固。
2. **修復上游 PR #1 缺陷與無障礙體驗提升**：
   - **FAQ 點擊劫持修復**：上游將 `onClick` 置於 `.faq-item`，使用者選取解答文字時會導致突發摺疊；改為在 `<button type="button" className="faq-question">` 觸發，並補齊 `aria-expanded`、`aria-controls`、`role="region"` 與錨點 `id="faq"`。
   - **I18n 假值判定與儲存異常防護**：上游 `t()` 函式使用 `if (!value) return key;`，遇空字串或 0 會誤退 key；改為嚴格 null/undefined 判定與多層 fallback，同步 `document.documentElement.lang`，並為 `localStorage` 加上 `try/catch`。
   - **定價副標題文案語意修正**：上游在 `Pricing.jsx` 誤用 `{t('faq.a1')}`；新增 `pricing.subtitle` 語系欄位，使文案與架構解耦。
   - **導覽列與按鈕無障礙補齊**：新增 FAQ 導覽列連結，主題與語系切換按鈕補足完整 `aria-label` 與 `title`。
   - **Cookie 同意與載入體驗強化**：Cookie 同意橫幅加上 `role="region"` 與安全儲存；載入延遲縮短至 600ms，消除冗餘等待。
3. **上游其餘 PR 處理（PR #2 ~ #26）**：
   - 經逐一查驗，PR `#2`~`#26` 皆為學員演練之練習 PR，其功能均屬 PR `#1` 之子集，且 upstream 尚未合併。本 fork 已透過 PR `#1` 的完整引進與加固涵蓋全部特性，其餘練習 PR 記錄保留於 `docs/UPSTREAM.md`，不重複引進。
4. **上游 Issue**：共 0 筆。
5. **版本標籤策略**：貫徹「只保留最新 tag」原則，發布 `v1.0.0` 正式標籤，清理並確保無殘留冗餘標籤。
