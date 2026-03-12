"use client";

import * as React from "react";
// import { MainFooter } from "@/components/base/MainFooter";
import { MainNav } from "@/components/base/MainNav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import InteractiveGradientCard from "@/components/base/InteractiveGradientCard";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { AboutUsSection } from "@/components/base/AboutUsSection";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function RetailStore() {
  const t = useTranslations('retailStore');

  const benefits = [
    { titleKey: "support247", image: "/images/benefits/heaset.png", alt: "24/7 Support" },
    { titleKey: "multipleCryptoSupport", image: "/images/benefits/wallet.png", alt: "Multiple Crypto Support" },
    { titleKey: "lowestFees", image: "/images/benefits/money-tag.png", alt: "Lowest Fees" },
    { titleKey: "fastTransactions", image: "/images/benefits/money-speed.png", alt: "Fast Transactions" },
  ];
  return (
    <div className="bg-black">
      <MainNav hasBackground={true} />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-6">
          <div className="flex items-center lg:col-span-5 pb-6 row-start-2 lg:row-start-1 mt-16">
            <div>
              <div className="text-2xl leading-[2.4rem] sm:text-4xl sm:leading-[3rem] lg:text-5xl lg:leading-[3.5rem] font-semibold">
                {t('heroTitle')}
              </div>
              <div className="text-lg sm:text-xl mt-6">
                {t('heroDesc')}
              </div>
              <div className="mt-6">
                <a href="https://dashboard.pallapay.com/auth/register">
                  <Button className="text-black bg-amber-400 hover:bg-amber-500 cursor-pointer flex gap-1 items-center">
                    {t('getStarted')}
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
                <Parallax
                  rotate={[-20, 20]}
                  speed={5}
                  className="-top-6 left-0 absolute"
                >
                  <img
                    alt="Retail Store Background"
                    src="/images/retail-sector/hero/star1.png"
                  />
                </Parallax>
                <Parallax
                  rotate={[-20, 20]}
                  speed={-7}
                  className="-top-6 left-0 absolute"
                >
                  <img
                    alt="Retail Store Background"
                    src="/images/retail-sector/hero/star2.png"
                  />
                </Parallax>
                <Parallax
                  rotate={[-10, 10]}
                  speed={-5}
                  className="-top-6 left-0 absolute"
                >
                  <img
                    alt="Retail Store Background"
                    src="/images/retail-sector/hero/star3.png"
                  />
                </Parallax>
                <Parallax speed={-10} className="-top-16 left-0 absolute">
                  <img
                    alt="Retail Store Background"
                    src="/images/retail-sector/hero/box.png"
                  />
                </Parallax>
                <Parallax speed={10} className="relative">
                  <img
                    alt="Retail Store Main Image"
                    src="/images/retail-sector/hero/smart-business.png"
                  />
                </Parallax>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-20 sm:mt-28">
        <div className="text-2xl sm:text-3xl">{t('perfectMatch')}</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12">
          {benefits.map((item, index) => (
            <InteractiveGradientCard
              key={index}
              className="bg-[#181A20] flex items-center justify-center pb-2 pt-1"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={150}
                height={150}
                className="mx-auto"
              />
              <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-7 text-center">
                {t(item.titleKey as any)}
              </div>
            </InteractiveGradientCard>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="bg-[#181A20] px-7 sm:px-16 py-10 mt-24 sm:mt-32 rounded-3xl">
          <div className="text-xl md:text-3xl font-semibold text-amber-400">
            {t('sectionTitle')}
          </div>
          <div className="grid grid-cols-10">
            <div className="row-start-2 sm:row-start-1 col-span-12 md:col-span-7 relative z-2">
              <div className="relative z-2 text-sm md:text-lg">
                <div className="mt-7">
                  {t('sectionDesc')}
                </div>
                <div className="sm:flex sm:gap-3 mt-7 text-center">
                  <Link href="/crypto-pos-machine">
                    <Button className="min-w-[75%] text-black sm:min-w-0 bg-amber-400 hover:bg-amber-500 cursor-pointer">
                      {t('startIntegration')}
                    </Button>
                  </Link>
                  <Link href="/products/payment-link">
                    <Button
                      variant="outline"
                      className="min-w-[75%] sm:min-w-0 bg-transparent text-amber-400 hover:text-amber-400 hover:bg-amber-400/10 border-amber-400 cursor-pointer mt-2.5 sm:mt-0"
                    >
                      {t('checkApiDocs')}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <ParallaxProvider>
                  <Parallax rotate={[-6, 7]} speed={5}>
                    <div className="absolute -top-5 -left-[36%] sm:-left-[12%] w-[120px] h-[120px] rotate-[-120deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[5px]"></div>
                  </Parallax>
                  <Parallax rotate={[10, 0]} speed={0}>
                    <div className="bg-[url(/images/shapes/star.png)] bg-no-repeat bg-contain w-[30px] h-[30px] absolute top-4 sm:top-16 -left-4 sm:left-[7%]"></div>
                  </Parallax>
                </ParallaxProvider>
              </div>
            </div>
            <div className="row-start-1 col-span-12 md:col-span-3 relative pt-20 lg:pt-0 -mt-32! md:mt-0!">
              <ParallaxProvider>
                <Parallax rotate={[-20, 20]} speed={-1}>
                  <div className="absolute -top-10 md:-top-32 -right-36 sm:right-0 w-[120px] h-[105px] md:w-[160px] md:h-[150px] -rotate-[25deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px]"></div>
                </Parallax>
                <Parallax rotate={[-10, 10]} speed={6}>
                  <div className="bg-[url(/images/shapes/star.png)] bg-no-repeat bg-contain w-[30px] h-[30px] absolute -right-2 top-5 hidden sm:block"></div>
                </Parallax>
                <div className="absolute bottom-24 right-0 w-full h-full">
                  <div className="hidden md:flex relative w-full h-full items-end">
                    <Parallax speed={6}>
                      <img
                        alt="Shopping store"
                        src="/images/retail-sector/shopping-trolly.png"
                        width={330}
                        className="translate-y-36 min-w-[330px]"
                      />
                    </Parallax>
                  </div>
                </div>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-24! md:mt-52!">
        <div className="bg-[#181A20] rounded-3xl px-7 md:px-18 py-9 text-base lg:text-xl grid md:grid-cols-12 mt-7">
          <div className="md:col-span-5">
            <img
              alt="Buying geocery in store illustration"
              src="/images/retail-sector/female-grocery-store.png"
              className="w-[85%] md:mt-[-25%] md:ml-[-10%] mx-auto md:mx-0 mb-4 md:mb-0"
            />
          </div>
          <div className="md:col-span-7">
            {t('bottomDesc')}
          </div>
        </div>
      </div>
      <AboutUsSection className="sm:!pt-0" />
      {/* <MainFooter className="!mt-8 sm:!mt-24" hasCreateAccountSection={true} createAccountSectionType="SOLID" /> */}
    </div>
  );
}

