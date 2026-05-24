# L06. Compaction 与分支摘要

## 学习目标

- 理解上下文为什么需要压缩。
- 区分 compaction 和 branch summarization。
- 知道如何手动触发和调参。

## 背景解释

模型上下文窗口有限。Pi 的 compaction 会在上下文接近阈值时把旧消息总结成结构化摘要，同时保留最近工作内容。官方文档给出两个机制：

| 机制 | 触发 | 目的 |
| --- | --- | --- |
| Compaction | 上下文超过阈值，或运行 `/compact` | 压缩旧消息，释放上下文 |
| Branch summarization | `/tree` 切换分支 | 保存被离开分支的重要上下文 |

默认策略会预留一段输出空间，并保留最近一段上下文。你也可以通过 settings 调整 `reserveTokens` 和 `keepRecentTokens`。

## 操作步骤

手动压缩：

```text
/compact Summarize decisions, files changed, open questions, and verification status.
```

项目级设置示例：

```json
{
  "reserveTokens": 16384,
  "keepRecentTokens": 20000
}
```

观察一次长 session：

1. 运行 `/session` 查看消息、token 和成本。
2. 在长任务中手动 `/compact`。
3. 继续让 Pi 回答“我们当前状态是什么”。
4. 检查它是否保留了关键决策、文件和未完成项。

## 常见坑

- 把 compaction 当作完美记忆。摘要会丢细节，重要事实应写进仓库文件或任务清单。
- 压缩前没有交接信息。长任务应把当前状态沉淀到文档、issue 或计划中。
- 用太宽泛的手动压缩提示。要明确要求保留决策、文件、验证状态和风险。

## 验收标准

- 你能说明 compaction 与 branch summarization 的不同。
- 你能手动触发一次 `/compact`。
- 你知道哪些信息必须落到仓库，而不是只留在对话摘要里。

## 下一步

进入源码视角：[L07. Monorepo 源码地图](/lectures/07-monorepo-map)。
