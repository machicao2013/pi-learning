# L02. 安装、认证与第一次会话

## 学习目标

- 安装 Pi CLI。
- 完成订阅登录或 API key 认证。
- 在一个真实项目里启动第一次有用会话。

## 背景解释

Pi 通过 npm 发布，当前官方推荐安装包是 `@earendil-works/pi-coding-agent`。从 2026 年 5 月起，Pi 项目迁移到 Earendil Works 组织，旧的 `@mariozechner/*` 包已进入迁移阶段；新教程应使用 `@earendil-works/*` 作用域。

## 操作步骤

安装：

```bash
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
```

进入你希望 Pi 工作的项目目录：

```bash
cd /path/to/project
pi
```

认证有两种常见方式。

订阅登录：

```text
/login
```

API key：

```bash
export ANTHROPIC_API_KEY=sk-ant-...
pi
```

第一次会话可以让 Pi 先探索项目，而不是直接改代码：

```text
Summarize this repository and tell me how to run its checks.
```

非交互模式适合一次性任务：

```bash
pi -p "Summarize this codebase"
cat README.md | pi -p "Summarize this text"
```

## 常见坑

- 安装时忘记 `--ignore-scripts`。Pi 正常 npm 安装不需要 lifecycle scripts，禁用它们更稳妥。
- 在错误目录启动 Pi。Pi 的工具会以当前工作目录为边界。
- 第一次任务就让 Pi 大改项目。更好的第一步是让它总结结构和检查命令。

## 验收标准

- `pi` 可以在项目目录启动。
- 你能通过 `/login` 或环境变量完成模型认证。
- Pi 能回答项目结构、运行命令和测试入口。

## 下一步

完成 [P01. 安装 Pi 并完成第一次仓库分析](/projects/01-first-repo-analysis)，然后学习 [L03. 工具与上下文文件](/lectures/03-tools-context)。
