import React from "react";
import { motion } from "framer-motion";
import { Zap, PanelTop, Server, Wind } from "lucide-react";
import { heroContainer, heroStagger } from "../lib/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-white via-brand-50 to-slate-100 dark:from-surface-dark dark:via-surface-dark dark:to-black"
    >
      {/* Soft atmospheric glow accent */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-brand-300/30 blur-[120px] dark:bg-brand-700/20"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <motion.div
          variants={heroContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-14 items-center"
        >

          {/* LEFT COLUMN */}
          <motion.div variants={heroStagger}>
            <span className="inline-block rounded-full bg-brand-100 text-brand-700 px-3 py-1 text-xs sm:text-sm font-medium">
              Since 2010
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
              General Engineering. Supply. Installation. Service.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
              VOLONO Engineering PLC provides end-to-end electrical and mechanical solutions across Ethiopia and East Africa:
              design, procurement, installation, commissioning, training, and after-sales support.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-2xl bg-brand-500 text-white hover:bg-brand-600 px-5 py-2 font-medium transition"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-brand-500 text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-900/20 px-5 py-2 font-medium transition"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN FEATURE CARD */}
          <motion.div
            variants={heroStagger}
            className="relative transform-gpu transition-transform"
            whileHover={{ rotateX: 2, rotateY: -3, scale: 1.015 }}
            whileTap={{ scale: 0.995 }}
          >
            <div className="
              relative p-[2px] rounded-[28px]
              bg-gradient-to-br from-brand-500/20 via-transparent to-brand-300/20
              dark:from-brand-700/20 dark:to-brand-900/10
              backdrop-blur-sm shadow-xl
            ">
              <div className="
                rounded-[24px] bg-white dark:bg-surface-dark
                p-6 shadow-lg border border-white/10 dark:border-white/5
              ">
                <div className="grid grid-cols-2 gap-6">
                  <Feature icon={Zap} title="Low Voltage" subtitle="Breakers, contactors, relays" />
                  <Feature icon={PanelTop} title="Switchboards" subtitle="Custom build & retrofit" />
                  <Feature icon={Server} title="Generators" subtitle="Sizing, install, service" />
                  <Feature icon={Wind} title="HVAC" subtitle="Air-con & ventilation" />
                </div>

                <div className="mt-6 rounded-xl bg-neutral-900/5 dark:bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Sales shops equipped with the latest equipment and trained professionals for timely, efficient support.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, title, subtitle }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="h-10 w-10 grid place-items-center rounded-xl bg-brand-500/10 dark:bg-brand-500/15 text-brand-700 dark:text-brand-300">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-semibold text-neutral-900 dark:text-neutral-100">{title}</div>
        <div className="text-xs text-neutral-600 dark:text-neutral-400">{subtitle}</div>
      </div>
    </div>
  );
}
