import Image from "next/image";
import React from "react";

interface CoinDetailsProps {
  image: string;
  title: string;
  description: string;
  textSecond: string;
  benefits: string[];
  lastText: string;
}

const CoinDetails = ({
  image,
  title,
  description,
  textSecond,
  benefits,
  lastText,
}: CoinDetailsProps) => {
  return (
    <div className="max-w-6xl w-full relative grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="absolute -translate-1/2 left-1/2 top-1/2 w-64 h-[400px] bg-(--primary-orange)/50 blur-[150px]"></div>
      <div className="relative w-full bg-[#292B31] rounded-2xl p-8   overflow-hidden group">
        <div className="h-full w-1 bg-(--primary-orange) absolute left-0 top-0"></div>
        <h2 className="text-yellow-500 text-xl md:text-2xl font-semibold text-left mb-6">
          {title}
        </h2>
        <div className="flex flex-col w-full text-left md:flex-row gap-6">
          <p className="text-gray-300  w-full md:w-2/3 z-10">{description}</p>
          <div className="flex w-full md:w-1/2 justify-center items-center  md:items-end ">
            <Image src={image} alt="USDT Coin" width={200} height={200} />
          </div>
        </div>
      </div>

      <div className="relative text-left bg-[#2D2E35] overflow-hidden rounded-2xl p-8 flex flex-col justify-between">
        <div className="h-full w-1 bg-(--primary-orange) absolute left-0 top-0"></div>
        <p className="text-gray-300 mb-3">{textSecond}</p>
        <ul className="space-y-4">
          {benefits.map((benefit: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-4 h-4 mt-1 bg-yellow-500 rounded-sm flex-shrink-0" />
              <span className="text-gray-200">{benefit}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-400 mt-5">{lastText}</p>
      </div>
    </div>
  );
};

export default CoinDetails;
