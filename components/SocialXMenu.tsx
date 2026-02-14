"use client";

import { useEffect, useRef, useState } from "react";
import { SiX } from "react-icons/si";

type XAccount = {
  label: string;
  handle: string;
  href: string;
};

export default function SocialXMenu() {
  const accounts: XAccount[] = [
    { label: "Main", handle: "@0x5zen", href: "https://x.com/0x5zen" },
    { label: "Alt", handle: "@0x8e64c", href: "https://x.com/0x8e64c" },
  ];

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const firstItemRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => firstItemRef.current?.focus(), 0);
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-cyan-400 transition-colors text-slate-400"
        title="X accounts"
      >
        <SiX size={20} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute bottom-12 left-0 z-50 min-w-[230px] rounded-xl border border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          <div className="px-3 py-2 text-[11px] font-mono text-slate-500 border-b border-white/10">
            Choose account
          </div>

          <div className="p-1">
            {accounts.map((acc, idx) => (
              <a
                key={acc.href}
                role="menuitem"
                ref={idx === 0 ? firstItemRef : undefined}
                href={acc.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors outline-none focus:bg-white/10"
              >
                <span className="text-sm text-slate-200 font-semibold">
                  {acc.label}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {acc.handle}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
