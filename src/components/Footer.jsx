import React from "react";
import data from "../lib/data";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold">VOLONO Engineering PLC</h4>
            <p className="mt-2 text-sm text-neutral-600">
              End-to-end supply, installation, and maintenance of electrical solutions across Ethiopia and East Africa.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><a href="#services">Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#vision">Vision & Mission</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>VAT & Tax compliant</li>
              <li>Warranty & Returns</li>
              <li>HSE & Compliance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {data.COMPANY_PHONE}</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> {data.COMPANY_EMAIL}</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {data.COMPANY_LOCATION}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-xs text-neutral-500">© {year} VOLONO Engineering PLC. All rights reserved.</div>
      </div>
    </footer>
  );
}
