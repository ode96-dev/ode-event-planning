"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_EVENTS } from "@/lib/data";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { ShowcaseChapter } from "./types";

const StickyCategoryScroll = () => {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const chapters: ShowcaseChapter[] = useMemo(
    () => [
      {
        categoryTitle: "Sovereign Galas & Summits",
        event:
          FEATURED_EVENTS.find((e) => e.id === "luminescence-gala") ||
          FEATURED_EVENTS[0],
      },
      {
        categoryTitle: "Luxury Nuptial Conservatories",
        event:
          FEATURED_EVENTS.find((e) => e.id === "villa-serenata-wedding") ||
          FEATURED_EVENTS[1],
      },
      {
        categoryTitle: "Private VIP Rooftop & Estate Soirées",
        event:
          FEATURED_EVENTS.find((e) => e.id === "skyline-noir-soiree") ||
          FEATURED_EVENTS[2],
      },
      {
        categoryTitle: "Immersive Brand Activations",
        event:
          FEATURED_EVENTS.find(
            (e) => e.id === "prism-art-fashion-activation",
          ) || FEATURED_EVENTS[3],
      },
    ],
    [],
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      chapters.forEach((_, idx) => {
        const el = stepsRef.current[idx];
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => setActiveStep(idx),
          onEnterBack: () => setActiveStep(idx),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [chapters]);

  const currentChapter = chapters[activeStep] || chapters[0];

  return (
    <section
      id="portfolio-section"
      ref={containerRef}
      className="relative w-full bg-white text-neutral-900 py-24 sm:py-36 border-t border-neutral-100"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-4 sm:mb-6 leading-[1.1]">
              Architectural Precision Across Every Scale
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              From historic sovereign banquets to bespoke glass conservatories
              over open water. Each project is engineered with strict
              non-disclosure protocol and single-millimeter spatial execution.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs uppercase tracking-widest rounded-xl transition-all duration-200 shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#997312]"
            >
              <span>View Portfolio</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7 lg:sticky lg:top-28 z-10">
            <div className="relative aspect-16/11 w-full rounded-sm overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentChapter.event.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentChapter.event.heroImage}
                    alt={currentChapter.event.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 750px"
                    referrerPolicy="no-referrer"
                    className="object-cover object-center select-none"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-xs text-white pointer-events-none">
                <div className="space-y-1">
                  <div className="text-white font-medium text-sm sm:text-base">
                    {currentChapter.event.client}
                  </div>
                </div>

                <div className="font-mono text-neutral-200 tabular-nums text-right text-xs">
                  <div>
                    {currentChapter.event.guestCount.toLocaleString()} Attendees
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-32 lg:space-y-48 py-8 lg:py-16">
            {chapters.map((chapter, idx) => {
              const isCurrent = idx === activeStep;

              return (
                <div
                  key={chapter.event.id}
                  ref={(el) => {
                    stepsRef.current[idx] = el;
                  }}
                  aria-current={isCurrent ? "step" : undefined}
                  className={`transition-opacity duration-500 space-y-6 ${
                    isCurrent ? "opacity-100" : "opacity-40 lg:opacity-30"
                  }`}
                >
                  <div className="text-xs uppercase tracking-[0.25em] text-[#997312] font-mono font-semibold">
                    {chapter.categoryTitle}
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 leading-tight">
                    {chapter.event.title}
                  </h3>

                  <div className="text-xs text-neutral-500 font-mono tracking-wide flex flex-wrap items-center gap-x-2">
                    <span>{chapter.event.location}</span>
                    <span aria-hidden="true" className="text-neutral-400">
                      ·
                    </span>
                    <span>
                      {chapter.event.guestCount.toLocaleString()} Guests
                    </span>
                    <span aria-hidden="true" className="text-neutral-400">
                      ·
                    </span>
                    <span>{chapter.event.year}</span>
                  </div>

                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                    {chapter.event.story}
                  </p>

                  <div className="pt-2 text-xs">
                    <span className="text-neutral-500 uppercase tracking-wider block mb-1">
                      Theme
                    </span>
                    <span className="text-neutral-900 font-medium">
                      {chapter.event.lightingTheme}
                    </span>
                  </div>

                  <div className="pt-4">
                    <Link
                      href={`/portfolio/${chapter.event.id}`}
                      className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-950 hover:text-[#997312] transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#997312] rounded-sm"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyCategoryScroll;
