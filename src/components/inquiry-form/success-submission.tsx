"use client";

import { motion } from "motion/react";
import React from "react";
import { LottieIcon } from "./lottie-icon";
import { SuccessSubmissionProps } from "./types";

const SuccessSubmission = ({
  apiResponse,
  handleResetForm,
}: SuccessSubmissionProps) => {
  return (
    <motion.div
      key="success-screen"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="py-10 flex flex-col items-center text-center space-y-6"
    >
      <LottieIcon type="success-check" size={72} />

      <div className="space-y-2">
        <p className="text-sm sm:text-base text-neutral-600 max-w-lg mx-auto leading-relaxed">
          {apiResponse?.message ||
            "A confirmation receipt has been dispatched to your email. Our Principal Creative Producer will contact you within 12 business hours."}
        </p>
      </div>

      <button
        type="button"
        onClick={handleResetForm}
        className="px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-xl transition-colors cursor-pointer"
      >
        Submit another request
      </button>
    </motion.div>
  );
};

export default SuccessSubmission;
