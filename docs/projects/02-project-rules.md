# P02. 给真实项目添加 AGENTS.md

## 学习目标

- 把项目工作规则写进仓库。
- 让 Pi 不再每次重新猜测启动和验证方式。
- 定义“完成”的证据。

## 准备

基于 P01 的仓库分析笔记，整理出三类信息：

- 项目如何安装和启动。
- 改代码后必须跑什么检查。
- 哪些文件、目录或操作需要禁止或谨慎处理。

## 步骤

在项目根目录创建 `AGENTS.md`：

```markdown
# Project Instructions

## Start Here

- Read `README.md` and `package.json` before making broad changes.
- Use `rg` for search.
- Ask before changing public APIs or deleting behavior.

## Commands

- Install: `npm install --ignore-scripts`
- Check: `npm run check`
- Test: `npm test`

## Done Means

- Relevant checks have been run.
- The final answer includes what changed and what was verified.
- Any unverified risk is called out explicitly.
```

在 Pi 中刷新上下文：

```text
/reload
```

让 Pi 自查：

```text
Read AGENTS.md and tell me how you will work in this project. Do not edit files.
```

## 记录证据

- `AGENTS.md` 的最终内容。
- Pi 对规则的复述。
- 你发现的缺口，例如测试命令不准、启动命令需要环境变量。

## 常见坑

- 写太抽象，例如“保持高质量”。应写具体命令和禁止事项。
- 把完成定义交给模型主观判断。完成必须有证据。
- 一次写满几十条规则。首版越短越容易遵守。

## 验收标准

- `AGENTS.md` 能被 Pi 读取和复述。
- 它包含启动、检查、边界和完成定义。
- 你能指出后续还需要补充的团队规则。

## 下一步

进入 [P03. 用 Session / Tree / Compaction 管理长任务](/projects/03-long-session)。
