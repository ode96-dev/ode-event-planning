"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8f9fa] text-neutral-600 py-16 sm:py-20 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold tracking-[0.25em] text-neutral-950 uppercase hover:text-[#997312] transition-colors inline-block"
            >
              OdeEvents
            </Link>
            <p className="text-xs text-neutral-600 leading-relaxed max-w-xs font-normal">
              We architect turnkey high-profile galas, sovereign summits, luxury
              destination nuptials, across Kenya.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-950 font-semibold mb-4 font-mono">
              Portfolio
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-600 flex flex-col">
              <Link
                href="/portfolio"
                className="hover:text-neutral-950 transition-colors"
              >
                Complete Case Directory
              </Link>
              <Link
                href="/portfolio/luminescence-gala"
                className="hover:text-neutral-950 transition-colors truncate"
              >
                Luminescence Sovereign Gala
              </Link>
              <Link
                href="/portfolio/villa-serenata-wedding"
                className="hover:text-neutral-950 transition-colors truncate"
              >
                Villa Serenata Lake Como
              </Link>
              <Link
                href="/portfolio/skyline-noir-soiree"
                className="hover:text-neutral-950 transition-colors truncate"
              >
                Skyline Noir Penthouse
              </Link>
              <Link
                href="/portfolio/prism-art-fashion-activation"
                className="hover:text-neutral-950 transition-colors truncate"
              >
                Prism Mirage Venice Runway
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-950 font-semibold mb-4 font-mono">
              Principal Studios
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-600">
              <p>Tatu City</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-neutral-950 font-semibold mb-4 font-mono">
              Direct Concierge
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-600">
              <p>Executive: concierge@example.com</p>
              <p>VIP Line: +254 700 000 000</p>
              <p className="text-[11px] text-neutral-500 pt-2 leading-relaxed">
                Strict non-disclosure agreements (NDAs) enforced on all private
                client commissions.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>© 2026 OdeEvents. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>Confidentiality Guaranteed</span>
            <span aria-hidden="true">·</span>
            <span>Terms of Engagement</span>
            <span aria-hidden="true">·</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
