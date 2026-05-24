# L10. Skills：发现、加载与项目级能力

## 学习目标

- 理解 Skill 与 Extension 的差别。
- 会创建最小 `SKILL.md`。
- 知道如何把项目工作流包装成可复用能力。

## 背景解释

Pi 支持 Agent Skills。Skill 是自包含的能力包，通常由 `SKILL.md`、脚本和参考资料组成。它更像“给模型看的工作手册”，而 Extension 是“运行时执行的 TypeScript 代码”。

Pi 会从多个位置发现技能，包括：

- 全局：`~/.pi/agent/skills/`、`~/.agents/skills/`。
- 项目：`.pi/skills/`、`.agents/skills/`。
- Packages：包内的 `skills/` 或 `package.json` 的 `pi.skills`。
- Settings 与 CLI 参数。

最小结构：

```text
.pi/skills/review-change/
  SKILL.md
```

最小 `SKILL.md`：

```markdown
---
name: review-change
description: Use when reviewing local code changes before completion.
---

# Review Change

1. Inspect the diff.
2. Focus on bugs, regressions, missing tests, and risky assumptions.
3. Report findings first, ordered by severity.
4. If no issues are found, say that clearly and mention residual risk.
```

## Skill 与 Extension 怎么选

| 需求 | 适合 |
| --- | --- |
| 约束模型的工作流程 | Skill |
| 提供参考资料和脚本 | Skill |
| 新增可执行工具 | Extension |
| 拦截事件或工具调用 | Extension |
| 打包一组 skills、prompts、extensions | Pi Package |

## 常见坑

- `description` 写得太泛。模型靠描述决定何时加载技能，描述越具体越好。
- Skill 里塞太多无关流程。一个 skill 应该解决一个清晰任务。
- 把需要执行权限的逻辑写成自然语言。需要稳定执行的东西应放脚本或 extension。

## 验收标准

- 你能解释 Skill、Extension 的区别。
- 你能写出一个带 frontmatter 的 `SKILL.md`。
- 你能决定一个项目工作流应该做成 Skill 还是 Extension。

## 下一步

完成 [P04. 写一个 Prompt Template 和一个 Skill](/projects/04-prompt-and-skill)。
