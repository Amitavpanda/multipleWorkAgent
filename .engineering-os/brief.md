# Brief
route: direct
employees: [frontend-engineer]
skip: [sprint, designer, engineering-manager, architect, backend-engineer, qa, release-engineer, debugger, security-officer, mobile-engineer]
goal: Wave 1 Notes bomb — client `/notes` page, local useState list only.
non_goals: Home; `/api/ping`; Nav; layout.tsx; DB; API; localStorage; extra deps.
success_checks:
  - ONLY new file: `app/notes/page.tsx`
  - `"use client"` + text input + Add + list via useState
  - empty input ignored; no persist; no fetch
  - `pnpm typecheck && pnpm lint` GREEN
constraints: AGENTS.md Wave 1 wt-notes owns ONLY `app/notes/page.tsx`. No other paths. ship: ask.
verify: pnpm typecheck && pnpm lint
max_loop_iters: 3
notes: Plan-first. User reviews plan before code. Commit that file only if asked.
