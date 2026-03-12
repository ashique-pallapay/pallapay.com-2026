"use client";

import * as React from "react";
// import { MainFooter } from '@/components/base/MainFooter';
import { MainNav } from "@/components/base/MainNav";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useState } from "react";
import { clsx } from "clsx";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Wallet() {
  const [selectedTab, setSelectedTab] = useState<
    "SEND" | "FUND" | "GIFT" | "CONVERT"
  >("SEND");

  const t = useTranslations("walletPage");

  return (
    <>
      <div>
        <MainNav />
        <div className="py-24 z-20 relative w-full bg-linear-to-b from-[#353C45] via-[#181A20] via-45% to-[#010101] ">
          <div className="container mx-auto relative">
            <ParallaxProvider>
              <Image
                src="/images/wallet-logo.png"
                alt="Pallapay Wallet Application Dashboard"
                width={200}
                height={200}
                className="absolute bottom-28 md:bottom-56 left-2 md:left-0 
              w-20 md:w-[200px]"
              />
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 md:-bottom-32 w-64 md:w-[500px] md:z-10 -z-10">
                <Parallax speed={8}>
                  <Image
                    src="/images/wallet-mobile.png"
                    alt="Pallapay Wallet Application Dashboard"
                    width={500}
                    height={500}
                    className="w-full"
                  />
                </Parallax>
              </div>

              <Image
                src="/images/wallet-logo.png"
                alt="Pallapay Wallet Application Dashboard"
                width={200}
                height={200}
                className="absolute -bottom-16 md:-bottom-32 
                right-2 md:right-0 
                w-26 md:w-[200px]"
              />

              <div
                className="text-lg sm:text-2xl md:text-4xl lg:text-6xl font-semibold 
                  absolute left-6 md:left-32 lg:left-52 left
                  -top-14 md:-top-32"
              >
                <h1 className="md:-ml-24">{t("hero.receive")}</h1>
                <h1 className="ml-4 sm:ml-8 md:ml-1">{t("hero.send")}</h1>
              </div>

              <div
                className="text-lg sm:text-2xl md:text-4xl lg:text-6xl font-semibold 
              absolute right-10 md:right-28 lg:right-52
              -top-14 md:-top-32 "
              >
                <h1 className="md:-ml-6">{t("hero.buy")}</h1>
                <h1 className="ml-4 md:ml-10">{t("hero.sell")}</h1>
              </div>

              <div
                className="w-full bg-[#353C45]/90 rounded-xl 
              mt-20 md:mt-36 
              py-5 md:py-8 backdrop-blur-[1px]"
              >
                <ul
                  className="px-6 md:px-10 list-disc 
                    text-sm md:text-lg 
                    space-y-1 md:space-y-2"
                >
                  {(t.raw("featuresList") as string[]).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </ParallaxProvider>
          </div>
          <div className="absolute bottom-14 w-full">
            <ParallaxProvider>
              <Parallax speed={5}>
                <div className="absolute top-0 right-0 sm:right-auto sm:left-0 translate-x-24 w-[115px] h-[115px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[14px]"></div>
              </Parallax>
              <Parallax rotate={[-14, 14]} speed={6}>
                <div className="absolute bg-[url(/images/shapes/star.png)] bg-contain bg-no-repeat -translate-x-5 sm:translate-x-24 md:w-[35px] w-[15px] h-[15px] md:h-[35px] left-2 bottom-0" />
              </Parallax>
              <Parallax rotate={[4, 9]} speed={-6}>
                <div className="absolute bg-[url(/images/shapes/star.png)] bg-contain bg-no-repeat -translate-x-2 sm:-translate-x-24 md:w-[35px] w-[15px] h-[15px] md:h-[35px] right-2 bottom-10" />
              </Parallax>
            </ParallaxProvider>
          </div>
        </div>
        <div className="relative  md:pt-[150px] lg:pt-[250px] 2xl:pt-[320px] md:mt-[-130px] lg:mt-[-230px] 2xl:mt-[-300px] z-10">
          <div className="container pt-10 pb-12 sm:pb-24 relative">
            <h1 className="text-2xl font-semibold sm:mt-8">Pallapay Wallet</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <div className="space-x-2 sm:space-x-4 mt-8 sm:mt-16 mb-6">
                  <button
                    onClick={() => setSelectedTab("SEND")}
                    className={clsx(
                      {
                        "cursor-pointer px-3 sm:px-4 py-1.5 rounded-lg bg-amber-400 text-black":
                          selectedTab == "SEND",
                      },
                      {
                        "cursor-pointer px-3 sm:px-4 py-1.5 text-amber-400 rounded-lg hover:bg-amber-100/10":
                          selectedTab != "SEND",
                      },
                    )}
                  >
                    {t("tabs.send")}
                  </button>
                  <button
                    onClick={() => setSelectedTab("FUND")}
                    className={clsx(
                      {
                        "cursor-pointer px-3 sm:px-4 py-1.5 rounded-lg bg-amber-400 text-black":
                          selectedTab == "FUND",
                      },
                      {
                        "cursor-pointer px-3 sm:px-4 py-1.5 text-amber-400 rounded-lg hover:bg-amber-100/10":
                          selectedTab != "FUND",
                      },
                    )}
                  >
                    {t("tabs.fund")}
                  </button>
                  <button
                    onClick={() => setSelectedTab("GIFT")}
                    className={clsx(
                      {
                        "cursor-pointer px-3 sm:px-4 py-1.5 rounded-lg bg-amber-400 text-black":
                          selectedTab == "GIFT",
                      },
                      {
                        "cursor-pointer px-3 sm:px-4 py-1.5 text-amber-400 rounded-lg hover:bg-amber-100/10":
                          selectedTab != "GIFT",
                      },
                    )}
                  >
                    {t("tabs.gift")}
                  </button>
                  <button
                    onClick={() => setSelectedTab("CONVERT")}
                    className={clsx(
                      {
                        "cursor-pointer px-3 sm:px-4 py-1.5 rounded-lg bg-amber-400 text-black":
                          selectedTab == "CONVERT",
                      },
                      {
                        "cursor-pointer px-3 sm:px-4 py-1.5 text-amber-400 rounded-lg hover:bg-amber-100/10":
                          selectedTab != "CONVERT",
                      },
                    )}
                  >
                    {t("tabs.convert")}
                  </button>
                </div>
                {selectedTab == "SEND" && (
                  <>
                    <div>
                      {t("sendContent.title")}
                      <br />
                      {t("sendContent.description")}
                    </div>
                    <ul className="list-disc ml-5 my-2">
                      {(t.raw("sendContent.list") as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div>
                      {t("sendContent.footer")}
                      <br />
                      {t("sendContent.bridge")}
                    </div>
                  </>
                )}
                {selectedTab == "FUND" && (
                  <>
                    <div>
                      {t("fundContent.title")}
                      <br />
                      {t("fundContent.description")}
                    </div>
                    <ul className="list-disc ml-5 my-2">
                      {(t.raw("fundContent.list") as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div>
                      {t("fundContent.footer")}
                    </div>
                  </>
                )}
                {selectedTab == "GIFT" && (
                  <>
                    <div>
                      {t("giftContent.title")}
                      <br />
                      {t("giftContent.description")}
                    </div>
                    <ul className="list-disc ml-5 my-2">
                       {(t.raw("giftContent.list") as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div>
                      {t("giftContent.footer")}
                    </div>
                  </>
                )}
                {selectedTab == "CONVERT" && (
                  <>
                    <div>
                      {t("convertContent.title")}
                      <br />
                      {t("convertContent.description")}
                    </div>
                    <ul className="list-disc ml-5 my-2">
                      {(t.raw("convertContent.list") as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div>
                      {t("convertContent.footer")}
                    </div>
                  </>
                )}
              </div>
              <div className="mt-7 mr-8 md:mr-0 md:mt-0 relative flex items-center justify-center">
                <ParallaxProvider>
                  <Parallax speed={2} className="w-full">
                    <Image
                      src={
                        selectedTab === "SEND"
                          ? "/images/send-1.png"
                          : selectedTab === "FUND"
                            ? "/images/deposit-1.png"
                            : selectedTab === "GIFT"
                              ? "/images/gift-1.png"
                              : "/images/convert-1.png"
                      }
                      className="w-full sm:w-1/2 md:w-full lg:w-4/5 mx-auto relative"
                      alt="Pallapay Wallet in Use"
                      width={600}
                      height={500}
                    />
                  </Parallax>

                  <Parallax
                    speed={-3}
                    className="absolute top-1/2 -right-[5%] md:-right-[15%] sm:-right-[10%] -translate-y-1/2 z-10"
                  >
                    <Image
                      src={
                        selectedTab === "SEND"
                          ? "/images/send-2.png"
                          : selectedTab === "FUND"
                            ? "/images/deposit-2.png"
                            : selectedTab === "GIFT"
                              ? "/images/gift-2.png"
                              : "/images/convert-2.png"
                      }
                      className="w-36 sm:w-48 md:w-56 lg:w-64 h-auto"
                      alt="Pallapay Wallet QR-Code"
                      width={300}
                      height={400}
                    />
                  </Parallax>
                </ParallaxProvider>
              </div>
            </div>
          </div>
          <div className="container row-start-2 lg:row-start-1  ">
            <div>
              <div className="text-4xl leading-[3rem] lg:text-5xl lg:leading-[3.85rem] font-semibold text-center">
                {t("downloadTitle")}
              </div>

              <div className="mt-6 sm:mt-10 flex gap-5 items-center justify-center px-8 sm:px-0">
                <a target="_blank" href="https://www.pallapay.com/androidapp">
                  <Image
                    src="/images/google-play.png"
                    alt="Download Pallapay Android Application"
                    width={200}
                    height={60}
                  />
                </a>
                <a target="_blank" href="https://www.pallapay.com/iosapp">
                  <Image
                    src="/images/app-store.png"
                    alt="Download Pallapay IOS Application"
                    width={200}
                    height={60}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MainFooter className="!mt-0" hasContactSection={true} /> */}
    </>
  );
}
