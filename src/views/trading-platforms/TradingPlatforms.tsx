"use client";

import * as React from "react";
// import { MainFooter } from '@/components/base/MainFooter';
import { MainNav } from "@/components/base/MainNav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import InteractiveGradientCard from "@/components/base/InteractiveGradientCard";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { AboutUsSection } from "@/components/base/AboutUsSection";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function TradingPlatforms() {
  const t = useTranslations("tradingPlatforms");

  return (
    <div className="bg-black">
      <MainNav hasBackground={true} />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-6">
          <div className="flex items-center lg:col-span-5 pb-6 row-start-2 lg:row-start-1 mt-2">
            <div>
              <div className="text-2xl leading-[2.4rem] sm:text-4xl sm:leading-[3rem] lg:text-5xl lg:leading-[3.5rem] font-semibold">
                {t("heroTitle")}
              </div>
              <div className="text-base sm:text-xl mt-6">
                {t("heroDesc")}
              </div>
              <div className="mt-6">
                <a href="https://dashboard.pallapay.com/auth/register">
                  <Button className="text-black bg-amber-400 hover:bg-amber-500 cursor-pointer flex gap-1 items-center">
                    {t("getStarted")}
                    <ArrowRight />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-7 relative lg:p-6 row-start-1">
            <div className="relative mt-8 ">
              <div className="absolute left-0 bottom-[10%] w-[90%] h-[60%] bg-[#363636] rounded-[150%] blur-[100px]"></div>
              <ParallaxProvider>
                <Parallax
                  rotate={[10, -10]}
                  speed={15}
                  className="relative -mt-10 sm:mt-0 sm:-translate-y-14"
                >
                  <Image
                    src="/images/trading-platforms/hero/money.png"
                    width={500}
                    height={500}
                    alt="Money"
                  />
                </Parallax>
                <Parallax speed={-4} className="-top-10 left-0 absolute">
                  <Image
                    src="/images/trading-platforms/hero/main1.png"
                    width={500}
                    height={500}
                    alt="Trading Platform"
                  />
                </Parallax>
                <Parallax
                  speed={5}
                  className="-bottom-10 sm:bottom-auto top-0 -left-4 absolute"
                >
                  <Image
                    src="/images/trading-platforms/hero/phone.png"
                    width={500}
                    height={500}
                    alt="Phone"
                  />
                </Parallax>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <div className="text-2xl sm:text-3xl">{t("benefits")}</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12">
          <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center pb-2 pt-1">
            <Image
              src="/images/benefits/secure.png"
              className="max-w-[95%] mx-auto"
              width={150}
              height={150}
              alt="Highest Security"
            />
            <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-7">
              {t("highestSecurity")}
            </div>
          </InteractiveGradientCard>
          <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center pb-2 pt-1">
            <Image
              src="/images/benefits/wallet-hand.png"
              className="max-w-[95%] mx-auto"
              width={150}
              height={150}
              alt="Fiat Settlement"
            />
            <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-7">
              {t("fiatSettlement")}
            </div>
          </InteractiveGradientCard>
          <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center pb-2 pt-1">
            <Image
              src="/images/benefits/wallet.png"
              className="max-w-[95%] mx-auto"
              width={150}
              height={150}
              alt="Multiple Crypto Support"
            />
            <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-7">
              {t("multipleCryptoSupport")}
            </div>
          </InteractiveGradientCard>
          <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center pb-2 pt-1">
            <Image
              src="/images/benefits/money-tag.png"
              className="max-w-[95%] mx-auto"
              width={150}
              height={150}
              alt="Flexible Fees"
            />
            <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-7">
              {t("flexibleFees")}
            </div>
          </InteractiveGradientCard>
        </div>
      </div>
      <div className="bg-[#181A20] py-10 mt-24! sm:mt-32!">
        <div className="container">
          <div className="text-xl md:text-3xl font-semibold text-amber-400">
            {t("sectionTitle")}
          </div>
          <div className="grid grid-cols-10">
            <div className="row-start-2 sm:row-start-1 col-span-12 md:col-span-8 relative z-2">
              <div className="relative z-2 text-sm md:text-lg">
                <div className="mt-5">
                  <p>{t("sectionDesc1")}</p>
                  <p>{t("sectionDesc2")}</p>
                </div>
                <div className="flex gap-3 mt-7">
                  <a href="https://dashboard.pallapay.com/auth/register">
                    <Button className="text-black bg-amber-400 hover:bg-amber-500 cursor-pointer">
                      {t("register")}
                    </Button>
                  </a>
                  <a href="https://dashboard.pallapay.com/auth/register">
                    <Button
                      variant="outline"
                      className="bg-transparent text-amber-400 hover:text-amber-400 hover:bg-amber-400/10 border-amber-400 cursor-pointer"
                    >
                      {t("getPosMachine")}
                    </Button>
                  </a>
                </div>
              </div>
              <div className="absolute bg-fuchsia-400 top-0 left-0">
                <ParallaxProvider>
                  <Parallax
                    rotate={[-6, 7]}
                    speed={-5}
                    className="absolute translate-x-[-120px]"
                  >
                    <div className="absolute -top-25 -left-[12%] w-[95px] h-[100px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[7px]"></div>
                  </Parallax>
                </ParallaxProvider>
              </div>
            </div>
            <div className="row-start-1 col-span-12 md:col-span-2 relative pt-20 lg:pt-0 -mt-32 md:mt-0">
              <ParallaxProvider>
                <Parallax speed={6}>
                  <Image
                    src="/images/trading-platforms/chart.png"
                    width={215}
                    height={200}
                    className="hidden sm:block absolute -right-10 -top-24"
                    alt="Chart"
                  />
                </Parallax>
                <div className="absolute bottom-0 right-0 w-full h-full">
                  <div className="flex relative w-full h-full items-end justify-end">
                    <Parallax
                      rotate={[-20, 20]}
                      speed={-3}
                      className="absolute"
                    >
                      <div className="-translate-y-16">
                        <div className="absolute top-0 -right-16 sm:right-0 w-[120px] h-[105px] md:w-[180px] md:h-[170px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[14px]"></div>
                      </div>
                    </Parallax>
                    <Parallax rotate={[-20, 10]} speed={6}>
                      <Image
                        src="/images/shapes/star.png"
                        width={45}
                        height={45}
                        className="-translate-y-16"
                        alt="Star"
                      />
                    </Parallax>
                    <Parallax
                      speed={6}
                      className="hidden sm:block absolute left-0"
                    >
                      <Image
                        src="/images/trading-platforms/coins.png"
                        width={170}
                        height={150}
                        className="translate-y-26 -translate-x-16"
                        alt="Coins"
                      />
                    </Parallax>
                  </div>
                </div>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-24!">
        <div className="grid md:grid-cols-2 gap-y-10 md:gap-y-20">
          <div className="md:pr-24 text-lg flex items-center row-start-2 md:row-start-1">
            {t("desc1")}
          </div>
          <div className="md:bg-[#292B31] rounded-3xl row-start-1">
            <div className="w-[85%] md:translate-x-[-10%] md:translate-y-[-10%] mx-auto md:mx-0">
              <Image
                src="/images/trading-platforms/candles.png"
                width={400}
                height={400}
                alt="Candles"
              />
            </div>
          </div>
          <div className="md:pr-24 border-t border-white pt-10 md:pt-0 md:border-none">
            <div className="md:bg-[#292B31] rounded-3xl">
              <div className="w-[70%] md:w-[80%] ml-auto mx-auto md:translate-x-[25%]">
                <Image
                  src="/images/trading-platforms/candle-magnifier.png"
                  width={400}
                  height={400}
                  alt="Candle Magnifier"
                />
              </div>
            </div>
          </div>
          <div className="text-lg flex items-center lg:pl-12">
            {t("desc2")}
          </div>
        </div>
      </div>
      <AboutUsSection className="sm:!pt-5" />
    </div>
  );
}
