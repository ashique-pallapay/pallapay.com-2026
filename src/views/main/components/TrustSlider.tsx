"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

export function TrustSlider() {
  const [speed, setSpeed] = useState(30);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window === "undefined") return;

    const updateSpeed = () => {
      setSpeed(window.innerWidth <= 768 ? 50 : 30);
    };
    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  const cryptoCoins = [
    { title: "Palla", url: "/images/coins/palla.png" },
    { title: "Ethereum", url: "/images/coins/ethereum.png" },
    { title: "Tether", url: "/images/coins/tether.png" },
    { title: "BNB", url: "/images/coins/bnb.png" },
    { title: "USDC", url: "/images/coins/usdc.png" },
    { title: "DAI", url: "/images/coins/dai.png" },
    { title: "TRON", url: "/images/coins/tron.png" },
  ];

  return (
    <div className="container pb-8 relative  mt-[-2px] overflow-hidden">
      <div className="relative h-20 sm:h-24">
        {isMounted ? (
          <Marquee
            speed={speed}
            gradient={true}
            gradientColor="black"
            gradientWidth={80}
            pauseOnHover={false}
            className="h-full"
          >
            {cryptoCoins.map((coin, index) => (
              <div
                key={`${coin.title}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-4 sm:mx-6"
              >
                <img
                  src={coin.url}
                  alt={coin.title}
                  className="h-12 sm:h-16 w-auto object-contain grayscale opacity-40"
                />
              </div>
            ))}
          </Marquee>
        ) : (
          // SSR fallback - static display
          <div className="flex gap-8 sm:gap-12 items-center h-full">
            {cryptoCoins.map((coin, index) => (
              <div
                key={`${coin.title}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-4 mx-4 sm:mx-6"
              >
                <img
                  src={coin.url}
                  alt={coin.title}
                  className="h-12 sm:h-16 w-auto object-contain grayscale opacity-40"
                />
              </div>
            ))}
          </div>
        )}
        {/* Additional fade overlays for stronger effect */}
        {/* <div className="absolute top-0 left-0 bg-gradient-to-r from-[#ECECEC] via-[#ECECEC80] to-[#ECECEC00] w-24 sm:w-32 h-full z-10 pointer-events-none"></div> */}
        {/* <div className="absolute top-0 right-0 bg-gradient-to-l from-[#ECECEC] via-[#ECECEC80] to-[#ECECEC00] w-24 sm:w-32 h-full z-10 pointer-events-none"></div> */}
      </div>
    </div>
  );
}
