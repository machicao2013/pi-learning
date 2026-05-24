# P04. 写一个 Prompt Template 和一个 Skill

## 学习目标

- 用 Prompt Template 固定高频提示结构。
- 用 Skill 固定一套任务流程。
- 区分“短提示复用”和“能力流程复用”。

## 准备

在项目中创建目录：

```text
.pi/prompts/
.pi/skills/review-change/
```

## 步骤一：Prompt Template

创建 `.pi/prompts/review.md`：

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

在 Pi 中调用：

```text
/review persistence logic
```

## 步骤二：Skill

创建 `.pi/skills/review-change/SKILL.md`：

```markdown
---
name: review-change
description: Use when reviewing local code changes before claiming work is complete.
---

# Review Change

1. Inspect the current diff and relevant surrounding files.
2. Prioritize concrete bugs, regressions, missing verification, and risky assumptions.
3. Report findings first, ordered by severity.
4. If there are no findings, say so and list remaining test gaps.
```

刷新资源：

```text
/reload
```

强制使用技能：

```text
/skill:review-change Review the current changes.
```

## 记录证据

- Template 能否出现在 slash command 补全中。
- Skill 是否被发现。
- 两者输出风格有什么不同。

## 常见坑

- Template 和 Skill 内容完全重复。Template 适合短结构，Skill 适合更完整流程。
- Skill 描述太泛，导致模型不知道何时使用。
- 把项目私有流程装进全局目录，造成其他项目误触发。

## 验收标准

- `.pi/prompts/review.md` 可以通过 `/review` 调用。
- `.pi/skills/review-change/SKILL.md` 可以被 Pi 发现。
- 你能说出这个流程是否值得继续抽象。

## 下一步

进入 [P05. 写一个小 Extension](/projects/05-small-extension)。
