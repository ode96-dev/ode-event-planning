"use client";
import React from "react";
import { ContactDetailsProps } from "./types";
import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";

const EventRequirements = ({
  currentStep,
  register,
  errors,
  selectedGuestCount,
}: ContactDetailsProps) => {
  return (
    <>
      {currentStep === 2 && (
        <motion.div
          key="step-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          <div className="border-b border-neutral-200 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mt-1 font-serif">
              Event Requirements
            </h3>
            <p className="text-neutral-500 text-sm mt-1">
              Outline the scale, and atmosphere of your event.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
            <div className="group">
              <label
                htmlFor="eventType"
                className="text-xs font-semibold uppercase tracking-widest text-[#997312] font-mono block mb-1"
              >
                Event Classification *
              </label>
              <select
                id="eventType"
                {...register?.("eventType")}
                className="w-full bg-transparent border-0 border-b-2 border-neutral-300 py-3.5 px-0 text-base text-neutral-900 focus:outline-none focus:border-[#997312] focus:ring-0 rounded-none transition-colors cursor-pointer"
              >
                <option value="corporate_gala">
                  High-Impact Corporate Gala / Summit
                </option>
                <option value="luxury_wedding">
                  Luxury Destination Wedding
                </option>
                <option value="private_soiree">
                  Private VIP Rooftop / Estate Soirée
                </option>
                <option value="brand_activation">
                  Fashion / Tech Brand Activation
                </option>
                <option value="charity_benefit">
                  Philanthropic Benefactor Gala
                </option>
              </select>
            </div>

            <div className="group">
              <label
                htmlFor="estimatedDate"
                className="text-xs font-semibold uppercase tracking-widest text-[#997312] font-mono block mb-1"
              >
                Target Date or Season *
              </label>
              <input
                id="estimatedDate"
                type="text"
                placeholder="e.g. December 2026 or Spring 2027"
                {...register?.("estimatedDate")}
                className={`w-full bg-transparent border-0 border-b-2 py-3.5 px-0 text-base text-neutral-900 placeholder:text-neutral-400 placeholder:italic focus:outline-none focus:ring-0 rounded-none transition-colors ${
                  errors?.estimatedDate
                    ? "border-rose-500 focus:border-rose-600"
                    : "border-neutral-300 focus:border-[#997312]"
                }`}
              />
              {errors?.estimatedDate && (
                <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.estimatedDate.message}
                </p>
              )}
            </div>

            <div className="group">
              <label
                htmlFor="guestCount"
                className="text-xs font-semibold uppercase tracking-widest text-[#997312] font-mono block mb-1"
              >
                Estimated Guest Scale ({selectedGuestCount} Attendees) *
              </label>
              <input
                id="guestCount"
                type="number"
                min={10}
                max={5000}
                step={10}
                {...register?.("guestCount", { valueAsNumber: true })}
                className={`w-full bg-transparent border-0 border-b-2 py-3.5 px-0 text-base text-neutral-900 font-mono focus:outline-none focus:ring-0 rounded-none transition-colors ${
                  errors?.guestCount
                    ? "border-rose-500 focus:border-rose-600"
                    : "border-neutral-300 focus:border-[#997312]"
                }`}
              />
              {errors?.guestCount && (
                <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.guestCount.message}
                </p>
              )}
            </div>

            <div className="group">
              <label
                htmlFor="venuePreference"
                className="text-xs font-semibold uppercase tracking-widest text-[#997312] font-mono block mb-1"
              >
                Atmospheric Venue Preference *
              </label>
              <select
                id="venuePreference"
                {...register?.("venuePreference")}
                className="w-full bg-transparent border-0 border-b-2 border-neutral-300 py-3.5 px-0 text-base text-neutral-900 focus:outline-none focus:border-[#997312] focus:ring-0 rounded-none transition-colors cursor-pointer"
              >
                <option value="indoor_ballroom">
                  Grand Architectural Ballroom
                </option>
                <option value="open_air_estate">
                  Private Estate & Open Vineyard
                </option>
                <option value="destination">
                  International Luxury Destination
                </option>
                <option value="waterfront">
                  Waterfront / Mega-Yacht Charter
                </option>
                <option value="undecided">Undecided / Sourcing Needed</option>
              </select>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default EventRequirements;
