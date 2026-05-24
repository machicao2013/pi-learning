# L03. 工具、上下文文件与 AGENTS.md

## 学习目标

- 理解 Pi 默认给模型哪些工具。
- 学会用 `AGENTS.md` 固化项目工作规则。
- 知道什么时候使用 `@file`、shell 命令和只读探索。

## 背景解释

Pi 默认提供读写、编辑和命令执行等工具。官方 Quickstart 提到默认工具包括 `read`、`write`、`edit`、`bash`，并可通过工具选项启用 `grep`、`find`、`ls` 等只读工具。

上下文文件是 Pi 的工作规则入口。Pi 会读取全局 `~/.pi/agent/AGENTS.md`，也会读取当前目录及父目录中的 `AGENTS.md` 或 `CLAUDE.md`。这让团队可以把“怎么工作”写进仓库，而不是每次靠口头提醒。

## 操作步骤

在项目根目录创建最小 `AGENTS.md`：

```markdown
# Project Instructions

- Start by reading README.md and package.json.
- Run `npm run check` after code changes.
- Do not edit generated files directly.
- Keep final answers concise and include verification results.
```

修改后重启 Pi，或在 Pi 内运行：

```text
/reload
```

引用文件：

```bash
pi @README.md "Summarize this file and list the commands I should try first."
```

在交互模式里执行命令并把输出交给模型：

```text
!npm run check
```

执行命令但不把输出加入上下文：

```text
!!npm run check
```

## 常见坑

- 把 `AGENTS.md` 写成愿望清单。它应该包含具体命令、边界和完成定义。
- 让模型猜命令。仓库里能写清楚的命令，应放进 `AGENTS.md` 或 README。
- 把所有命令输出都塞进上下文。大输出会占用上下文预算，必要时使用 `!!`。

## 验收标准

- 项目根目录有一份可执行的 `AGENTS.md`。
- 你知道 Pi 读取全局和项目级上下文文件。
- 你能解释 `!command` 与 `!!command` 的差别。

## 下一步

进入 [P02. 给真实项目添加 AGENTS.md](/projects/02-project-rules)。
