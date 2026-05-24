# Skill 最小骨架

## 目录

```text
.pi/skills/project-handoff/
  SKILL.md
```

## SKILL.md

```markdown
---
name: project-handoff
description: Use when preparing a concise handoff for continuing project work later.
---

# Project Handoff

Produce a handoff with these sections:

1. Goal
2. Current state
3. Files changed or inspected
4. Commands run and results
5. Decisions made
6. Remaining risks
7. Next concrete action

Keep it factual. Distinguish verified facts from assumptions.
```

## 使用

刷新资源：

```text
/reload
```

强制调用：

```text
/skill:project-handoff Prepare a handoff for this session.
```

## 写好 description

好的描述应该包含触发场景：

```yaml
description: Use when preparing a concise handoff for continuing project work later.
```

不好的描述太泛：

```yaml
description: Helps with project work.
```
