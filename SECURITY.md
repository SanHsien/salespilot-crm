# 安全政策

## 支援範圍

安全修正以本 fork 的最新 `master` 為主；上游版本的問題也會視需要回報原作者。

## 私下回報

若發現針對本 fork 維護骨架或衍生程式的安全漏洞，請使用 GitHub Security Advisories 的 **Report a vulnerability** 私下回報：
<https://github.com/SanHsien/git-worktree-demo/security/advisories/new>。
若該入口不可用，請透過 GitHub 個人檔案聯絡維護者，不要先建立公開 Issue。

若問題屬於上游核心邏輯，亦可向原作者 dean 通報。

回報請包含影響範圍、重現步驟、受影響版本與最小必要證據。請勿在回報中附上真實 API key、token、個人機密文件或帳密。

## 特別注意

- **依賴套件建置授權**：前端建置涉及 Vite 與 esbuild 原生執行檔。本專案透過 `pnpm-workspace.yaml` 明確規範允許建置的套件，防範供應鏈攻擊。
- **本專案範圍**：不要將真實個人資料、含憑證的設定檔或 API key 提交進 repository。
