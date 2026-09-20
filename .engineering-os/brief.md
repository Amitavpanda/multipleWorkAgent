# Brief
route: direct
employees: [backend-engineer]
skip: [product-manager, designer, engineering-manager, sprint, frontend-engineer, qa]
goal: GET /api/ping returns { ok: true, t: <ISO timestamp> }
non_goals: home, notes, nav, DB, auth, new deps, other files
success_checks:
  - app/api/ping/route.ts exists
  - GET returns JSON with ok:true and ISO t
  - pnpm typecheck && pnpm lint green
constraints: own only app/api/ping/route.ts; Wave 1 direct bomb
verify: pnpm typecheck && pnpm lint
max_loop_iters: 3
notes: commit only route.ts if commit
