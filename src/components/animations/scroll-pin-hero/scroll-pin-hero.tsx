"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollPinHeroProps } from "./types";
import { MagnetButton } from "../magnet-button/magnet-button";
import { TextSplit } from "../text-split/text-split";

const ScrollPinHero = ({
  onExploreClick,
  onInquireClick,
}: ScrollPinHeroProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !sectionRef.current ||
      !mediaContainerRef.current ||
      !contentRef.current
    )
      return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=130%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      tl.to(
        mediaContainerRef.current,
        {
          scale: 1.08,
          borderRadius: "0px",
          ease: "power2.out",
        },
        0,
      )
        .to(
          contentRef.current,
          {
            y: -60,
            opacity: 0.9,
            ease: "power1.out",
          },
          0,
        )
        .to(
          statsRef.current,
          {
            y: -20,
            opacity: 1,
            ease: "power2.out",
          },
          0.2,
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-white text-neutral-900 pt-20"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <div
          ref={mediaContainerRef}
          className="relative w-full h-full transform-gpu will-change-transform transition-all"
        >
          <Image
            src="/images/hero_luxury_gala_1791351046164.jpg"
            alt="OdeEvents"
            fill
            priority
            referrerPolicy="no-referrer"
            className="object-cover object-center opacity-60 select-none"
          />
          <div className="absolute inset-0 bg-linear-to-t from-white/90 via-white/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-white/50 pointer-events-none" />
        </div>
      </div>

      <div className="h-28" />

      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto flex flex-col items-center text-center"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[1.05] text-neutral-950 max-w-5xl mx-auto mb-8">
          {" "}
          <TextSplit
            text="Crafting Extraordinary Events"
            delay={150}
            stagger={25}
          />
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto font-normal leading-relaxed mb-10 text-balance">
          {" "}
          We architect turnkey high-profile galas, sovereign summits, luxury
          destination nuptials, across Kenya.{" "}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <MagnetButton
            onClick={() => {
              if (onInquireClick) {
                onInquireClick();
              } else {
                const el = document.getElementById("inquiry-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group px-7 py-4 bg-neutral-950 text-white hover:bg-neutral-800 font-semibold text-sm tracking-wide rounded-lg shadow-xl transition-all duration-300 flex items-center gap-3 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowDownRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </MagnetButton>

          <MagnetButton
            onClick={() => {
              if (onExploreClick) {
                onExploreClick();
              } else {
                const el = document.getElementById("portfolio-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            strength={0.2}
            className="px-6 py-4 bg-white/70 backdrop-blur-sm hover:bg-white/90 text-neutral-900 border border-neutral-300 font-medium text-sm tracking-wide rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <span>Explore Works</span>
          </MagnetButton>
        </div>
      </div>
    </div>
  );
};

export default ScrollPinHero;
