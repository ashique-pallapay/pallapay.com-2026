"use client";

import * as React from "react";
// import { MainFooter } from "@/components/base/MainFooter";
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
// import { FaqSection } from "../main/components";
import Image from "next/image";
import Link from "next/link";
import "../../styles/Accordion.css";
import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Create a Pallapay Account",
    bgImage: "/images/shapes/gradient/giftcard-gradient-1.png",
  },
  {
    id: 2,
    title: "Buy a Crypto Card In-Store or Online",
    bgImage: "/images/shapes/gradient/giftcard-gradient-2.png",
  },
  {
    id: 3,
    title: "Convert, Spend, or Withdraw Your Way",
    bgImage: "/images/shapes/gradient/giftcard-gradient-3.png",
  },
];

const benefits = [
  {
    title: "Lowest Fees",
    image: "/images/benefits/money-percentage.png",
    alt: "Lowest Fees",
  },
  {
    title: "Multiple Crypto Support",
    image: "/images/benefits/wallet.png",
    alt: "Multiple Crypto Support",
  },
  {
    title: "Highest Security",
    image: "/images/benefits/secure.png",
    alt: "Highest Security",
  },
  {
    title: "Fiat Settlement",
    image: "/images/benefits/money-arrow.png",
    alt: "Fiat Settlement",
  },
];

const faqs = [
  {
    value: "item-1",

    question: "What is a Pallapay Crypto Gift Card?",
    answer:
      "Pallapay Prepaid gift card is a multi-functional card that bridges the world of crypto and real-world purchases. Whether you’re looking to convert crypto to spendable funds or buy crypto conveniently, Pallapay makes it fast, secure, and easy.",
  },
  {
    value: "item-2",
    question: "How can I buy a Pallapay Crypto Gift Card?",
    answer:
      "You can purchase a gift card directly from your Pallapay dashboard using any supported cryptocurrency or at any Pallapay trusted partner location using cash or card.",
  },
  {
    value: "item-3",
    question: "Can I sell my Pallapay Crypto Gift Card for cash?",
    answer:
      "Yes. You can sell your gift card at any Pallapay trusted partner location for cash or transfer the funds directly to your bank account.",
  },
  {
    value: "item-4",
    question: "Which cryptocurrencies can I use to buy a gift card?",
    answer:
      "Pallapay supports a wide range of cryptocurrencies, including USDT, USDC, Bitcoin (BTC), Ethereum (ETH), XRP, Solana (SOL), and more.",
  },
  {
    value: "item-5",
    question: "Is it safe to use a Pallapay Crypto Gift Card?",
    answer:
      "Yes. All transactions are secure, and your funds are protected. The gift card can only be used through Pallapay’s dashboard or authorized trusted partners.",
  },
  {
    value: "item-6",
    question: "Are there limits on how much I can load onto a gift card?",
    answer:
      "Limits may vary depending on your country’s regulations and Pallapay’s policies. Please check your dashboard or trusted partner location for the maximum load limits.",
  },
];
export function GiftCard() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <>
      <MainNav hasBackground={true} />
      <div className="absolute w-full h-screen sm:h-[800px] bg-gradient-to-b from-[#000000] via-[00000040] via-40% to-[#00000000] z-10"></div>

      <div className="container relative mt-14! md:mt-0! z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-5">
          <div className="lg:col-span-5 row-start-2 lg:row-start-1 md:mb-24 mb-0">
            <p className="text-lg xl:text-xl text-gray-400">
              Enjoy The World of Crypto with
            </p>
            <h1 className="text-2xl leading-[2.4rem] sm:text-4xl sm:leading-[3rem] lg:text-5xl lg:leading-[3.5rem] font-semibold">
              Pallapay Crypto Gift Card
            </h1>
            <p className="text-white text-lg mt-4 sm:pr-6">
              Pallapay Gift Card offers a prepaid crypto option that can be used
              for multiple purposes such as transferring cryptocurrency and
              handling deposits or withdrawals.
            </p>

            <div className="mt-8!">
              <a href="https://dashboard.pallapay.com/auth/register">
                <Button className="bg-amber-400 hover:bg-amber-500 cursor-pointer text-black! flex items-center gap-1">
                  Get Started
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
              alt="Pallapay Crypto gift card"
            />
          </div>
        </div>
      </div>
      <div className="container mt-18! sm:mt-24!">
        <div className="background-dark-gradient rounded-3xl px-5 py-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7 text-white items-center">
            <div className="row-start-2 lg:row-start-1 text-left md:text-center lg:text-left">
              <h3 className="text-3xl font-semibold">
                What is the Pallapay Crypto Gift Card?
              </h3>
              <div className="mt-6 text-lg">
                Pallapay crypto gift-card is a multi-functional card that
                bridges the world of crypto and real-world purchases. Whether
                you’re looking to convert crypto to spendable funds or buy
                crypto conveniently, Pallapay makes it fast, secure, and easy.
              </div>
              <div className="mt-5 lg:mt-6 lg:text-lg space-y-3 w-fit sm:mx-auto lg:mx-0">
                <div className="flex gap-3 items-center">
                  <div className="text-black bg-amber-400 rounded-full flex w-5 h-5 items-center justify-center">
                    <Check size={16} strokeWidth={2.5} />
                  </div>
                  <div>Convert to any cryptocurrency instantly</div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="text-black bg-amber-400 rounded-full flex w-5 h-5 items-center justify-center">
                    <Check size={16} strokeWidth={2.5} />
                  </div>
                  <div>Convert to cash instantly</div>
                </div>
                <div className="flex gap-3 items-center bg-primaryOrange">
                  <div className="text-black bg-amber-400 rounded-full flex w-5 h-5 items-center justify-center">
                    <Check size={16} strokeWidth={2.5} />
                  </div>
                  <div>Shop where Pallapay is accepted</div>
                </div>
              </div>
            </div>
            <div className="row-start-1">
              <img
                src="/images/gift-cards/pallapay-gift-cards2.png"
                className="w-full md:w-[75%] lg:w-full mx-auto"
                alt="Pallapay Crypto gift card pack"
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
              alt="Buy and redeeme Pallapay Crypto Gift Cards"
            />
            <h3 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-5 text-(--primary-orange)">
              Buy and Redeem Pallapay Crypto Gift Cards
            </h3>
            <p className="mt-3 sm:mt-6 text-white">
              Purchase a Pallapay Crypto Gift Card with cash or card at Pallapay
              trusted partner locations. Redeem your balance instantly and get
              your cryptocurrency such as USDT, USDC, Bitcoin, Ethereum and
              more.
            </p>
          </div>
          <div>
            <img
              src="/images/gift-cards/coins-new.png"
              className="max-h-44 sm:p-2 mx-auto"
              alt="Gift Cryptocurrency with Pallapay Crypto Gift Card"
            />
            <h3 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-5 text-(--primary-orange)">
              Gift Cryptocurrency with Pallapay Crypto Gift Card
            </h3>
            <p className="mt-3 sm:mt-6 text-white">
              Send a Pallapay Crypto Gift Card to friends, family, or employees.
              They can spend, convert, or withdraw their crypto balance easily,
              making it the perfect way to gift digital currency.
            </p>
          </div>
          <div>
            <img
              src="/images/gift-cards/financial-growth.png"
              className="max-h-44 sm:p-2 mx-auto"
              alt="Sell Any Cryptocurrency via Pallapay Crypto Gift Card"
            />
            <h3 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-5 text-(--primary-orange)">
              Sell Any Cryptocurrency via Pallapay Crypto Gift Card
            </h3>
            <p className="mt-3 sm:mt-6 text-white">
              Buy a Pallapay Gift card with any cryptocurrency such as USDT,
              USDC, Bitcoin, Ethereum and more. Sell your Gift Card at Pallapay
              trusted partner locations and get cash or bank transfer.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="mt-20! lg:mt-34! container text-white md:text-black text-center relative">
        <ParallaxProvider>
          <Parallax
            rotate={[-6, 7]}
            speed={5}
            className="hidden sm:block absolute -bottom-10 left-[4%] w-[118px] h-[118px] rotate-[100deg] bg-gradient-to-b from-[#f9f9f9] via-[#d1d1d1] via-50% to-[#989898] rounded-[150%] blur-[2.5px] z-30"
          ></Parallax>
          <Parallax
            rotate={[-3, 3]}
            speed={-6}
            className="absolute -bottom-14 right-[25%] w-[54px] h-[54px] rotate-[120deg] bg-gradient-to-b from-[#fefefe] via-[#d1d1d1] via-50% to-[#989898] rounded-[150%] blur-[4px]"
          ></Parallax>
          <Parallax
            rotate={[-2, 7]}
            speed={2}
            className="absolute -top-14 right-[3%] w-[93px] h-[96px] rotate-[20deg] bg-gradient-to-b from-[#fefefe] via-[#d1d1d1] via-50% to-[#989898] rounded-[150%] blur-[4px]"
          ></Parallax>
        </ParallaxProvider>
        <div className="bg-white h-full rounded-3xl p-5 lg:px-14 lg:py-5 shadow-2xl items-center relative z-20">
          <h2 className="text-3xl font-semibold">
            Get Started in 3 Simple Steps
          </h2>
          <div className="py-12 mt-8">
            <img
              src="/images/gift-cards/main-steps.png"
              className="hidden sm:block w-full"
              alt="Pallapay Gift Card Flow"
            />
            <img
              src="/images/gift-cards/mobile-steps.png"
              className="block sm:hidden w-full"
              alt="Pallapay Gift Card Flow"
            />
          </div>
        </div>
      </div> */}

      <section className="bg-black text-white mt-20! lg:mt-34! container font-sans">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
              <span className="text-zinc-400 text-sm uppercase tracking-wider font-medium">
                3 Simple Steps
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight">
              Effortless process
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
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                )}

                <div className="relative flex items-start gap-6 z-10">
                  <span className="text-7xl font-bold text-amber-500 leading-none">
                    {step.id}.
                  </span>
                  <p className="text-xl font-medium leading-tight text-zinc-100 pt-2">
                    {step.title}
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
                alt="Gift card wallet"
                className="mx-auto lg:ml-0 lg:mr-auto"
              />
              <div className="absolute top-0 right-0 bg-[url(/images/gift-cards/zero-percent-new.png)] w-[63px] h-[75px] md:w-[127px] md:h-[150px] bg-contain bg-no-repeat"></div>
            </div>
            <div className="pb-6 flex items-end">
              <div className="pb-6">
                <h3 className="text-2xl font-semibold text-white">
                  Withdraw With 0% Fee!
                </h3>
                <p className="mt-2 text-white">
                  When you buy a Pallapay Crypto Gift Card with cash, you can
                  withdraw your balance in popular cryptocurrencies like USDT,
                  USDC, Bitcoin, XRP, Solana, Ethereum and more with 0% Fee!
                </p>
                <div className="mt-4">
                  <a href="https://dashboard.pallapay.com/auth/register">
                    <Button className="bg-amber-400 hover:bg-amber-500 cursor-pointer flex items-center gap-1 justify-self-center md:justify-self-start w-full sm:w-fit">
                      Try It Now !
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
              Crypto To Cash In a Simple Way
            </h4>
            <p className="mt-4">
              Buy a Pallapay Crypto Gift Card with any cryptocurrency on your
              dashboard, then sell for cash at any Pallapay Trusted Partner or
              transfer directly to your bank account!
            </p>
            <div className="mt-7">
              <a href="https://dashboard.pallapay.com/auth/register">
                <Button
                  className="text-black bg-amber-400 hover:bg-amber-500 cursor-pointer w-full sm:w-[40%] sm:mr-[5%]"
                  size="lg"
                >
                  Cash
                </Button>
              </a>
              <a href="https://dashboard.pallapay.com/auth/register">
                <Button
                  className="bg-transparent border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black cursor-pointer w-full sm:w-[45%] mt-2.5 sm:mt-0"
                  size="lg"
                >
                  Bank Transfer
                </Button>
              </a>
            </div>
          </div>
          <div className="relative row-start-1">
            <div className="absolute inset-0 bg-contain bg-[url('/images/gift-cards/bg-coins.png')] bg-no-repeat bg-center grayscale"></div>

            <img
              src="/images/gift-cards/hero-transfer2.png"
              className="relative w-[85%] mx-auto"
              alt="Pallapay crypto gift card"
            />
          </div>
        </div>
      </div>

      <div className="mt-16! lg:mt-24! container text-white relative">
        <h3 className="text-3xl font-semibold text-white">Trusted Partners</h3>

        <div className="relative">
          <div className="absolute top-0 left-2.5 translate-y-[-50%] px-1! text-xs text-neutral-500 select-none">
            <div className="relative">
              <div className="w-[106%] h-[3px] bg-black absolute top-[50%]  translate-y-[-2px] translate-x-[-3%]"></div>
              <span className="relative text-white!">Select Your Country</span>
            </div>
          </div>
          <Select defaultValue="DUBAI">
            <SelectTrigger className="w-full sm:w-[35%] h-12 mt-7 bg-black !text-white border border-neutral-400">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent className="w-full bg-black !text-white">
              <SelectGroup>
                <SelectItem
                  className="bg-black hover:!bg-neutral-10 !text-white"
                  value="DUBAI"
                >
                  United Arab Emirates, Dubai
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
                  PALLADIUM PAYMENT SERVICES
                </h6>
                <p className="text-neutral-400 text-sm">
                  Office P402, The Binary by Omniyat, Marasi Drive, Business
                  Bay, Dubai{" "}
                </p>
              </div>
            </div>
            <p className="mt-4 text-white">
              Palladium Payment Services is a trusted Pallapay partner for
              buying and selling
              <br />
              crypto gift cards.
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3">
              <div className="col-span-2 select-none space-x-1.5 space-y-1.5">
                <span className="inline-block px-2 py-1 rounded-2xl text-[#10E392] bg-[#10E392]/20 text-xs">
                  Online
                </span>
                <span className="inline-block px-2 py-1 rounded-2xl text-[#5980E5] bg-[#5980E5]/20 text-xs">
                  Cash At Branch
                </span>
                <span className="inline-block px-2 py-1 rounded-2xl text-[#10E392] bg-[#10E392]/20 text-xs">
                  Credit Card Accepted
                </span>
                <div className="px-2 py-0.5 rounded-2xl text-white bg-[#2A2A2A] text-xs inline-block">
                  <div className="flex items-center justify-center gap-x-0.5 w-fit">
                    Pay Using
                    <img
                      src="/images/gift-cards/visa-mastercard-logo.png"
                      alt="Visa Mastercard Logo"
                      width={65}
                    />
                  </div>
                </div>
                <span className="inline-block px-2 py-1 rounded-2xl text-[#FBC01D] bg-[#FFD65C]/20 text-xs">
                  B2B Sale
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
                    Buy And Sell Gift Card
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
                  BITCARDI DISCOUNTED CARD SERVICES
                </h6>
                <p className="text-neutral-400 text-sm">
                  Shop 12, Baniyas Complex Building, Baniyas Square, Deira,
                  Dubai
                </p>
              </div>
            </div>
            <p className="text-white mt-4">
              Bitcardi Discounted Card Services is a trusted Pallapay partner
              for buying and selling
              <br />
              crypto gift cards.
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3">
              <div className="col-span-2 select-none space-x-1.5 space-y-1.5">
                <span className="inline-block px-2 py-1 rounded-2xl text-[#10E392] bg-[#10E392]/20 text-xs">
                  Online
                </span>
                <span className="inline-block px-2 py-1 rounded-2xl text-[#5980E5] bg-[#5980E5]/20 text-xs">
                  Cash At Branch
                </span>
                <span className="inline-block px-2 py-1 rounded-2xl text-[#10E392] bg-[#10E392]/20 text-xs">
                  Credit Card Accepted
                </span>
                <div className="px-2 py-0.5 rounded-2xl text-white bg-[#2A2A2A] text-xs inline-block">
                  <div className="flex items-center justify-center gap-x-0.5 w-fit">
                    Pay Using
                    <img
                      src="/images/gift-cards/visa-mastercard-logo.png"
                      alt="Visa Mastercard Logo"
                      width={65}
                    />
                  </div>
                </div>
                <span className="inline-block px-2 py-1 rounded-2xl text-[#FBC01D] bg-[#FFD65C]/20 text-xs">
                  B2B Sale
                </span>
              </div>
              <div className="text-right mt-5 sm:mt-0">
                <a target="_blank" href="https://bitcardi.com/">
                  <Button
                    className="bg-amber-400 hover:bg-amber-500 cursor-pointer text-center w-full sm:w-fit"
                    size="lg"
                  >
                    Buy And Sell Gift Card
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20! lg:mt-36! container text-black text-center relative">
        <ParallaxProvider>
          <Parallax
            rotate={[-6, 7]}
            speed={-5}
            className="hidden sm:block absolute -bottom-10 left-[4%] w-[80px] h-[75px] rotate-[100deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101]  rounded-[150%] blur-[2.5px] z-30"
          ></Parallax>
          <Parallax
            rotate={[-7, 7]}
            speed={-5}
            className="absolute -top-14 right-[3%] w-[93px] h-[96px] rotate-[-80deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[4px] z-30"
          ></Parallax>
          <Parallax
            rotate={[-3, 5]}
            speed={3}
            className="absolute top-12 right-[10%] w-[20px] h-[20px] bg-[url(/images/dark-star.png)] bg-contain bg-no-repeat z-30"
          ></Parallax>
        </ParallaxProvider>
        <div className="bg-gradient-to-r from-[#15171a]  to-(--primary-grey) md:to-[#353C45]/50 h-full rounded-3xl p-5 sm:p-8 lg:px-14 lg:py-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-20">
          <div className="text-white md:col-span-7 text-center lg:pr-12 row-start-2 md:row-start-1">
            <h2 className="text-3xl font-semibold">Become a Distributor!</h2>
            <div className="text-lg mt-5">
              Join Pallapay as an official distributor of Prepaid Gift Cards and
              take advantage of the growing demand for flexible, digital payment
              solutions.
            </div>
            <div className="w-fit mx-auto px-12 py-3 text-gray-700 border border-gray-700 rounded-lg  select-none mt-5">
              Coming Soon !
            </div>
          </div>
          <div className="md:col-span-5 relative row-start-1">
            <img
              className="w-[75%] sm:w-[55%] md:w-[75%] mx-auto relative z-20"
              src="/images/gift-cards/pallapay-money-exchange.png"
              alt="Exchange cryptocurrencies in pallapay"
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
              (FAQ)
            </div>
          </div>

          {/* Right Accordion Section */}
          <div className="sm:col-span-4">
            <Accordion
              type="single"
              collapsible
              className="w-full border-b border-gray-900"
            >
              {faqs.map((faq) => {
                const isOpen = openItem === faq.value;

                return (
                  <AccordionItem
                    key={faq.value}
                    value={faq.value}
                    onClick={() => setOpenItem(isOpen ? null : faq.value)}
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
                  See More
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
        <div className="text-3xl font-semibold text-white">Benefits</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12">
          {benefits.map((item) => (
            <InteractiveGradientCard
              key={item.title}
              className="bg-[#353C45] text-white flex flex-col items-center justify-center text-center p-4 sm:p-6"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="max-w-[95%] mx-auto"
              />

              <div className="text-lg sm:text-xl font-semibold mt-3 sm:mt-5">
                {item.title}
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
              alt="Global Use of Pallapay"
              className="w-full drop-shadow-[0_0px_40px_rgba(0,0,0,0.15)]"
            />
          </div>
          <div className="md:col-span-8 flex items-center">
            <div>
              <div className="text-xl sm:text-3xl font-semibold">
                Global Use. Local Convenience.
              </div>
              <div className="sm:text-base mt-2 sm:mt-5">
                Whether you're in Dubai, Toronto, or anywhere in between,
                Pallapay gives you the power to manage your money across
                borders, without limits.
              </div>
              <div className="text-center mt-6">
                <a href="https://dashboard.pallapay.com/auth/register">
                  <Button
                    className="text-black bg-amber-400 hover:bg-amber-500 cursor-pointer w-full sm:w-fit"
                    size="xl"
                  >
                    Create Account
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <MainFooter className="!mt-14" hasContactSection={false} /> */}
    </>
  );
}
