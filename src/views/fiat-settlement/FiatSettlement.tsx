"use client";

import * as React from "react";
// import { MainFooter } from "@/components/base/MainFooter";
import { MainNav } from "@/components/base/MainNav";
import { Button } from "@/components/ui/button";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { AboutUsSection } from "@/components/base/AboutUsSection";
// import InteractiveGradientCard from "@/components/base/InteractiveGradientCard";
import { Link } from "@/lib/inertia-shims";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function FiatSettlement() {
  const t = useTranslations("fiatSettlement");

  return (
    <div className="bg-black">
      <MainNav hasBackground={true} />
      <div className="container ">
        <div className="grid grid-cols-12 gap-y-8 md:gap-0">
          <div className="col-span-12 md:col-span-5 flex  row-start-2 md:row-start-1">
            <div className="mt-10 md:mt-24 ">
              <h1 className="text-2xl leading-[2.4rem] sm:text-4xl sm:leading-[3rem] lg:text-5xl lg:leading-[3.5rem] font-semibold">
                {t("heroTitle")}
              </h1>
              <div className="mt-8 text-2xl">
                {t("heroSubtitle")}
              </div>
              <div className="flex gap-3 mt-5">
                <a href="https://dashboard.pallapay.com/auth/register">
                  <Button className="bg-amber-400 text-black hover:bg-amber-500 cursor-pointer">
                    {t("createAccount")}
                  </Button>
                </a>
                <a href="https://docs.pallapay.com">
                  <Button
                    variant="outline"
                    className="bg-transparent text-amber-400 hover:text-amber-400 hover:bg-amber-400/10 border-amber-400 cursor-pointer"
                  >
                    {t("checkApiDocs")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className=" relative col-span-12 md:col-span-7 row-start-1 md:p-1 lg:p-">
            <div className="w-[22px] h-[22px] bg-[url(/images/shapes/star.png)] bg-no-repeat bg-contain absolute top-44 left-[32%] animate-float-4"></div>
            <div className="absolute top-44 right-9 md:w-[120px] w-[60px] h-[70px] md:h-[125px] rotate-[32deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[4px] animate-float-5"></div>
            <div className="w-[27px] h-[27px] bg-[url(/images/shapes/star.png)] bg-no-repeat bg-contain absolute top-44 right-9 animate-float-6"></div>
            <div className="absolute bottom-9 left-7 md:w-[120px] md:h-[117px] w-[60px] h-[70px] rotate-[20deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[4px] animate-float-1"></div>
            <div className="w-[26px] h-[26px] bg-[url(/images/shapes/star.png)] bg-no-repeat bg-contain absolute bottom-24 left-44 animate-float-2"></div>
            <Image
              height={550}
              width={550}
              alt="Fiat settlement"
              src="/images/fiat-settlement/wallet_black.png"
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-0 w-full h-[520px] bg-[url('/images/bg-slice-gradient.svg')] bg-fill bg-center bg-no-repeat"></div>

        <div className="container  pt-18! sm:pt-32! md:pt-52! 2xl:pt-40! relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-y-0 items-center">
            <ParallaxProvider>
              <div className="md:col-span-5 relative">
                <div className="hidden md:block">
                  <Parallax rotate={[10, -5]} speed={-5}>
                    <Image
                      height={300}
                      width={300}
                      alt="Exchange"
                      className="absolute -bottom-32 md:-bottom-2 right-0"
                      src="/images/fiat-settlement/money-crypto-exchnage2.png"
                    />
                  </Parallax>

                  <Parallax rotate={[0, -10]} speed={-5}>
                    <Image
                      height={200}
                      width={200}
                      alt="Exchange"
                      className="absolute -bottom-36 left-0"
                      src="/images/fiat-settlement/money-crypto-exchnage1.png"
                    />
                  </Parallax>
                </div>

                <div className="block md:hidden">
                  <Parallax rotate={[0, -10]} speed={-5}>
                    <Image
                      height={400}
                      width={400}
                      alt="Exchange"
                      src="/images/fiat-settlement/mobile-view-money-exchange.png"
                    />
                  </Parallax>
                </div>
              </div>
            </ParallaxProvider>
            <div className="md:col-span-7 flex items-center text-center">
              <div>
                <h3 className="text-3xl font-semibold text-amber-400">
                  {t("guaranteedPayoutsTitle")}
                </h3>
                <div className="mt-6  text-lg">
                  {t("guaranteedPayoutsDesc")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-16! sm:mt-40!">
        <h3 className="text-3xl font-semibold">{t("supportedCryptosTitle")}</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-10 md:gap-0 md:grid-cols-none md:flex md:justify-between mt-10">
          <div>
            <img alt="TRX" src="/images/coins/tron.png" width={80} className="mx-auto" />
            <div className="text-lg mt-2 mx-auto">TRX</div>
          </div>
          <div>
            <img alt="PALLA" src="/images/coins/palla.png" width={80} className="mx-auto" />
            <div className="text-lg mt-2 mx-auto">PALLA</div>
          </div>
          <div>
            <img alt="USDT" src="/images/coins/tether.png" width={80} className="mx-auto" />
            <div className="text-lg mt-2 mx-auto">USDT</div>
          </div>
          <div>
            <img alt="BNB" src="/images/coins/bnb.png" width={80} className="mx-auto" />
            <div className="text-lg mt-2 mx-auto">BNB</div>
          </div>
          <div>
            <img alt="ETH" src="/images/coins/ethereum.png" width={80} className="mx-auto" />
            <div className="text-lg mt-2 mx-auto">ETH</div>
          </div>
          <div>
            <img alt="DAI" src="/images/coins/dai.png" width={80} className="mx-auto" />
            <div className="text-lg mt-2 mx-auto">DAI</div>
          </div>
          <div>
            <img alt="USDC" src="/images/coins/usdc.png" width={80} className="mx-auto" />
            <div className="text-lg mt-2 mx-auto">USDC</div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:hidden text-lg mt-2 w-full h-full pb-7 text-left">
            <div className="h-full content-center font-semibold">
              {t("andMore")}
            </div>
          </div>
        </div>
      </div>

      <ParallaxProvider>
        <div className="bg-gradient-to-b from-[#353C45] via-[#181A20] via-30% to-[#010101] relative mt-24">
          <div className="container py-20">
            <Parallax rotate={[-6, 7]} speed={10}>
              <div className="absolute top-0 right-0 translate-y-[-110%] translate-x-[70%] w-[150px] h-[150px] rotate-[-120deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[8px]"></div>
            </Parallax>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-18 md:gap-12">
              <div className="relative">
                <h4 className="text-2xl text-amber-400 font-semibold">
                  {t("marketVolatilityTitle")}
                </h4>
                <div className="text-[1.35rem] leading-[1.85rem] mt-5">
                  {t("marketVolatilityDesc")}
                </div>
                <div className="absolute w-full -top-20 md:top-0 text-[10rem] font-semibold text-amber-400 opacity-10 text-center mt-10">
                  1
                </div>
              </div>
              <div className="relative">
                <h4 className="text-2xl text-amber-400 font-semibold">
                  {t("cryptoEcosystemTitle")}
                </h4>
                <div className="text-[1.35rem] leading-[1.85rem] mt-5">
                  {t("cryptoEcosystemDesc")}
                </div>
                <div className="absolute w-full -top-20 md:top-0 text-[10rem] font-semibold text-amber-400 opacity-10 text-center mt-10">
                  2
                </div>
              </div>
              <div className="relative">
                <h4 className="text-2xl text-amber-400 font-semibold">
                  {t("fastSecureTitle")}
                </h4>
                <div className="text-[1.35rem] leading-[1.85rem] mt-5">
                  {t("fastSecureDesc")}
                </div>
                <div className="absolute w-full -top-20 md:top-0 text-[10rem] font-semibold text-amber-400 opacity-10 text-center mt-10">
                  3
                </div>
              </div>
              <Parallax rotate={[-2, 20]} speed={5}>
                <div className="absolute bottom-0 left-0 translate-x-[-130%] translate-y-[70%] w-[120px] h-[120px] rotate-[-120deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[5px]"></div>
              </Parallax>
            </div>
          </div>
        </div>
      </ParallaxProvider>
      <div className="container mt-20 sm:mt-28">
        <h3 className="text-2xl sm:leading-[3.2rem] lg:text-3xl lg:leading-[3.4rem] font-semibold sm:w-[65%] lg:w-[50%] mx-auto text-center">
          {t("morePaymentSolutions")}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 text-center lg:w-[75%] mx-auto">
          <Link href="/products/payment-api">
            <div className="bg-[#292B31] hover:bg-neutral-900 flex items-center justify-center rounded-3xl px-5 py-5 sm:py-10">
              <div>
                <img
                  alt="Software solution"
                  src="/images/products/software-solution.png"
                  className="max-w-[95%] sm:max-w-[65%] mx-auto"
                />
                <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-5">
                  {t("apiIntegration")}
                </div>
              </div>
            </div>
          </Link>
          <Link href="/products/payment-link">
            <div className="bg-[#292B31] hover:bg-neutral-900 flex items-center justify-center rounded-3xl px-5 py-5 sm:py-10">
              <div>
                <img
                  alt="Website"
                  src="/images/products/website.png"
                  className="max-w-[95%] sm:max-w-[65%] mx-auto"
                />
                <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-5">
                  {t("paymentLinks")}
                </div>
              </div>
            </div>
          </Link>
          <div className="col-span-2 sm:col-span-1">
            <Link href="/crypto-pos-machine">
              <div className="bg-[#292B31] hover:bg-neutral-900 flex items-center justify-center rounded-3xl px-5 py-5 sm:py-10">
                <div>
                  <img
                    alt="Crypto POS Machine"
                    src="/images/products/pos.png"
                    className="max-w-[55%] sm:max-w-[65%] mx-auto"
                  />
                  <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-5">
                    {t("posMachine")}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <AboutUsSection className="!pt-0 sm:!pt-0 -mt-4" />
    </div>
  );
}
