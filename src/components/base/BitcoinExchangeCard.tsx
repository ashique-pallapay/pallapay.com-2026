import Image from "next/image";
import React from "react";

const BitcoinExchangeCard = () => {
  return (
    <div className="w-full  flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6">
      {/* Text Section */}
      <div className="w-full   md:w-2/3 text-left">
        <h1 className="text-xl md:text-2xl text-(--primary-orange) mb-3">
          Bitcoin to Cash Exchange in Istanbul
        </h1>

        <p className="mb-3">
          Istanbul has become an important regional hub for cryptocurrency
          trading. The city’s strong fintech ecosystem and international
          business environment attract traders from around the world. Residents,
          investors, and tourists often look for a reliable way to convert
          Bitcoin into cash when visiting or doing business in the city.
        </p>

        <p>
          Our service allows clients to sell Bitcoin in Istanbul quickly and
          receive cash in USD, EUR, or Turkish Lira with professional assistance
          and secure transactions.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/images/turkey/sell-bitcoin-exchange-image.png"
          height={250}
          width={250}
          alt="bitcoin-image"
          className="w-48 md:w-64 h-auto"
        />
      </div>
    </div>
  );
};

export default BitcoinExchangeCard;
