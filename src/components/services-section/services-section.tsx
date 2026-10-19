"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "@/lib/data";
import { useLenis } from "../providers/smooth-scroll-provider";
import SectionHeading from "./section-heading";
import { STEP_VH } from "./helpers/helpers";
import ServiceCard from "./service-card";

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const lenis = useLenis();
  const total = SERVICES.length;

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const idx = Math.min(total - 1, Math.floor(self.progress * total));
          setActiveIndex(idx);
        },
      });
      return () => st.kill();
    });

    return () => mm.revert();
  }, [total]);

  const scrollToInquiry = () => {
    if (lenis) {
      lenis.scrollTo("#inquiry-section", { duration: 1.5 });
    } else {
      document
        .getElementById("inquiry-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToStep = (idx: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const distance = el.offsetHeight - window.innerHeight;
    const y = top + ((idx + 0.5) / total) * distance;

    if (lenis) {
      lenis.scrollTo(y, { duration: 1.2 });
    } else {
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="services-section"
      ref={sectionRef}
      className="relative w-full overflow-x-clip border-t border-neutral-200/80 bg-[#fafafb] text-neutral-900 lg:h-(--services-height)"
      style={
        {
          "--services-height": `calc(100vh + ${total * STEP_VH}vh)`,
        } as React.CSSProperties
      }
    >
      <div className="sticky top-0 hidden h-screen flex-col justify-center px-8 xl:px-12 lg:flex">
        <div className="mx-auto w-full max-w-7xl">
          <SectionHeading />

          <div className="mt-14 grid grid-cols-2 items-center gap-x-24 xl:mt-16">
            <div>
              <ul className="space-y-1">
                {SERVICES.map((srv, idx) => {
                  const active = idx === activeIndex;
                  return (
                    <li key={srv.id}>
                      <button
                        type="button"
                        onClick={() => goToStep(idx)}
                        aria-current={active ? "step" : undefined}
                        aria-expanded={active}
                        className="group relative block w-full cursor-pointer py-4 pl-7 pr-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#997312]"
                      >
                        <span
                          aria-hidden="true"
                          className="absolute inset-y-0 left-0 w-0.75 rounded-full bg-neutral-200"
                        />
                        <span
                          aria-hidden="true"
                          className={`absolute inset-y-0 left-0 w-0.75 origin-top rounded-full bg-[#997312] transition-transform duration-500 ease-out motion-reduce:transition-none ${
                            active ? "scale-y-100" : "scale-y-0"
                          }`}
                        />

                        <span
                          className={`block text-2xl font-medium leading-snug tracking-tight transition-colors duration-300 xl:text-3xl ${
                            active
                              ? "text-neutral-950"
                              : "text-neutral-500 group-hover:text-neutral-700"
                          }`}
                        >
                          {srv.title}
                        </span>

                        <span
                          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none ${
                            active
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <span className="overflow-hidden">
                            <span className="block max-w-lg pt-3 text-base leading-relaxed text-neutral-600 xl:text-lg">
                              {srv.description}
                            </span>
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative w-full max-w-xl justify-self-end">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-10 top-1/2 h-112 w-md -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#997312]/8"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-10 top-1/2 h-76 w-76 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#997312]/12"
              />

              <div className="relative z-10 grid">
                {SERVICES.map((srv, idx) => {
                  const active = idx === activeIndex;
                  const position = active
                    ? "translate-y-0 opacity-100"
                    : idx < activeIndex
                      ? "pointer-events-none -translate-y-8 opacity-0"
                      : "pointer-events-none translate-y-8 opacity-0";
                  return (
                    <div
                      key={srv.id}
                      aria-hidden={!active}
                      className={`col-start-1 row-start-1 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${position}`}
                    >
                      <ServiceCard
                        service={srv}
                        index={idx}
                        onInquireClick={scrollToInquiry}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-16 sm:px-8 lg:hidden">
        <SectionHeading />

        <div className="mx-auto mt-12 max-w-xl space-y-14">
          {SERVICES.map((srv, idx) => (
            <article key={srv.id}>
              <div className="border-l-[3px] border-[#997312] pl-5">
                <h3 className="text-2xl font-medium leading-snug tracking-tight text-neutral-950">
                  {srv.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">
                  {srv.description}
                </p>
              </div>
              <div className="mt-6">
                <ServiceCard
                  service={srv}
                  index={idx}
                  onInquireClick={scrollToInquiry}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
