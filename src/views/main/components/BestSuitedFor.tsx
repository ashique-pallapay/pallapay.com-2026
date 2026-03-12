"use client";

import * as React from "react";
import { ScrollAnimation } from "@/components/base/ScrollAnimation";
import { Link } from "@/lib/inertia-shims";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function BestSuitedFor({
  title,
}: {
  title?: string;
}) {
  const t = useTranslations("bestSuitedFor");
  const displayTitle = title ?? t("title");

  const suitedIndustries = [
    {
      title: t("industries.gaming"),
      image: "/images/best-suited/gaming-new.png",
      link: "/industries/gaming",
    },
    {
      title: t("industries.hotels"),
      image: "/images/best-suited/hotel-new.png",
      link: "/industries/hotels",
    },
    {
      title: t("industries.tradingPlatforms"),
      image: "/images/best-suited/trading-platform-new.png",
      link: "/industries/trading-platforms",
    },
    {
      title: t("industries.ecommerce"),
      image: "/images/best-suited/Shopping-new1.png",
      link: "/industries/ecommerce",
    },
    {
      title: t("industries.retailSector"),
      image: "/images/best-suited/retail-sector-new.png",
      link: "/industries/retail-store",
    },
  ];

  return (
    <div className="container mt-24! md:mt-16 relative overflow-visible">
      {/* background shape */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[-10%] 
      w-[calc(100%+2.5rem)] sm:w-[75%] h-[120%] z-10 opacity-70
      "
      />

      <div className="relative z-20">
        <ScrollAnimation>
          <h2 className="text-2xl sm:text-3xl text-white font-semibold text-center">
            {displayTitle}
          </h2>
        </ScrollAnimation>

        <div
          className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-5
          gap-4 sm:gap-7
          mt-12
          lg:w-10/12
          mx-auto
        "
        >
          {suitedIndustries.map((item, index) => {
            const isLast = index === suitedIndustries.length - 1;

            return (
              <ScrollAnimation
                key={item.title}
                delay={index * 100}
                className={isLast ? "col-span-2 sm:col-span-1" : "col-span-1"}
              >
                <Link
                  href={item.link}
                  className="bg-linear-to-b from-[#111] via-[#3A3A3A]/50 to-[#3A3A3A] p-4 sm:p-6 rounded-xl sm:rounded-3xl
        shadow-[0_0px_40px_rgba(0,0,0,0.15)]
        hover:shadow-[0_0px_50px_rgba(0,0,0,0.3)]
        flex flex-col items-center justify-between h-full"
                >
                  <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] flex items-center justify-center p-1">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="object-contain h-28 "
                      width={420}
                      height={420}
                    />
                  </div>

                  <div className="text-center text-sm sm:text-base font-semibold mt-6 md:mt-1 ">
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
