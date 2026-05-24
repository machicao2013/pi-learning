# AGENTS.md 模板

复制到项目根目录，然后把命令和边界改成你自己的项目。

```markdown
# Project Instructions

## Start Here

- Read `README.md`, package manifests, and relevant docs before broad changes.
- Use `rg` for search.
- Prefer small, focused changes.
- Ask before deleting behavior, changing public APIs, or touching production data paths.

## Project Commands

- Install: `npm install --ignore-scripts`
- Build: `npm run build`
- Check: `npm run check`
- Test: `npm test`

## Working Rules

- Do not edit generated files directly.
- Do not commit credentials, tokens, or local machine paths.
- Do not run production migrations locally.
- Keep changes scoped to the current task.

## Done Means

- Relevant checks have been run.
- The final response says what changed.
- The final response includes verification evidence.
- Any skipped checks or remaining risk is called out explicitly.
```

## 调整建议

- 如果项目不是 Node.js，把命令换成对应生态，例如 `pytest`、`go test ./...`、`cargo test`。
- 如果项目有昂贵或危险命令，把它写进禁止事项。
- 如果项目有生成文件，写清源文件在哪里。
