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

export function Ecommerce() {
  const t = useTranslations("ecommerce");

  const benefits = [
    { title: t("fastTransactions"), image: "/images/benefits/money-speed.png", alt: t("fastTransactions") },
    { title: t("highestSecurity"), image: "/images/benefits/secure.png", alt: t("highestSecurity") },
    { title: t("support247"), image: "/images/benefits/heaset.png", alt: t("support247") },
    { title: t("limitlessTransactions"), image: "/images/benefits/money-infinit.png", alt: t("limitlessTransactions") },
  ];

  return (
    <div className="bg-black">
      <MainNav hasBackground={true} />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className=" lg:col-span-5 md:mt-16 mt-10 row-start-2 lg:row-start-1">
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
          <div className="md:col-span-6 lg:col-span-7 relative lg:p-0 mb-6 md:mb-0 row-start-1">
            <div className="relative mt-8">
              <div className="absolute left-0 bottom-[10%] w-[90%] h-[60%] bg-[#363636] rounded-[150%] blur-[100px]"></div>
              <ParallaxProvider>
                <Parallax rotate={[-20, 5]} speed={-15} className="relative">
                  <Image alt="Lightning fast" src="/images/ecommerce/hero/bolt.png" width={700} height={700} />
                </Parallax>
                <Parallax rotate={[-10, 10]} speed={10} className="-top-6 left-0 absolute">
                  <Image alt="Gift" src="/images/ecommerce/hero/gift.png" width={700} height={700} />
                </Parallax>
                <Parallax speed={-2} className="top-4 sm:top-0 left-0 absolute">
                  <Image alt="Ecommerce store" src="/images/ecommerce/hero/main1.png" width={700} height={500} />
                </Parallax>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-16! sm:mt-32!">
        <div className="text-2xl sm:text-3xl">{t("benefits")}</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12">
          {benefits.map((item, index) => (
            <InteractiveGradientCard key={index} className="bg-[#181A20] flex items-center justify-center pb-2 pt-1">
              <Image alt={item.alt} src={item.image} width={150} height={150} className="max-w-[95%] mx-auto" />
              <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-7">{item.title}</div>
            </InteractiveGradientCard>
          ))}
        </div>
      </div>
      <div className="bg-[#181A20] py-10 mt-24 sm:mt-32">
        <div className="container">
          <div className="text-3xl font-semibold text-amber-400">{t("sectionTitle")}</div>
          <div className="grid grid-cols-10">
            <div className="row-start-2 sm:row-start-1 col-span-12 md:col-span-8 relative z-2">
              <div className="relative z-2 text-xl">
                <div className="mt-7">{t("sectionDesc")}</div>
                <div className="flex gap-3 mt-7">
                  <a href="https://dashboard.pallapay.com/auth/register">
                    <Button className="text-black bg-amber-400 hover:bg-amber-500 cursor-pointer">{t("startIntegration")}</Button>
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
                    <div className="absolute -top-5 -left-[12%] w-[120px] h-[120px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[7px]"></div>
                  </Parallax>
                  <Parallax rotate={[10, 0]} speed={0}>
                    <div className="w-[45px] h-[45px] bg-[url(/images/shapes/star.png)] bg-no-repeat bg-contain absolute top-4 sm:top-16 left-[3%]"></div>
                  </Parallax>
                  <Parallax rotate={[10, 0]} speed={8}>
                    <Image alt="Lightning fast" src="/images/ecommerce/bolt.png" width={78} height={78} className="absolute top-4 sm:-top-24 left-[-12%] hidden md:block" />
                  </Parallax>
                </ParallaxProvider>
              </div>
            </div>
            <div className="row-start-1 col-span-12 md:col-span-2 relative pt-20 lg:pt-0 -mt-32 md:mt-0">
              <ParallaxProvider>
                <Parallax rotate={[-20, 20]} speed={-1}>
                  <div className="absolute -top-10 md:-top-32 -right-20 sm:-right-10 w-[120px] h-[105px] md:w-[210px] md:h-[200px] -rotate-[25deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px]"></div>
                </Parallax>
                <Parallax rotate={[-20, 10]} speed={6}>
                  <div className="bg-[url(/images/shapes/star.png)] bg-no-repeat bg-contain w-[65px] h-[65px] absolute left-0 top-0 hidden sm:block"></div>
                </Parallax>
                <div className="absolute bottom-0 right-0 w-full h-full">
                  <div className="hidden md:flex relative w-full h-full items-end">
                    <Parallax speed={6}>
                      <Image alt="Shopping cart" src="/images/ecommerce/cart.png" width={330} height={330} className="translate-y-36 min-w-[330px]" />
                    </Parallax>
                  </div>
                </div>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-24! md:mt-52!">
        <div className="bg-[#292B31] rounded-3xl px-7 md:px-18 py-9 text-lg sm:text-xl">
          <div className="relative md:mt-[-15%] mb-5 md:mb-8">
            <Image alt="Mobile and shopping cart" src="/images/ecommerce/phone-cart.png" width={500} height={300} className="mx-auto" />
          </div>
          {t("bottomDesc")}
          <ParallaxProvider>
            <Parallax rotate={[-6, 7]} speed={12}>
              <div className="absolute -bottom-14 -right-30 w-[120px] h-[120px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[7px]"></div>
            </Parallax>
          </ParallaxProvider>
        </div>
      </div>
      <AboutUsSection className="sm:!pt-0" />
    </div>
  );
}
