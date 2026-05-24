# P05. 写一个小 Extension

## 学习目标

- 写一个单文件 Pi Extension。
- 体验事件监听和工具注册。
- 用 Extension 解决一个具体 Harness 问题。

## 准备

创建项目级扩展目录：

```text
.pi/extensions/
```

## 方案 A：危险命令提醒

创建 `.pi/extensions/safety.ts`：

```ts
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  pi.on("tool_call", async (event, ctx) => {
    const command = String(event.input?.command ?? "");
    if (event.toolName === "bash" && /rm\s+-rf|npm\s+publish|git\s+push\s+--force/.test(command)) {
      const ok = await ctx.ui.confirm("Risky command", `Allow this command?\n\n${command}`);
      if (!ok) return { block: true, reason: "Blocked by project safety extension" };
    }
  });
}
```

## 方案 B：项目状态工具

创建 `.pi/extensions/project-status.ts`：

```ts
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";

export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "project_status",
    label: "Project Status",
    description: "Return this project's working agreement and verification checklist.",
    parameters: Type.Object({}),
    async execute() {
      return {
        content: [{
          type: "text",
          text: "Done means: checks run, changes summarized, risks called out."
        }],
        details: {}
      };
    }
  });
}
```

启动时加载：

```bash
pi -e ./.pi/extensions/project-status.ts
```

或放在自动发现目录后运行 `/reload`。

## 记录证据

- Extension 是否成功加载。
- 事件或工具是否按预期触发。
- 如果失败，错误来自导入、类型、路径还是运行时行为。

## 常见坑

- 复制复杂 extension 后改不动。先做单文件最小版本。
- 没有审查第三方扩展。Extension 有本机权限。
- 工具名太泛。自定义工具应围绕项目语义命名。

## 验收标准

- 至少一个 extension 能被 Pi 加载。
- 你能解释它监听了什么事件或注册了什么工具。
- 你能判断这个 extension 是否值得成为项目默认 Harness 的一部分。

## 下一步

完成 [P06. 综合 Agent Harness](/projects/06-capstone-harness)。
