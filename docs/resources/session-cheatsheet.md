# Session 工作流速查

## 启动与恢复

| 命令 | 用途 |
| --- | --- |
| `pi` | 在当前目录启动新会话或默认入口 |
| `pi -c` | 继续最近 session |
| `pi -r` | 浏览并选择历史 session |
| `pi --no-session` | 不保存 session |
| `pi --session <path或id>` | 打开指定 session |
| `pi --fork <path或id>` | 从指定 session 分支 |

## 交互命令

| 命令 | 用途 |
| --- | --- |
| `/session` | 查看当前 session 信息 |
| `/name <name>` | 命名当前 session |
| `/resume` | 浏览并恢复 session |
| `/new` | 开启新 session |
| `/tree` | 浏览当前 session 树 |
| `/fork` | 从早期用户消息创建新 session |
| `/clone` | 复制当前活跃分支 |
| `/compact [prompt]` | 压缩旧上下文 |
| `/export [file]` | 导出 session |

## 推荐习惯

- 超过 20 分钟的任务都命名。
- 试验不同方案时优先用 `/tree`。
- 要把当前路线另存为独立会话时用 `/clone`。
- 手动 compaction 时明确要求保留：决策、文件、命令、风险、下一步。

## 手动压缩提示

```text
/compact Keep decisions, files touched, commands run, verification status, open risks, and the next concrete action.
```
