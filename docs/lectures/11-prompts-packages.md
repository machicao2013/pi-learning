# L11. Prompt Templates 与 Pi Packages

## 学习目标

- 会写 Prompt Template。
- 理解 Pi Package 如何打包扩展、技能、提示词和主题。
- 知道共享资源时的安全边界。

## 背景解释

Prompt Template 是 Markdown 片段，文件名会变成 slash command。Pi 会从全局、项目、Package、Settings 和 CLI 参数中加载它们。

最小模板：

```markdown
---
description: Review staged git changes
argument-hint: "[focus]"
---

Review the staged changes. Focus on:

- Bugs and logic errors
- Security issues
- Missing tests
- Risky assumptions

Extra focus: $ARGUMENTS
```

保存为 `.pi/prompts/review.md` 后，可以在 Pi 中输入：

```text
/review auth flow
```

Pi Package 则可以把 extensions、skills、prompt templates、themes 打包，通过 npm、git 或本地路径安装：

```bash
pi install npm:@scope/package@1.0.0
pi install git:github.com/user/repo@v1
pi install ./local-package
```

## 常见坑

- 把 template 写成超长提示词。模板应把稳定结构固定下来，把变动部分留给参数。
- 在包里混入未审查脚本。Pi packages 可能运行代码，应只安装可信来源。
- 全局安装团队专用模板。团队工作流更适合放项目 `.pi/`，随仓库共享。

## 验收标准

- 你能创建一个 `.pi/prompts/review.md` 并通过 `/review` 调用。
- 你知道 `$1`、`$ARGUMENTS` 等参数形式。
- 你能说明 Pi Package 适合共享哪些资源。

## 下一步

学习 [L12. 用 Pi 做可靠 Harness](/lectures/12-reliable-harness)。
