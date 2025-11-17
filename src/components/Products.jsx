// src/components/Products.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Cable,
  ShieldCheck,
  PanelTop,
  Layers3,
  Server,
  Wind,
  GraduationCap,
} from "lucide-react";

import { fadeUp, containerStagger } from "../lib/animations";
import data from "../lib/data";

// Map string names from data.js -> actual Lucide components
const Icons = {
  Zap,
  Cable,
  ShieldCheck,
  PanelTop,
  Layers3,
  Server,
  Wind,
  GraduationCap,
};

const BRANDS = ["ABB", "Schneider Electric", "Siemens", "Legrand", "Cummins", "Perkins"];

export default function Products() {
  return (
    <section id="products" className="py-16 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight  text-blue-900">Product Lines</h2>
          <p className="mt-2 text-neutral-700">
            Import and distribution of certified electrical materials with full documentation and warranty support.
          </p>
        </motion.div>

        {/* Animated grid (staggered) */}
        <motion.div
          className="mt-8 grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerStagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.PRODUCT_LINES.map((p) => {
            const Icon = Icons[p.icon];
            return (
              <motion.div
                key={p.label}
                variants={fadeUp}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <div className="h-11 w-11 grid place-items-center rounded-xl bg-neutral-100">
                  {Icon ? (
                    <Icon className="h-5 w-5 text-neutral-700" />
                  ) : (
                    <ShieldCheck className="h-5 w-5 text-neutral-700" />
                  )}
                </div>
                <div className="mt-3 font-semibold">{p.label}</div>
                <div className="mt-1 text-xs text-neutral-600">
                  Supply • Installation • Service
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-10 rounded-2xl border bg-white p-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-medium">
              Brands & Partners
            </span>
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-700">
              {BRANDS.map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
