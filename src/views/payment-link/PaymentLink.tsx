"use client";

import * as React from "react";
// import { MainFooter } from "@/components/base/MainFooter";
import { MainNav } from "@/components/base/MainNav";
import { Button } from "@/components/ui/button";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { AboutUsSection } from "@/components/base/AboutUsSection";
import InteractiveGradientCard from "@/components/base/InteractiveGradientCard";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function PaymentLink() {
  const t = useTranslations('paymentLink');
  return (
    <div className="bg-black">
      <MainNav hasBackground={true} />
      <div className="container pt-14 py-10 sm:pt-20 sm:pb-16">
        <div className="grid grid-cols-1 gap-y-16 md:gap-y-0 md:grid-cols-12">
          <div className="md:col-span-5 flex items-center row-start-2 md:row-start-1">
            <div>
              <h1 className="text-2xl leading-[2.4rem] sm:text-4xl sm:leading-[3rem] lg:text-5xl lg:leading-[3.5rem] font-semibold">
                {t('heroTitle')}
              </h1>
              <div className="text-xl md:text-2xl mt-7">
                {t('heroSubtitle')}
              </div>
              <div className="mt-7">
                <a href="https://dashboard.pallapay.com/auth/register">
                  <Button className="text-black bg-amber-400 hover:bg-amber-500 cursor-pointer" size="xl">
                    {t('createPaymentLink')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 relative row-start-1">
            <div className="absolute w-full h-full top-0 left-10">
              <ParallaxProvider>
                <Parallax rotate={[-10, 5]} speed={-10}>
                  <div className="absolute -top-16 -left-[12%] w-[120px] h-[120px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[6px]"></div>
                </Parallax>
                <Parallax
                  rotate={[-10, 15]}
                  speed={4}
                  className="absolute bottom-0 right-0 translate-x-[-120%] translate-y-[40%]"
                >
                  <div className="w-[100px] h-[110px] md:w-[200px] md:h-[210px]  rotate-[-120deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[12px]"></div>
                </Parallax>
              </ParallaxProvider>
            </div>
            <div className="relative">
              <ParallaxProvider>
                <Parallax
                  rotate={[-20, 5]}
                  speed={-8}
                  className="top-0 left-0 absolute"
                >
                  <img
                    alt="Payment link background"
                    src="/images/payment-link/hero/stars.png"
                  />
                </Parallax>
                {/* <Parallax
                  rotate={[-20, 5]}
                  speed={-2}
                  className="top-0 left-0 absolute"
                >
                  <img
                    alt="Payment link background"
                    src="/images/payment-link/hero/money1.png"
                  />
                </Parallax> */}
                {/* <Parallax
                  rotate={[-20, 5]}
                  speed={5}
                  className="top-4 sm:-top-5 left-0 absolute"
                >
                  <img
                    alt="Payment link background"
                    src="/images/payment-link/hero/money2.png"
                  />
                </Parallax> */}
                {/* <Parallax
                  rotate={[25, -10]}
                  speed={-5}
                  className="-bottom-10 sm:bottom-auto sm:-top-10 left-0 absolute"
                >
                  <img
                    alt="Payment link background"
                    src="/images/payment-link/hero/check.png"
                  />
                </Parallax> */}
                <Parallax speed={-5} className="relative -mt-10 sm:mt-0">
                  <Image
                    alt="Payment link"
                    src="/images/payment-link/hero/link2.png"
                    width={400}
                    height={400}
                    className="max-w-full h-auto"
                  />
                </Parallax>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-20 sm:mt-24">
        <h3 className="text-2xl sm:text-3xl font-semibold">
          {t('simplePaymentsTitle')}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12">
          <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center">
            <img
              alt="No-Code Solution"
              src="/images/payment-link/api.png"
              className="max-w-[95%] mx-auto"
            />
            <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-5">
              {t('noCodeSolution')}
            </div>
          </InteractiveGradientCard>
          <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center">
            <img
              alt="Automatic Conversion"
              src="/images/payment-link/money.png"
              className="max-w-[95%] mx-auto"
            />
            <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-5">
              {t('automaticConversion')}
            </div>
          </InteractiveGradientCard>
          <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center">
            <img
              alt="Multiple Crypto Support"
              src="/images/payment-link/widest-crypto.png"
              className="max-w-[95%] mx-auto"
            />
            <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-5">
              {t('widestCrypto')}
            </div>
          </InteractiveGradientCard>
          <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center">
            <img
              alt="High Security"
              src="/images/payment-link/secure-phone.png"
              className="max-w-[95%] mx-auto"
            />
            <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-5">
              {t('highSecurity')}
            </div>
          </InteractiveGradientCard>
        </div>
      </div>
      <div className="container text-center mt-20! sm:mt-28!">
        <h3 className="text-3xl font-semibold">{t('supportedCryptosTitle')}</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-10 md:gap-0 md:grid-cols-none md:flex md:justify-between mt-10">
          <div>
            <img
              alt="TRX"
              src="/images/coins/tron.png"
              width={80}
              className="mx-auto"
            />
            <div className="text-lg mt-2 mx-auto">TRX</div>
          </div>
          <div>
            <img
              alt="PALLA"
              src="/images/coins/palla.png"
              width={80}
              className="mx-auto"
            />
            <div className="text-lg mt-2 mx-auto">PALLA</div>
          </div>
          <div>
            <img
              alt="USDT"
              src="/images/coins/tether.png"
              width={80}
              className="mx-auto"
            />
            <div className="text-lg mt-2 mx-auto">USDT</div>
          </div>
          <div>
            <img
              alt="BNB"
              src="/images/coins/bnb.png"
              width={80}
              className="mx-auto"
            />
            <div className="text-lg mt-2 mx-auto">BNB</div>
          </div>
          <div>
            <img
              alt="ETH"
              src="/images/coins/ethereum.png"
              width={80}
              className="mx-auto"
            />
            <div className="text-lg mt-2 mx-auto">ETH</div>
          </div>
          <div>
            <img
              alt="DAI"
              src="/images/coins/dai.png"
              width={80}
              className="mx-auto"
            />
            <div className="text-lg mt-2 mx-auto">DAI</div>
          </div>
          <div>
            <img
              alt="USDC"
              src="/images/coins/usdc.png"
              width={80}
              className="mx-auto"
            />
            <div className="text-lg mt-2 mx-auto">USDC</div>
          </div>
          <div className="col-span-2 sm:col-span-1 md:hidden text-lg mt-2 w-full h-full pb-7 text-left">
            <div className="h-full content-center font-semibold">
              {t('andMore')}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <div className="absolute top-0 w-full h-[520px] bg-[url('/images/bg-slice-gradient.svg')] bg-fill bg-center bg-no-repeat"></div>
        <div className=" container mt-20! sm:mt-28!">
          <div className="grid md:grid-cols-2 gap-7 sm:gap-10">
            <div className="flex items-center">
              <Image
                alt="Payment link mobile illustration"
                src="/images/payment-link/desktop-bitcoin.png"
                width={400}
                height={300}
                className="rounded-2xl md:max-w-[85%]"
              />
            </div>
            <div className="flex items-center">
              <div>
                <h4 className="text-2xl lg:text-3xl font-semibold">
                  {t('acceptCryptoTitle')}
                </h4>
                <div className="mt-5 lg:mt-10 lg:text-xl">
                  {t('acceptCryptoDesc')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-20! sm:mt-28!">
        <h3 className="text-2xl sm:leading-[3.2rem] lg:text-3xl lg:leading-[3.4rem] font-semibold text-center">
          {t('howItWorksTitle')}
        </h3>
        <img
          alt="Pallapay payment link steps"
          src="/images/payment-link/payment-link-steps.png"
          className="mt-7 hidden md:block"
        />
        <img
          alt="Pallapay payment link steps"
          src="/images/payment-link/payment-link-steps-mobile.png"
          className="mt-7 md:hidden"
        />
      </div>
      <div className="container mt-20! sm:mt-28!">
        <h3 className="text-2xl sm:leading-[3.2rem] lg:text-3xl lg:leading-[3.4rem] font-semibold sm:w-[65%] lg:w-[50%] mx-auto text-center">
          {t('morePaymentSolutions')}
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
                  {t('apiIntegration')}
                </div>
              </div>
            </div>
          </Link>
          <Link href="/products/fiat-settlement">
            <div className="bg-[#292B31] hover:bg-neutral-900 flex items-center justify-center rounded-3xl px-5 py-5 sm:py-10">
              <div>
                <img
                  alt="Fiat settlements"
                  src="/images/products/money.png"
                  className="max-w-[95%] sm:max-w-[65%] mx-auto"
                />
                <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-5">
                  {t('fiatSettlement')}
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
                    {t('posMachine')}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <AboutUsSection className="!pt-0 sm:!pt-0 -mt-4!" />
      {/* <MainFooter
        className="!mt-8 sm:!mt-24"
        hasCreateAccountSection={true}
        createAccountSectionType="SOLID"
      /> */}
    </div>
  );
}
