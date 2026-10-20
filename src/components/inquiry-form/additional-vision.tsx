"use client";
import { AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { ContactDetailsProps } from "./types";

const AdditionalVision = ({
  currentStep,
  errors,
  register,
  errorMessage,
}: ContactDetailsProps) => {
  return (
    <>
      {currentStep === 4 && (
        <motion.div
          key="step-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          <div className="border-b border-neutral-200 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 mt-1 font-serif">
              Additional Information
            </h3>
            <p className="text-neutral-500 text-sm mt-1">
              Share your creative vision
            </p>
          </div>

          <div className="group">
            <textarea
              id="visionText"
              rows={3}
              placeholder="Describe the desired emotional arc, key musical or culinary notes, sensory preferences, or custom staging milestones..."
              {...register?.("visionText")}
              className={`w-full bg-transparent border-0 border-b-2 py-3 px-0 text-base text-neutral-900 placeholder:text-neutral-400 placeholder:italic focus:outline-none focus:ring-0 rounded-none transition-colors resize-none ${
                errors?.visionText
                  ? "border-rose-500 focus:border-rose-600"
                  : "border-neutral-300 focus:border-[#997312]"
              }`}
            />
            {errors?.visionText?.message && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.visionText.message}
              </p>
            )}
          </div>

          {errorMessage && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
};

export default AdditionalVision;
