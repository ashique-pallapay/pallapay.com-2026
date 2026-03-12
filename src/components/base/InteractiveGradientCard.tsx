"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type InteractiveGradientCardProps = React.HTMLAttributes<HTMLDivElement>;

const InteractiveGradientCard = ({
  className,
  ...props
}: InteractiveGradientCardProps) => {
  const defaultBorderStyle = {
    inset: 0,
    mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    maskComposite: "exclude",
    background: "transparent",
  };

  const [borderStyle, setBorderStyle] = useState(defaultBorderStyle);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: HTMLElementEventMap["mouseenter"]) => {
    if (!ref.current) return;

    // Set the gradient border style
    const rect = ref.current?.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Calculate the angle relative to the center of the div
    const angle = Math.atan2(y - rect.height / 2, x - rect.width / 2);

    // Convert angle to degrees (0-360 range)
    let angleInDegrees = (angle * 180) / Math.PI;
    if (angleInDegrees < 0) {
      angleInDegrees += 360;
    }

    const startColor = "rgba(107, 114, 128, 0.48)";
    const midColor1 = "#f1f1f1";
    const midColor2 = "#aaaaaa";
    const endColor = "rgba(107, 114, 128, 0.48)";

    const gradientString = `conic-gradient(from ${angleInDegrees}deg, ${startColor} 0%, ${startColor} 20%, ${midColor1} 30%, ${midColor1} 40%, ${midColor2} 50%, ${midColor2} 60%, ${midColor1} 70%, ${midColor1} 80%, ${endColor} 90%, ${endColor} 100%)`;

    setBorderStyle({
      inset: 0,
      mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
      maskComposite: "exclude",
      background: gradientString,
    });
  };

  const handleMouseEnter = (ev: HTMLElementEventMap["mouseenter"]) => {
    handleMouseMove(ev);
  };

  const handleMouseLeave = () => {
    // Revert to the default border style
    setBorderStyle(defaultBorderStyle);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mousemove", handleMouseMove); // Added mousemove
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mousemove", handleMouseMove); // Removed mousemove
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={cn("relative rounded-2xl", className)} {...props}>
      <div className={cn("relative p-5")}>{props.children}</div>
      <div
        ref={ref}
        className="w-full h-full top-0 left-0 rounded-2xl p-[2px] absolute"
        style={borderStyle}
      ></div>
    </div>
  );
};

export default InteractiveGradientCard;
