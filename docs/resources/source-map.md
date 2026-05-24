# Pi monorepo 源码地图

## 顶层入口

| 文件 | 作用 |
| --- | --- |
| `README.md` | 项目概览、包列表、开发命令 |
| `AGENTS.md` | 项目贡献和 agent 工作规则 |
| `package.json` | workspaces、build、check、test 脚本 |
| `test.sh` | 非 LLM 测试入口 |
| `pi-test.sh` | 从源码运行 Pi |

## Packages

| 包 | 阅读重点 |
| --- | --- |
| `packages/ai` | 模型、provider、统一 LLM API |
| `packages/agent` | agent loop、消息、工具调用、状态 |
| `packages/coding-agent` | CLI、SDK、settings、sessions、resources |
| `packages/tui` | 终端 UI 组件、渲染和输入 |
| `packages/web-ui` | Web chat UI 组件 |

## 推荐阅读顺序

1. `README.md`
2. `AGENTS.md`
3. `packages/coding-agent/docs/`
4. `packages/coding-agent/src/`
5. `packages/agent/src/`
6. `packages/ai/src/`
7. `packages/tui/src/`

## 不建议的阅读方式

- 从随机 issue 或函数名开始读。
- 只看 CLI 入口，忽略底层包。
- 不读项目规则就运行全量测试或构建。
