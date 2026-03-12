"use client"

import * as React from 'react';
// import { MainFooter } from '@/components/base/MainFooter';
import { MainNav } from '@/components/base/MainNav';
import { ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { TextLink } from '@/components/text-link';
import { useTranslations } from 'next-intl';

export function ContactUs() {
    const t = useTranslations('contactPage');

    return (
        <>
            <MainNav hasBackground={true} />

            <div className="container mt-12">
                <div className="grid col-span-1 lg:grid-cols-12">
                    <div className="lg:col-span-8">
                        <div
                            className="grid grid-cols-1 lg:grid-cols-10 bg-gradient-to-t from-[#010101] via-[#181A20] via-50% to-[#353C45] p-5 md:p-8 lg:p-14 rounded-2xl relative">
                            <div className="lg:col-span-12 hidden md:block">
                                <div className="bg-[url(/images/bg-items.png)] bg-no-repeat bg-contain absolute bottom-0 right-0 w-[70%] h-[300px]"></div>
                            </div>
                            <div className="lg:col-span-7 relative">
                                <div className="flex gap-2 items-center text-amber-400">
                                    <div>{t("home")}</div>
                                    <ChevronRight />
                                    <div>{t("contactUs")}</div>
                                </div>
                                <h1 className="text-2xl sm:text-4xl font-semibold mt-7">{t("title")}</h1>
                                <div className="mt-5">
                                    <p>{t("paragraph1")}</p>
                                    <p>{t("paragraph2")}</p>
                                </div>
                            </div>
                            <div></div>
                            <div className="lg:col-span-2 relative">
                                <div
                                    className="lg:bg-gradient-to-b from-[#010101] via-[#181A20] via-50% to-[#353C45] lg:p-5 rounded-2xl space-y-3 lg:w-[420%] mt-8 lg:mt-0">
                                    <Input placeholder={t("name")} className="bg-[#353C45] h-12 border-none" />
                                    <Input type="email" placeholder={t("email")} className="bg-[#353C45] h-12 border-none" />
                                    <Textarea placeholder={t("message")} className="!bg-[#353C45] min-h-[180px] border-none" />

                                    <div className="space-y-1.5 mt-4">
                                        <div className="text-lg mb-2">{t("interests")}</div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="digital_products" className="bg-[#EBF0FF95] border border-gray-500/80" />
                                            <label
                                                htmlFor="digital_products"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                {t("digitalProducts")}
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="online_services" className="bg-[#EBF0FF95] border border-gray-500/80" />
                                            <label
                                                htmlFor="online_services"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                {t("onlineServices")}
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="crypto_pos_machine" className="bg-[#EBF0FF95] border border-gray-500/80" />
                                            <label
                                                htmlFor="crypto_pos_machine"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                {t("retailPos")}
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex justify-end mt-6">
                                        <Button
                                            className="text-black bg-amber-400 hover:bg-amber-500 cursor-pointer px-7">{t("send")}</Button>
                                    </div>

                                    <div className="text-xs">
                                        {t("agreementText1")}<TextLink
                                        href="/agreement">{t("termsOfUse")}</TextLink>{t("agreementText2")}<TextLink href="/privacy">{t("privacyPolicy")}</TextLink>
                                        {t("agreementText3")}<TextLink href="/agreement">{t("prohibitedList")}</TextLink>.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <MainFooter className="!mt-14" hasContactSection={false} /> */}
        </>
    )
}
