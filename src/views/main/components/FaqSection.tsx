"use client";

import * as React from "react";
import { Link } from "@/lib/inertia-shims";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollAnimation } from "@/components/base/ScrollAnimation";
import { ArrowRight, ChevronDown } from "lucide-react";
import "../../../styles/Accordion.css";
import { useState } from "react";
import { useTranslations } from "next-intl";

export function FaqSection() {
  const [openItem, setOpenItem] = useState<any>(null);
  const t = useTranslations("faq");

  const faqs = [
    {
      value: "item-1",
      question: t("items.item1.question"),
      answer: (
        <>
          <p>{t("items.item1.answer1")}</p>
          <p>{t("items.item1.answer2")}</p>
        </>
      ),
    },
    {
      value: "item-2",
      question: t("items.item2.question"),
      answer: t("items.item2.answer"),
    },
    {
      value: "item-3",
      question: t("items.item3.question"),
      answer: (
        <>
          <p>
            {t("items.item3.answer1")}{" "}
            <a
              className="text-blue-600 underline"
              href="https://dashboard.pallapay.com/auth/register"
            >
              {t("items.item3.answerLink")}
            </a>
            {t("items.item3.answer2")}
          </p>
          <p>{t("items.item3.answer3")}</p>
          <p>{t("items.item3.answer4")}</p>
        </>
      ),
    },
    {
      value: "item-4",
      question: t("items.item4.question"),
      answer: (
        <>
          <p>{t("items.item4.answer1")}</p>
          <p>{t("items.item4.answer2")}</p>
        </>
      ),
    },
    {
      value: "item-5",
      question: t("items.item5.question"),
      answer: (
        <>
          <p>{t("items.item5.answer1")}</p>
          <p>{t("items.item5.answer2")}</p>
        </>
      ),
    },
    {
      value: "item-6",
      question: t("items.item6.question"),
      answer: t("items.item6.answer"),
    },
  ];

  const tCommon = useTranslations("common");

  return (
    <div className="container text-black sm:mt-36!">
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 sm:gap-14 text-white">
        <ScrollAnimation className="sm:col-span-2">
          <div className="text-[1.75rem] sm:text-4xl lg:text-5xl font-semibold mt-24 leading-[2.4rem] sm:leading-[3.2rem] lg:leading-[3.8rem] text-center">
            <div>{t("title")}</div>
            <div>{t("titleLine2")}</div>
            <div>{t("titleLine3")}</div>
            <div className="text-orange-400">(FAQ)</div>
          </div>
        </ScrollAnimation>

        <div className="sm:col-span-4">
          <Accordion
            type="single"
            collapsible
            className="w-full border-b border-white/10"
          >
            {faqs.map((faq) => {
              const isOpen = openItem === faq.value;

              return (
                <AccordionItem
                  key={faq.value}
                  value={faq.value}
                  onClick={() => setOpenItem(isOpen ? null : faq.value)}
                  className="flex flex-col items-center border-b border-white/10"
                >
                  <div className="flex items-center w-full justify-between">
                    <AccordionTrigger
                      className="AccordionTrigger break-words 
              max-w-[17rem] sm:max-w-[16rem] md:max-w-[20rem] 
              lg:max-w-[24rem] xl:max-w-[28rem]  
              items-center py-4 text-white hover:text-white"
                    >
                      {faq.question}
                    </AccordionTrigger>

                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <AccordionContent>
                    <div className="text-left space-y-3 text-white">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          <div className="flex justify-end w-full mt-3 text-(--primary-orange)">
            <Link
              href="/faq"
              className="text-(--primary-orange) group flex items-center gap-1 text-sm font-medium  transition-all"
            >
              <span className="group-hover:underline group-hover:text-(--primary-orange)/50 ">
                {tCommon("seeMore")}
              </span>
              <ArrowRight
                size={20}
                className="text-(--primary-orange) transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
