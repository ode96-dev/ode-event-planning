"use client";

import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

interface MagnetButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const MagnetButton: React.FC<MagnetButtonProps> = ({
  children,
  className = "",
  onClick,
  strength = 0.35,
  type = "button",
  disabled = false,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { mass: 0.8, tension: 280, friction: 22 },
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    api.start({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    api.start({ x: 0, y: 0 });
  };

  return (
    <animated.button
      ref={buttonRef}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: x.to((xVal) => `translate3d(${xVal}px, ${y.get()}px, 0)`),
      }}
      className={`relative inline-flex items-center justify-center transition-shadow cursor-pointer select-none ${className}`}
    >
      {children}
    </animated.button>
  );
};
