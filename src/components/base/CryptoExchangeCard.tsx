import Image from "next/image";
import React from "react";

const CryptoExchangeCard = () => {
  return (
      <div className="w-full  rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden bg-linear-to-b from-(--primary-grey) to-[#0f1012] shadow-2xl">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 lg:gap-12">
          {/* Text Content Area */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h2 className="text-[#f1b90c] text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wide">
              USDT to Cash Exchange in Istanbul
            </h2>

            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              Our OTC service allows traders, investors, and international
              visitors to sell USDT in Istanbul safely. With deep liquidity and
              access to global crypto markets, we provide reliable execution for
              every USDT to cash transaction.
            </p>

            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              Whether you want to cash out crypto profits or convert digital
              assets to fiat, our Istanbul crypto exchange service offers a fast
              and professional solution.
            </p>
          </div>

          {/* Image Area */}
          <div className="w-full md:w-auto flex justify-center">
            <Image
              alt="USDT to Cash Exchange"
              src="/images/turkey/exchangeCardBitcoin.png"
              width={250}
              height={250}
              className="w-36 sm:w-44 md:w-52 lg:w-60 h-auto"
            />
          </div>
        </div>
      </div>
  );
};

export default CryptoExchangeCard;
