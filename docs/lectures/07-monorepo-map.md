# L07. Monorepo 源码地图

## 学习目标

- 建立 Pi monorepo 的包级地图。
- 知道从哪里读 CLI、runtime、LLM API 和 TUI。
- 学会先读边界，再读实现。

## 背景解释

Pi 仓库是 TypeScript monorepo。官方 README 列出主要包：

| 包 | 作用 |
| --- | --- |
| `@earendil-works/pi-ai` | 多 provider LLM API 抽象 |
| `@earendil-works/pi-agent-core` | agent runtime、工具调用和状态管理 |
| `@earendil-works/pi-coding-agent` | 交互式 coding agent CLI 和 SDK |
| `@earendil-works/pi-tui` | 终端 UI 组件和差量渲染 |
| `@earendil-works/pi-web-ui` | AI chat 界面组件 |

源码研读时，先把“包解决什么问题”讲清楚，再进入函数和类型。否则很容易在 CLI、TUI、agent loop、provider API 之间迷路。

## 源码阅读路径

1. 读根目录 `README.md`，确认包列表和开发命令。
2. 读 `package.json`，确认 workspaces、build、check、test 脚本。
3. 读 `AGENTS.md`，确认项目贡献规则和测试要求。
4. 进入 `packages/coding-agent/`，从 CLI 与文档开始。
5. 进入 `packages/agent/`，理解核心 agent loop。
6. 进入 `packages/ai/`，理解模型和 provider 抽象。
7. 进入 `packages/tui/`，理解终端界面如何渲染。

## 常见坑

- 直接搜索某个函数名，然后从中间读起。这样会错过包边界。
- 只读 `coding-agent`，忽略 `agent` 和 `ai`。CLI 只是入口，核心能力分散在底层包。
- 忽略根目录开发规则。Pi 的 `AGENTS.md` 明确约束测试、依赖、提交和发布流程。

## 验收标准

- 你能画出 Pi 的五个主要包和依赖方向。
- 你知道 CLI 入口不等于 agent runtime。
- 你能说明源码研读的第一批文件应该是什么。

## 下一步

学习 [L08. Agent Runtime、工具调用与状态管理](/lectures/08-agent-runtime)。
