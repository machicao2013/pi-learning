# P01. 安装 Pi 并完成第一次仓库分析

## 学习目标

- 在真实项目中启动 Pi。
- 让 Pi 先探索，而不是立刻改代码。
- 形成第一份仓库分析笔记。

## 准备

选择一个你熟悉但不是特别小的项目。最好包含测试、构建脚本和 README。

安装 Pi：

```bash
npm install -g --ignore-scripts @earendil-works/pi-coding-agent
```

进入项目：

```bash
cd /path/to/project
pi
```

## 步骤

给 Pi 第一个任务：

```text
Summarize this repository. Tell me the main modules, how to install dependencies, how to run checks, and what files I should read first.
```

接着追问：

```text
Based on the repo files you inspected, propose a safe first task that would not require production credentials or external services.
```

命名 session：

```text
/name P01 repo onboarding
```

导出或手动记录以下内容：

- 项目主要模块。
- 安装命令。
- 测试或检查命令。
- Pi 实际读取过的关键文件。
- Pi 有哪些猜测需要你确认。

## 常见坑

- 第一条消息就要求“实现某功能”。先探索能降低后续返工。
- 不记录 Pi 的猜测。教程学习的重点是分辨事实和推断。
- 不命名 session。几天后很难找到这次探索。

## 验收标准

- Pi 能总结项目结构和检查命令。
- 你有一份 1 页以内的仓库分析笔记。
- session 已命名，可以通过 `/resume` 或 `pi -r` 找回。

## 下一步

继续 [P02. 给真实项目添加 AGENTS.md](/projects/02-project-rules)。
