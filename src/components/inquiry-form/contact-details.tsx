"use client";

import { AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { ContactDetailsProps } from "./types";

const ContactDetails = ({
  currentStep,
  register,
  errors,
}: ContactDetailsProps) => {
  return (
    <>
      {currentStep === 1 && (
        <motion.div
          key="step-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          <div className="border-b border-neutral-200 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mt-1 font-serif">
              Contact Details
            </h3>
            <p className="text-neutral-500 text-sm mt-1">
              Provide direct communication channels for confidential event
              discussions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="group">
              <label
                htmlFor="fullName"
                className="text-xs font-semibold uppercase tracking-widest text-[#997312] font-mono block mb-1"
              >
                Your Full Name *
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Catherine de Saint-Germain"
                {...(register?.("fullName") ?? {})}
                className={`w-full bg-transparent border-0 border-b-2 py-3.5 px-0 text-base sm:text-lg text-neutral-900 placeholder:text-neutral-400 placeholder:italic focus:outline-none focus:ring-0 rounded-none transition-colors ${
                  errors?.fullName
                    ? "border-rose-500 focus:border-rose-600"
                    : "border-neutral-300 focus:border-[#997312]"
                }`}
              />
              {errors?.fullName && (
                <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {String(errors.fullName?.message)}
                </p>
              )}
            </div>

            <div className="group">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-widest text-[#997312] font-mono block mb-1"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g. catherine@sovereign-group.com"
                {...register?.("email")}
                className={`w-full bg-transparent border-0 border-b-2 py-3.5 px-0 text-base sm:text-lg text-neutral-900 placeholder:text-neutral-400 placeholder:italic focus:outline-none focus:ring-0 rounded-none transition-colors ${
                  errors?.email
                    ? "border-rose-500 focus:border-rose-600"
                    : "border-neutral-300 focus:border-[#997312]"
                }`}
              />
              {errors?.email && (
                <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {String(errors.email.message)}
                </p>
              )}
            </div>

            <div className="group">
              <label
                htmlFor="phone"
                className="text-xs font-semibold uppercase tracking-widest text-[#997312] font-mono block mb-1"
              >
                Direct Phone / WhatsApp *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="e.g. +254 712 345 678 or +1 (555) 234-8900"
                {...register?.("phone")}
                className={`w-full bg-transparent border-0 border-b-2 py-3.5 px-0 text-base sm:text-lg text-neutral-900 placeholder:text-neutral-400 placeholder:italic focus:outline-none focus:ring-0 rounded-none transition-colors ${
                  errors?.phone
                    ? "border-rose-500 focus:border-rose-600"
                    : "border-neutral-300 focus:border-[#997312]"
                }`}
              />
              {errors?.phone && (
                <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {String(errors.phone.message)}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ContactDetails;
