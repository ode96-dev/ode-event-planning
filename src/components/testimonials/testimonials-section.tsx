"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import { Star, Quote, ChevronRight, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { supplementaryItems, testimonials } from "./testimonials";
import { TestimonialItem } from "./types";

const COPIES = 3;

const MARQUEE_SPEED = 60;
const MARQUEE_EASE = 6;
const MARQUEE_DIRECTIONS = [-1, 1];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsStripRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const floatingBadge1Ref = useRef<HTMLDivElement>(null);
  const floatingBadge2Ref = useRef<HTMLDivElement>(null);

  const hoverRef = useRef(false);
  const modalOpenRef = useRef(false);

  const [selectedStory, setSelectedStory] = useState<TestimonialItem | null>(
    null,
  );

  const columns = useMemo(() => testimonials, []);

  const allTestimonials = useMemo(() => {
    const baseItems: TestimonialItem[] = [];
    columns.forEach((col) => {
      col.testimonials.forEach((t, i) => {
        baseItems.push({
          id: `${col.company.toLowerCase()}-${i}`,
          quote: t.quote,
          author: t.author,
          role: t.role,
          avatar: t.avatar,
          company: col.company,
          category: col.category,
          rating: t.rating ?? 5,
          verified: true,
        });
      });
    });

    return [...baseItems, ...supplementaryItems];
  }, [columns]);

  const row1Items = useMemo(() => {
    const half = Math.ceil(allTestimonials.length / 2);
    return allTestimonials.slice(0, half);
  }, [allTestimonials]);

  const row2Items = useMemo(() => {
    const half = Math.ceil(allTestimonials.length / 2);
    return allTestimonials.slice(half);
  }, [allTestimonials]);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 35, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      if (statsStripRef.current) {
        gsap.fromTo(
          statsStripRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: statsStripRef.current,
              start: "top 85%",
            },
          },
        );
      }

      if (track1Ref.current && track2Ref.current) {
        gsap.to(track1Ref.current, {
          x: -120,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(track2Ref.current, {
          x: 120,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (floatingBadge1Ref.current) {
        gsap.to(floatingBadge1Ref.current, {
          y: -90,
          rotate: 6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }

      if (floatingBadge2Ref.current) {
        gsap.to(floatingBadge2Ref.current, {
          y: -140,
          rotate: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    modalOpenRef.current = selectedStory !== null;
  }, [selectedStory]);

  useEffect(() => {
    const els = [track1Ref.current, track2Ref.current];
    if (els.some((el) => !el)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    type Lane = {
      el: HTMLDivElement;
      dir: number;
      pos: number;
      loop: number;
      width: number;
      wrap: (v: number) => number;
      setX: (v: number) => void;
    };

    const lanes: Lane[] = (els as HTMLDivElement[]).map((el, i) => ({
      el,
      dir: MARQUEE_DIRECTIONS[i] ?? 1,
      pos: 0,
      loop: 0,
      width: 1,
      wrap: (v) => v,
      setX: gsap.quickSetter(el, "xPercent") as (v: number) => void,
    }));

    const measure = () => {
      lanes.forEach((lane) => {
        const perCopy = lane.el.children.length / COPIES;
        const first = lane.el.children[0] as HTMLElement | undefined;
        const next = lane.el.children[perCopy] as HTMLElement | undefined;
        if (!first || !next) return;

        const isFirstMeasure = lane.loop === 0;
        const loop = next.offsetLeft - first.offsetLeft;

        lane.loop = loop;
        lane.width = lane.el.offsetWidth;
        lane.wrap = gsap.utils.wrap(-loop * 1.5, -loop * 0.5);
        lane.pos = isFirstMeasure ? -loop : lane.wrap(lane.pos);
      });
    };

    measure();
    const resizeObserver = new ResizeObserver(measure);
    lanes.forEach((lane) => resizeObserver.observe(lane.el));

    let speed = 1;

    const tick = (_time: number, deltaTime: number) => {
      const dt = Math.min(deltaTime, 100) / 1000;
      const target = hoverRef.current || modalOpenRef.current ? 0 : 1;

      speed += (target - speed) * (1 - Math.exp(-MARQUEE_EASE * dt));
      if (speed < 0.001) return;

      lanes.forEach((lane) => {
        if (!lane.loop) return;
        lane.pos = lane.wrap(lane.pos + lane.dir * MARQUEE_SPEED * speed * dt);
        lane.setX((lane.pos / lane.width) * 100);
      });
    };

    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      resizeObserver.disconnect();
    };
  }, []);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative w-full bg-white text-neutral-900 py-24 sm:py-36 border-t border-neutral-100"
    >
      <h2 className="text-center text-3xl sm:text-5xl font-bold tracking-tight text-gray-500 mb-6 leading-[1.08]">
        Endorsements & Testimonials
      </h2>

      <div
        className="relative w-full overflow-hidden py-4 select-none"
        onMouseEnter={() => {
          hoverRef.current = true;
        }}
        onMouseLeave={() => {
          hoverRef.current = false;
        }}
      >
        <div className="overflow-hidden mb-5 flex">
          <div
            ref={track1Ref}
            className="flex gap-5 will-change-transform py-2 pl-4"
            style={{ display: "flex", width: "max-content" }}
          >
            {[...row1Items, ...row1Items, ...row1Items].map((t, idx) => (
              <div
                key={`r1-${idx}`}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                onClick={() => setSelectedStory(t)}
                className="w-72.5 sm:w-90 shrink-0 p-5 sm:p-6 rounded-2xl bg-[#14141C] border border-white/10 hover:border-white/25 transition-[border-color,box-shadow] duration-200 cursor-pointer shadow-lg group relative overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  transition:
                    "transform 0.15s ease-out, border-color 0.2s ease",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.08) 0%, transparent 70%)",
                  }}
                />

                <div className="flex items-center justify-center mb-3.5">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-bold text-white tracking-tight">
                      {t.company}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1 mb-2.5 text-amber-400">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal min-h-14.5">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-3.5 mt-3.5 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-800 shrink-0 ring-1 ring-white/15">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white flex items-center gap-1">
                      {t.author}
                    </span>
                    <span className="text-[10px] text-white/50">{t.role}</span>
                  </div>
                  <span className="text-[10px] text-white/40 ml-auto font-mono uppercase tracking-wider group-hover:text-white/80 transition-colors flex items-center gap-0.5">
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden flex">
          <div
            ref={track2Ref}
            className="flex gap-5 will-change-transform py-2 pl-4"
            style={{ display: "flex", width: "max-content" }}
          >
            {[...row2Items, ...row2Items, ...row2Items].map((t, idx) => (
              <div
                key={`r2-${idx}`}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                onClick={() => setSelectedStory(t)}
                className="w-72.5 sm:w-90 shrink-0 p-5 sm:p-6 rounded-2xl bg-[#14141C] border border-white/10 hover:border-white/25 transition-[border-color,box-shadow] duration-200 cursor-pointer shadow-lg group relative overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                  transition:
                    "transform 0.15s ease-out, border-color 0.2s ease",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.08) 0%, transparent 70%)",
                  }}
                />

                <div className="flex items-center justify-center mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white tracking-tight">
                      {t.company}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1 mb-2.5 text-amber-400">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal min-h-14.5">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-3.5 mt-3.5 border-t border-white/5">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-800 shrink-0 ring-1 ring-white/15">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white flex items-center gap-1">
                      {t.author}
                    </span>
                    <span className="text-[10px] text-white/50">{t.role}</span>
                  </div>
                  <span className="text-[10px] text-white/40 ml-auto font-mono uppercase tracking-wider group-hover:text-white/80 transition-colors flex items-center gap-0.5">
                    <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="w-full max-w-lg p-6 sm:p-8 rounded-xl bg-[#14141C] border border-white/15 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Quote
              className="absolute -top-4 -left-3 w-40 h-40 text-white/5 pointer-events-none select-none"
              aria-hidden="true"
            />

            <button
              onClick={() => setSelectedStory(null)}
              className="cursor-pointer absolute top-5 right-5 z-10 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors text-sm"
              aria-label="Close dialog"
            >
              <X className="p-1" />
            </button>

            <div className="relative z-10 pt-6">
              <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6 font-normal">
                &ldquo;{selectedStory.quote}&rdquo;
              </p>

              <div className="flex flex-col justify-center items-center gap-4 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-800 ring-2 ring-white/15 shrink-0">
                  <Image
                    src={selectedStory.avatar}
                    alt={selectedStory.author}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-sm sm:text-base font-bold text-white flex items-center justify-center gap-1.5">
                    {selectedStory.author}
                  </h4>
                  <p className="text-xs text-white/60">
                    {selectedStory.role} &bull; {selectedStory.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
