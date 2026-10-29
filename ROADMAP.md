# 路線圖

> 本 repo 後續工作的單一真相源。做完一項，就在同一個 commit 刪掉那一列；新工作只加在這裡。
> 現況段的數字是 2026-10-29 依 `main` `d36e37092d70` 查的快照，開工前先重查 GitHub。

## 現況

SalesPilot CRM 官網首頁（React 18 + Vite 8）與 Git Worktree／Agent 技能示範，Windows-first 維護的 fork（上游 `deancourse/git-worktree-demo`，審查水位見 `tools/upstream_baseline.json`）。2026-10-29 快照：open PR 0；Dependabot 與 code scanning 告警皆 0；issues 已停用（屬設定，非缺陷，所以沒有 issue 可查）；`main` 上 CI、CodeQL、Dependency freshness、Upstream check 最近一次皆 success（Upstream check 綠＝上游無未審項目）；無 release。2026-10-26 深掃後已無未修缺陷，無障礙小項（英文 aria-label、role="list" 子節點語意）已補齊，剩下的是需維護者決定的文案與依賴新鮮度審查。

## 近期：可以直接動手
| 項目 | 為什麼 | 驗收方式 | 建議執行者 | 證據 |
| --- | --- | --- | --- | --- |
| 審查高於 `deferredLatest` 的新 Ruff 版本 | `.github/dependency-deferrals.json` 的 `deferredLatest`（0.17.2）已被越過：2026-10-29 PyPI 已有 `ruff` 0.17.3（見 `gh issue view 1 --repo SanHsien/openshelf` 的新鮮度表）；本 repo `Dependency freshness` 最近一次跑在 2026-10-25，尚未比到新版。開工前先 `gh workflow run "Dependency freshness" --repo SanHsien/salespilot-crm` 確認 | 依 `docs/DECISIONS.md` 首則的方式在 Python 3.10–3.14 跑 `ruff`、`compileall`、`pytest`；更新 `.github/dependency-deferrals.json` 的 `deferredLatest` 並在 DECISIONS 補一則；workflow 轉綠；不為了清警報而抬 `requirements-dev.txt` 下限 | Claude Sonnet | `docs/DECISIONS.md`「Ruff 0.17.2 已審查」；`.github/dependency-deferrals.json` |

## 中期：等條件成立再做
| 項目 | 觸發條件 | 驗收方式 | 建議執行者 | 證據 |
| --- | --- | --- | --- | --- |
| 英文版客戶 logo 改英文公司名 | 維護者決定公司名要用哪個英文名（這是假資料文案，由人定，不由 agent 編造） | `src/data/socialProof.js` 的 logos 與英文見證公司名一致；SSR 測試鎖定英文版不出現 CJK 公司名 | 維護者 | `src/data/socialProof.js:4-11`；2026-10-26 深掃「需維護者決定」 |
| 手機版導覽 CTA 點擊關閉選單的自動測試 | 專案決定引入 DOM 測試環境（如 jsdom／瀏覽器自動化）；目前為了這一項不值得新增依賴 | 測試在修復前版本（`b5abc4f` 之前）紅、現版本綠；`dev_check.ps1` 綠 | Claude Sonnet | `b5abc4f`（修復時只靠讀 CSS 與程式確認，無自動測試） |
| 審查並採用上游新變更 | `Upstream check` workflow 轉紅（上游 `master` 有新 commit、PR 或 issue；轉紅代表有未審項目，不是工具壞） | 依 `docs/UPSTREAM.md`「審查清冊」六步：open PR 讀 diff、跑 `dev_check.ps1`、在 `docs/DECISIONS.md` 記採用／略過理由、最後才推進 `tools/upstream_baseline.json`；`python tools\check_upstream_updates.py --strict` exit 0 | Claude Sonnet | `tools/upstream_baseline.json`（`reviewed_through` `cb53942`）；`docs/UPSTREAM.md` |

## 刻意不做
| 不做什麼 | 理由 | 什麼情況下重新考慮 |
| --- | --- | --- |
| 移除或縮短 `src/App.jsx:22` 的 600ms 載入畫面 | 產品選擇，深掃已判定不動 | 維護者要求改善首屏體驗 |
| 向上游回貢 PR | 回貢需維護者在當次對話明確同意（`FORK.md`）；上游目前為示範教學專案，open PR 多為學員練習 | 發現的是上游本身的 bug，且維護者明確同意 |
| 對 fork 做歷史改寫或強推 | 已知與上游無共同祖先，屬 2026-10-24 壓縮後的既定事實 | 不重新考慮 |
| 為了清掉告警而抬高依賴下限 | 下限是相容性承諾（`docs/DECISIONS.md` 首則） | 該版本是本專案實際需要的最低版 |

## 維護方式

fork：以 `Upstream check`（排程）為節奏；綠燈＝維持現狀，紅燈＝依上表「審查並採用上游新變更」處理。依賴由 Dependabot 與 `Dependency freshness` 處理；沒有 release，部署／發版若日後出現，加進中期表。
