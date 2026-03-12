import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import CryptoLivePrice from "./cryptoLivePrices";

interface HowtoBuyBitcoinTurkeyProps {
  crypto: string;
  shortForm?: string;
  showLiveValue?: boolean;
  steps?: {
    id: number;
    title: string;
    description: string;
    image: string;
    alt: string;
  }[];
  purpose?: "Buy" | "Sell";
}
const HowtoBuyBitcoinTurkey = ({
  crypto,
  shortForm,
  showLiveValue = false,
  purpose = "Buy",
  steps
}: HowtoBuyBitcoinTurkeyProps) => {
  return (
    <div className="">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
        How to {purpose}{" "}
        <span className="text-yellow-500">
          {crypto} {shortForm && shortForm}
        </span>{" "}
        in Istanbul?
      </h2>

      {/* <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"> */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {" "}
        {steps?.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-32 h-32 bg-[#f5b813]/10 rounded-full flex items-center justify-center border border-zinc-800 overflow-visible">
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={180}
                  height={180}
                  className="mr-10 mt-4 object-contain"
                />
              </div>

              <div className="absolute -top-2 -right-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#f5b813] bg-black">
                  <div className="flex items-center justify-center w-7 h-7 bg-[#f5b813] rounded-full">
                    <span className="text-black text-xs font-extrabold">
                      {step.id}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2 text-white">
              {step.title}
            </h3>
            <p className="text-zinc-400 text-sm max-w-[250px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
      {showLiveValue && (
        <div className="text-center text-white  space-y-2 mt-20! sm:mt-28!">
          <h1 className="text-4xl">Live Top Crypto Prices</h1>
          <span className="text-white/50">
            Track the market with real-time price updates
          </span>
          <CryptoLivePrice />
        </div>
      )}
      <div className="flex justify-center items-center">
        <Image
          src="/images/turkey/trusted-site.png"
          alt="trusted-site-banner"
          width={750}
          height={450}
        />
      </div>

      <div className="bg-(--primary-orange)/10 max-w-4xl mx-auto relative p-[1px] rounded-3xl border border-(--primary-orange)">
        <div className="bg-(--primary-orange)/20 right-0 -z-20 h-32 w-32 sm:h-40 sm:w-40 blur-3xl absolute"></div>
        <div className="bg-(--primary-orange)/20 bottom-0 left-0 -z-20 h-32 w-32 sm:h-40 sm:w-40 blur-3xl absolute"></div>

        <div className="rounded-3xl p-6 sm:p-8 md:p-10 text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 leading-tight">
            Step Into the Crypto World
          </h2>

          {/* Description */}
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto text-sm sm:text-base">
            Open a free account today and benefit from 0% commission on your
            first trade. Account opening process takes only 15 minutes!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all w-full sm:w-auto">
              Visit our office
            </button>

            <button className="border border-(--primary-orange) bg-(--primary-orange)/10 text-yellow-500/80 font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all w-full sm:w-auto">
              Frequently Asked Questions
            </button>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-500">
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3 h-3 text-black" />
              </div>
              <span>No credit card required</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3 h-3 text-black" />
              </div>
              <span>24/7 support</span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-3 h-3 text-black" />
              </div>
              <span>Open account in 15 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowtoBuyBitcoinTurkey;
