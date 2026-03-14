"use client";

import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

interface BuySellProps {
  title: string;
  para1: string;
  para2: string;
  para3: string;
  para4: string;
}
const BuyAndSellUSDT = ({
  title,
  para1,
  para2,
  para3,
  para4,
}: BuySellProps) => {

  return (
    <div className="relative bg-[#181A20] rounded-xl px-1 py-9 md:p-1 shadow-2xl">
      <ParallaxProvider>
        <Parallax rotate={[0, 5]} speed={6}>
          <div className="absolute bg-[url(/images/shapes/star.png)] bg-contain bg-no-repeat -translate-x-5 sm:translate-x-24 md:w-[35px] w-[15px] h-[15px] md:h-[35px] right-[350px] bottom-24" />
        </Parallax>
      </ParallaxProvider>
      <div className="absolute lg:z-10 -z-10 -top-10! right-[4.5%] w-[150px]! h-[150px]! rotate-[-16deg] bg-linear-to-b from-[#353C45] via-[#181A20] to-[#010101] rounded-full blur-[10px]! particle-move-2"></div>
      <div className="absolute -top-20 -right-3 w-64 h-64 ">
        <Image
          src="/images/turkey/tether-usdt-cryptocurrency-coins-dark.png"
          alt=" Purple Circle"
          width={150}
          height={150}
        />
      </div>
      <div className="absolute left-0 -bottom-52 w-64 h-64 ">
        <Image
          src="/images/turkey/tether-usdt-cryptocurrency-coins-dark-background.png"
          alt=" Purple Circle"
          width={150}
          height={150}
        />
      </div>
      <div className="p-10 text-left space-y-4 sm:space-y-6 mx-auto px-4 flex lg:flex-row flex-col gap-8 items-center">
        <div className="md:w-2/3 w-full px-1 md:px-5 md:py-3 space-y-4 sm:space-y-5 text-white text-sm sm:text-base md:text-lg leading-relaxed">
          <h1 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
            {title}
          </h1>
          <p>{para1}</p>
          <p>{para2}</p>
          <p>{para3}</p>
          <p>{para4}</p>
        </div>

        <div className=" relative flex justify-center md:justify-end">
          <Image
            src="/images/turkey/usdt-buynow.png"
            alt="OTC Crypto Office"
            width={100}
            height={100}
            className=" w-16 md:w-24 md:left-0 left-4  -top-4 md:top-0 h-auto absolute"
          />
          <Image
            src="/images/turkey/usdt-sell.png"
            alt="OTC Crypto Office"
            width={100}
            height={100}
            className="w-16 md:w-24 h-auto absolute -top-4 md:top-0 md:right-16 right-0 "
          />
          <Image
            src="/images/turkey/3d-illustration-hotel-reception-.png"
            alt="OTC Crypto Office"
            width={500}
            height={500}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyAndSellUSDT;
