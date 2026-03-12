"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRightLeft } from "lucide-react";
import * as React from "react";
import { ChangeEvent, useEffect, useState } from "react";
import { clsx } from "clsx";

import { useTranslations } from "next-intl";

export const Calculator = ({
  symbol,
  title,
  changeUrl,
  prices,
}: {
  symbol: string;
  title?: string;
  changeUrl?: string;
  prices: {
    [key: string]: {
      coin_id: string;
      coin_symbol: string;
      usd_price: string;
      icon_url: string;
      one_day_change_percentage: number;
      last_updated_at: string;
      last_updated_human: string;
    };
  };
}): any => {
  const t = useTranslations("calculator");
  const [amount, setAmount] = useState("");
  const [destinationAmount, setDestinationAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState(symbol);
  const [destinationCurrency, setDestinationCurrency] = useState("USD");

  // Calculate destination amount whenever amount, base, or destination currency changes
  useEffect(() => {
    if (
      !amount ||
      !baseCurrency ||
      !destinationCurrency ||
      !prices[baseCurrency]
    ) {
      setDestinationAmount("");
      return;
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) {
      setDestinationAmount("");
      return;
    }

    const basePrice = parseFloat(prices[baseCurrency].usd_price || "0");
    if (isNaN(basePrice) || basePrice === 0) {
      setDestinationAmount("");
      return;
    }

    let result = parsedAmount * basePrice;
    if (destinationCurrency === "AED") {
      result *= 3.67;
    }

    setDestinationAmount(result.toFixed(2));
  }, [amount, baseCurrency, destinationCurrency, prices]);

  return (
    <div className="container mt-14">
      <h2 className="text-3xl font-semibold text-black text-center">{title}</h2>
      <div className="bg-white rounded-3xl p-6 shadow-[0_0px_40px_rgba(0,0,0,0.2)] flex gap-10 mt-6">
        <img
          src="/images/cryptocurrency/calculator.png"
          width={140}
          className="hidden lg:block"
          alt="Calculator"
        />
        <div
          className={clsx(
            "text-black grid lg:grid-cols-7 w-full px-2 lg:pl-0 lg:pr-5",
            { ["lg:!col-span-5 !gap-5"]: !changeUrl },
          )}
        >
          <div
            className={clsx(
              "lg:col-span-3 flex gap-3 items-center justify-center",
            )}
          >
            <div className="grid w-full items-center gap-1.5">
              <Label className="font-semibold text-base" htmlFor="amount-input">
                {t("youSpend")}
              </Label>
              <Input
                value={amount}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setAmount(e.target.value);
                }}
                className="h-12"
                type="number"
                id="amount-input"
                placeholder={t("enterAmount")}
              />
            </div>
            <Select
              value={baseCurrency}
              onValueChange={(value) => setBaseCurrency(value)}
            >
              <SelectTrigger className="w-[220px] h-12 mt-7 bg-amber-400 border-none">
                <SelectValue placeholder={t("select")} />
              </SelectTrigger>
              <SelectContent className="bg-black border-none">
                <SelectGroup>
                  {prices && Object.entries(prices).length > 0 ? (
                    Object.entries(prices).map(([key, data]) => (
                      <SelectItem key={key} value={data.coin_symbol}>
                        <div className="flex items-center gap-2">
                          <img
                            src={data.icon_url}
                            alt={data.coin_symbol}
                            width={20}
                            height={20}
                          />
                          {data.coin_symbol}
                        </div>
                      </SelectItem>
                    ))
                  ) : (
                    <SelectItem value="BTC" disabled>
                      {t("loading")}
                    </SelectItem>
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {changeUrl && (
            <a href={changeUrl}>
              <div className="flex items-center justify-center mt-7 rotate-90 lg:rotate-0">
                <ArrowRightLeft size={35} strokeWidth={1.5} />
              </div>
            </a>
          )}
          <div className="lg:col-span-3 gap-3 flex items-center justify-center">
            <div className="grid w-full items-center gap-1.5">
              <Label className="font-semibold text-base" htmlFor="receive-input">
                {t("youReceive")}
              </Label>
              <Input
                value={destinationAmount}
                className="h-12 cursor-default"
                type="text"
                id="receive-input"
                placeholder={t("enterAmount")}
                readOnly
              />
            </div>
            <Select
              value={destinationCurrency}
              onValueChange={(value) => setDestinationCurrency(value)}
            >
              <SelectTrigger className="w-[220px] h-12 mt-7 bg-amber-400 border-none">
                <SelectValue placeholder={t("select")} />
              </SelectTrigger>
              <SelectContent className="bg-black">
                <SelectGroup>
                  <SelectItem value="AED">AED</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
