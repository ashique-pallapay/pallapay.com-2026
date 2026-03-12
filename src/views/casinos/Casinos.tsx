"use client"

import * as React from 'react';
import { MainFooter } from '@/components/base/MainFooter';
import { MainNav } from '@/components/base/MainNav';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import InteractiveGradientCard from '@/components/base/InteractiveGradientCard';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { AboutUsSection } from '@/components/base/AboutUsSection';
import { ScrollingCharacterReveal } from '@/components/text-scroll-color';
import { useTranslations } from 'next-intl';

export function Casinos() {
    const t = useTranslations('casinos');
    const longText = t('scrollText');

    return (
        <div className="bg-black">
            <MainNav hasBackground={true} />
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 mt-6">
                    <div className="flex items-center lg:col-span-5 pb-6 row-start-2 lg:row-start-1 mt-16 lg:mt-0">
                        <div>
                            <div className="text-4xl leading-[3rem] lg:text-[3.65rem] lg:leading-[4.2rem] font-semibold">
                                {t('heroTitle')}
                            </div>
                            <div className="text-lg sm:text-base mt-6">
                                {t('heroDesc')}
                            </div>
                            <div className="mt-6">
                                <a href="https://dashboard.pallapay.com/auth/register">
                                    <Button className="bg-amber-400 hover:bg-amber-500 cursor-pointer flex gap-1 items-center">
                                        {t('getStarted')}
                                        <ArrowRight />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-6 lg:col-span-7 relative lg:p-6 row-start-1">
                        <div className="relative mt-8">
                            <div className="absolute left-0 bottom-[10%] w-[90%] h-[60%] bg-[#363636] rounded-[150%] blur-[100px]"></div>
                            <ParallaxProvider>
                                <Parallax rotate={[-20, 5]} speed={-8} className="top-0 left-0 absolute">
                                    <img alt="Casino chips" src="/images/casinos/hero/chips.png" />
                                </Parallax>
                                <Parallax rotate={[-20, 5]} speed={-10} className="top-0 left-0 absolute">
                                    <img alt="Gold dice" src="/images/casinos/hero/gold-dices.png" />
                                </Parallax>
                                <Parallax rotate={[-20, 5]} speed={10} className="top-4 sm:top-0 left-0 absolute">
                                    <img alt="777 win" src="/images/casinos/hero/777.png" />
                                </Parallax>
                                <Parallax rotate={[25, -10]} speed={-5} className="-bottom-10 sm:bottom-auto sm:top-0 left-0 absolute">
                                    <img alt="Casino" src="/images/casinos/hero/main2.png" />
                                </Parallax>
                                <Parallax rotate={[-10, 0]} speed={-5} className="relative -mt-10 sm:mt-0">
                                    <img alt="Casino" src="/images/casinos/hero/main1.png" />
                                </Parallax>
                            </ParallaxProvider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center mt-20 sm:mt-28">
                <div className="text-2xl sm:text-3xl">{t('benefits')}</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12">
                    <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center pb-2 pt-1">
                        <img alt="Ready to Use Solutions" src="/images/benefits/money-bank.png" className="max-w-[95%] mx-auto" />
                        <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-7">{t('readyToUseSolutions')}</div>
                    </InteractiveGradientCard>
                    <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center pb-2 pt-1">
                        <img alt="Limitless Transactions" src="/images/benefits/money-infinit.png" className="max-w-[95%] mx-auto" />
                        <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-7">{t('limitlessTransactions')}</div>
                    </InteractiveGradientCard>
                    <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center pb-2 pt-1">
                        <img alt="Fiat Settlement" src="/images/benefits/exchange.png" className="max-w-[95%] mx-auto" />
                        <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-7">{t('fiatSettlement')}</div>
                    </InteractiveGradientCard>
                    <InteractiveGradientCard className="bg-[#181A20] flex items-center justify-center pb-2 pt-1">
                        <img alt="Save on Network Fees" src="/images/benefits/money-wallet.png" className="max-w-[95%] mx-auto" />
                        <div className="text-lg sm:text-xl font-semibold mt-2 sm:mt-7">{t('saveOnNetworkFees')}</div>
                    </InteractiveGradientCard>
                </div>
            </div>
            <div className="container">
                <div
                    className="mt-20 sm:mt-36 text-5xl md:text-6xl font-bold text-center leading-[125%] container">
                    <ScrollingCharacterReveal
                        theme="DARK"
                        text={longText}
                        scrollThresholds={Array.from({ length: longText.length }, (_, i) => (i + 1) * 12)} />
                </div>
            </div>
            <div className="bg-[#181A20] py-10 mt-24 sm:mt-32">
                <div className="container">
                    <div className="text-3xl font-semibold text-amber-400">{t('sectionTitle')}</div>
                    <div className="grid grid-cols-10">
                        <div className="row-start-2 sm:row-start-1 col-span-12 md:col-span-8 relative z-2">
                            <div className="relative z-2 text-lg">
                                <div className="mt-5">
                                    <p>{t('sectionDesc1')}</p>
                                    <p>{t('sectionDesc2')}</p>
                                </div>
                                <div className="flex gap-3 mt-7">
                                    <a href="https://dashboard.pallapay.com/auth/register">
                                        <Button className="bg-amber-400 hover:bg-amber-500 cursor-pointer">
                                            {t('startIntegration')}
                                        </Button>
                                    </a>
                                    <a href="https://docs.pallapay.com">
                                        <Button variant="outline"
                                                className="bg-transparent text-amber-400 hover:text-amber-400 hover:bg-amber-400/10 border-amber-400 cursor-pointer">
                                            {t('checkApiDocs')}
                                        </Button>
                                    </a>
                                </div>
                            </div>
                            <div className="relative">
                                <ParallaxProvider>
                                    <Parallax rotate={[-6, 7]} speed={5}>
                                        <div
                                            className="absolute -top-16 -left-[12%] w-[120px] h-[120px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[12px]">
                                        </div>
                                    </Parallax>
                                    <Parallax rotate={[14, 0]} speed={0}>
                                        <img alt="Coin" src="/images/casinos/coin.png" width={115}
                                             className="absolute top-4 sm:top-14 left-[3%]" />
                                    </Parallax>
                                </ParallaxProvider>
                            </div>
                        </div>
                        <div className="row-start-1 col-span-12 md:col-span-2 relative pt-20 lg:pt-0 -mt-32 md:mt-0">
                            <ParallaxProvider>
                                <Parallax rotate={[-20, 20]} speed={-3}>
                                    <div
                                        className="absolute -top-32 sm:-top-12 -right-14 lg:-right-20 w-[120px] h-[105px] md:w-[180px] md:h-[170px] rotate-[16deg] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[14px]">
                                    </div>
                                </Parallax>
                                <Parallax rotate={[-3, 3]} speed={6}>
                                    <img alt="Casino arrow" src="/images/casinos/casino-arrow.png" width={190}
                                         className="absolute -top-28 right-[-10%] sm:right-auto sm:left-5 max-w-[100px] sm:max-w-none" />
                                </Parallax>
                                <Parallax rotate={[10, -5]} speed={-4}>
                                    <img alt="Casino dices" src="/images/casinos/dices.png" width={215}
                                         className="absolute sm:-right-18 right-2 top-9 hidden sm:block" />
                                </Parallax>
                            </ParallaxProvider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-32">
                <div className="grid grid-cols-2 lg:grid-cols-3">
                    <div className="translate-x-16 hidden lg:block">
                        <img alt="Casino" src="/images/casinos/left-image.png" className="min-w-[115%]"/>
                    </div>
                    <div className="col-span-2 bg-[#353C45] rounded-3xl md:py-10 p-5 md:pl-14 lg:pl-32 md:pr-14">
                        <div className="text-amber-400 text-3xl font-semibold">{t('acceptCryptoTitle')}</div>
                        <div className="mt-5 text-lg">
                            <p>{t('acceptCryptoDesc1')}</p>
                            <p>{t('acceptCryptoDesc2')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUsSection className="sm:!pt-0" />
            <MainFooter className="!mt-8 sm:!mt-24" hasCreateAccountSection={true} createAccountSectionType="SOLID" />
        </div>
    )
}
