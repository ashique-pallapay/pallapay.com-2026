"use client";

import * as React from 'react';
// import { MainFooter } from '@/components/base/MainFooter';
import { MainNav } from '@/components/base/MainNav';
import { Check, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import {
//     Select,
//     SelectContent,
//     SelectGroup,
//     SelectItem,
//     SelectTrigger,
//     SelectValue
// } from '@/components/ui/select';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import InteractiveGradientCard from '@/components/base/InteractiveGradientCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calculator } from '@/components/calculator';
import Image from 'next/image';

import { useTranslations } from 'next-intl';

export function SellBitcoinInDubai({prices = {}}: {prices?: {[key: string]: {
            coin_id: string;
            coin_symbol: string;
            usd_price: string;
            icon_url: string;
            one_day_change_percentage: number;
            last_updated_at: string;
            last_updated_human: string;
        }}}) {
    const t = useTranslations('sellBitcoinDubai');
    const te = useTranslations('commonExchange');

    return (
        <>
            <div className="relative bg-black overflow-hidden">
                <MainNav hasBackground={true} />
                <div
                    className="absolute bg-[url(/images/cryptocurrency/waves.png)] bg-cover bg-center w-full h-full"></div>
                <div className="container py-14! relative">
                    <div className="grid grid-cols-12">
                        <div className="col-span-4 relative hidden md:block">
                            <div
                                className="absolute w-[300px] h-[170px] bg-black/70 blur-[40px] rounded-[150%] -bottom-4 left-0"></div>
                            <Image alt="sell bitcoin in dubai" className="relative"
                                 src="/images/cryptocurrency/globe.png" width={300} height={300} />
                        </div>
                        <div className="col-span-12 md:col-span-7 text-center md:pl-10">
                            <div>
                                <h1 className="text-3xl leading-[2.8rem] lg:text-4xl lg:leading-[3.7rem] font-semibold whitespace-pre-line">
                                    {t('hero.title')}
                                </h1>
                            </div>

                            <div className="grid grid-cols-1 lg:flex justify-center gap-3 mt-10">
                                <a href="https://dashboard.pallapay.com/auth/register">
                                    <Button size="xl"
                                            className="bg-amber-400 hover:bg-amber-500 cursor-pointer">
                                        {t('hero.buyOnline')}
                                    </Button>
                                </a>
                                <a href="https://maps.app.goo.gl/XF9ScJ3596UK4zmn6" target="_blank">
                                    <Button size="xl" variant="outline"
                                            className="bg-transparent text-amber-400 hover:text-amber-400 hover:bg-amber-400/10 border-amber-400 cursor-pointer">
                                        {t('hero.visitOffice')}
                                    </Button>
                                </a>
                            </div>

                            <div
                                className="text-amber-400 sm:flex sm:gap-5 sm:justify-center mt-10 w-full space-y-3 sm:space-y-0">
                                <div
                                    className="flex gap-3 text-xl font-semibold underline mx-auto sm:mx-0 justify-center sm:justify-start">
                                    <div
                                        className="flex w-8 h-8 items-center justify-center rounded-full border border-amber-400">
                                        <Phone size={20} strokeWidth={2} />
                                    </div>
                                    <a href="tel:971588971652">058 897 1652</a>
                                </div>
                                <div className="text-xl font-semibold underline">
                                    <a href="tel:97144264781">044264781</a>
                                </div>
                                <div className="text-xl font-semibold underline">
                                    <a className="flex gap-2 items-center justify-center sm:justify-start"
                                       target="_blank"
                                       href="https://api.whatsapp.com/send?phone=971588971652">
                                        <div
                                            className="w-7 h-7 bg-[url(/images/icons/social/whatsapp-icon.svg)] bg-no-repeat bg-cover"></div>
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Calculator title={t('calculator.title')} symbol="BTC" prices={prices} />

            <div className="container mt-20! text-black">
                <iframe title="Buy bitcoin dubai"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14441.89374807178!2d55.2665802!3d25.1872518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33bef1eb4c51c6ca!2sPallapay%20Payment%20Gateway!5e0!3m2!1sen!2sus!4v1605537854220!5m2!1sen!2sus"
                        width="100%" height="350" className="border-0 mt-8"></iframe>

                <h4 className="text-2xl font-semibold text-center mt-10">{t('howItWorks.title')}</h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 text-center mt-6">
                    <div>
                        <Image src="/images/crypto-pg/compare.png"
                             alt="Buy bitcoin in dubai" className="w-[110px] mx-auto" width={110} height={110} />
                        <h5 className="card-title mt-3 font-semibold mb-2">{t('howItWorks.steps.visit.title')}</h5>
                        <p className="card-text">{t('howItWorks.steps.visit.desc')}</p>
                    </div>
                    <div>
                        <Image src="/images/crypto-pg/convert.png"
                             alt="Buy bitcoin in dubai" className="w-[110px] mx-auto" width={110} height={110} />
                        <h5 className="card-title mt-3 font-semibold mb-2">{t('howItWorks.steps.transfer.title')}</h5>
                        <p className="card-text">{t('howItWorks.steps.transfer.desc')}</p>
                    </div>
                    <div>
                        <Image src="/images/crypto-pg/track.png"
                             alt="Buy bitcoin in dubai" className="w-[110px] mx-auto" width={110} height={110} />
                        <h5 className="card-title mt-3 font-semibold mb-2">{t('howItWorks.steps.get.title')}</h5>
                        <p className="card-text">{t('howItWorks.steps.get.desc')}</p>
                    </div>
                </div>

                <iframe src="https://www.trustedsite.com/widget/tm-1001/?host=pallapay.com&amp;lang=en"
                        title="TrustedSite Certified" className="border-0 w-[60%] h-[60%] mx-auto mt-14" width="60%"
                        height="60%"></iframe>
            </div>

            <div className="container text-black text-center">
                <div>
                    <h2 className="text-3xl font-semibold">{te('features.title')}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                        <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
                            <div
                                className="bg-[url(/images/benefits/laptop-coins.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
                            <h5 className="text-xl font-semibold mt-9">{te('features.f1.title')}</h5>
                            <p className="mt-2">{te('features.f1.desc')}</p>
                        </InteractiveGradientCard>
                        <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
                            <div
                                className="bg-[url(/images/benefits/wallet.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
                            <h5 className="text-xl font-semibold mt-9">{te('features.f2.title')}</h5>
                            <p className="mt-2">{te('features.f2.desc')}</p>
                        </InteractiveGradientCard>
                        <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
                            <div
                                className="bg-[url(/images/benefits/money-percentage.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
                            <h5 className="text-xl font-semibold mt-9">{te('features.f3.title')}</h5>
                            <p className="mt-2">{te('features.f3.desc')}</p>
                        </InteractiveGradientCard>
                        <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
                            <div
                                className="bg-[url(/images/benefits/earth.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
                            <h5 className="text-xl font-semibold mt-9">{te('features.f4.title')}</h5>
                            <p className="mt-2">{te('features.f4.desc')}</p>
                        </InteractiveGradientCard>
                        <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
                            <div
                                className="bg-[url(/images/benefits/list.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
                            <h5 className="text-xl font-semibold mt-9">{te('features.f5.title')}</h5>
                            <p className="mt-2">{te('features.f5.desc')}</p>
                        </InteractiveGradientCard>
                        <InteractiveGradientCard className="bg-neutral-300 flex items-center justify-center pb-4 pt-1">
                            <div
                                className="bg-[url(/images/benefits/heaset.png)] bg-contain bg-no-repeat bg-center w-[150px] h-[150px] mx-auto"></div>
                            <h5 className="text-xl font-semibold mt-9">{te('features.f6.title')}</h5>
                            <p className="mt-2">{te('features.f6.desc')}</p>
                        </InteractiveGradientCard>
                    </div>
                </div>
            </div>

            <div className="bg-black mt-18">
                <div className="container py-10!">
                    <div className="grid md:grid-cols-2 gap-5">
                        <div className="flex items-center row-start-2 md:row-start-1">
                            <div>
                                <h3 className="text-2xl font-semibold">{t('intro.title')}</h3>
                                <div className="space-y-2 mt-2">
                                    <p>{t('intro.para1')}</p>
                                    <p>{t('intro.para2')}</p>
                                </div>
                                <h3 className="text-2xl font-semibold mt-4">{t('intro.faqTitle')}</h3>
                                <div className="space-y-2">
                                    <p>{t('intro.faqAnswer')}</p>
                                </div>
                                <ParallaxProvider>
                                    <Parallax rotate={[10, -20]} speed={15}>
                                        <div
                                            className="absolute -top-10 left-0 translate-x-[-110%] w-[95px] h-[80px] rotate-[36deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px]">
                                        </div>
                                    </Parallax>
                                </ParallaxProvider>
                            </div>
                        </div>
                        <div className="row-start-1">
                            <Image src="/images/sell-bitcoin-in-dubai.png" alt="Sell Bitcoin" className="w-[70%] mx-auto mr:0 sm:ml-auto" width={400} height={400} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-18!">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 text-black">
                    {
                        Object.entries(prices).map(([symbol, data]) => (
                            <InteractiveGradientCard key={symbol} className="bg-neutral-300 flex items-center justify-center pb-2 pt-1 text-center">
                                <Image src={data.icon_url} alt={data.coin_id} width={50} height={50} className="mx-auto animate-pulse"/>
                                <h5 className="text-xl mt-3">{data.coin_symbol}</h5>
                                <p className="font-semibold text-xl mt-1">${parseFloat(data.usd_price)}</p>
                            </InteractiveGradientCard>
                        ))
                    }
                </div>
            </div>

            <div
                className="bg-gradient-to-b from-[#353C45] to-[#010101] w-full h-screen max-h-[900px] relative text-center flex items-center justify-center mt-24">
                <div className="w-full">
                    <div className="absolute w-full h-full top-0 left-0">
                        <div className="container relative w-full! h-full!">
                            <div
                                className="absolute top-[12%] left-[-3%] w-[55px] h-[50px] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[1px] particle-move-1"></div>
                            <div
                                className="absolute top-[4%] right-[4.5%] w-[236px] h-[227px] rotate-[-16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[10px] particle-move-2"></div>
                            <div
                                className="absolute bottom-[7%] left-[-12.5%] w-[162px] h-[170px] rotate-[-112deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[5px] particle-move-3"></div>
                        </div>
                    </div>
                    <div className="text-3xl font-semibold py-8 relative">
                        {te('trust.title')}
                    </div>
                    <div className="container h-full! relative">
                        <div className="relative bg-black rounded-3xl">
                            <div
                                className="absolute bottom-[-50px] right-[-90px] w-[153px] h-[148px] rotate-[-42deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[2px] particle-move-4"></div>
                            <iframe
                                className="rounded-3xl w-full h-[520px] border-[3px] border-white"
                                src="https://www.youtube.com/embed/tISphaSVLDg?si=DGK_5mzo5-zkh3bf"
                                title="Cryptocurrency To Fiat POS Machine System Made by Pallapay For The First Time in The World"
                                allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-gradient-to-t from-[#353C45] to-[#010101] w-full relative text-center flex items-center justify-center -mt-1">
                <div className="container text-base py-28! relative">
                    <div
                        className="absolute bottom-[7%] left-[-12.5%] !w-[90px] !h-[80px] rotate-[-112deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[5px] particle-move-3"></div>
                    <Image src="/images/shapes/star.png" width={25} height={25} className="absolute left-0 bottom-[15%]" alt="Star" />
                    <Image src="/images/shapes/star.png" width={35} height={35} className="absolute -right-5 bottom-[25%]" alt="Star" />
                    <Image src="/images/shapes/star.png" width={30} height={30} className="absolute right-4 top-[10%]" alt="Star" />
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-10">
                        {Object.values(te.raw('trust.items') as {[key: string]: string}).map((val, idx) => (
                            <div key={idx}>
                                <div className="p-2.5 rounded-md border-[3px] border-white w-fit mx-auto">
                                    <Check size={26} strokeWidth={3.8} />
                                </div>
                                <div className="mt-4">
                                    {val}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="my-14! container text-black">
                <h2 className="text-3xl font-semibold">{t('faq.title')}</h2>
                <Accordion type="single" collapsible className="w-full border-b mt-6">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>{t('faq.q1')}</AccordionTrigger>
                        <AccordionContent>
                            {t('faq.a1')}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>{t('faq.q2')}</AccordionTrigger>
                        <AccordionContent>
                            {t('faq.a2')}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>{t('faq.q3')}</AccordionTrigger>
                        <AccordionContent>
                            {t('faq.a3')}
                        </AccordionContent>
                    </AccordionItem>
                    {/* Add more FAQ items if needed or map from json if I had them all there */}
                </Accordion>
            </div>

            <div className="container mt-20! mb-5! text-black">
                <div className="bg-white rounded-3xl p-10 shadow-[0_0px_40px_rgba(0,0,0,0.05)] space-y-3 mt-10 text-center">
                    <h3 className="text-xl font-semibold">
                        {t('bottom.title')}
                    </h3>
                    <h3 className="text-2xl font-semibold mt-4">{t('bottom.paraTitle')}</h3>
                    <div className="space-y-4 text-left">
                        <p>{t('bottom.para1')}</p>
                        <p>{t('bottom.para2')}</p>
                        <p>{t('bottom.para3')}</p>
                        <p>{t('bottom.para4')}</p>
                        <p>{t('bottom.para5')}</p>
                        <p>{t('bottom.para6')}</p>
                    </div>
                    <ul className="list-disc pl-4 text-left mt-4">
                        <li>{t('bottom.list.buy')}</li>
                        <li>{t('bottom.list.sell')}</li>
                        <li>{t('bottom.list.trade')}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
