"use client";

import React, { useState, useEffect, useRef } from "react";

interface ScrollingCharacterRevealProps {
  text: string;
  scrollThresholds: number[];
  theme?: "LIGHT" | "DARK";
}

export function ScrollingCharacterReveal({
  text,
  scrollThresholds,
  theme = "LIGHT",
}: ScrollingCharacterRevealProps) {
  const [revealedIndices, setRevealedIndices] = useState<number[]>([]);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const scrollPosition = window.scrollY;
        const textTop = textRef.current?.offsetTop;
        const viewportHeight = window.innerHeight;
        const textHeight = textRef.current?.offsetHeight;

        const enterViewport = textTop - viewportHeight * 0.9;
        const exitViewport = textTop + textHeight;

        if (scrollPosition > enterViewport && scrollPosition < exitViewport) {
          const relativeScroll = scrollPosition - enterViewport;
          const newRevealedIndices: number[] = [];
          for (let i = 0; i < text.length; i++) {
            if (relativeScroll >= scrollThresholds[i]) {
              newRevealedIndices.push(i);
            } else {
              break;
            }
          }
          setRevealedIndices(newRevealedIndices);
        } else if (scrollPosition <= enterViewport) {
          setRevealedIndices([]);
        } else if (scrollPosition >= exitViewport) {
          setRevealedIndices(Array.from({ length: text.length }, (_, i) => i));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [text.length, scrollThresholds]);

  const getCharacterStyle = (index: number): string => {
    const lastLevel = revealedIndices[revealedIndices.length - 1];

    let baseStyle;
    let secondaryStyle;
    if (theme == "DARK") {
      baseStyle = "text-white";
      secondaryStyle = "text-white/10";
    } else {
      baseStyle = "text-white";
      secondaryStyle = "text-white/10";
    }

    if (index < lastLevel) {
      return `${baseStyle} opacity-100`;
    } else if (index === lastLevel) {
      return `${baseStyle} opacity-70`;
    } else if (index === lastLevel + 1) {
      return `${baseStyle} opacity-30`;
    } else if (index === lastLevel + 2) {
      return `${baseStyle} opacity-10`;
    }
    return secondaryStyle;
  };

  return (
    <p ref={textRef}>
      {text.split("").map((char, index) => (
        <span key={index} className={getCharacterStyle(index)}>
          {char}
        </span>
      ))}
    </p>
  );
}
