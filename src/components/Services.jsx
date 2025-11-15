// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Plug,
  PanelTop,
  Server,
  Wind,
  GraduationCap,
  Wrench,
  ShieldCheck,
} from "lucide-react";

import { fadeUp, containerStagger } from "../lib/animations";
import data from "../lib/data";

// Map string names from data.js -> actual Lucide components
const Icons = {
  Plug,
  PanelTop,
  Server,
  Wind,
  GraduationCap,
  Wrench,
};

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Services</h2>
          <p className="mt-2 text-neutral-700">
            Design, installation, commissioning, maintenance, after-sales service guarantee, and training.
          </p>
        </motion.div>

        {/* Animated grid (staggered) */}
        <motion.div
          className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerStagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.SERVICES.map((s) => {
            const Icon = Icons[s.icon]; // string -> component
            return (
              <motion.div key={s.title} variants={fadeUp}>
                <div className="h-full rounded-2xl border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 grid place-items-center rounded-xl bg-neutral-100">
                      {Icon ? (
                        <Icon className="h-6 w-6 text-neutral-700" />
                      ) : (
                        <ShieldCheck className="h-6 w-6 text-neutral-700" />
                      )}
                    </div>
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                  </div>

                  <ul className="space-y-2 text-sm text-neutral-700">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <ShieldCheck className="h-4 w-4 mt-0.5 text-blue-600" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
