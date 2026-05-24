# L05. Sessions、Tree 与分支

## 学习目标

- 理解 Pi 为什么保存 session。
- 会继续、浏览、命名、分支会话。
- 会选择 `/tree`、`/fork`、`/clone` 的使用场景。

## 背景解释

Pi 会把对话保存为 session。官方文档说明 session 默认保存在 `~/.pi/agent/sessions/`，按工作目录组织，每个 session 是 JSONL 文件，并以树结构保存消息关系。

常用命令：

| 命令 | 用途 |
| --- | --- |
| `pi -c` | 继续最近 session |
| `pi -r` | 启动时浏览历史 session |
| `/resume` | 交互模式中切换 session |
| `/new` | 开启新 session |
| `/name <name>` | 给当前 session 命名 |
| `/tree` | 在当前 session 树中导航 |
| `/fork` | 从 earlier user message 开新 session |
| `/clone` | 复制当前活跃分支到新 session |

## 操作步骤

完成一次仓库探索后命名：

```text
/name Repo onboarding - first scan
```

几天后继续：

```bash
cd /path/to/project
pi -c
```

想探索替代方案但保留同一 session：

```text
/tree
```

想把当前路线复制出去单独工作：

```text
/clone
```

## 常见坑

- 所有任务都挤在一个永不命名的 session 里。长任务应该命名，阶段性切分。
- 明明是在探索方案，却直接覆盖当前路径。用 `/tree` 可以保留分支。
- 把 session 当作版本控制。代码回滚仍然应该依赖 git 或明确的 checkpoint 流程。

## 验收标准

- 你能找到当前 session 文件和 session ID。
- 你能用 `/name` 命名一条 session。
- 你能解释 `/tree`、`/fork`、`/clone` 的区别。

## 下一步

完成 [P03. 用 Session / Tree / Compaction 管理长任务](/projects/03-long-session)。
