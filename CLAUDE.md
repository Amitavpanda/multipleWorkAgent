@AGENTS.md

<!-- Claude Code: keep this file thin. All project rules live in AGENTS.md. -->

# PingPad (Claude Code)

Tiny dogfood: Home + `/api/ping` + Notes (+ optional Nav). Max 3–4 worktrees. No DB/auth.

1. Read `AGENTS.md`. `verify: pnpm typecheck && pnpm lint`. `ship: ask`.
2. Wave 0 scaffold once. Wave 1 = **direct** bombs only — own paths only.
3. Each parallel chat uses its own `/worktree` (separate `brief.md`).
4. No new deps. Minimum code. Stop when the four slices work.
