# L08. Agent Runtime、工具调用与状态管理

## 学习目标

- 理解 AgentSession 与 Agent 的关系。
- 知道 SDK 如何创建会话、启用工具和订阅事件。
- 把工具调用、消息流和 session 存储连起来。

## 背景解释

Pi 的 SDK 文档展示了 `createAgentSession()` 作为创建会话的主要入口。会话负责生命周期、消息历史、模型状态、compaction 和事件流；底层 `Agent` 处理核心 LLM 交互。

最小 SDK 形态：

```ts
import { createAgentSession, SessionManager } from "@earendil-works/pi-coding-agent";

const { session } = await createAgentSession({
  sessionManager: SessionManager.inMemory()
});

session.subscribe((event) => {
  if (event.type === "message_update") {
    // render or inspect streamed updates
  }
});

await session.prompt("What files are in the current directory?");
```

指定工具：

```ts
const { session } = await createAgentSession({
  tools: ["read", "bash", "grep"]
});
```

## 源码阅读路径

1. 从 SDK 文档确认公开接口。
2. 找到 `createAgentSession` 的实现，关注它如何装配 resource loader、settings、model、tools、session manager。
3. 顺着 session 的 `prompt()` 看消息如何进入 agent loop。
4. 跟踪工具定义：内置工具如何声明输入、执行、返回结果。
5. 跟踪事件：消息更新、工具执行、agent start/end 如何发出。

## 常见坑

- 把 SDK 示例当作完整架构图。示例是入口，真实逻辑还要看 resource loader、tool registry、session manager。
- 忽略事件流。Pi 的 TUI 和扩展能力大量依赖事件。
- 把工具当作 shell wrapper。工具有 schema、执行结果、展示细节和权限语义。

## 验收标准

- 你能解释 `createAgentSession()` 做的三件事：装配模型、工具和 session。
- 你能说明 `AgentSession.prompt()` 与事件订阅的关系。
- 你知道如何限制会话可用工具。

## 下一步

学习 [L09. Extensions](/lectures/09-extensions)。
