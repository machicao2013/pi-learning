# L12. 用 Pi 做可靠 Harness

## 学习目标

- 把 Pi 的机制组合成可靠工作系统。
- 设计适合真实项目的最小 Harness。
- 用证据判断 agent 是否真的完成任务。

## 背景解释

可靠 Harness 的核心不是“让模型更聪明”，而是让工作可恢复、可验证、可审查。Pi 提供了搭建这套系统的积木：

- `AGENTS.md`：项目规则和完成定义。
- Sessions：长任务的历史和分支。
- Compaction：上下文预算管理。
- Extensions：运行时拦截、工具和 UI。
- Skills：任务级流程和参考资料。
- Prompt Templates：固定提示结构。
- Pi Packages：共享上述资源。

## 最小 Harness 组合

在一个真实项目里，首版可以只做这四件事：

1. 根目录 `AGENTS.md`：写清启动、测试、边界、完成定义。
2. `.pi/prompts/review.md`：固定代码审查提示。
3. `.pi/skills/project-handoff/SKILL.md`：固定交接格式。
4. 一个验证清单：记录任务、命令、证据、未解决风险。

如果项目开始进入多角色或长周期协作，再加：

- Extension：危险命令确认、质量文档读取、上下文注入。
- Project-level packages：共享团队扩展、技能、主题和模板。
- Session 命名规范：每条长任务都命名并阶段性交接。

## 常见坑

- 一开始搭太多组件。Harness 应从最小闭环开始，按失败模式补组件。
- 只看 agent 最终总结，不看证据。完成必须有命令输出、截图、测试、diff 或可复现步骤。
- 没有交接文件。长任务不能只依赖 session 记忆。

## 验收标准

- 你能为一个项目写出最小 Harness 清单。
- 你能把失败模式映射到 Pi 机制：遗忘用 session/compaction，越界用 AGENTS/extension，重复提示用 templates/skills。
- 你能定义“完成”的证据，而不是只接受 agent 的自述。

## 下一步

完成 [P06. 综合 Agent Harness](/projects/06-capstone-harness)，把本课程的内容串成一次完整演练。
