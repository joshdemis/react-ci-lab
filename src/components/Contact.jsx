import React, { useState } from "react";
import data from "../lib/data";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Contact submission", data);
    setStatus("sent");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-16 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h3 className="text-3xl font-bold tracking-tight">Get in touch</h3>
            <p className="mt-2 text-neutral-700">Request quotations, site surveys, or technical support.</p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-neutral-500" />{data.COMPANY_PHONE}</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-neutral-500" />{data.COMPANY_EMAIL}</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-neutral-500" />{data.COMPANY_LOCATION}</div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-xs text-neutral-600">
              <StatTile value="48h" label="Avg. Quote Turnaround" />
              <StatTile value=">95%" label="On-time Delivery" />
              <StatTile value="ISO" label="Compliant Sourcing" />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border bg-white p-6">
            <h4 className="text-lg font-semibold mb-4">Request a Quote</h4>
            <form onSubmit={handleSubmit} className="grid gap-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input name="name" placeholder="Full name" required className="bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                <input name="email" type="email" placeholder="Email" required className="bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <input name="company" placeholder="Company / Organization" className="bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
              <div className="grid sm:grid-cols-2 gap-3">
                <input name="phone" placeholder="Phone" className="bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                <input name="location" placeholder="Location" className="bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <textarea name="message" placeholder="Describe your need..." rows={6} required className="bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />

              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-neutral-500">We respond within 1 business day.</div>
                <button type="submit" className="rounded-2xl bg-blue-600 text-white hover:bg-blue-500 px-5 py-2 font-medium">Send</button>
              </div>
              {status === "sent" && <div className="text-sm text-green-600">Thanks. Your request has been recorded.</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatTile({ value, label }) {
  return (
    <div className="rounded-2xl border bg-white p-4 text-center">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-xs text-neutral-600">{label}</div>
    </div>
  );
}
