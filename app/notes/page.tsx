"use client";

import { FormEvent, useState } from "react";

export default function NotesPage() {
  const [draft, setDraft] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setNotes((prev) => [...prev, text]);
    setDraft("");
  }

  return (
    <main className="relative min-h-full overflow-hidden bg-[radial-gradient(1200px_600px_at_10%_-10%,#c8ebe3_0%,transparent_55%),radial-gradient(900px_500px_at_100%_0%,#dce8f5_0%,transparent_50%),linear-gradient(180deg,#f4f7f8_0%,#eef2f4_100%)] px-6 py-16 text-slate-800">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:28px_28px]"
      />
      <div className="relative mx-auto flex w-full max-w-lg flex-col gap-8">
        <header className="space-y-2">
          <p className="font-mono text-xs tracking-[0.2em] text-teal-800/70 uppercase">
            PingPad
          </p>
          <h1 className="font-sans text-4xl font-semibold tracking-tight text-slate-900">
            Notes
          </h1>
          <p className="max-w-sm text-sm leading-relaxed text-slate-600">
            Scratch thoughts locally. Nothing saved past this session.
          </p>
        </header>

        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
        >
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            aria-label="Note"
            placeholder="Write a note…"
            className="flex-1 rounded-xl border border-slate-300/80 bg-white/80 px-4 py-3 text-base text-slate-900 shadow-sm outline-none backdrop-blur transition placeholder:text-slate-400 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20"
          />
          <button
            type="submit"
            className="rounded-xl bg-teal-800 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-teal-700 active:scale-[0.98] sm:self-auto"
          >
            Add
          </button>
        </form>

        {notes.length === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-300/90 bg-white/40 px-4 py-8 text-center text-sm text-slate-500 backdrop-blur">
            Empty pad. Type above and hit Add.
          </p>
        ) : (
          <ul className="flex flex-col gap-3">
            {notes.map((note, i) => (
              <li
                key={i}
                className="rounded-xl border border-slate-200/90 bg-white/75 px-4 py-3 text-slate-800 shadow-sm backdrop-blur transition duration-200 ease-out"
              >
                <span className="mr-3 font-mono text-[10px] tracking-wider text-teal-800/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {note}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
