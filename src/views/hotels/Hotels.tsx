"use client";

import * as React from "react";
import { MainNav } from "@/components/base/MainNav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import InteractiveGradientCard from "@/components/base/InteractiveGradientCard";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { AboutUsSection } from "@/components/base/AboutUsSection";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hotels() {
  const t = useTranslations("hotels");

  return (
    <div className="bg-black">
      <MainNav hasBackground={true} />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-6">
          <div className="flex items-center lg:col-span-5 pb-6 row-start-2 lg:row-start-1 mt-16 lg:mt-0">
            <div>
              <div className="text-2xl leading-[2.4rem] sm:text-4xl sm:leading-[3rem] lg:text-5xl lg:leading-[3.5rem] font-semibold">
                {t("heroTitle")}
              </div>
              <div className="text-base sm:text-xl mt-6">{t("heroDesc")}</div>
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
            <div className="relative mt-8">
              <div className="absolute left-0 bottom-[10%] w-[90%] h-[60%] bg-[#363636] rounded-[150%] blur-[100px]"></div>
              <ParallaxProvider>
                <Parallax speed={25} className="-bottom-10 sm:bottom-auto sm:top-0 left-0 absolute">
                  <Image src="/images/hotels/hero/hotel-board.png" alt="Hotel Sign" width={500} height={400} />
                </Parallax>
                <Parallax speed={5} className="relative -mt-10 sm:mt-0">
                  <Image src="/images/hotels/hero/bed.png" alt="Hotels" width={500} height={500} />
                </Parallax>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-20 sm:mt-28">
        <div className="text-2xl sm:text-3xl">{t("benefits")}</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12">
          <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center pb-2 pt-1">
            <Image alt="Pallapay Security" src="/images/benefits/secure.png" className="max-w-[95%] mx-auto" width={150} height={150} />
            <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-7">{t("highestSecurity")}</div>
          </InteractiveGradientCard>
          <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center pb-2 pt-1">
            <Image alt="Pallapay Fiat Settlement" src="/images/benefits/wallet-hand.png" className="max-w-[95%] mx-auto" width={150} height={150} />
            <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-7">{t("fiatSettlement")}</div>
          </InteractiveGradientCard>
          <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center pb-2 pt-1">
            <Image alt="Pallapay Multi Crypto Support" src="/images/benefits/wallet.png" className="max-w-[95%] mx-auto" width={150} height={150} />
            <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-7">{t("multipleCryptoSupport")}</div>
          </InteractiveGradientCard>
          <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center pb-2 pt-1">
            <Image alt="Flexible Fees" src="/images/benefits/money-tag.png" className="max-w-[95%] mx-auto" width={150} height={150} />
            <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-7">{t("flexibleFees")}</div>
          </InteractiveGradientCard>
        </div>
      </div>
      <div className="bg-[#181A20] py-10 mt-24 sm:mt-32">
        <div className="container">
          <div className="text-3xl font-semibold text-amber-400">{t("sectionTitle")}</div>
          <div className="grid grid-cols-10">
            <div className="row-start-2 sm:row-start-1 col-span-12 md:col-span-8 relative z-2">
              <div className="relative z-2 text-lg">
                <div className="mt-5">{t("sectionDesc1")}</div>
                <div className="mt-3.5">{t("sectionDesc2")}</div>
                <div className="flex gap-3 mt-7">
                  <a href="https://dashboard.pallapay.com/auth/register">
                    <Button className="text-black bg-amber-400 hover:bg-amber-500 cursor-pointer">{t("register")}</Button>
                  </a>
                  <a href="https://dashboard.pallapay.com/auth/register">
                    <Button variant="outline" className="bg-transparent text-amber-400 hover:text-amber-400 hover:bg-amber-400/10 border-amber-400 cursor-pointer">
                      {t("getPosMachine")}
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <ParallaxProvider>
                  <Parallax rotate={[-6, 7]} speed={5}>
                    <div className="absolute -top-5 -left-[12%] w-[120px] h-[120px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[7px]"></div>
                  </Parallax>
                  <Parallax rotate={[10, 0]} speed={0}>
                    <div className="absolute bg-url(/images/shapes/star.png) w-[45px] h-[45px] top-4 sm:top-16 left-[3%]" />
                  </Parallax>
                </ParallaxProvider>
              </div>
            </div>
            <div className="row-start-1 col-span-12 md:col-span-2 relative pt-20 lg:pt-0 -mt-32 md:mt-0">
              <ParallaxProvider>
                <Parallax rotate={[-20, 20]} speed={-3}>
                  <div className="absolute -top-32 sm:-top-22 right-0 w-[120px] h-[105px] md:w-[180px] md:h-[170px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[14px]"></div>
                </Parallax>
                <Parallax rotate={[-20, 10]} speed={6}>
                  <div className="absolute bg-[url(/images/shapes/star.png)] bg-contain bg-no-repeat w-[45px] h-[45px] -right-10 top-0" />
                </Parallax>
                <div className="absolute bottom-0 right-0 w-full h-full">
                  <div className="hidden md:flex relative w-full h-full items-end">
                    <Parallax speed={6}>
                      <Image alt="Hotel Baggage" src="/images/hotels/baggage.png" width={300} height={400} className="translate-y-36 min-w-[300px]" />
                    </Parallax>
                  </div>
                </div>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="text-3xl font-semibold text-amber-400 mt-28 text-center">{t("solutionsTitle")}</div>
        <div className="w-full relative mt-8">
          <div className="relative grid md:grid-cols-6 gap-5 pt-6">
            <div className="md:col-span-4 bg-[#52525290] backdrop-blur-[20px] rounded-2xl px-8 md:px-14 pt-8 pb-11 row-start-2 md:row-start-1">
              <div className="text-xl text-amber-400 font-semibold">{t("posMachineTitle")}</div>
              <div className="mt-5 text-lg">{t("posMachineDesc")}</div>
            </div>
            <div className="md:col-span-2 md:bg-[#52525290] -mb-10 md:mb-0 md:backdrop-blur-[20px] rounded-2xl px-8 pt-5 row-start-1">
              <Image alt="Crypto POS offering illustration" src="/images/hotels/pos-hand.png" width={300} height={400} />
            </div>
            <div className="md:col-span-6 bg-[#52525290] backdrop-blur-[20px] rounded-2xl px-8 md:px-14 pt-8 pb-11 row-start-3 md:row-start-2">
              <div className="text-xl text-amber-400 font-semibold">{t("paymentLinkTitle")}</div>
              <div className="mt-5 text-lg">
                <p>{t("paymentLinkDesc1")}</p>
                <p>{t("paymentLinkDesc2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutUsSection className="sm:!pt-5" />
    </div>
  );
}
