# P03. 用 Session / Tree / Compaction 管理长任务

## 学习目标

- 练习命名、恢复和分支 session。
- 对比 `/tree`、`/fork`、`/clone`。
- 用一次手动 compaction 观察信息保留。

## 准备

选择一个需要 30 分钟以上的任务，例如：

- 给项目添加一个小功能。
- 重构一个测试文件。
- 调研一个模块并输出文档。

## 步骤

启动任务：

```text
Help me plan a small, low-risk improvement for this repository. Explore first and do not edit files until you have a concrete plan.
```

命名：

```text
/name P03 long-session experiment
```

在中途制造一个分支：

```text
/tree
```

选择较早的一条用户消息，尝试另一种方案。然后比较：

- 同一 session 内用 `/tree` 保留替代路线的体验。
- 使用 `/clone` 开新 session 的体验。
- 哪一种更适合你的任务。

手动压缩：

```text
/compact Keep decisions, files touched, commands run, open risks, and next action.
```

压缩后提问：

```text
What is the current project state and what should happen next?
```

## 记录证据

- session 名称。
- 分支前后的两种方案。
- compaction 后 Pi 是否保留关键状态。
- 哪些信息应该写进仓库而不是留在 session。

## 常见坑

- 在没有 git checkpoint 的情况下让 Pi 改很多文件。Session 不是代码回滚工具。
- 只依赖 compaction 保存细节。重要决策应写入文档。
- 切换分支后忘记当前代码状态。对话分支和文件系统状态不是同一回事。

## 验收标准

- 你完成了一次 `/tree` 或 `/clone` 实验。
- 你手动触发过 `/compact`。
- 你能解释 session 管理对长任务可靠性的作用和边界。

## 下一步

继续 [P04. 写一个 Prompt Template 和一个 Skill](/projects/04-prompt-and-skill)。
