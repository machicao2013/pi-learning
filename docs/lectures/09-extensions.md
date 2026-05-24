# L09. Extensions：事件、工具、命令与 UI

## 学习目标

- 理解 Pi Extension 的加载位置和能力边界。
- 会写一个最小 extension。
- 知道 extension 适合解决哪些 Harness 问题。

## 背景解释

Pi Extension 是 TypeScript 模块，可以订阅生命周期事件、注册工具、增加命令、拦截输入或工具调用、通过 UI 与用户交互。官方文档建议全局扩展放在 `~/.pi/agent/extensions/`，项目扩展放在 `.pi/extensions/`。

最小示例：

```ts
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { Type } from "typebox";

export default function (pi: ExtensionAPI) {
  pi.on("session_start", async (_event, ctx) => {
    ctx.ui.notify("Project extension loaded", "info");
  });

  pi.registerTool({
    name: "project_status",
    label: "Project Status",
    description: "Return the project status checklist",
    parameters: Type.Object({}),
    async execute() {
      return {
        content: [{ type: "text", text: "No status file configured yet." }],
        details: {}
      };
    }
  });
}
```

## 适合的场景

- 危险命令确认，例如拦截 `rm -rf`、生产迁移、敏感路径写入。
- 注入项目状态，例如读取固定质量文档或任务清单。
- 自定义 compaction，例如要求保留特定字段。
- 外部系统集成，例如 CI、issue、日志平台。
- 自定义命令，例如 `/handoff`、`/quality`、`/checkpoint`。

## 常见坑

- 安装不可信 extension。Extension 运行在本机权限下，可以执行代码。
- 一开始就写大扩展。先写单文件，验证事件和工具，再拆目录。
- 注册工具但忘了启用工具集合。自定义工具需要在工具配置中可用。

## 验收标准

- 你能说出 extension 的两个发现位置。
- 你能写出一个 `export default function (pi)` 的最小扩展。
- 你能举出一个用 extension 提升 Harness 可靠性的例子。

## 下一步

完成 [P05. 写一个小 Extension](/projects/05-small-extension)，或继续 [L10. Skills](/lectures/10-skills)。
