"use client";

import * as React from "react";
import Image from "next/image";
import { MainNav } from "@/components/base/MainNav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import InteractiveGradientCard from "@/components/base/InteractiveGradientCard";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { AboutUsSection } from "@/components/base/AboutUsSection";
import { useTranslations } from "next-intl";

export function Gaming() {
  const t = useTranslations("gaming");

  const benefits = [
    { title: t("benefits.support247"), image: "/images/benefits/heaset.png", alt: t("benefits.support247") },
    { title: t("benefits.fiatSettlement"), image: "/images/benefits/money-arrow.png", alt: t("benefits.fiatSettlement") },
    { title: t("benefits.lowestFees"), image: "/images/benefits/money-percentage.png", alt: t("benefits.lowestFees") },
    { title: t("benefits.fastTransactions"), image: "/images/benefits/money-speed.png", alt: t("benefits.fastTransactions") },
  ];

  return (
    <div className="bg-black">
      <MainNav hasBackground={true} />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 mt-6">
          <div className="flex items-center md:col-span-6 lg:col-span-5 pb-6 row-start-2 md:row-start-1">
            <div>
              <div className="text-2xl leading-[2.4rem] sm:text-4xl sm:leading-[3rem] lg:text-5xl lg:leading-[3.5rem] font-semibold">
                {t("heroTitle")}
              </div>
              <div className="sm:text-base mt-6">{t("heroDesc")}</div>
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
          <div className="md:col-span-6 lg:col-span-7 relative lg:p-6 row-start-1 mt-8 sm:mt-0">
            <div className="relative mt-8">
              <div className="absolute left-0 bottom-[10%] w-[90%] h-[60%] bg-[#363636] rounded-[150%] blur-[100px]"></div>
              <ParallaxProvider>
                <Parallax rotate={[-10, 0]} speed={-5} className="relative -mt-10 sm:mt-0">
                  <Image alt="Gaming galaxy" src="/images/gaming/galaxy.png" width={700} height={400} />
                </Parallax>
                <Parallax rotate={[25, -10]} speed={15} className="-bottom-10 sm:bottom-auto sm:top-0 left-0 absolute">
                  <Image alt="Gaming" src="/images/gaming/main-photos.png" width={700} height={400} />
                </Parallax>
                <Parallax rotate={[-20, 5]} speed={25} className="-bottom-10 sm:bottom-auto sm:top-0 left-0 absolute">
                  <Image alt="Gaming" src="/images/gaming/shapes.png" width={700} height={400} />
                </Parallax>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-20 sm:mt-28">
        <div className="text-2xl sm:text-3xl">{t("perfectMatch")}</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12">
          {benefits.map((item, index) => (
            <InteractiveGradientCard key={index} className="bg-[#181A20] flex items-center justify-center pb-2 pt-1">
              <Image alt={item.alt} src={item.image} className="max-w-[95%] mx-auto" width={150} height={150} />
              <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-7">{item.title}</div>
            </InteractiveGradientCard>
          ))}
        </div>
      </div>
      <div className="bg-[#181A20] py-10 mt-24 sm:mt-32">
        <div className="container">
          <div className="text-xl md:text-3xl font-semibold text-amber-400">{t("sectionTitle")}</div>
          <div className="grid grid-cols-10">
            <div className="col-span-12 md:col-span-8 relative z-2">
              <div className="relative z-2 text-sm md:text-lg">
                <div className="mt-5">{t("sectionDesc1")}</div>
                <div className="mt-3.5">{t("sectionDesc2")}</div>
                <div className="flex gap-3 mt-7">
                  <a href="https://dashboard.pallapay.com/auth/register">
                    <Button className="bg-amber-400 text-black! hover:bg-amber-500 cursor-pointer">{t("startIntegration")}</Button>
                  </a>
                  <a href="https://docs.pallapay.com">
                    <Button variant="outline" className="bg-transparent text-amber-400 hover:text-amber-400 hover:bg-amber-400/10 border-amber-400 cursor-pointer">
                      {t("checkApiDocs")}
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <ParallaxProvider>
                  <Parallax rotate={[-6, 7]} speed={5}>
                    <div className="absolute -top-10 -left-[10%] w-[120px] h-[120px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[12px]"></div>
                  </Parallax>
                  <Parallax rotate={[-12, 20]} speed={-6}>
                    <div className="w-[75px] h-[75px] bg-[url(/images/shapes/shape5.png)] bg-no-repeat bg-contain absolute -top-18 -left-[14%]"></div>
                  </Parallax>
                  <Parallax rotate={[14, 0]} speed={6}>
                    <div className="w-[115px] h-[115px] bg-[url(/images/shapes/shape6.png)] bg-no-repeat bg-contain absolute top-10 left-[2%]"></div>
                  </Parallax>
                </ParallaxProvider>
              </div>
            </div>
            <div className="col-span-12 md:col-span-2 relative pt-20 lg:pt-0 -mt-32 md:mt-0">
              <ParallaxProvider>
                <Parallax rotate={[-55, 66]} speed={-3}>
                  <div className="absolute -top-44 sm:-top-12 -right-14 lg:right-0 w-[120px] h-[105px] md:w-[180px] md:h-[170px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[14px]"></div>
                </Parallax>
                <Parallax rotate={[-45, 22]} speed={2}>
                  <div className="bg-[url(/images/shapes/shape2.png)] bg-no-repeat bg-contain absolute top-[-600px] sm:-top-28 right-0 sm:right-auto sm:left-5 w-[130px] h-[130px]"></div>
                </Parallax>
                <Parallax rotate={[5, -5]} speed={-4}>
                  <div className="bg-[url(/images/shapes/shape1.png)] bg-no-repeat bg-contain absolute sm:-right-18 right-2 top-9 w-[125px] h-[125px]"></div>
                </Parallax>
                <Parallax rotate={[15, -15]} speed={-2}>
                  <div className="bg-[url(/images/shapes/shape4.png)] bg-no-repeat bg-contain absolute -right-2 sm:-right-7 top-[-500px] sm:top-0 w-[100px] h-[100px]"></div>
                </Parallax>
                <Parallax rotate={[-20, 0]} speed={-6}>
                  <div className="bg-[url(/images/shapes/shape3.png)] bg-no-repeat bg-contain absolute -right-10 sm:right-10 top-4 sm:top-44 w-[100px] h-[100px]"></div>
                </Parallax>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="text-3xl font-semibold text-amber-400 mt-28 text-center">{t("achievementUnlocked")}</div>
        <div className="w-full relative">
          <div className="absolute md:mt-24 md:mx-60 mt-0 mx-0">
            <Image alt="Gamepad" src="/images/gaming/bg-gamepad.png" width={600} height={600} />
          </div>
          <div className="relative grid md:grid-cols-12 gap-5 pt-6">
            <div className="md:col-span-6 bg-[#D9D9D965] backdrop-blur-[20px] rounded-2xl px-8 md:px-14 pt-8 pb-11">
              <div className="text-xl text-amber-400 font-semibold">{t("inGamePurchasesTitle")}</div>
              <div className="mt-5 text-lg">{t("inGamePurchasesDesc")}</div>
            </div>
            <div className="md:col-span-6 bg-[#D9D9D965] backdrop-blur-[20px] rounded-2xl px-8 md:px-14 pt-8 pb-11">
              <div className="text-xl text-amber-400 font-semibold">{t("subscriptionsTitle")}</div>
              <div className="mt-5 text-lg">{t("subscriptionsDesc")}</div>
            </div>
            <div className="md:col-span-6 lg:col-span-7 bg-[#D9D9D965] backdrop-blur-[20px] rounded-2xl px-8 md:px-14 pt-8 pb-11">
              <div className="text-xl text-amber-400 font-semibold">{t("fiatSettlementTitle")}</div>
              <div className="mt-5 text-lg">{t("fiatSettlementDesc")}</div>
            </div>
            <div className="md:col-span-6 lg:col-span-5 bg-[#D9D9D965] backdrop-blur-[20px] rounded-2xl px-8 md:px-14 pt-8 pb-11">
              <div className="text-xl text-amber-400 font-semibold">{t("multiCryptoTitle")}</div>
              <div className="mt-5 text-lg">{t("multiCryptoDesc")}</div>
            </div>
          </div>
        </div>
      </div>
      <AboutUsSection />
    </div>
  );
}
