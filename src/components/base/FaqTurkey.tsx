"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollAnimation } from "@/components/base/ScrollAnimation";
import {  ChevronDown } from "lucide-react";
import "../../styles/Accordion.css";
import { useState } from "react";
import { Button } from "../ui/button";

interface FaqTurkeyProps {
  crypto: string;
  shortForm: string;
  faqs?: {
    value: string;
    question: string;
    answer: string;
  }[];
  purpose?: string;
}

export function FaqTurkey({ crypto, shortForm, faqs, purpose="Buy" }: FaqTurkeyProps) {
  const [openItem, setOpenItem] = useState<any>(null);

  return (
    <div className=" text-black">
      <div className="grid grid-cols-1 sm:grid-cols-6 gap-6 sm:gap-14 text-white">
        <ScrollAnimation className="sm:col-span-2">
          <div className="text-[1.75rem] sm:text-4xl lg:text-5xl font-semibold mt-14 leading-[2.4rem] sm:leading-[3.2rem] lg:leading-[3.8rem] ">
            <div className="flex flex-col">
              <span>FAQ about</span>
              <span>{purpose}ing</span>
              <span className="text-yellow-500">{crypto}</span>
              <span className="text-yellow-500">{shortForm}</span>
              <span>in PallaPay</span>
              <span>Istanbul</span>
            </div>
          </div>
        </ScrollAnimation>

        <div className="sm:col-span-4">
          <Accordion
            type="single"
            collapsible
            className="w-full border-b border-white/10"
          >
            {faqs &&
              faqs.map((faq) => {
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
                      <div className="text-left space-y-3 text-white">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
          </Accordion>

          <div className="flex justify-center items-center flex-col w-full mt-6 gap-3">
            <span>Didn't find the answer to your question?</span>
            <Button className="text-(--primary-orange) w-fit border border-(--primary-orange)">
              Contact Our Support Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
