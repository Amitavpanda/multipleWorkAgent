import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16 font-sans">
      <style>{`
        @keyframes pingpad-fade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pingpad-ripple {
          0% { transform: scale(0.72); opacity: 0.45; }
          70% { opacity: 0.12; }
          100% { transform: scale(1.35); opacity: 0; }
        }
        @keyframes pingpad-drift {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(12px, -18px, 0); }
        }
        .pingpad-fade { animation: pingpad-fade 0.7s ease-out both; }
        .pingpad-fade-delay { animation: pingpad-fade 0.7s ease-out 0.12s both; }
        .pingpad-fade-cta { animation: pingpad-fade 0.7s ease-out 0.24s both; }
        .pingpad-ripple {
          animation: pingpad-ripple 3.6s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }
        .pingpad-ripple-delay {
          animation: pingpad-ripple 3.6s cubic-bezier(0.22, 1, 0.36, 1) 1.2s infinite;
        }
        .pingpad-drift {
          animation: pingpad-drift 14s ease-in-out infinite;
        }
      `}</style>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#d9f2ec_0%,#e8eef2_45%,#f1f5f4_100%)]"
      />
      <div
        aria-hidden
        className="pingpad-drift pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(15,118,110,0.2),transparent_68%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-8 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.1),transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3] [background-image:radial-gradient(rgba(15,23,42,0.1)_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-[58%]"
      >
        <span className="pingpad-ripple absolute inset-[18%] rounded-full border border-teal-700/25" />
        <span className="pingpad-ripple-delay absolute inset-[6%] rounded-full border border-teal-800/15" />
      </div>

      <div className="relative z-10 flex max-w-lg flex-col items-center text-center">
        <h1 className="pingpad-fade text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
          PingPad
        </h1>
        <p className="pingpad-fade-delay mt-5 max-w-sm text-base leading-relaxed text-slate-600 sm:text-lg">
          Tiny dogfood app for parallel worktrees.
        </p>
        <Link
          href="/notes"
          className="pingpad-fade-cta group mt-10 inline-flex items-center gap-2 border-b border-teal-800/40 pb-0.5 text-sm font-medium text-teal-900 transition-colors hover:border-teal-900 hover:text-slate-900"
        >
          Open Notes
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </main>
  );
}
