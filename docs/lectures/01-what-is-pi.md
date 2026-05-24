# L01. Pi 是什么

## 学习目标

- 理解 Pi 为什么称自己为 minimal terminal coding harness。
- 区分“模型能力”和“工程可靠性”。
- 建立本教程后续章节的心智模型。

## 背景解释

Pi 的官方文档把它描述为一个小核心、可扩展的终端编程 harness。这里的 harness 可以理解为“工作马具”：它不替代模型，而是约束和组织模型的工作方式。

Pi 的核心价值不在于发明新的 LLM，而在于把这些能力串起来：

- 模型选择与认证。
- 文件读写、编辑、命令执行等工具。
- `AGENTS.md` 等上下文文件。
- 可保存、可恢复、可分支的 session。
- 自动或手动 compaction。
- Extensions、Skills、Prompt Templates、Pi Packages。

这意味着你可以把 Pi 当作一个可定制的 coding agent，也可以把它当作研究 agent harness 的活样本。

## 操作步骤

1. 打开 Pi 官方文档总览：[https://pi.dev/docs/latest](https://pi.dev/docs/latest)。
2. 只看目录，不急着读正文，记录它把内容分成哪些区域：Start here、Customization、Reference、Programmatic Usage、Platform Setup、Development。
3. 打开 GitHub 仓库：[https://github.com/earendil-works/pi](https://github.com/earendil-works/pi)。
4. 找到 README 里的包列表，确认它不是单包 CLI，而是 monorepo。

## 常见坑

- 把 Pi 只理解成“聊天界面”。这样会忽略 session、context、extension 等真正决定长任务可靠性的部分。
- 把 harness 理解成“提示词写得更长”。真正的 harness 包含文件、命令、状态、验证、回滚和可观察信号。
- 一上来就写复杂扩展。先跑通默认工具链，再加自定义能力。

## 验收标准

- 你能用一句话解释 Pi：一个可扩展的终端 coding agent harness。
- 你能说出 Pi 的四个基础组成：模型、工具、上下文、会话。
- 你知道后续源码阅读应从 `packages/` 下的包边界开始，而不是随机读文件。

## 下一步

继续学习 [L02. 安装、认证与第一次会话](/lectures/02-install-first-session)。
