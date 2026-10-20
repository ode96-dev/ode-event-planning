"use client";

import Link from "next/link";
import Image from "next/image";
import { FEATURED_EVENTS } from "@/lib/data";
import { MapPin, ArrowUpRight } from "lucide-react";
import SpringCard from "@/components/animations/spring-card/spring-card";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#997312]/20 selection:text-neutral-950 flex flex-col">
      <main className="grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-950 mb-6 leading-[1.08]">
              Our Portfolio
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              A list of works done by yours truly!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {FEATURED_EVENTS.map((event) => (
              <SpringCard key={event.id} maxTilt={4}>
                <Link
                  href={`/portfolio/${event.id}`}
                  className="group block rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#997312]"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden rounded-3xl bg-neutral-100">
                    <Image
                      src={event.heroImage}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      referrerPolicy="no-referrer"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-950 line-clamp-2 transition-colors group-hover:text-[#997312]">
                      {event.title}
                    </h3>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="w-4 h-4 mt-1.5 shrink-0 text-[#997312] opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 motion-reduce:transition-none"
                    />
                  </div>

                  <div className="mt-1.5 flex items-center justify-between gap-4 text-sm text-neutral-500">
                    <span className="flex items-center gap-1.5 min-w-0">
                      <MapPin
                        aria-hidden="true"
                        className="w-3.5 h-3.5 shrink-0 text-[#997312]"
                      />
                      <span className="truncate">{event.location}</span>
                    </span>
                    <span className="font-mono tabular-nums text-xs shrink-0">
                      {event.year}
                    </span>
                  </div>
                </Link>
              </SpringCard>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
