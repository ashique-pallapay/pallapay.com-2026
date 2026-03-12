"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/base/MainNav";
import { ScrollAnimation } from "@/components/base/ScrollAnimation";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function MainHero() {
  const t = useTranslations("hero");
  const tCommon = useTranslations("common");

  return (
    <div className="relative">
      <MainNav />
      <div className="container h-full text-white relative">
        {/* Mobile animated gradient background */}
        <div className="md:hidden absolute inset-0 overflow-hidden pointer-events-none ">
          <div className="md:block hidden absolute top-[15%] left-[5%] animate-image-1 opacity-70">
            <Image
              src="/images/main/coin-illustration.png"
              className="w-[100px]"
              alt="Coin Illustration"
              width={100}
              height={100}
            />
          </div>
          <div className="absolute md:block hidden top-[55%] right-[5%] animate-image-2 opacity-65">
            <Image
              src="/images/main/btc-coin-illustration.png"
              className="w-[90px]"
              alt="BTC Coin Illustration"
              width={100}
              height={100}
            />
          </div>
          <div className="absolute top-[18%] md:block hidden right-[10%] animate-image-3 opacity-70 z-0">
            <Image
              src="/images/main/golden-coin.png"
              className="w-[100px]"
              alt="Golden Coin"
              width={100}
              height={100}
            />
          </div>
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-[50%] pointer-events-none"></div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row h-full py-24 relative z-10">
          <div className="col-span-12 md:col-span-5 font-semibold flex h-full sm:items-center pt-14 sm:pt-0">
            <div className="pt-4 sm:pt-20">
              <ScrollAnimation>
                <h1 className="text-[1.9rem] leading-[2.8rem] sm:text-[2.5rem] sm:leading-[3.2rem]">
                  {t("title")}
                  <br />
                  {t("subtitle1")}
                </h1>
              </ScrollAnimation>
              <ScrollAnimation delay={150}>
                <h2 className="text-[1.1rem] text-white/50 sm:text-[2rem] mt-4 sm:mt-5">
                  {t("subtitle2")}
                </h2>
              </ScrollAnimation>
              <ScrollAnimation delay={300}>
                <div className="mt-14">
                  <a href="https://dashboard.pallapay.com/auth/register">
                    <Button className="w-full md:w-auto text-black bg-amber-400 hover:bg-amber-500 cursor-pointer flex items-center gap-1 !px-8 !py-5">
                      {tCommon("getStarted")}
                      <span className="block bg-[url(/images/icons/arrow-right-sm.svg)] bg-cover w-[18px] h-[18px] mt-0.5"></span>
                    </Button>
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 font-semibold h-full sm:items-center relative">
            <div className="relative w-full h-full">
              <div className="absolute top-16 md:top-44 -left-1/6 animate-float-1">
                <Image
                  src="/images/main/coin-illustration.png"
                  alt="Coin Illustration"
                  width={300}
                  height={300}
                  className="w-[25%] md:w-[65%] h-auto"
                  priority
                />
              </div>
              <div className="absolute -right-4 top-24 md:top-44 animate-float-2">
                <Image
                  src="/images/main/btc-coin-illustration.png"
                  alt="BTC Coin Illustration"
                  width={100}
                  height={100}
                  className="w-auto h-auto"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-3 -left-[2%] animate-float-3 z-10">
                <Image
                  src="/images/main/golden-coin.png"
                  alt="Coin Illustration"
                  width={100}
                  className="w-[35%] md:w-[80%] h-auto"
                  height={100}
                />
              </div>
              <div className="w-[22px] h-[22px] bg-[url(/images/shapes/star.png)] bg-no-repeat bg-contain absolute top-4 left-[16%] animate-float-4"></div>
              <div className="absolute top-[-3.5%] right-[-3%] md:w-[120px] w-[60px] h-[70px] md:h-[125px] rotate-[32deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[4px] animate-float-5"></div>
              <div className="w-[27px] h-[27px] bg-[url(/images/shapes/star.png)] bg-no-repeat bg-contain absolute top-[-8px] right-[-7%] animate-float-6"></div>
              <div className="absolute bottom-4 -left-11 md:w-[120px] md:h-[117px] w-[60px] h-[70px] rotate-[20deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[4px] animate-float-1"></div>
              <div className="w-[26px] h-[26px] bg-[url(/images/shapes/star.png)] bg-no-repeat bg-contain absolute bottom-12 left-[14%] animate-float-2"></div>
              <div className="flex justify-end relative">
                <Image
                  src="/images/main/pallapay-mobile-app.png"
                  width={690}
                  height={550}
                  alt="Pallapay Mobile Application Hero"
                  className="h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
