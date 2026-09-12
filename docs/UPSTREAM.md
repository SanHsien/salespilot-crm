# 上游維護

## Remote

- Fork：`origin` → `https://github.com/SanHsien/salespilot-crm.git`（預設分支 `master`）
- 原作者：`upstream` → `https://github.com/deancourse/git-worktree-demo.git`（預設分支 `master`）
- 追蹤分支：`master`

## 檢查新提交

```powershell
git fetch upstream master
python tools\check_upstream_updates.py --strict
```

工具以 `tools/upstream_baseline.json` 的 `reviewed_through` 為起點，列出所有未審查提交、PR 與 Issues。
有新變更或檢查失敗時，`--strict` 回傳非零；排程 workflow 也會因此明確亮紅燈提醒。

## 審查清冊

每次只做一次批次審查：

1. 讀 commit 主旨與變更檔案（open PR 必須讀 diff，禁止只憑標題結案）。
2. 判斷是否與繁中 README、Windows gate、發佈閘門或測試衝突。
3. 可直接同步的提交用 merge；只需要部分修正時 cherry-pick 或最小重做。
4. 跑 `pwsh -NoProfile -File tools\dev_check.ps1`。
5. 在 [`docs/DECISIONS.md`](DECISIONS.md) 記錄採用／略過理由。
6. 驗證完成後才把 baseline 推進到已審查的完整 40 字元 SHA 與更新 PR/Issue 水位。

Baseline 代表「已審查」，不代表「全部已合併」。

## 2026-09-12：fork 起點

本 fork 自上游 `master` `cb539426d2c807e0a3866827a69e485dceceee1e`
（`feat(pr-description): 更新 PR 描述格式並禁用檔案路徑與連結`）建立。
此 SHA 設為第一個 `reviewed_through`（短 SHA 為 `cb53942`）。
之後的上游 commit 才需要進入審查清冊。

---

## 2026-09-12：上游 PR、Issue、分支盤點

2026-09-12 對 [`deancourse/git-worktree-demo`](https://github.com/deancourse/git-worktree-demo) 進行完整盤點：
**2 個分支、11 個 open PR、0 個 Issue**。
評估結論與盤點原則記錄於本檔與 [`docs/DECISIONS.md`](DECISIONS.md)。

### 一、上游分支盤點

- `upstream/master`：主幹分支，本 fork 唯一長期跟隨分支。
- `upstream/feature/landing-page-enhancements`：上游建立的 Worktree 示範特性分支。

### 二、上游 PR 盤點（共 11 筆）

| PR 編號 | 標題 | 狀態 | 本輪評估結論與理由 |
|---|---|---|---|
| `#1` | feat: 新增 i18n 多語系、淺色深色主題設計、常見 QA 問答區... | OPEN | 完整審查並引進本 fork（Commit `6ad338e`），修復 FAQ 劫持、i18n 假值判定、定價副標題與無障礙問題。 |
| `#2`~`#26` | 社群學員練習 PR（如 FAQ、主題切換等） | OPEN | 學員演練提交，其特性已全數由 PR `#1` 涵蓋，不重複引進。 |

