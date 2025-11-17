import React from "react";
import { motion } from "framer-motion";
import { Zap, PanelTop, Server, Wind } from "lucide-react";
import { heroContainer, heroStagger } from "../lib/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        bg-gradient-to-b from-white via-blue-50 to-slate-100
      "
    >
      {/* Subtle ambient glow */}
      <div
        className="
          pointer-events-none absolute -top-24 right-0
          h-[20rem] w-[20rem] sm:h-[26rem] sm:w-[26rem]
          rounded-full bg-blue-300/30
          blur-[90px] sm:blur-[130px]
        "
      />

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
            <span
              className="
                inline-block rounded-full bg-blue-100 text-blue-700
                px-3 py-1 text-xs sm:text-sm font-medium
              "
            >
              Since 2010
            </span>

            <h1
              className="
                mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold
                tracking-tight text-blue-900 leading-tight
              "
            >
              Your engineering partner for supply, installation, and support.
            </h1>

            <p
              className="
                mt-4 text-base sm:text-lg
                text-neutral-700 max-w-xl
              "
            >
              VOLONO Engineering PLC provides end-to-end electrical and
              mechanical solutions across Ethiopia and East Africa:
              design, procurement, installation, commissioning, training,
              and after-sales support.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#services"
                className="
                  rounded-2xl bg-blue-600 text-white
                  hover:bg-blue-700 px-5 py-2 font-medium transition
                "
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="
                  rounded-2xl border border-blue-600 text-blue-700
                  hover:bg-blue-50 px-5 py-2 font-medium transition
                "
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
            <div
              className="
                relative p-[2px] rounded-[28px]
                bg-gradient-to-br from-blue-400/20 to-blue-200/10
                backdrop-blur-xl shadow-2xl
              "
            >
              <div
                className="
                  rounded-[24px] bg-white
                  p-6 shadow-lg border border-white/40
                "
              >
                <div className="grid grid-cols-2 gap-6">
                  <Feature icon={Zap} title="Low Voltage" subtitle="Breakers, contactors, relays" />
                  <Feature icon={PanelTop} title="Switchboards" subtitle="Custom build & retrofit" />
                  <Feature icon={Server} title="Generators" subtitle="Sizing, install, service" />
                  <Feature icon={Wind} title="HVAC" subtitle="Air-con & ventilation" />
                </div>

                <div
                  className="
                    mt-6 rounded-xl bg-neutral-100/60
                    p-4 backdrop-blur-sm
                  "
                >
                  <p className="text-sm text-neutral-700">
                    Sales shops equipped with the latest equipment and
                    trained professionals for timely, efficient support.
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
      <div
        className="
          h-10 w-10 grid place-items-center rounded-xl
          bg-blue-500/10 text-blue-700
        "
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-semibold text-neutral-900">
          {title}
        </div>
        <div className="text-xs text-neutral-600">
          {subtitle}
        </div>
      </div>
    </div>
  );
}
