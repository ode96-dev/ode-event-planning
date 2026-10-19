"use client";

import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import { SpringCardProps } from "./type";

const SpringCard = ({
  children,
  className = "",
  onClick,
  maxTilt = 7,
}: SpringCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [{ xys }, api] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 350, friction: 26 },
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * maxTilt;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * maxTilt;

    api.start({ xys: [rotateX, rotateY, 1.015] });
  };

  const handleMouseLeave = () => {
    api.start({ xys: [0, 0, 1] });
  };

  return (
    <animated.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: xys.to(
          (rx, ry, s) =>
            `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(${s}, ${s}, ${s})`,
        ),
      }}
      className={`transform-gpu will-change-transform ${className}`}
    >
      {children}
    </animated.div>
  );
};

export default SpringCard;
