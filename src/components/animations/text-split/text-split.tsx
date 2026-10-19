"use client";

import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

interface TextSplitProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export const TextSplit: React.FC<TextSplitProps> = ({
  text,
  className = "",
  delay = 200,
  stagger: staggerProp,
  staggerDelay = 35,
  as: Component = "span",
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const actualStagger = staggerProp ?? staggerDelay;

  useEffect(() => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll(".anime-letter");
    if (letters.length === 0) return;

    const animation = animate(letters, {
      translateY: ["110%", "0%"],
      opacity: [0, 1],
      rotateZ: [4, 0],
      duration: 850,
      delay: stagger(actualStagger, { start: delay }),
      ease: "outCubic",
    });

    return () => {
      try {
        animation.pause();
      } catch (e) {
        console.log(e);
      }
    };
  }, [text, delay, actualStagger]);

  const words = text.split(" ");

  return (
    <Component
      ref={(element: HTMLElement | null) => {
        containerRef.current = element;
      }}
      className={`inline-block overflow-hidden ${className}`}
    >
      {words.map((word, wordIdx) => (
        <span
          key={wordIdx}
          className="inline-block whitespace-nowrap mr-[0.28em] overflow-hidden align-bottom"
        >
          {word.split("").map((char, charIdx) => (
            <span
              key={charIdx}
              className="anime-letter inline-block transform-gpu will-change-transform opacity-0"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
};
