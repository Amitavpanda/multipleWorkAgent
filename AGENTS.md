# AGENTS.md — Engineering OS project contract

This file is the single project brain for Cursor, Claude Code, Codex, and OpenCode.

## Product

**PingPad** — tiny dogfood app to practice **3–4 parallel worktrees**. Not a real product. Goal: learn prompt → brief → worktree → merge. **Minimum code.**

Pages / slices:
1. Home
2. `/api/ping` health JSON
3. Notes page (one client list, local state only — no DB)
4. Shared nav (optional 4th worktree)

After this works, delete or archive and move to a real project. Do **not** grow PingPad into ForgeBoard here.

## Stack

| Layer | Choice |
|---|---|
| App | Next.js App Router + TypeScript |
| UI | Tailwind (default create-next-app) |
| DB / Auth | **None** (token saver) |
| Package manager | pnpm |

## Verify

```text
verify: pnpm typecheck && pnpm lint
```

No test suite required for dogfood. Pre-scaffold: self-check only.

## Packs

```text
packs: [web]
```

## Gates

```text
ship: ask
```

## Engineering OS roster

Before acting: run `/intent` unless user already named an employee.

| Route | When | Who |
|---|---|---|
| **direct** | Typo, 1–2 files, one worktree bomb | One specialist |
| **loop** | Bug / clear fix | Debugger or owner + verify (max 3) |
| **sprint** | Only Wave 0 scaffold if needed | Partial roster |

**Never** full-company sprint for a PingPad bomb. Wave 1 = **direct** only.

Employees: see Engineering OS install (`/intent`, `/frontend-engineer`, `/debugger`, `/sprint`, …).

## Parallel worktrees (PingPad) — max 4

### Wave 0 (once, serial — YOU or one agent)

Scaffold only. Keep tiny:

```bash
pnpm create next-app . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
```

Add scripts: `typecheck` (`tsc --noEmit`), keep `lint`.  
Do **not** add Prisma, Auth, or extra libs.

### Wave 1 — 3 or 4 worktrees (fire together)

| # | Worktree | Prompt (paste) | Owns ONLY |
|---|---|---|---|
| 1 | `wt-home` | Home: title “PingPad”, one short sentence, link to /notes | `app/page.tsx` |
| 2 | `wt-ping` | GET `/api/ping` → `{ ok: true, t: <iso timestamp> }` | `app/api/ping/route.ts` |
| 3 | `wt-notes` | Notes page: input + Add + local list (useState). No DB. | `app/notes/page.tsx` |
| 4 | `wt-nav` *(optional)* | Top nav: Home \| Notes \| Ping (Ping = fetch /api/ping, show ok) | `components/Nav.tsx`, then only add `<Nav />` in `app/layout.tsx` |

**Rules:** each agent edits **only** its paths. No shared file fights except wt-nav may touch `layout.tsx` last (or run wt-nav after 1–3 merge).

### Wave 2 (you, 2 min)

Merge all → `pnpm dev` → click Home, Notes, hit `/api/ping`. Done. Lesson learned.

## Artifacts

`.engineering-os/brief.md` — **per worktree**. Parallel agents must each use `/worktree` so briefs do not overwrite.

## Memory

`.github/memory/lessons.md`, `decisions.md`, `anti-patterns.md`.

## On-demand docs

- `README.md`

## Never do

- Add DB, Auth, dashboards, or “real product” features
- Edit outside owned paths in Wave 1
- Full `/sprint` per bomb
- Install new dependencies without asking
- Spend tokens polishing design

## Commands

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm lint
```

## How to work here

1. Plain English in **one Agent chat per worktree**.
2. Check **that** worktree’s `.engineering-os/brief.md` → `employees:`.
3. Run `verify:` after edits.
4. Merge → smoke → stop. Do not expand scope.

See `~/Desktop/projects/engineering-os/docs/USAGE.md`.
