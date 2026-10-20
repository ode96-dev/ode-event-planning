"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles, SendHorizontal, Award, Shield } from "lucide-react";

type IconType =
  | "success-check"
  | "sparkle"
  | "send"
  | "luxury"
  | "shield"
  | "award";

interface LottieIconProps {
  type: IconType;
  size?: number;
  className?: string;
}

export const LottieIcon: React.FC<LottieIconProps> = ({
  type,
  size = 32,
  className = "",
}) => {
  if (type === "success-check") {
    return (
      <div
        style={{ width: size, height: size }}
        className={`relative flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 ${className}`}
      >
        <motion.svg
          width={size * 0.65}
          height={size * 0.65}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <motion.polyline
            points="20 6 9 17 4 12"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </motion.svg>
        <motion.div
          className="absolute inset-0 rounded-full border border-emerald-400/50"
          initial={{ scale: 0.8, opacity: 0.8 }}
          animate={{ scale: 1.4, opacity: 0 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
        />
      </div>
    );
  }

  if (type === "sparkle") {
    return (
      <motion.div
        animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className={`text-[#d4af37] ${className}`}
      >
        <Sparkles style={{ width: size, height: size }} />
      </motion.div>
    );
  }

  if (type === "send") {
    return (
      <motion.div
        whileHover={{ x: 3, y: -2 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        <SendHorizontal style={{ width: size, height: size }} />
      </motion.div>
    );
  }

  if (type === "shield") {
    return (
      <Shield style={{ width: size, height: size }} className={className} />
    );
  }

  if (type === "award") {
    return (
      <Award style={{ width: size, height: size }} className={className} />
    );
  }

  return (
    <Sparkles style={{ width: size, height: size }} className={className} />
  );
};
