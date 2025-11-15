import React, { useState, useEffect } from "react";
import { Cpu, Moon, Sun } from "lucide-react";
import data from "../lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  function toggleDark() {
    document.documentElement.classList.toggle("dark");
    setDark(d => !d);
  }

  return (
    <div className="sticky top-0 z-50 w-full bg-white/80 dark:bg-surface-dark/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-brand-500 text-white grid place-items-center">
              <Cpu className="h-5 w-5" />
            </div>
            <div className="font-semibold tracking-tight text-textc-light dark:text-textc-dark">
              VOLONO Engineering PLC
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {data.NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleDark}
              aria-label="Toggle Theme"
              className="h-9 w-9 grid place-items-center rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <a href="#contact">
              <button className="px-4 py-2 rounded-2xl bg-brand-500 text-white hover:bg-brand-600 transition">
                Request Quote
              </button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border dark:border-neutral-700"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle Menu"
          >
            ≡
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {data.NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={toggleDark}
                className="rounded-lg border border-neutral-300 dark:border-neutral-700 px-3 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                {dark ? "Light Mode" : "Dark Mode"}
              </button>

              <a href="#contact" onClick={() => setOpen(false)}>
                <button className="w-full px-4 py-2 rounded-2xl bg-brand-500 text-white hover:bg-brand-600 transition">
                  Request Quote
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
