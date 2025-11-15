import React from "react";

import data from "../lib/data";

export default function VisionMission() {
  return (
    <section id="vision" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-xl font-bold mb-3">Vision</h3>
            <p className="text-neutral-700 text-sm leading-relaxed">{data.VISION}</p>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-xl font-bold mb-3">Mission</h3>
            <p className="text-neutral-700 text-sm leading-relaxed">{data.MISSION}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
