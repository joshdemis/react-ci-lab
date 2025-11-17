import React, { useState } from "react";
import { Cpu } from "lucide-react";
import data from "../lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-blue-900/95 backdrop-blur-lg border-b border-blue-700 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Branding */}
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-blue-600 text-white grid place-items-center">
              <Cpu className="h-5 w-5" />
            </div>
            <div className="font-semibold tracking-tight text-white">
              VOLONO Engineering PLC
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {data.NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-blue-100/80 hover:text-white transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a href="#contact">
              <button className="px-4 py-2 rounded-2xl bg-blue-500 text-white hover:bg-blue-400 transition font-medium">
                Request Quote
              </button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-700 text-blue-100"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle Menu"
          >
            ≡
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {data.NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-blue-100 hover:bg-blue-800 transition"
                >
                  {link.label}
                </a>
              ))}

              <a href="#contact" onClick={() => setOpen(false)}>
                <button className="w-full px-4 py-2 rounded-2xl bg-blue-500 text-white hover:bg-blue-400 transition">
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
