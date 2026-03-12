"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "@/lib/inertia-shims";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/base/LanguageSwitcher";

type MainNav = {
  hasBackground?: boolean;
};

export function MainNav({ hasBackground = false }: MainNav) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");

  const items = [
    {
      title: t("solutions"),
      subItems: [
        {
          title: t("items.cryptoWallet.title"),
          description: t("items.cryptoWallet.description"),
          url: "/wallet",
        },
        {
          title: t("items.cryptoPaymentApi.title"),
          description: t("items.cryptoPaymentApi.description"),
          url: "/products/payment-api",
        },
        {
          title: t("items.cryptoPaymentLink.title"),
          description: t("items.cryptoPaymentLink.description"),
          url: "/products/payment-link",
        },
        {
          title: t("items.cryptoPosMachine.title"),
          description: t("items.cryptoPosMachine.description"),
          url: "/crypto-pos-machine",
        },
        {
          title: t("items.fiatSettlement.title"),
          description: t("items.fiatSettlement.description"),
          url: "/products/fiat-settlement",
        },
        {
          title: t("items.cryptoGiftCard.title"),
          description: t("items.cryptoGiftCard.description"),
          url: "/products/gift-card",
        },
      ],
    },
    {
      title: t("industries"),
      subItems: [
        {
          title: t("items.gaming.title"),
          description: t("items.gaming.description"),
          url: "/industries/gaming",
        },
        {
          title: t("items.hotels.title"),
          description: t("items.hotels.description"),
          url: "/industries/hotels",
        },
        {
          title: t("items.tradingPlatforms.title"),
          description: t("items.tradingPlatforms.description"),
          url: "/industries/trading-platforms",
        },
        {
          title: t("items.ecommerce.title"),
          description: t("items.ecommerce.description"),
          url: "/industries/ecommerce",
        },
        {
          title: t("items.retailSector.title"),
          description: t("items.retailSector.description"),
          url: "/industries/retail-store",
        },
      ],
    },
    { title: t("blog"), url: "/news" },
    { title: t("help"), url: "https://pallapayhelp.zendesk.com/hc/en-us" },
  ];

  return (
    <div
      className={clsx("print:hidden relative z-50", {
        "h-[4.6rem] bg-black!": hasBackground,
      })}
    >
      <div
        className={clsx(
          "absolute top-0 left-0 w-full transition-[max-height] duration-300 overflow-hidden",
          isMenuOpen
            ? "max-h-screen fixed lg:relative overflow-y-auto bg-black"
            : "max-h-[4.6rem] lg:max-h-none lg:overflow-visible",
        )}
      >
        <div className="container py-5">
          <div className="w-full flex justify-between items-center">
            <div>
              <Link href={"/"}>
                <Image
                  alt="Pallapay Logo"
                  src="/images/pallapay-logo-white.png"
                  width={214}
                  height={34}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:block ">
              <NavigationMenuList>
                {items.map((item) => (
                  <NavigationMenuItem
                    key={item.title}
                    className="hover:bg-gray-600/40 rounded"
                  >
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger>
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="bg-black border-0! border-none! shadow-none! ring-0! outline-none! !border-transparent">
                          {" "}
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.subItems.map((subItem) => (
                              <ListItem
                                key={subItem.title}
                                title={subItem.title}
                                href={subItem.url}
                              >
                                {subItem.description}
                              </ListItem>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        href={item.url}
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop Buttons & Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-2 items-center">
                <a href="https://dashboard.pallapay.com/auth/login">
                  <Button
                    className="text-amber-400 border-amber-400 hover:bg-black"
                    variant="outline"
                  >
                    {tCommon("login")}
                  </Button>
                </a>
                <a href="https://dashboard.pallapay.com/auth/register">
                  <Button className="text-black bg-amber-400 hover:bg-amber-500 flex items-center gap-1 !px-8 !py-5">
                    {tCommon("signUp")}
                    <span className="block bg-[url(/images/icons/arrow-right-sm.svg)] bg-cover w-[18px] h-[18px] mt-0.5"></span>
                  </Button>
                </a>
              </div>
              <LanguageSwitcher />
              <div
                className="lg:hidden bg-white/10 p-1 rounded-md text-white cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </div>
            </div>
          </div>

          {/* Mobile Dropdown View */}
          <div className={clsx("py-10 lg:hidden", { hidden: !isMenuOpen })}>
            <Accordion type="single" collapsible className="w-full">
              {items.map((item) => (
                <AccordionItem
                  className="border-none"
                  value={item.title}
                  key={item.title}
                >
                  {item.subItems ? (
                    <>
                      <AccordionTrigger className="border-b border-white/10 text-xl py-4 hover:no-underline">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 pb-2">
                        <div className="flex flex-col gap-5 pl-4">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.url}
                              className="block"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <div className="text-amber-400 font-medium">
                                {subItem.title}
                              </div>
                              <div className="text-sm text-gray-400 mt-1">
                                {subItem.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </>
                  ) : (
                    <div className="border-b border-white/10 text-xl py-4">
                      <Link
                        href={item.url || "#"}
                        className="w-full block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </div>
                  )}
                </AccordionItem>
              ))}
            </Accordion>

            <div className="flex gap-2 items-center mt-10">
              <a
                className="w-full"
                href="https://dashboard.pallapay.com/auth/login"
              >
                <Button
                  className="w-full text-amber-400 border-amber-400"
                  variant="outline"
                >
                  {tCommon("login")}
                </Button>
              </a>
              <a
                className="w-full"
                href="https://dashboard.pallapay.com/auth/register"
              >
                <Button className="text-black w-full bg-amber-400 hover:bg-amber-500">
                  {tCommon("signUp")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => (
  <li className="hover:bg-gray-400/20 rounded">
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 transition-colors hover:text-amber-400",
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium">{title}</div>
        <p className="text-gray-400 line-clamp-2 text-sm">{children}</p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";
