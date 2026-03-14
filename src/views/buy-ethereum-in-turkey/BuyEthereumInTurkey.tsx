"use client";

import * as React from "react";
import { MainNav } from "@/components/base/MainNav";
import TurkeyInfoSection from "@/components/base/buy-from-turkey-info";
import HowtoBuyBitcoinTurkey from "@/components/base/HowtoBuyBitcoinTurkey";
import WhyChooseTurkey from "@/components/base/WhyChooseTurkey";
import { FaqTurkey } from "@/components/base/FaqTurkey";
import EasiestWayToBuy from "@/components/base/EasiestWaytoBuyTurkey";
import TurkeyHeroSection from "@/components/base/TurkeyHeroSection";
import WhyShouldBuyEthereumTurkey from "@/components/base/WhyEthereumTrustableExchange";
import KeyBenefitsTurkey from "@/components/base/KeyFeaturesTurkey";
import { useTranslations } from "next-intl";
import StepIntoCrypto from "@/components/base/StepIntoCrypto";
import Image from "next/image";
import CryptoLivePrice from "@/components/base/cryptoLivePrices";
import CoinDetails from "@/components/base/CoinDetails";
import {
  CheckCircle2,
  DollarSign,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Description } from "@radix-ui/react-dialog";
import BuyEthereumFastSecure from "@/components/base/BuyEthereumFastSecure";

export function BuyEthereumInTurkey() {
  const t = useTranslations("turkeyPage.hero");

  const keyFeaturesData = [
    {
      icon: <DollarSign className="w-6 h-6 text-black" />,
      id: "01",
      title: "Buy ETH with USD cash or Turkish Lira",
      description: "Flexible payment options to suit your needs",
    },
    {
      icon: <Zap className="w-6 h-6 text-black" />,
      id: "02",
      title: "Fast settlement",
      description: "Most ETH transactions are completed within minutes.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      id: "03",
      title: "Competitive exchange rates",
      description:
        "Deep liquidity ensures better pricing when buying Ethereum.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-black" />,
      id: "04",
      title: "Secure transactions",
      description:
        "Professional OTC desks provide safe and verified cryptocurrency transactions.",
    },
    {
      icon: <Users className="w-6 h-6 text-black" />,
      id: "05",
      title: "Support for large transactions",
      description:
        "OTC services can process both small purchases and high-volume Ethereum trades.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-black" />,
      id: "06",
      title: "Reliable and Safe",
      description:
        "For traders, investors, and businesses, OTC services offer one of the most reliable ways to buy ETH in Istanbul safely.",
    },
  ];

  const howToBuySteps = [
    {
      id: 1,
      title: "Contact the OTC desk",
      description:
        "Confirm the current ETH exchange rate and the amount of Ethereum you want to purchase.",
      image: "/images/turkey/holding-location-hand.png",
      alt: "Location Icon",
    },
    {
      id: 2,
      title: "Choose your payment method",
      description:
        "You can buy Ethereum using USD, EUR, or Turkish Lira (TRY).",
      image: "/images/turkey/secure-mobile-payment.png",
      alt: "Payment Icon",
    },
    {
      id: 3,
      title: "Receive ETH in your wallet",
      description:
        "After payment confirmation, the Ethereum will be transferred directly to your crypto wallet.",
      image: "/images/turkey/crypto-hold-bitcoin.png",
      alt: "Bitcoin Icon",
    },
  ];

  const faqs = [
    {
      value: "1",
      question: "Where can I buy Ethereum in Istanbul?",
      answer:
        "You can buy Ethereum in Istanbul through a trusted OTC crypto exchange that allows ETH purchases using USD, EUR, or Turkish Lira.",
    },
    {
      value: "2",
      question: "How long does it take to buy Ethereum in Istanbul?",
      answer:
        "Most Ethereum purchases are completed within minutes after payment confirmation.",
    },
    {
      value: "3",
      question: "What currencies can I use to buy Ethereum in Istanbul?",
      answer:
        "You can buy Ethereum using US Dollars (USD), Euro (EUR), or Turkish Lira (TRY).",
    },
    {
      value: "4",
      question: "Is buying Ethereum in Istanbul safe?",
      answer:
        "Yes. When using a professional OTC crypto exchange, ETH transactions are secure and transparent.",
    },
    {
      value: "5",
      question: "Do I need a crypto wallet to buy Ethereum?",
      answer:
        "Yes. To receive Ethereum, you must provide a compatible ETH wallet address.",
    },
    {
      value: "6",
      question: "Can tourists buy Ethereum in Istanbul?",
      answer:
        "Yes. Many international visitors and traders buy Ethereum in Istanbul through OTC crypto exchanges.",
    },
    {
      value: "7",
      question: "Is there a minimum or maximum amount to buy Ethereum?",
      answer:
        "OTC services usually support both small purchases and large Ethereum transactions depending on available liquidity.",
    },
  ];

  const CointBenefits = [
    "A large global blockchain ecosystem",
    "Smart contract technology ",
    "Strong adoption by developers and companies",
    "Fast international crypto transfers",
  ];

  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <MainNav hasBackground={true} />
        <TurkeyHeroSection
          title1="Buy Ethereum in Istanbul"
          title2="Purchase ETH with USD, EUR or TRY"
          image="/images/turkey/ethereum.png"
        />
      </div>

      <div className="container mt-20! sm:mt-28!">
        <BuyEthereumFastSecure
          title="Buy Ethereum in Istanbul – Fast and Secure ETH Exchange"
          para1="If you want to buy Ethereum in Istanbul quickly and securely, using a professional OTC crypto exchange provides one of the most reliable solutions. Istanbul has become a growing hub for cryptocurrency trading, attracting investors, traders, and international visitors who want easy access to digital assets."
          para2="Ethereum (ETH) is one of the most widely used cryptocurrencies in the world and powers thousands of blockchain applications and decentralized finance platforms. Many investors choose to buy Ethereum as part of their crypto portfolio because of its strong global adoption and technological ecosystem."
          para3="Our OTC crypto exchange service allows clients to buy Ethereum in Istanbul safely, with transparent pricing and fast settlement."
        />
      </div>

      <div className="mt-20! sm:mt-28! bg-linear-to-b from-black via-(--primary-grey) to-black">
        <TurkeyInfoSection />
        <p className="text-md md:text-lg text-(--primary-orange) text-center mt-10 sm:mt-5">
          Pallapay is the best place to buy Ethereum (ETH) and other
          Cryptocurrency with cash instantly.
        </p>
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <KeyBenefitsTurkey
          title="Why Buy Ethereum Through an OTC Crypto Exchange"
          data={keyFeaturesData}
        />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <HowtoBuyBitcoinTurkey
          data={howToBuySteps}
          purpose="Buy"
          crypto="Ethereum"
          subTitle="Buying Ethereum in Istanbul through an OTC crypto exchange is simple and secure."
          shortForm="(ETH)"
          information="This process allows clients to buy Ethereum in Istanbul quickly with transparent pricing and fast settlement."
        />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <CoinDetails
          image="/images/turkey/turkey-ethereum.png"
          title="What is Ethereum (ETH)?"
          description="Ethereum is a decentralized blockchain platform that allows developers to create smart contracts and decentralized applications. The native cryptocurrency of the network is ETH, which is widely used for trading, payments, and blockchain transactions."
          textSecond="Many crypto investors choose Ethereum because it offers:"
          benefits={CointBenefits}
          lastText="Because of these advantages, Ethereum has become one of the most widely traded digital assets in the world."
        />
      </div>

      <div className="container text-center text-white space-y-2 mt-20! sm:mt-28!">
        <h1 className="text-4xl">Live Top Crypto Prices</h1>
        <span className="text-white/50">
          Track the market with real-time price updates
        </span>
        <CryptoLivePrice />
      </div>

      <div className="flex justify-center items-center">
        <Image
          src="/images/turkey/trusted-site.png"
          alt="trusted-site-banner"
          width={750}
          height={450}
        />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <StepIntoCrypto />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <WhyChooseTurkey />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <FaqTurkey crypto="Ethereum" shortForm="(ETH)" faqs={faqs} />
      </div>

      <div className="container mt-20! sm:mt-28!">
        <EasiestWayToBuy crypto="Ethereum" shortForm="(ETH)" />
      </div>
    </>
  );
}
