import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const Bone = ({
  className,
  ...props
}: React.ComponentProps<typeof Skeleton>) => (
  <Skeleton
    aria-hidden="true"
    className={cn("bg-neutral-200/70 rounded-sm", className)}
    {...props}
  />
);

const Loading = () => {
  return (
    <div
      role="status"
      aria-busy="true"
      aria-live="polite"
      className="min-h-screen bg-white text-neutral-900 selection:bg-[#997312]/20 selection:text-neutral-950 flex flex-col"
    >
      <span className="sr-only">Loading event details…</span>

      <main className="grow pt-28 pb-24">
        <section className="relative w-full min-h-[60vh] flex items-end overflow-hidden pb-16 pt-20">
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <Bone className="absolute inset-0 rounded-none bg-neutral-100" />
            <div className="absolute inset-0 bg-linear-to-t from-white via-white/85 to-white/40" />
            <div className="absolute inset-0 bg-radial from-transparent via-white/30 to-white/90" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
            <div className="max-w-4xl mb-6 space-y-3">
              <Bone className="h-9 sm:h-14 md:h-16 w-full" />
              <Bone className="h-9 sm:h-14 md:h-16 w-2/3" />
            </div>

            <div className="max-w-3xl mb-8 space-y-2.5">
              <Bone className="h-4 sm:h-5 w-full" />
              <Bone className="h-4 sm:h-5 w-4/5" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5 sm:p-6 bg-white/90 backdrop-blur-xl border border-neutral-200/90 rounded-sm max-w-5xl">
              {[0, 1, 2].map((i) => (
                <div key={i} className="space-y-2">
                  <Bone className="h-2.5 w-24" />
                  <Bone className="h-4 w-32 max-w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 sm:px-8 mt-10 space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <Bone className="h-7 sm:h-10 w-full" />
                <Bone className="h-7 sm:h-10 w-3/5" />
              </div>

              <div className="space-y-3">
                <Bone className="h-4 sm:h-5 w-full" />
                <Bone className="h-4 sm:h-5 w-full" />
                <Bone className="h-4 sm:h-5 w-11/12" />
                <Bone className="h-4 sm:h-5 w-3/4" />
              </div>

              <div className="space-y-3">
                <Bone className="h-4 sm:h-5 w-full" />
                <Bone className="h-4 sm:h-5 w-5/6" />
              </div>

              <div className="space-y-3 mt-8">
                <Bone className="h-3 w-52 bg-[#997312]/20" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="space-y-2">
                      <Bone className="h-3 w-24" />
                      <Bone className="h-3.5 w-40 max-w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="p-6 space-y-2">
                    <Bone className="h-3 w-28" />
                    <Bone className="h-8 sm:h-9 w-36" />
                  </div>
                ))}
              </div>

              <div className="p-6 space-y-4">
                <Bone className="h-3 w-40 bg-[#997312]/20" />
                <ul className="space-y-3">
                  {["w-11/12", "w-4/5", "w-full", "w-3/4", "w-5/6"].map(
                    (width, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Bone className="w-4 h-4 rounded-full shrink-0 mt-0.5" />
                        <Bone className={cn("h-4", width)} />
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8 pt-12 border-t border-neutral-200">
            <Bone className="h-7 sm:h-9 w-full max-w-xl" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[0, 1].map((i) => (
                <Bone
                  key={i}
                  className="aspect-16/10 w-full rounded-3xl border border-neutral-200/90 bg-neutral-100 shadow-md"
                />
              ))}
            </div>
          </div>

          <div className="pt-16 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 flex items-center gap-4">
              <Bone className="w-10 h-10 rounded-full shrink-0" />
              <div className="space-y-2 flex-1">
                <Bone className="h-2.5 w-24" />
                <Bone className="h-4 w-3/4" />
              </div>
            </div>

            <div className="p-6 flex items-center justify-between gap-4">
              <div className="space-y-2 flex-1 flex flex-col items-end">
                <Bone className="h-2.5 w-20" />
                <Bone className="h-4 w-3/4" />
              </div>
              <Bone className="w-10 h-10 rounded-full shrink-0" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Loading;
