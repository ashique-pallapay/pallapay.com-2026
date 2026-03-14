"use client";

import * as React from "react";
import { MainNav } from "@/components/base/MainNav";
import HowtoBuyBitcoinTurkey from "@/components/base/HowtoBuyBitcoinTurkey";
import TurkeyHeroSection from "@/components/base/TurkeyHeroSection";
import TurkeyInfoSection from "@/components/base/buy-from-turkey-info";
import BuyAndSellUSDT from "@/components/base/BuyAndSellUSDT";
import { FaqTurkey } from "@/components/base/FaqTurkey";
import EasiestWayToBuy from "@/components/base/EasiestWaytoBuyTurkey";
import KeyBenefitsTurkey from "@/components/base/KeyFeaturesTurkey";
import { useTranslations } from "next-intl";
import {
  CheckCircle2,
  DollarSign,
  ShieldCheck,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import CryptoExchangeCard from "@/components/base/CryptoExchangeCard";
import CryptoLivePrice from "@/components/base/cryptoLivePrices";
import Image from "next/image";
import StepIntoCrypto from "@/components/base/StepIntoCrypto";
import WhyChooseTurkey from "@/components/base/WhyChooseTurkey";

export function SellUsdtInIstanbul() {
  const keyFeaturesData = [
    {
      icon: <DollarSign className="w-6 h-6 text-black" />,
      id: "01",
      title: "Cash settlement in USD, EUR, or TRY",
      description: "Flexible payment options to suit your needs",
    },
    {
      icon: <Zap className="w-6 h-6 text-black" />,
      id: "02",
      title: "Fast USDT to cash transactions",
      description: "Get your cash immediately with no delays.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      id: "03",
      title: "Competitive exchange rates",
      description: "Large liquidity allows better rates when buying USDT.",
    },
    {
      id: "04",
      title: "Secure OTC crypto service",
      description: "Your privacy and security are our priority",
      icon: <ShieldCheck className="w-6 h-6 text-black" />,
    },
    {
      icon: <Users className="w-6 h-6 text-black" />,
      id: "05",
      title: "Support for both small and large transactions",
      description: "Perfect for individuals and businesses alike.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-black" />,
      id: "06",
      title: "No hidden fees or commissions",
      description: "Transparent pricing with what you see is what you get",
    },
  ];

  const howToBuySteps = [
    {
      id: 1,
      title: "Contact the OTC desk in Istanbul",
      description:
        "Confirm the current USDT exchange rate and the amount you want to purchase.",
      image: "/images/turkey/holding-location-hand.png",
      alt: "Location Icon",
    },
    {
      id: 2,
      description: "Transfer your ETH using our automated system.",
      title: "Send your USDT (Tether) to the provided wallet address.",
      image: "/images/turkey/secure-mobile-payment.png",
      alt: "Payment Icon",
    },
    {
      id: 3,
      title: "Receive cash in USD, EUR, or Turkish Lira instantly",
      description:
        "Receive cash in USD, EUR, or Turkish Lira instantly after confirmation.",
      image: "/images/turkey/crypto-hold-bitcoin.png",
      alt: "Bitcoin Icon",
    },
  ];

  const t = useTranslations("turkeyPage.howToBuy");

  const faqs = [
    {
      value: "1",
      question: "Where can I sell USDT in Istanbul?",
      answer:
        "You can sell USDT in Istanbul through our secure OTC crypto exchange. We provide fast USDT to cash services and allow clients to convert USDT into USD, EUR, or Turkish Lira safely.",
    },
    {
      value: "2",
      question: "How can I convert USDT to cash in Istanbul?",
      answer:
        "To convert USDT to cash in Istanbul, simply contact our OTC desk, send your USDT, and receive cash in USD, EUR, or TRY. The process is fast, secure, and completed within minutes.",
    },
    {
      value: "3",
      question: "Is selling USDT in Istanbul safe?",
      answer:
        "Yes. Our Istanbul OTC desk provides secure crypto-to-cash transactions with transparent pricing, professional assistance, and reliable settlement.",
    },
    {
      value: "4",

      question: "What currencies can I receive when selling USDT in Istanbul?",
      answer:
        "When you sell USDT in Istanbul, you can receive cash in US Dollars (USD), Euro (EUR), or Turkish Lira (TRY) depending on your preference.",
    },
    {
      value: "5",
      question: "Is there a minimum or maximum amount to sell USDT?",
      answer:
        "Our OTC service supports both small and large USDT transactions, providing deep liquidity for traders, investors, and businesses.",
    },
    {
      value: "6",
      question: "How long does it take to sell USDT in Istanbul?",
      answer:
        "Most USDT to cash transactions in Istanbul are completed within a few minutes after the transfer is confirmed.",
    },
    {
      value: "7",
      question: "Do I need verification to sell USDT in Istanbul?",
      answer:
        "For larger transactions, basic verification may be required to ensure compliance and transaction security.",
    },
  ];

  return (
    <>
      <div className="relative bg-black overflow-hidden">
        <MainNav hasBackground={true} />
        <TurkeyHeroSection
          purpose="Sell"
          image="/images/turkey/tether.png"
          title1="Sell USDT for Cash in Istanbul"
          title2="Get USD, EUR or TRY Instantly"
        />
      </div>

      <div className="container mt-20! sm:mt-28!">
        <BuyAndSellUSDT
          title="Sell USDT in Istanbul – Secure USDT to Cash Exchange"
          para4="If you need a reliable place to sell USDT in Istanbul, our OTC service offers fast execution, competitive pricing, and secure crypto-to-fiat transactions for every client"
          para3="Located in central Istanbul, our crypto exchange service allows clients to sell USDT safely and receive cash within minutes. With secure transactions, professional support, and access to global liquidity providers, we are one of the most trusted options for USDT to cash exchange in Istanbul."
          para2="Our Istanbul USDT OTC desk supports both large and small USDT conversions, offering deep liquidity and fast settlement. Whether you want to cash out USDT to USD, exchange USDT to Turkish Lira, or convert crypto for business payments, our experienced team ensures a smooth and transparent process."
          para1="If you are looking to sell USDT in Istanbul and receive cash in USD, EUR, or Turkish Lira (TRY), our professional OTC crypto exchange service in Istanbul provides a fast, secure, and reliable solution. We specialize in USDT to cash transactions, helping traders, investors, and international visitors convert Tether (USDT) to fiat instantly at competitive market rates."
        />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <KeyBenefitsTurkey
          title="Why Sell USDT in Istanbul Through Our OTC Desk"
          data={keyFeaturesData}
        />
      </div>

      <div className=" mt-20! sm:mt-28! bg-linear-to-b from-black via-(--primary-grey) to-black">
        <p className="text-md md:text-lg text-white text-center mt-20! sm:mt-28!">
          Sell USDT in Istanbul securely through our trusted OTC desk, offering
          fast USDT to cash exchange services in USD, EUR, or Turkish Lira.
        </p>
        <TurkeyInfoSection />
      </div>

      <div className="container text-center mt-20! sm:mt-28!">
        <HowtoBuyBitcoinTurkey
          data={howToBuySteps}
          crypto="Tether"
          shortForm="(USDT)"
          purpose="Sell"
          information="Our team ensures a smooth and transparent USDT to cash exchange process for every transaction."
          subTitle="Selling USDT in Istanbul is simple and secure through our OTC desk."
        />
      </div>
      <div className="container text-center mt-5! sm:mt-28!">
        <CryptoExchangeCard />
      </div>

      <div className=" container text-center text-white  space-y-2 mt-20! sm:mt-28!">
        <h1 className="text-4xl">{t("livePricesTitle")}</h1>
        <span className="text-white/50">{t("livePricesDesc")}</span>
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
      <div className="container text-center mt-5! sm:mt-28!">s
        <FaqTurkey
          crypto="Tether"
          shortForm="(USDT)"
          purpose="Sell"
          faqs={faqs}
        />
      </div>
      <div className="container mt-20! sm:mt-28!">
        <EasiestWayToBuy crypto="USDT" purpose="Sell" />
      </div>
    </>
  );
}
