# 貢獻指南

歡迎能保住 Windows 相容性、代碼整潔度與低維護成本的小改動。

## 開始前

1. 先讀 [`AGENTS.md`](AGENTS.md)、[`FORK.md`](FORK.md) 與 [`README.md`](README.md)。
2. 確認問題在最新 `master` 仍可重現，並查過既有 Issues 與 PR。
3. 產品核心行為的實質變更，優先考慮回報或回貢 [`deancourse/git-worktree-demo`](https://github.com/deancourse/git-worktree-demo)。
4. 不要附上真實使用者個資、專有文件、未經授權的檔案或任何憑證。

## 本機開發

```powershell
pwsh -NoProfile -File tools\bootstrap_dev.ps1
```

詳細開發流程請參閱 [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md)。

## 提交方式

本 fork 由維護者直接推 `master`，不開短期分支。改完先跑上面的 Windows gate。

- 一次提交聚焦一個問題。
- Bug 修正先附失敗測試；新行為需涵蓋成功、邊界與錯誤路徑。
- 修改使用方式時同步更新 [`README.md`](README.md) 與 [`README.en.md`](README.en.md)。
- 說明是否來自 upstream、是否改動 `src/` 或 `.agent/` 內容，以及實際跑過哪些指令。
- 提交訊息建議使用 `fix:`、`feat:`、`docs:`、`test:`、`chore:`。
- Dependabot 與外部 fork 仍可能開 Pull Request；合併前讀 diff，不要自動合併。
