from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

import check_links
import check_upstream_updates as checker

ROOT = Path(__file__).resolve().parents[2]


def test_maintainer_markdown_links_resolve() -> None:
    failures = 0
    for path in check_links.iter_documents():
        problems = check_links.check_document(path)
        failures += len(problems)
        for problem in problems:
            print(f"{path}: {problem}")
    assert failures == 0


def test_required_overlay_files_exist() -> None:
    required = (
        "README.md",
        "README.en.md",
        "FORK.md",
        "NOTICE.md",
        "AGENTS.md",
        "CONTRIBUTING.md",
        "SECURITY.md",
        "REVIEW.md",
        "docs/DEVELOPMENT.md",
        "docs/DECISIONS.md",
        "docs/UPSTREAM.md",
        "tools/dev_check.ps1",
        "tools/bootstrap_dev.ps1",
        "tools/test_product.ps1",
        "requirements-dev.txt",
        "LICENSE",
    )
    missing = [name for name in required if not (ROOT / name).is_file()]
    assert missing == []


def test_readme_pair_cross_links_and_names_the_fork() -> None:
    zh = (ROOT / "README.md").read_text(encoding="utf-8")
    en = (ROOT / "README.en.md").read_text(encoding="utf-8")
    assert "README.en.md" in zh
    assert "README.md" in en
    assert "deancourse/git-worktree-demo" in zh
    assert "deancourse/git-worktree-demo" in en
    assert "FORK.md" in zh
    assert "MIT" in zh
    assert "tools\\bootstrap_dev.ps1" in zh or "tools/bootstrap_dev.ps1" in zh


def test_gitignore_covers_user_data_and_reports() -> None:
    text = (ROOT / ".gitignore").read_text(encoding="utf-8")
    assert ".env" in text
    assert ".venv" in text
    assert "upstream-review-report.md" in text
    assert "dependency-freshness-report.md" in text


def test_baseline_matches_format() -> None:
    baseline = checker.load_baseline()
    assert baseline["branch"] == "master"
    assert baseline["repo"].endswith("deancourse/git-worktree-demo.git")
    assert len(baseline["reviewed_through"]) == 40
    assert baseline["reviewed_pr_through"] >= 26
    assert baseline["reviewed_issue_through"] >= 0


def test_links_with_titles_and_code_samples_do_not_false_fail(tmp_path: Path) -> None:
    (tmp_path / "real.md").write_text("x", encoding="utf-8")
    doc = tmp_path / "doc.md"
    doc.write_text(
        '[ok](real.md "a title") and [ok2](real.md \'t\')\n'
        "inline `[no](missing-inline.md)` is code\n"
        "```md\n[no](missing-fenced.md)\n```\n"
        "[bad](gone.md)\n",
        encoding="utf-8",
    )
    problems = check_links.check_document(doc)
    assert len(problems) == 1 and problems[0].startswith("gone.md")
