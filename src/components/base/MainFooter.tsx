"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { TextLink } from "@/components/text-link";
import * as React from "react";
import { clsx } from "clsx";
import { Link } from "@/lib/inertia-shims";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface MainFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  hasCreateAccountSection?: boolean;
  createAccountSectionType?: "SOLID" | "GRADIANT";
  hasContactSection?: boolean;
}

export function MainFooter({
  hasCreateAccountSection = false,
  createAccountSectionType = "GRADIANT",
  hasContactSection = true,
  className,
  ...props
}: MainFooterProps) {
  const t = useTranslations("footer");
  const tCommon = useTranslations("common");

  const exchangeLinks = [
    { link: "/buy-bitcoin-dubai", name: t("exchangeLinks.buyBitcoin"), location: t("exchangeLinks.dubai") },
    { link: "/sell-bitcoin-in-dubai", name: t("exchangeLinks.sellBitcoin"), location: t("exchangeLinks.dubai") },
    { link: "/buy-ethereum-in-dubai", name: t("exchangeLinks.buyEthereum"), location: t("exchangeLinks.dubai") },
    {
      link: "/sell-ethereum-in-dubai",
      name: t("exchangeLinks.sellEthereum"),
      location: t("exchangeLinks.dubai"),
    },
    { link: "/buy-usdt-in-dubai", name: t("exchangeLinks.buyTether"), location: t("exchangeLinks.dubai") },
    { link: "/sell-usdt-in-dubai", name: t("exchangeLinks.sellTether"), location: t("exchangeLinks.dubai") },
    {
      link: "/buy-bitcoin-in-istanbul",
      name: t("exchangeLinks.buyBitcoin"),
      location: t("exchangeLinks.istanbul"),
    },
    {
      link: "/sell-bitcoin-in-istanbul",
      name: t("exchangeLinks.sellBitcoin"),
      location: t("exchangeLinks.istanbul"),
    },
    {
      link: "/buy-ethereum-in-istanbul",
      name: t("exchangeLinks.buyEthereum"),
      location: t("exchangeLinks.istanbul"),
    },
    {
      link: "/sell-ethereum-in-istanbul",
      name: t("exchangeLinks.sellEthereum"),
      location: t("exchangeLinks.istanbul"),
    },

    {
      link: "/sell-usdt-in-istanbul",
      name: t("exchangeLinks.sellUsdt"),
      location: t("exchangeLinks.istanbul"),
    },
    { link: "/buy-usdt-in-istanbul", name: t("exchangeLinks.buyUsdt"), location: t("exchangeLinks.istanbul") },
    { link: "/sell-shiba-in-dubai", name: t("exchangeLinks.sellShiba"), location: t("exchangeLinks.dubai") },
    { link: "/sell-bnb-in-dubai", name: t("exchangeLinks.sellBnb"), location: t("exchangeLinks.dubai") },
    { link: "/sell-xrp-in-dubai", name: t("exchangeLinks.sellRipple"), location: t("exchangeLinks.dubai") },
  ];

  return (
    <>
      <footer
        className={clsx(className, "bg-black mt-16 print:hidden")}
        {...props}
      >
        {hasCreateAccountSection && (
          <div
            className={clsx(
              "w-full py-14",
              { ["bg-black"]: createAccountSectionType == "GRADIANT" },
              { ["bg-black"]: createAccountSectionType == "SOLID" },
            )}
          >
            <div className="container">
              <div className="border-amber-400 border-[3px] rounded-3xl flex gap-10 p-8 px-16">
                <div className="relative hidden md:block">
                  <div className="absolute w-[80%] h-[60%] bg-[#363636] ml-[10%] mt-[20%] blur-[50px] rounded-[150%]"></div>
                  <Image
                    alt="Start accepting crypto payments deal illustration"
                    src="/images/handshake.png"
                    className="relative"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex items-center">
                  <div>
                    <div className="text-xl">
                      <p>
                        {t("createAccountTitle")}
                      </p>
                      <p>
                        {t("createAccountDesc")}
                      </p>
                    </div>
                    <div className="text-center mt-6">
                      <a href="https://dashboard.pallapay.com/auth/register">
                        <Button
                          className="text-black! bg-amber-400 hover:bg-amber-500 cursor-pointer"
                          size="xl"
                        >
                          {tCommon("createAccount")}
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {hasContactSection && (
          <div className="border-b border-white/10">
            <div className="container grid grid-cols-4 gap-5 py-8">
              <div className="col-span-4 md:col-span-1">
                <div className="text-3xl">{t("needHelp")}</div>
                <div className="text-lg">{t("contactUsShort")}</div>
              </div>
              <div className="col-span-4 md:col-span-3 text-lg block sm:flex gap-8 md:gap-2 items-center justify-between">
                <div>
                  {t("helpDescription")}
                </div>
                <div className="mt-4 sm:mt-0">
                  <Link href="/contact-us">
                    <Button
                      variant="outline"
                      className="text-amber-400 hover:text-amber-400 hover:bg-amber-400/10 border-amber-400 cursor-pointer flex gap-1 items-center"
                    >
                      {tCommon("getHelp")}
                      <ArrowRight />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="border-b  border-white/10">
          <div className="container  py-10 sm:py-16">
            <div className=" grid grid-cols-12 gap-y-10 lg:gap-16">
              <div className="col-span-12 lg:col-span-5">
                <Image
                  alt="Pallapay, Accept crypto currency payment easily"
                  src="/images/pallapay-logo-white.png"
                  width={250}
                  height={100}
                />
                <div className="relative mt-8">
                  <Input
                    placeholder={tCommon("yourEmailAddress")}
                    className="bg-white text-black"
                  />
                  <div className="absolute right-0 top-0 h-full py-2 px-2">
                    <Button className="text-black bg-amber-400 hover:bg-amber-500 cursor-pointer flex h-full gap-1 items-center">
                      {tCommon("subscribe")}
                      <ArrowRight />
                    </Button>
                  </div>
                </div>
                <div className="text-xs mt-2 text-white/70">
                  {t("subscribeConsent")}{" "}
                  <TextLink href="/privacy">{t("privacyPolicyLink")}</TextLink>.
                </div>
                <div className="mt-5 text-white/70">
                  {t("msbDescription")}
                  <br />
                  <br />
                  {t("msbDescription2")}
                </div>
                <div className="mt-6 flex gap-3">
                  <a target="_blank" href="https://www.pallapay.com/androidapp">
                    <Image
                      src="/images/google-play.png"
                      alt="Download Pallapay Android Application"
                      width={140}
                      height={42}
                    />
                  </a>
                  <a target="_blank" href="https://www.pallapay.com/iosapp">
                    <Image
                      src="/images/app-store.png"
                      alt="Download Pallapay IOS Application"
                      width={140}
                      height={42}
                    />
                  </a>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:pl-14 mt-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 gap-y-14">
                  <div>
                    <div className="font-semibold text-lg">{t("solutions")}</div>
                    <ul className="space-y-3 mt-5">
                      <li>
                        <TextLink
                          href="/products/payment-api"
                          className="text-white"
                        >
                          {t("apiIntegration")}
                        </TextLink>
                      </li>
                      <li>
                        <TextLink
                          href="/products/payment-link"
                          className="text-white"
                        >
                          {t("paymentLink")}
                        </TextLink>
                      </li>
                      <li>
                        <TextLink
                          href="/products/fiat-settlement"
                          className="text-white"
                        >
                          {t("fiatSettlement")}
                        </TextLink>
                      </li>
                      <li>
                        <TextLink
                          href="/crypto-pos-machine"
                          className="text-white"
                        >
                          {t("posMachine")}
                        </TextLink>
                      </li>
                      <li>
                        <TextLink
                          href="/products/gift-card"
                          className="text-white"
                        >
                          {t("cryptoGiftCard")}
                        </TextLink>
                      </li>
                      <li>
                        <TextLink href="/wallet" className="text-white">
                          {t("pallapayWallet")}
                        </TextLink>
                      </li>
                    </ul>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem
                        className=" border-b border-gray-700 mt-2"
                        value="exchange"
                      >
                        <AccordionTrigger>{t("exchange")}</AccordionTrigger>

                        {exchangeLinks.map((item, index) => (
                          <AccordionContent
                            key={index}
                            className="py-2 border-b border-white/10"
                          >
                            <Link href={item.link}>
                              {item.name}

                              <span className="text-xs text-white/80 ml-1">
                                ({item.location})
                              </span>
                            </Link>
                          </AccordionContent>
                        ))}
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{t("resources")}</div>
                    <ul className="space-y-3 mt-5 ">
                      <li>
                        <a
                          href="https://docs.pallapay.com"
                          className="text-white hover:underline"
                        >
                          {t("apiDocs")}
                        </a>
                      </li>
                      <li>
                        <TextLink
                          href="#"
                          className="text-white hover:underline"
                        >
                          {t("blog")}
                        </TextLink>
                      </li>
                      <li>
                        <TextLink
                          href="/faq"
                          className="text-white hover:underline"
                        >
                          {t("faq")}
                        </TextLink>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{t("company")}</div>
                    <ul className="space-y-3 mt-5">
                      <li>
                        <TextLink href="/about-us" className="text-white">
                          {t("aboutUs")}
                        </TextLink>
                      </li>
                      <li>
                        <TextLink href="/privacy" className="text-white">
                          {t("privacyPolicy")}
                        </TextLink>
                      </li>
                      <li>
                        <TextLink href="/agreement" className="text-white">
                          {t("termsOfUse")}
                        </TextLink>
                      </li>
                      <li>
                        <TextLink href="/kyc-policy" className="text-white">
                          {t("amlKyc")}
                        </TextLink>
                      </li>
                      <li>
                        <TextLink
                          href="/law-enforcement"
                          className="text-white"
                        >
                          {t("lawEnforcement")}
                        </TextLink>
                      </li>
                      <li>
                        <a
                          href="https://dashboard.pallapay.com/partnership"
                          className="text-white hover:underline"
                        >
                          {t("becomePartner")}
                        </a>
                      </li>
                      <li>
                        <TextLink href="/pricing" className="text-white">
                          {t("pricing")}
                        </TextLink>
                      </li>
                      <li>
                        <TextLink href="/contact-us" className="text-white">
                          {t("contactUs")}
                        </TextLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full lg:h-[44%] flex gap-1 justify-center mt-12 lg:mt-0 lg:justify-end lg:items-end pb-10">
                  <a target="_blank" href="https://t.me/pallapay_channel">
                    <div className="w-[32px] h-[32px] bg-cover bg-[url(/images/icons/social/icon1.svg)] hover:opacity-80"></div>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/pallapay"
                  >
                    <div className="w-[32px] h-[32px] bg-cover bg-[url(/images/icons/social/icon2.svg)] hover:opacity-80"></div>
                  </a>
                  <a target="_blank" href="https://www.instagram.com/pallapay">
                    <div className="w-[32px] h-[32px] bg-cover bg-[url(/images/icons/social/icon3.svg)] hover:opacity-80"></div>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UCX4X0XYn89ziMVDsUHWr77Q"
                  >
                    <div className="w-[32px] h-[32px] bg-cover bg-[url(/images/icons/social/icon4.svg)] hover:opacity-80"></div>
                  </a>
                  <a target="_blank" href="https://www.facebook.com/pallapay/">
                    <div className="w-[32px] h-[32px] bg-cover bg-[url(/images/icons/social/icon5.svg)] hover:opacity-80"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-6! pt-3! text-center text-sm text-white/50">
          {t("copyright")}
        </div>
      </footer>
    </>
  );
}
