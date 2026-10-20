import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FEATURED_EVENTS } from "@/lib/data";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

interface EventDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return FEATURED_EVENTS.map((event) => ({
    slug: event.id,
  }));
}

export default async function EventDetailPage({
  params,
}: EventDetailPageProps) {
  const { slug } = await params;
  const event = FEATURED_EVENTS.find((e) => e.id === slug);

  if (!event) {
    notFound();
  }

  const currentIndex = FEATURED_EVENTS.findIndex((e) => e.id === slug);
  const prevEvent =
    currentIndex > 0
      ? FEATURED_EVENTS[currentIndex - 1]
      : FEATURED_EVENTS[FEATURED_EVENTS.length - 1];
  const nextEvent =
    currentIndex < FEATURED_EVENTS.length - 1
      ? FEATURED_EVENTS[currentIndex + 1]
      : FEATURED_EVENTS[0];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#997312]/20 selection:text-neutral-950 flex flex-col">
      <main className="grow pt-14 pb-24">
        <section className="relative w-full min-h-[60vh] flex items-end overflow-hidden pb-16 pt-10">
          <div className="absolute inset-0 z-0">
            <Image
              src={event.heroImage}
              alt={event.title}
              fill
              priority
              referrerPolicy="no-referrer"
              className="object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-white via-white/85 to-white/40" />
            <div className="absolute inset-0 bg-radial from-transparent via-white/30 to-white/90" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 max-w-4xl mb-6 leading-[1.08]">
              {event.title}
            </h1>

            <p className="text-base sm:text-xl text-neutral-700 max-w-3xl leading-relaxed font-normal mb-8 text-balance">
              {event.tagline}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5 sm:p-6 bg-white/90 backdrop-blur-xl border border-neutral-200/90 rounded-sm max-w-5xl shadow-xl">
              <div>
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider mb-1 font-mono">
                  Commissioned By
                </div>
                <div className="text-sm font-semibold text-neutral-950 truncate">
                  {event.client}
                </div>
              </div>
              <div>
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider mb-1 font-mono">
                  Destination
                </div>
                <div className="text-sm font-semibold text-neutral-950 truncate">
                  {event.location}
                </div>
              </div>
              <div>
                <div className="text-[11px] text-neutral-500 uppercase tracking-wider mb-1 font-mono">
                  Guest Scale
                </div>
                <div className="text-sm font-mono font-bold text-neutral-950">
                  {event.guestCount.toLocaleString()} Attendees
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-10 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-950 leading-tight">
                Spatial Scenography & Creative Vision
              </h2>
              <div className="text-neutral-700 space-y-4 text-base sm:text-lg leading-relaxed font-normal">
                <p>{event.story}</p>
                <p>
                  Every element—from acoustic soundproofing to the synchronicity
                  between kinetic chandelier movements and the keynote
                  address—was orchestrated by a dedicated AURA Production Unit.
                </p>
              </div>

              <div className="space-y-3 mt-8">
                <div className="text-xs uppercase tracking-widest text-[#997312] font-semibold font-mono">
                  Atmospheric Calibration Specs
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-neutral-700 pt-2">
                  <div>
                    <span className="text-neutral-500 block mb-0.5">
                      Lighting Palette:
                    </span>
                    <strong className="text-neutral-950">
                      {event.lightingTheme}
                    </strong>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-0.5">
                      Duration:
                    </span>
                    <strong className="text-neutral-950 font-mono">
                      {event.durationHours} Hours Active Execution
                    </strong>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-0.5">
                      Year of Execution:
                    </span>
                    <strong className="text-neutral-950 font-mono">
                      {event.year}
                    </strong>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-0.5">
                      Compliance:
                    </span>
                    <strong className="text-emerald-700 font-mono">
                      100% Strict NDA Observed
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {event.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-6 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1 font-mono">
                        {metric.label}
                      </div>
                      <div className="text-2xl sm:text-3xl font-mono font-bold text-neutral-950 tabular-nums">
                        {metric.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xs uppercase tracking-widest text-[#997312] font-semibold font-mono">
                  Delivered Architectures
                </h3>
                <ul className="space-y-3 text-sm text-neutral-800">
                  {event.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#997312] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8 pt-12 border-t border-neutral-200">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
                Architectural Photography & Spatial Details
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.galleryImages.map((imgSrc, i) => (
                <div
                  key={i}
                  className="relative aspect-16/10 w-full rounded-3xl overflow-hidden border border-neutral-200/90 group bg-neutral-100 shadow-md"
                >
                  <Image
                    src={imgSrc}
                    alt={`${event.title} perspective ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    referrerPolicy="no-referrer"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 text-xs font-mono text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/20">
                    {event.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-16 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href={`/portfolio/${prevEvent.id}`}
              className="p-6 bg-white hover:bg-neutral-50 transition-all duration-300 group flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-neutral-100 group-hover:bg-neutral-950 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <div className="truncate">
                <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-mono">
                  Previous Case
                </div>
                <div className="text-sm sm:text-base font-bold text-neutral-950 truncate group-hover:text-[#997312] transition-colors">
                  {prevEvent.title}
                </div>
              </div>
            </Link>

            <Link
              href={`/portfolio/${nextEvent.id}`}
              className="p-6 bg-white hover:bg-neutral-50 transition-all duration-300 group flex items-center justify-between gap-4 text-right"
            >
              <div className="truncate">
                <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-mono">
                  Next Case
                </div>
                <div className="text-sm sm:text-base font-bold text-neutral-950 truncate group-hover:text-[#997312] transition-colors">
                  {nextEvent.title}
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-neutral-100 group-hover:bg-neutral-950 group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
