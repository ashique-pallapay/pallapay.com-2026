import Image from "next/image";
import React from "react";

const EasiestWayToBuy = ({
  crypto,
  shortForm,
  purpose = "Buy",
}: {
  crypto: string;
  shortForm?: string;
  purpose?: string;
}) => {
  return (
    <div className="relative  w-full bg-(--primary-orange)/10 border border-(--primary-orange) rounded-[40px] shadow-2xl p-8 md:p-16">
      <div className="absolute -top-12 -right-4 md:-top-16 md:right-12">
        <div className="relative w-16 h-16 md:w-40 md:h-40 rounded-full border border-(--primary-orange) bg-linear-to-b from-[#1a170e] to-black flex items-center justify-center  shadow-xl">
          <Image
            src="/images/turkey/bitcoin-hand.png"
            alt={crypto}
            width={250}
            height={250}
            className="absolute md:bottom-4 bottom-0  w-[120%] h-auto max-w-none"
          />
        </div>
      </div>

      <div className="space-y-6 ">
        <h1 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
          The Easiest Way to {purpose} {crypto} {shortForm && shortForm} in
          Istanbul, Turkey
        </h1>

        <p className="leading-relaxed">
          Istanbul is a city where East meets West, blending rich history with
          modern living. From the stunning Hagia Sophia to the vibrant Grand
          Bazaar, the city offers a colorful life style that attracts millions
          of visitors and residents alike. Living in Istanbul means enjoying
          culture, business opportunities, and a dynamic economy.
        </p>

        <p className="leading-relaxed">
          To maintain a comfortable lifestyle in such a vibrant city, having a
          strong source of income is essential. Many people today look for smart
          investment opportunities to grow their wealth. In this digital era,
          cryptocurrencies have become one of the most popular investment
          options worldwide.
        </p>

        <div className="space-y-3">
          <p className="font-medium text-gray-100">
            Cryptocurrency offers several opportunities:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#7a6431] rounded-full"></span>
              You can buy {crypto}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#7a6431] rounded-full"></span>
              You can sell {crypto}
            </li>
            {crypto != "USDT" && (
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#7a6431] rounded-full"></span>
                You can trade {crypto}
              </li>
            )}
          </ul>
        </div>

        <p className="italic">
          Among these options, buying {crypto} is often the first step for many
          investors.
        </p>

        <h2 className="text-lg font-semibold text-white pt-2 border-b border-[#7a6431]/20 pb-1 inline-block">
          Buying {crypto} in Istanbul
        </h2>

        <p className="leading-relaxed">
          If you are in Istanbul and looking for the easiest way to buy {crypto}{" "}
          without complicated procedures, choosing a reliable and secure
          platform is very important. A trusted OTC (Over-The-Counter)platform
          can provide a smooth and fast process for purchasing {crypto}.
        </p>

        <p className="leading-relaxed">
          One such platform is{" "}
          <span className="text-white font-bold underline decoration-[#7a6431]">
            Pallapay
          </span>
          , which offers users a secure and straightforward way to buy {crypto}
          and other cryptocurrencies.
        </p>

        <p className="pt-6 text-xs md:text-sm  max-w-lg border-t border-white/5 mt-3">
          As always, before investing, make sure to understand the risks
          involved and choose a platform that prioritizes security and
          reliability.
        </p>
      </div>
    </div>
  );
};

export default EasiestWayToBuy;
