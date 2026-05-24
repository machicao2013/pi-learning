# Extension 最小骨架

## 单文件结构

```text
.pi/extensions/project-status.ts
```

## 代码

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
    description: "Return this project's working agreement and verification checklist.",
    parameters: Type.Object({}),
    async execute() {
      return {
        content: [
          {
            type: "text",
            text: [
              "Project status:",
              "- Read AGENTS.md before implementation.",
              "- Run relevant checks before completion.",
              "- Report verification and remaining risks."
            ].join("\n")
          }
        ],
        details: {}
      };
    }
  });
}
```

## 运行

```bash
pi -e ./.pi/extensions/project-status.ts
```

## 适合扩展的 Harness 问题

- 危险命令确认。
- 项目状态注入。
- 自定义工具。
- 自定义命令。
- 外部系统集成。

## 安全提醒

Extension 是代码，拥有本机执行权限。只加载你信任和审查过的扩展。
