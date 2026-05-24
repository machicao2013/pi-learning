# Pi 上手检查清单

## 安装前

- 确认 Node.js 和 npm 可用。
- 选择一个真实项目作为练习对象。
- 确认项目处在可回滚状态，例如干净 git 分支。

## 安装

```bash
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
```

## 第一次启动

```bash
cd /path/to/project
pi
```

在 Pi 内完成认证：

```text
/login
```

或者使用环境变量：

```bash
export ANTHROPIC_API_KEY=sk-ant-...
pi
```

## 第一次任务

```text
Summarize this repository and tell me how to run its checks. Do not edit files.
```

## 项目规则

- 添加 `AGENTS.md`。
- 写清安装、测试、检查命令。
- 写清禁止事项和完成定义。
- 修改后运行 `/reload`。

## 会话管理

- 用 `/name <name>` 命名长任务。
- 用 `pi -c` 继续最近任务。
- 用 `pi -r` 浏览历史任务。
- 用 `/tree` 探索替代路线。
- 用 `/compact` 管理长上下文。

## 完成前

- 运行相关检查。
- 记录验证证据。
- 说明未验证风险。
- 如果任务要跨会话继续，写交接。
