"use client";

import * as React from "react";
import { ScrollAnimation } from "@/components/base/ScrollAnimation";
import { Link } from "@/lib/inertia-shims";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function SolutionsSection() {
  const t = useTranslations("solutions");

  const cryptoSolutions = [
    {
      title: t("items.paymentLinks"),
      image: "/images/products/website.png",
      link: "/products/payment-link",
    },
    {
      title: t("items.cryptoPosMachine"),
      image: "/images/products/pos.png",
      link: "/crypto-pos-machine",
    },
    {
      title: t("items.apiIntegration"),
      image: "/images/products/software-solution.png",
      link: "/products/payment-api",
    },
    {
      title: t("items.fiatSettlement"),
      image: "/images/products/money.png",
      link: "/products/fiat-settlement",
    },
    {
      title: t("items.cryptoGiftCard"),
      image: "/images/products/gift-card.png",
      link: "/products/gift-card",
    },
  ];

  return (
    <div className="mt-20 lg:mt-40 container px-4 mx-auto text-center overflow-visible">
      <ScrollAnimation>
        <h2 className="text-white text-[1.75rem] sm:text-4xl font-semibold">
          {t("title")}
        </h2>
      </ScrollAnimation>

      <div className="relative mt-10 overflow-visible">
        {/* BIG CENTER RADIAL FADE */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[140%] sm:w-[110%] lg:w-[80%]
            h-[180%]
            -z-10
            pointer-events-none
            rounded-[140px]
            bg-[radial-gradient(ellipse_at_center,_rgba(53,60,69,0.8)_0%,_rgba(53,60,69,0.4)_35%,_transparent_75%)]
            blur-[40px]
          "
        />

        {/* RESPONSIVE GRID */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-5
            gap-4
            sm:gap-6
            md:gap-7
          "
        >
          {cryptoSolutions.map((item, index) => {
            const isLast = index === cryptoSolutions.length - 1;

            return (
              <ScrollAnimation
                key={item.title}
                delay={index * 100}
                className={`
                  h-full
                  ${
                    isLast
                      ? "col-span-2 sm:col-span-1"
                      : "col-span-1"
                  }
                `}
              >
                <Link
                  href={item.link}
                  className="
                    bg-linear-to-b from-[#111] via-black to-[#3A3A3A]
                    rounded-2xl
                    p-5
                    sm:p-6
                    lg:px-8
                    lg:py-9
                    shadow-2xl
                    flex flex-col items-center justify-between
                    h-full
                    transition-transform duration-300 hover:-translate-y-2
                  "
                >
                  <div className="relative w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] lg:w-[110px] lg:h-[110px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="text-base sm:text-lg lg:text-xl mt-5 font-medium text-white leading-tight">
                    {item.title}
                  </div>
                </Link>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </div>
  );
}
