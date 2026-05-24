# 术语表

## Agent Harness

围绕 agent 的工作系统：规则、工具、状态、验证、交接、扩展和运行时边界。

## Pi

一个 minimal terminal coding harness。它把模型、工具、会话、上下文文件和扩展机制组织成可持续的编程环境。

## Session

Pi 保存的会话记录。它是 JSONL 格式，带树结构，可以恢复、分支、命名和压缩。

## Compaction

把旧对话总结成结构化摘要，以释放上下文窗口。适合长任务，但不能替代项目文档和验证记录。

## Branch Summarization

在 `/tree` 切换分支时保存被离开分支的摘要，帮助保留替代路线中的重要上下文。

## AGENTS.md

项目级或全局上下文文件，用来告诉 agent 如何在当前项目中工作。

## Extension

Pi 的 TypeScript 扩展模块。可以订阅事件、注册工具、添加命令、拦截输入或工具调用。

## Skill

自包含能力包，通常由 `SKILL.md`、脚本和参考资料组成。用于给模型提供任务级工作流程。

## Prompt Template

Markdown 提示模板。文件名会变成 slash command，可用参数生成重复提示。

## Pi Package

用于打包和共享 extensions、skills、prompt templates、themes 的包。可以通过 npm、git 或本地路径安装。

## Provider

模型服务来源，例如订阅 provider、API-key provider 或自定义 provider。

## Thinking Level

模型推理强度设置。不同模型支持范围不同，通常影响速度、成本和复杂任务表现。
