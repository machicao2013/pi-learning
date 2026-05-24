# Prompt Template 示例包

## 目录

```text
.pi/prompts/
  review.md
  plan.md
  handoff.md
```

## review.md

```markdown
---
description: Review local changes before completion
argument-hint: "[focus]"
---

Review the current local changes. Focus on:

- Bugs and logic errors
- Missing tests or weak verification
- Security and data-loss risks
- Unclear user-facing behavior

Extra focus: $ARGUMENTS
```

## plan.md

```markdown
---
description: Create a concise implementation plan before editing
argument-hint: "<goal>"
---

Create an implementation plan for: $ARGUMENTS

Include:

- Goal
- Files or areas likely involved
- Steps
- Verification
- Risks or assumptions

Do not edit files yet.
```

## handoff.md

```markdown
---
description: Summarize current state for continuing later
---

Prepare a handoff with:

- Goal
- Current state
- Files changed or inspected
- Commands run
- Decisions made
- Remaining risks
- Next action
```

## 调用

```text
/review auth module
/plan add settings page
/handoff
```
