"use client";

import * as React from "react";
import { MainNav } from "@/components/base/MainNav";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import InteractiveGradientCard from "@/components/base/InteractiveGradientCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import "../../styles/Accordion.css";
import { useState } from "react";
import { useTranslations } from "next-intl";

const steps = [
  {
    id: 1,
    bgImage: "/images/shapes/gradient/giftcard-gradient-1.png",
  },
  {
    id: 2,
    bgImage: "/images/shapes/gradient/giftcard-gradient-2.png",
  },
  {
    id: 3,
    bgImage: "/images/shapes/gradient/giftcard-gradient-3.png",
  },
];

const benefits = [
  {
    image: "/images/benefits/money-percentage.png",
    alt: "Lowest Fees",
  },
  {
    image: "/images/benefits/wallet.png",
    alt: "Multiple Crypto Support",
  },
  {
    image: "/images/benefits/secure.png",
    alt: "Highest Security",
  },
  {
    image: "/images/benefits/money-arrow.png",
    alt: "Fiat Settlement",
  },
];
export function GiftCard() {
  const t = useTranslations("giftCard");
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <>
      <MainNav hasBackground={true} />
      <div className="absolute w-full h-screen sm:h-[800px] bg-gradient-to-b from-[#000000] via-[00000040] via-40% to-[#00000000] z-10"></div>

      <div className="container relative mt-14! md:mt-0! z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-5">
          <div className="lg:col-span-5 row-start-2 lg:row-start-1 md:mb-24 mb-0">
            <p className="text-lg xl:text-xl text-gray-400">
              {t('hero.subtitle')}
            </p>
            <h1 className="text-2xl leading-[2.4rem] sm:text-4xl sm:leading-[3rem] lg:text-5xl lg:leading-[3.5rem] font-semibold">
              {t('hero.title')}
            </h1>
            <p className="text-white text-lg mt-4 sm:pr-6">
              {t('hero.description')}
            </p>

            <div className="mt-8!">
              <a href="https://dashboard.pallapay.com/auth/register">
                <Button className="bg-amber-400 hover:bg-amber-500 cursor-pointer text-black! flex items-center gap-1">
                  {useTranslations('common')('getStarted')}
                  <span className="block bg-[url(/images/icons/arrow-right-sm.svg)] bg-cover w-[18px] h-[18px] mt-0.5"></span>
                </Button>
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 row-start-1 sm:pl-8 relative">
            <ParallaxProvider>
              <Parallax
                rotate={[-6, 7]}
                speed={5}
                className="absolute -top-5 right-[-25%] sm:right-[6%] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rotate-[-100deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[7px]"
              ></Parallax>
              <Parallax
                rotate={[10, 0]}
                speed={-12}
                className="absolute -top-10 left-0 sm:left-[20%] w-[30px] h-[30px] bg-[url(/images/shapes/star.png)] bg-contain bg-no-repeat z-30"
              ></Parallax>
              <Parallax
                rotate={[5, -10]}
                speed={-10}
                className="absolute top-10 right-[20%] w-[25px] h-[25px] bg-[url(/images/shapes/star.png)] bg-contain bg-no-repeat"
              ></Parallax>
              <Parallax
                rotate={[5, -10]}
                speed={2}
                className="absolute -top-4 right-4 w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] bg-[url(/images/shapes/star.png)] bg-contain bg-no-repeat"
              ></Parallax>
              <Parallax
                rotate={[5, -10]}
                speed={2}
                className="absolute hidden sm:block bottom-[14%] left-[28%] w-[25px] h-[25px] bg-[url(/images/shapes/star.png)] bg-contain bg-no-repeat z-30"
              ></Parallax>
            </ParallaxProvider>
            <Image
              height={400}
              width={400}
              src="/images/gift-cards/prepaid-giftcard.png"
              className="w-full scale-[110%] mx-5 sm:scale-80"
              alt={t('alts.prepaidCard')}
            />
          </div>
        </div>
      </div>
      <div className="container mt-18! sm:mt-24!">
        <div className="background-dark-gradient rounded-3xl px-5 py-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7 text-white items-center">
            <div className="row-start-2 lg:row-start-1 text-left md:text-center lg:text-left">
              <h3 className="text-3xl font-semibold">
                {t('whatIs.title')}
              </h3>
               <div className="mt-6 text-lg">
                {t('whatIs.description')}
              </div>
              <div className="mt-5 lg:mt-6 lg:text-lg space-y-3 w-fit sm:mx-auto lg:mx-0">
                {(t.raw('whatIs.checkpoints') as string[]).map((checkpoint, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <div className="text-black bg-amber-400 rounded-full flex w-5 h-5 items-center justify-center">
                      <Check size={16} strokeWidth={2.5} />
                    </div>
                    <div>{checkpoint}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="row-start-1">
              <img
                src="/images/gift-cards/pallapay-gift-cards2.png"
                className="w-full md:w-[75%] lg:w-full mx-auto"
                alt={t('alts.cardPack')}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20! lg:mt-34! container text-black text-center relative ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-9 lg:gap-y-5 gap-5">
          <div>
            <img
              src="/images/gift-cards/withdrawal-mobile-new.png"
              className="max-h-44 mx-auto"
              alt={t('alts.withdrawalMobile')}
            />
            <h3 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-5 text-(--primary-orange)">
              {t('features.item1.title')}
            </h3>
            <p className="mt-3 sm:mt-6 text-white">
              {t('features.item1.description')}
            </p>
          </div>
          <div>
            <img
              src="/images/gift-cards/coins-new.png"
              className="max-h-44 sm:p-2 mx-auto"
              alt={t('alts.coins')}
            />
            <h3 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-5 text-(--primary-orange)">
              {t('features.item2.title')}
            </h3>
            <p className="mt-3 sm:mt-6 text-white">
              {t('features.item2.description')}
            </p>
          </div>
          <div>
            <img
              src="/images/gift-cards/financial-growth.png"
              className="max-h-44 sm:p-2 mx-auto"
              alt={t('alts.financialGrowth')}
            />
            <h3 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-5 text-(--primary-orange)">
              {t('features.item3.title')}
            </h3>
            <p className="mt-3 sm:mt-6 text-white">
              {t('features.item3.description')}
            </p>
          </div>
        </div>
      </div>

                
      <section className="bg-black text-white mt-20! lg:mt-34! container font-sans">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
              <span className="text-zinc-400 text-sm uppercase tracking-wider font-medium">
                {t('steps.banner')}
              </span>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight">
              {t('steps.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`relative overflow-hidden rounded-2xl border border-zinc-800 p-8 min-h-[220px] flex items-center group hover:border-zinc-700 transition-colors`}
              >
                {step.bgImage && (
                  <div className="">
                    <Image
                      src={step.bgImage}
                      alt={`Step ${step.id}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                )}

                <div className="relative flex items-start gap-6 z-10">
                  <span className="text-7xl font-semibold text-amber-500 leading-none">
                    {step.id}.
                  </span>
                  <p className="text-xl font-medium leading-tight text-zinc-100 pt-2">
                    {(t.raw('steps.items') as string[])[step.id - 1]}
                  </p>
                </div>

                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container relative mt-16! sm:mt-36!">
        <div className="bg-gradient-to-r from-[#353c45] md:via-[#353C4570] via-40% md:to-[#353C4500] to-[#22222250] rounded-3xl md:px-8 md:pb-7 text-white md:text-black text-center md:text-left">
          <ParallaxProvider>
            <Parallax rotate={[3, -4]} speed={-1}>
              <div className="absolute -top-10 left-0 translate-x-[-60%] w-[87px] h-[85px] -rotate-[25deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[2px]"></div>
            </Parallax>
            <Parallax rotate={[2, -4]} speed={5}>
              <div className="bg-[url(/images/shapes/star.png)] bg-no-repeat bg-contain w-[30px] h-[30px] absolute left-5 top-10 hidden sm:block"></div>
            </Parallax>
          </ParallaxProvider>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 px-8">
            <div className="relative pt-7">
              <img
                src="/images/gift-cards/yellow-wallet.png"
                width={300}
                alt={t('alts.yellowWallet')}
                className="mx-auto lg:ml-0 lg:mr-auto"
              />
              <div className="absolute top-0 right-0 bg-[url(/images/gift-cards/zero-percent-new.png)] w-[63px] h-[75px] md:w-[127px] md:h-[150px] bg-contain bg-no-repeat"></div>
            </div>
            <div className="pb-6 flex items-end">
              <div className="pb-6">
                <h3 className="text-2xl font-semibold text-white">
                  {t('withdrawFee.title')}
                </h3>
                <p className="mt-2 text-white">
                  {t('withdrawFee.description')}
                </p>
                <div className="mt-4">
                  <a href="https://dashboard.pallapay.com/auth/register">
                    <Button className="bg-amber-400 hover:bg-amber-500 cursor-pointer flex items-center gap-1 justify-self-center md:justify-self-start w-full sm:w-fit">
                      {useTranslations('common')('tryItNow')}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 sm:grid-cols-4 gap-4 sm:gap-10 md:gap-0 md:grid-cols-none md:flex md:justify-between text-black mt-4 md:mt-8 px-5 pb-6">
            <div>
              <img
                src="/images/coins/tron.png"
                className="w-[50px] sm:w-[80px] mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/coins/palla.png"
                className="w-[50px] sm:w-[80px] mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/coins/tether.png"
                className="w-[50px] sm:w-[80px] mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/coins/bnb.png"
                className="w-[50px] sm:w-[80px] mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/coins/ethereum.png"
                className="w-[50px] sm:w-[80px] mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/coins/dai.png"
                className="w-[50px] sm:w-[80px] mx-auto"
              />
            </div>
            <div>
              <img
                src="/images/coins/usdc.png"
                className="w-[50px] sm:w-[80px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20! lg:mt-24! container">
        <div className="text-white bg-[#181A20] h-full grid grid-cols-1 lg:grid-cols-2 rounded-3xl px-5 py-7 sm:px-8 sm:py-14 lg:px-14 shadow-[0_0px_40px_rgba(0,0,0,0.05)] items-center relative gap-8 lg:gap-7">
          <div className="row-start-2 lg:row-start-1">
            <h4 className="text-2xl font-semibold">
              {t('cryptoToCash.title')}
            </h4>
            <p className="mt-4">
              {t('cryptoToCash.description')}
            </p>
            <div className="mt-7">
              <a href="https://dashboard.pallapay.com/auth/register">
                <Button
                  className="text-black bg-amber-400 hover:bg-amber-500 cursor-pointer w-full sm:w-[40%] sm:mr-[5%]"
                  size="lg"
                >
                  {t('cryptoToCash.cashBtn')}
                </Button>
              </a>
              <a href="https://dashboard.pallapay.com/auth/register">
                <Button
                  className="bg-transparent border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black cursor-pointer w-full sm:w-[45%] mt-2.5 sm:mt-0"
                  size="lg"
                >
                  {t('cryptoToCash.bankTransferBtn')}
                </Button>
              </a>
            </div>
          </div>
          <div className="relative row-start-1">
            <div className="absolute inset-0 bg-contain bg-[url('/images/gift-cards/bg-coins.png')] bg-no-repeat bg-center grayscale"></div>

            <img
              src="/images/gift-cards/hero-transfer2.png"
              className="relative w-[85%] mx-auto"
              alt={t('alts.heroTransfer')}
            />
          </div>
        </div>
      </div>

      <div className="mt-16! lg:mt-24! container text-white relative">
        <h3 className="text-3xl font-semibold text-white">{t('partners.title')}</h3>

        <div className="relative">
          <div className="absolute top-0 left-2.5 translate-y-[-50%] px-1! text-xs text-neutral-500 select-none">
            <div className="relative">
              <div className="w-[106%] h-[3px] bg-black absolute top-[50%]  translate-y-[-2px] translate-x-[-3%]"></div>
              <span className="relative text-white!">{t('partners.selectCountry')}</span>
            </div>
          </div>
          <Select defaultValue="DUBAI">
            <SelectTrigger className="w-full sm:w-[35%] h-12 mt-7 bg-black !text-white border border-neutral-400">
              <SelectValue placeholder={t('partners.selectPlaceholder')} />
            </SelectTrigger>
            <SelectContent className="w-full bg-black !text-white">
              <SelectGroup>
                <SelectItem
                  className="bg-black hover:!bg-neutral-10 !text-white"
                  value="DUBAI"
                >
                  {t('partners.countryDubai')}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-5 mt-5">
          <div className="text-black bg-[#181A20] h-full rounded-xl px-6 py-5 md:px-9 md:py-8 shadow-[0_0px_20px_rgba(0,0,0,0.05)]">
            <div className="flex w-full items-center justify-center gap-3">
              <img
                src="/images/gift-cards/pallapay-icon.png"
                alt="Palladium Payment Services LLC"
                width={65}
              />
              <div className="w-full">
                <h6 className="font-semibold text-white">
                  {t('partners.items.partner1.name')}
                </h6>
                <p className="text-neutral-400 text-sm">
                  {t('partners.items.partner1.address')}
                </p>
              </div>
            </div>
            <p className="mt-4 text-white">
              {t('partners.items.partner1.description')}
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3">
              <div className="col-span-2 select-none space-x-1.5 space-y-1.5">
                <span className="inline-block px-2 py-1 rounded-2xl text-[#10E392] bg-[#10E392]/20 text-xs">
                  {t('partners.tags.online')}
                </span>
                <span className="inline-block px-2 py-1 rounded-2xl text-[#5980E5] bg-[#5980E5]/20 text-xs">
                  {t('partners.tags.cashAtBranch')}
                </span>
                <span className="inline-block px-2 py-1 rounded-2xl text-[#10E392] bg-[#10E392]/20 text-xs">
                  {t('partners.tags.creditCard')}
                </span>
                <div className="px-2 py-0.5 rounded-2xl text-white bg-[#2A2A2A] text-xs inline-block">
                  <div className="flex items-center justify-center gap-x-0.5 w-fit">
                    {t('partners.tags.payUsing')}
                    <img
                      src="/images/gift-cards/visa-mastercard-logo.png"
                      alt="Visa Mastercard Logo"
                      width={65}
                    />
                  </div>
                </div>
                <span className="inline-block px-2 py-1 rounded-2xl text-[#FBC01D] bg-[#FFD65C]/20 text-xs">
                  {t('partners.tags.b2bSale')}
                </span>
              </div>
              <div className="text-right mt-5 sm:mt-0">
                <a
                  target="_blank"
                  href="https://dashboard.pallapay.com/auth/register"
                >
                  <Button
                    className="bg-amber-400 hover:bg-amber-500 cursor-pointer text-center w-full sm:w-fit"
                    size="lg"
                  >
                    {t('partners.buyAndSellBtn')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="text-black bg-[#181A20] h-full rounded-xl px-6 py-5 md:px-9 md:py-8 shadow-[0_0px_20px_rgba(0,0,0,0.05)]">
            <div className="flex w-full items-center justify-center gap-3">
              <img
                src="/images/gift-cards/bitcardi-logo.png"
                alt="Bitcardi Discounted Card Services"
                width={65}
              />
              <div className="w-full">
                <h6 className="font-semibold text-white">
                  {t('partners.items.partner2.name')}
                </h6>
                <p className="text-neutral-400 text-sm">
                  {t('partners.items.partner2.address')}
                </p>
              </div>
            </div>
            <p className="text-white mt-4">
              {t('partners.items.partner2.description')}
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3">
              <div className="col-span-2 select-none space-x-1.5 space-y-1.5">
                <span className="inline-block px-2 py-1 rounded-2xl text-[#10E392] bg-[#10E392]/20 text-xs">
                  {t('partners.tags.online')}
                </span>
                <span className="inline-block px-2 py-1 rounded-2xl text-[#5980E5] bg-[#5980E5]/20 text-xs">
                  {t('partners.tags.cashAtBranch')}
                </span>
                <span className="inline-block px-2 py-1 rounded-2xl text-[#10E392] bg-[#10E392]/20 text-xs">
                  {t('partners.tags.creditCard')}
                </span>
                <div className="px-2 py-0.5 rounded-2xl text-white bg-[#2A2A2A] text-xs inline-block">
                  <div className="flex items-center justify-center gap-x-0.5 w-fit">
                    {t('partners.tags.payUsing')}
                    <img
                      src="/images/gift-cards/visa-mastercard-logo.png"
                      alt="Visa Mastercard Logo"
                      width={65}
                    />
                  </div>
                </div>
                <span className="inline-block px-2 py-1 rounded-2xl text-[#FBC01D] bg-[#FFD65C]/20 text-xs">
                  {t('partners.tags.b2bSale')}
                </span>
              </div>
              <div className="text-right mt-5 sm:mt-0">
                <a target="_blank" href="https://bitcardi.com/">
                  <Button
                    className="bg-amber-400 hover:bg-amber-500 cursor-pointer text-center w-full sm:w-fit"
                    size="lg"
                  >
                    {t('partners.buyAndSellBtn')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20! lg:mt-36! container text-black text-center relative">
        <ParallaxProvider>
                        </ParallaxProvider>
        <div className="bg-gradient-to-r from-[#15171a]  to-(--primary-grey) md:to-[#353C45]/50 h-full rounded-3xl p-5 sm:p-8 lg:px-14 lg:py-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-20">
          <div className="text-white md:col-span-7 text-center lg:pr-12 row-start-2 md:row-start-1">
            <h2 className="text-3xl font-semibold">{t('distributor.title')}</h2>
            <div className="text-lg mt-5">
              {t('distributor.description')}
            </div>
            <div className="w-fit mx-auto px-12 py-3 text-gray-700 border border-gray-700 rounded-lg  select-none mt-5">
              {t('distributor.comingSoon')}
            </div>
          </div>
          <div className="md:col-span-5 relative row-start-1">
            <img
              className="w-[75%] sm:w-[55%] md:w-[75%] mx-auto relative z-20"
              src="/images/gift-cards/pallapay-money-exchange.png"
              alt={t('alts.moneyExchange')}
            />
          </div>
        </div>
      </div>

      <div className="container text-black sm:mt-24!">
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 sm:gap-14 text-white">
          <div className="text-3xl lg:text-4xl font-semibold mt-24 leading-[2.2rem] lg:leading-[2.8rem] text-center sm:col-span-2">
            <div>Pallapay</div>
            <div>Crypto</div>
            <div>Gift Card</div>
            <div className="text-4xl lg:text-5xl text-orange-400 mb-5">
              {t('faq.title')}
            </div>
          </div>

          {/* Right Accordion Section */}
          <div className="sm:col-span-4">
            <Accordion
              type="single"
              collapsible
              className="w-full border-b border-gray-900"
            >
              {(t.raw('faq.items') as {question: string, answer: string}[]).map((faq, index) => {
                const value = `item-${index + 1}`;
                const isOpen = openItem === value;

                return (
                  <AccordionItem
                    key={value}
                    value={value}
                    onClick={() => setOpenItem(isOpen ? null : value)}
                    className="border-b border-gray-900 relative"
                  >
                    <div className="flex items-center justify-between w-full">
                      <AccordionTrigger
                        className="AccordionTrigger break-words 
             max-w-[17rem] sm:max-w-[16rem] md:max-w-[20rem] 
             lg:max-w-[24rem] xl:max-w-[28rem] 
             py-4 text-white hover:text-white"
                      >
                        {faq.question}
                      </AccordionTrigger>

                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </div>

                    <AccordionContent>
                      <div className="space-y-3 text-white">{faq.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
            <div className="flex justify-end w-full mt-3 text-(--primary-orange)">
              <Link
                href="/faq"
                className="text-(--primary-orange) group flex items-center gap-1 text-sm font-medium  transition-all"
              >
                <span className="group-hover:underline group-hover:text-(--primary-orange)/50 ">
                  {t('faq.seeMore')}
                </span>
                <ArrowRight
                  size={20}
                  className="text-(--primary-orange) transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mt-14! sm:mt-16! text-black">
        <div className="text-3xl font-semibold text-white">{t('benefits.title')}</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12">
          {benefits.map((item) => (
            <InteractiveGradientCard
              key={item.alt}
              className="bg-[#353C45] text-white flex flex-col items-center justify-center text-center p-4 sm:p-6"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="max-w-[95%] mx-auto"
              />

              <div className="text-lg sm:text-xl font-semibold mt-3 sm:mt-5">
                {(t.raw('benefits.items') as string[])[benefits.indexOf(item)]}
              </div>
            </InteractiveGradientCard>
          ))}
        </div>
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <div className="bg-[#292B31] text-white rounded-2xl grid md:grid-cols-12 gap-10 items-center py-6 px-8 sm:px-16">
          <div className="md:col-span-4">
            <img
              src="/images/gift-cards/pallapay-gift-cards-back-front.png"
              alt={t('alts.globalUse')}
              className="w-full drop-shadow-[0_0px_40px_rgba(0,0,0,0.15)]"
            />
          </div>
          <div className="md:col-span-8 flex items-center">
            <div>
              <div className="text-xl sm:text-3xl font-semibold">
                {t('globalUse.title')}
              </div>
              <div className="sm:text-base mt-2 sm:mt-5">
                {t('globalUse.description')}
              </div>
              <div className="text-center mt-6">
                <a href="https://dashboard.pallapay.com/auth/register">
                  <Button
                    className="text-black bg-amber-400 hover:bg-amber-500 cursor-pointer w-full sm:w-fit"
                    size="xl"
                  >
                    {useTranslations('common')('createAccount')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

                    </>
  );
}
