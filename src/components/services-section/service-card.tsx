"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { MagnetButton } from "../animations/magnet-button/magnet-button";
import { ServiceCardProps } from "./types";

const ServiceCard = ({ service, onInquireClick }: ServiceCardProps) => {
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-md border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm`}
    >
      <div>
        <h3 className="text-xl font-bold tracking-tight text-neutral-900">
          {service.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          {service.description}
        </p>

        <div className="my-6 h-px w-full bg-neutral-100" />

        <div>
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
            What&apos;s Included
          </div>
          <ul className="space-y-3">
            {service.scopePoints.map((pt, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-neutral-700"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#997312]" />
                <span className="leading-snug">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-4">
        <MagnetButton
          onClick={() => {
            if (onInquireClick) {
              onInquireClick();
            } else {
              const el = document.getElementById("inquiry-section");
              el?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          strength={0.2}
          className={`group/btn flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 px-4 text-sm font-semibold transition-all duration-200 bg-neutral-900 text-white hover:bg-[#997312] shadow-md hover:shadow-lg hover:shadow-[#997312]/20`}
        >
          <span>Get Started</span>
        </MagnetButton>
      </div>
    </div>
  );
};

export default ServiceCard;
