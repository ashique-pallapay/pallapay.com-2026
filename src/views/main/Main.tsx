import * as React from "react";
import { ScrollingCharacterReveal } from "@/components/text-scroll-color";
import {
  BestSuitedFor,
  FaqSection,
  HowItWorks,
  InstantSettlementSection,
  MainHero,
  SolutionsSection,
  TrustSlider,
  WhyPallapay,
} from "@/views/main/components";
import { AboutUsSection } from "@/components/base/AboutUsSection";
import { VideoSection } from "@/components/base/VideoSection";
import { useTranslations } from "next-intl";
// import CryptoRamp from "@/components/base/CryptoRamp";
// import { MainFooter } from "@/components/base/MainFooter";
// import { useState } from "react";
// import { clsx } from "clsx";

export function Main() {
  const t = useTranslations();
  const longText = t("scrollText") || "No crypto knowledge required! Pallapay lets you charge in fiat and settle in fiat, while we handle the crypto behind the scenes.";

  return (
    <>
      <MainHero />
      <TrustSlider />
      <HowItWorks />
      <BestSuitedFor />
      {/* <CryptoRamp /> */}
      <WhyPallapay />
      <SolutionsSection />
      <InstantSettlementSection />
      <VideoSection className="mt-24 sm:mt-36" />
      <div className="mt-20! sm:mt-36! text-2xl sm:text-5xl md:text-6xl font-semibold text-center leading-[125%] container">
        <ScrollingCharacterReveal
          text={t("scrollText")}
          scrollThresholds={Array.from(
            { length: longText.length },
            (_, i) => (i + 1) * 3.5,
          )}
        />
      </div>
      <FaqSection />
      <AboutUsSection />
      {/* <EasyIntegration /> */}
      {/*<News />*/}
      {/* <MainFooter /> */}
    </>
  );
}

{
  /* <div className="container mt-20 sm:mt-36 relative overflow-visible">
        <div className="hidden sm:block absolute right-[-50%] 2x:right-[-75%] top-[-40%] w-[85%] h-[150%] z-10 opacity-60 bg-cover bg-center bg-no-repeat bg-[url(/images/shapes/faded-color.png)]"></div>
        <div className="bg-white rounded-3xl grid grid-cols-1 lg:grid-cols-12 text-black shadow-[0_0px_40px_rgba(0,0,0,0.15)] z-20 relative">
          <div className="sm:pl-14 sm:pr-8 sm:pb-6 sm:py-14 lg:col-span-5 text-center sm:text-left relative">
            <div className="text-right absolute sm:relative w-full px-6 py-5 sm:px-0 sm:py-0">
              <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] bg-cover bg-[url(/images/icons/quote.svg)] inline-block"></div>
            </div>
            <div className="text-2xl sm:text-4xl font-semibold sm:mt-8 py-14 sm:py-0">
              What People Say
            </div>
            <div className="items-center ml-28 gap-2 w-full mt-6 hidden sm:flex 2xl:hidden">
              <div
                className="cursor-pointer bg-[url(/images/cirlce-arrow.svg)] bg-no-repeat bg-cover w-[30px] h-[30px] scale-[-1]"
                onClick={() =>
                  setActiveSlideNumber((prevState) => (prevState == 1 ? 2 : 1))
                }
              ></div>
              <div
                className="cursor-pointer bg-[url(/images/cirlce-arrow.svg)] bg-no-repeat bg-cover w-[30px] h-[30px]"
                onClick={() =>
                  setActiveSlideNumber((prevState) => (prevState == 1 ? 2 : 1))
                }
              ></div>
            </div>
          </div>
          <div className="lg:col-span-7 sm:py-14 sm:px-6 lg:px-0">
            <div className="sm:w-[140%] sm:h-[415px] sm:bg-gradient-to-b sm:from-[#353C45] sm:to-[#010101] sm:rounded-3xl sm:flex sm:items-center">
              <div className="lg:-translate-x-16 px-5">
                <div className="sm:w-[115%] h-full relative grid grid-cols-1 sm:grid-cols-2 sm:gap-8">
                  <div
                    className={clsx(
                      "bg-white rounded-2xl h-fit p-4 sm:p-10 sm:shadow-[0_0px_40px_rgba(0,0,0,0.15)]",
                      {
                        ["sm:col-start-1 sm:row-start-1"]:
                          activeSlideNumber == 1,
                      },
                      {
                        ["sm:col-start-2 sm:row-start-1"]:
                          activeSlideNumber == 2,
                      },
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        className="rounded-full"
                        src="/images/client-1.jpg"
                        width={65}
                        alt="Pallapay Client"
                      />
                      <div className="leading-5">
                        Mohamed A., Retail Store Owner
                        <div className="!text-sm text-neutral-500">Dubai</div>
                      </div>
                    </div>
                    <div className="mt-5 text-sm pb-3">
                      <p>Best crypto POS machine for retail stores.</p>
                      <p>
                        The Pallapay Crypto POS machine is a game-changer for
                        our retail business. We now accept USDT, Ethereum, and
                        other cryptocurrencies in-store with no issues. It's
                        secure, fast, and our customers love it.
                      </p>
                    </div>
                  </div>
                  <div
                    className={clsx(
                      "bg-white rounded-2xl h-fit p-4 sm:p-10 sm:shadow-[0_0px_40px_rgba(0,0,0,0.15)]",
                      {
                        ["sm:col-start-2 sm:row-start-1"]:
                          activeSlideNumber == 1,
                      },
                      {
                        ["sm:col-start-1 sm:row-start-1"]:
                          activeSlideNumber == 2,
                      },
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        className="rounded-full"
                        src="/images/client-2.jpg"
                        width={65}
                        alt="Pallapay Client"
                      />
                      <div className="leading-5">
                        Sarah K., Hotel Manager
                        <div className="!text-sm text-neutral-500">
                          Singapore
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 text-sm pb-3">
                      <p>Seamless crypto payments for our hotel.</p>
                      <p>
                        Pallapay made it incredibly easy for us to start
                        accepting cryptocurrency payments at our hotel.
                      </p>
                      <p>
                        The integration was fast, and we receive instant fiat
                        settlements. Their crypto payment gateway is reliable
                        and user-friendly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
