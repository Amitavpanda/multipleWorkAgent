# Brief
route: direct
employees: [intent]
skip: [sprint, designer, engineering-manager, architect, backend-engineer, qa, release-engineer, debugger, security-officer, mobile-engineer, frontend-engineer]
goal: Wave 0 scaffold DONE — Next.js 16 + TS + Tailwind + ESLint + typecheck.
non_goals: Wave 1 bombs; Prisma; auth.
success_checks:
  - package.json name pingpad + typecheck script ✓
  - app/ present ✓
  - AGENTS.md / CLAUDE.md preserved ✓
  - pnpm typecheck && pnpm lint GREEN ✓
constraints: AGENTS.md Wave 0
verify: pnpm typecheck && pnpm lint
max_loop_iters: 3
notes: Scaffolded via scaffold-tmp merge (create-next-app refuses nonempty .). Ready for Wave 1 worktrees.
