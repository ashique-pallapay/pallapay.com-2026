"use client"

import * as React from 'react';
import Image from "next/image";
import { MainFooter } from '@/components/base/MainFooter';
import { MainNav } from '@/components/base/MainNav';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { useState } from 'react';
import { clsx } from 'clsx';
import { Cryptocurrency, Currency, SwapPair, WalletConfig } from '@/types/api';
import { useTranslations } from 'next-intl';
// import { Button } from '@/components/ui/button';
// import { ArrowRight } from 'lucide-react';

export function Pricing({currencies, cryptocurrencies, walletConfigs}: {currencies: Currency[], cryptocurrencies: Cryptocurrency[], walletConfigs: WalletConfig[], swapPairs: SwapPair[]}) {
    const [selectedTab, setSelectedTab] = useState<"WALLET" | "GIFT_CARD" | "GATEWAY">("WALLET");
    const [selectedSubTab, setSelectedSubTab] = useState(1);
    const t = useTranslations('pricingPage');

    const depositSupportedCoins = [
        'ETH',
        'TRX',
        'BNB',
        'USDT (ERC20)',
        'USDT (TRC20)',
        'USDC (ERC20)',
        'DAI (ERC20)',
        'PALLA (BEP20)',
    ]

    const stableCoins = [
        'USDT',
        'USDC',
        'DAI',
    ]

    return (
        <>
            <div>
                <MainNav hasBackground={true} />
                <div className="relative bg-black">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-12">
                            <div
                                className="flex items-center lg:col-span-5 pb-6 row-start-2 lg:row-start-1 mt-16 lg:mt-0">
                                <div>
                                    <div
                                        className="text-4xl leading-[3rem] lg:text-[3.65rem] lg:leading-[4.2rem] font-semibold">
                                        {t('heroTitle')}
                                    </div>
                                    <div className="text-lg sm:text-base mt-6">
                                        {t('heroSubtitle')}
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-6 lg:col-span-7 relative lg:p-6 row-start-1">
                                <div className="relative mt-8">
                                    <div
                                        className="absolute left-6 bottom-[10%] w-full h-[70%] bg-[#313131] rounded-[150%] blur-[100px]"></div>
                                    <ParallaxProvider>
                                        <Parallax speed={2}>
                                            <div
                                                className="absolute bg-[url(/images/shapes/star.png)] bg-contain w-[35px] h-[35px] -top-5 -right-5" />
                                        </Parallax>
                                        <Parallax speed={-5}>
                                            <div
                                                className="absolute -top-10 right-0 w-[140px] h-[132px] bg-gradient-to-b from-[#353C45] via-[#181A20] via-50% to-[#010101] rounded-[150%] blur-[8px]"></div>
                                        </Parallax>
                                        <Parallax speed={-4}>
                                            <div
                                                className="absolute bg-[url(/images/shapes/star.png)] bg-contain w-[35px] h-[35px] top-16 right-18" />
                                        </Parallax>
                                        <Parallax speed={-5} className="relative">
                                            <Image alt="Casino" src="/images/pricing/main-img.png" width={700} height={500} />
                                        </Parallax>
                                    </ParallaxProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-10 pb-12 sm:pb-24 relative">
                        <h1 className="text-2xl font-semibold sm:mt-8">{t('feeStructure')}</h1>
                        <div>
                            <div className="space-x-2 sm:space-x-4 mt-5 sm:mt-10">
                                <button onClick={() => {
                                    setSelectedTab('WALLET');
                                    setSelectedSubTab(1);
                                }} className={clsx(
                                    "!text-xs sm:!text-sm",
                                    { 'cursor-pointer px-3 sm:px-4 py-1.5 rounded-lg bg-amber-400 text-black': selectedTab == 'WALLET' },
                                    { 'cursor-pointer px-3 sm:px-4 py-1.5 text-amber-400 rounded-lg hover:bg-amber-100/10': selectedTab != 'WALLET' }
                                )}>{ t('wallet') }
                                </button>
                                <button onClick={() => {
                                    setSelectedTab('GIFT_CARD');
                                    setSelectedSubTab(1);
                                }} className={clsx(
                                    "!text-xs sm:!text-sm",
                                    { 'cursor-pointer px-3 sm:px-4 py-1.5 rounded-lg bg-amber-400 text-black': selectedTab == 'GIFT_CARD' },
                                    { 'cursor-pointer px-3 sm:px-4 py-1.5 text-amber-400 rounded-lg hover:bg-amber-100/10': selectedTab != 'GIFT_CARD' }
                                )}>{ t('giftCard') }
                                </button>
                                <button onClick={() => {
                                    setSelectedTab('GATEWAY');
                                    setSelectedSubTab(1);
                                }} className={clsx(
                                    "!text-xs sm:!text-sm",
                                    { 'cursor-pointer px-3 sm:px-4 py-1.5 rounded-lg bg-amber-400 text-black': selectedTab == 'GATEWAY' },
                                    { 'cursor-pointer px-3 sm:px-4 py-1.5 text-amber-400 rounded-lg hover:bg-amber-100/10': selectedTab != 'GATEWAY' }
                                )}>{ t('paymentGateway') }
                                </button>
                            </div>
                            {
                                selectedTab == 'WALLET' && (
                                    <>
                                        <div className="space-x-3 sm:space-x-5 mt-6 mb-4">
                                            <button onClick={() => setSelectedSubTab(1)} className={clsx(
                                                'cursor-pointer px-1 py-1.5',
                                                { 'border-b-2 border-amber-400 text-amber-400': selectedSubTab == 1 },
                                                { 'text-amber-100 border-b-2 border-b-transparent hover:border-amber-200/30': selectedSubTab != 1 }
                                            )}>Deposit/Withdrawal
                                            </button>
                                            {/*<button onClick={() => setSelectedSubTab(2)} className={clsx(*/}
                                            {/*    'cursor-pointer px-1 py-1.5',*/}
                                            {/*    { 'border-b-2 border-amber-400 text-amber-400': selectedSubTab == 2 },*/}
                                            {/*    { 'text-amber-100 border-b-2 border-b-transparent hover:border-amber-200/30': selectedSubTab != 2 }*/}
                                            {/*)}>Convert*/}
                                            {/*</button>*/}
                                            {/*<button onClick={() => setSelectedSubTab(3)} className={clsx(*/}
                                            {/*    'cursor-pointer px-1 py-1.5',*/}
                                            {/*    { 'border-b-2 border-amber-400 text-amber-400': selectedSubTab == 3 },*/}
                                            {/*    { 'text-amber-100 border-b-2 border-b-transparent hover:border-amber-200/30': selectedSubTab != 3 }*/}
                                            {/*)}>Fiat Withdrawal*/}
                                            {/*</button>*/}
                                        </div>

                                        {
                                            selectedSubTab == 1 && (
                                                <div className="w-full max-w-full overflow-x-auto">
                                                    <table className="text-sm w-full">
                                                        <thead className="bg-neutral-900 text-gray-300">
                                                        <tr>
                                                            <td className="px-3 py-3">
                                                                 {t('coinToken')}
                                                             </td>
                                                            <td className="px-3 py-3">
                                                                 {t('minimumDeposit')}
                                                             </td>
                                                            <td className="px-3 py-3">
                                                                 {t('minimumWithdrawal')}
                                                             </td>
                                                            <td className="px-3 py-3">
                                                                 {t('depositFee')}
                                                             </td>
                                                            <td className="px-3 py-3">
                                                                 {t('withdrawalFee')}
                                                             </td>
                                                        </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-neutral-700">
                                                        {
                                                            cryptocurrencies.map((cryptocurrency) => (
                                                                <tr className="hover:bg-gray-700/60"
                                                                    key={cryptocurrency.name}>
                                                                    <td className="px-3 py-5">
                                                                        <div className="relative w-fit">
                                                                            <Image className="rounded-full" width={35}
                                                                                 src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${cryptocurrency.currency.symbol.toLowerCase()}.png&w=96&q=40`}
                                                                                 alt={cryptocurrency.currency.symbol} />
                                                                            {
                                                                                cryptocurrency.network.token_type &&
                                                                                <Image
                                                                                    className="absolute -right-0.5 -bottom-0.5 border border-neutral-800 rounded-full"
                                                                                    width={20}
                                                                                    src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${cryptocurrency.network.fee_currency.symbol.toLowerCase()}.png&w=96&q=40`}
                                                                                    alt={cryptocurrency.network.fee_currency.symbol} />
                                                                            }
                                                                        </div>
                                                                        <div
                                                                            className="mt-1 font-semibold">{cryptocurrency.currency.symbol} {cryptocurrency.network.token_type ? `(${cryptocurrency.network.token_type})` : ''}</div>
                                                                    </td>
                                                                    <td className="px-3 py-5">
                                                                        ≥ {walletConfigs.find((i) => i.cryptocurrency.currency.symbol == cryptocurrency.currency.symbol && i.cryptocurrency.network.symbol == cryptocurrency.network.symbol)?.min_deposit}
                                                                    </td>
                                                                    <td className="px-3 py-5">
                                                                        ≥ {cryptocurrency.wallet_withdrawal_minimum_amount}
                                                                    </td>
                                                                    <td className="px-3 py-5">
                                                                        0
                                                                    </td>
                                                                    <td className="px-3 py-5">
                                                                        {
                                                                            parseFloat(cryptocurrency.wallet_withdrawal_percentage_fee) > 0 &&
                                                                            <>{parseFloat(cryptocurrency.wallet_withdrawal_percentage_fee)}%</>
                                                                        }
                                                                        {' '}
                                                                        {
                                                                            parseFloat(cryptocurrency.wallet_withdrawal_maximum_percentage_fee) > 0 &&
                                                                            <>({parseFloat(cryptocurrency.wallet_withdrawal_maximum_percentage_fee)} {cryptocurrency.currency.symbol})</>
                                                                        }
                                                                        {
                                                                            parseFloat(cryptocurrency.wallet_withdrawal_fixed_fee) > 0 &&
                                                                            <> + {parseFloat(cryptocurrency.wallet_withdrawal_fixed_fee)} {cryptocurrency.currency.symbol}</>
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )
                                        }
                                        {
                                            selectedSubTab == 2 && (
                                                <div className="pt-6 pb-14">
                                                    Coming Soon !
                                                </div>
                                                // <table className="text-sm w-full">
                                                //     <thead className="bg-neutral-900 text-gray-300">
                                                //     <tr>
                                                //         <td className="px-3 py-3">
                                                //             Coin/Token
                                                //         </td>
                                                //         <td className="px-3 py-3">
                                                //             Minimum Convert
                                                //         </td>
                                                //         <td className="px-3 py-3">
                                                //             Conversion Fee
                                                //         </td>
                                                //     </tr>
                                                //     </thead>
                                                //     {/*<tbody className="divide-y divide-neutral-700">*/}
                                                //     {/*    {*/}
                                                //     {/*        swapPairs.map((swapPair) => (*/}
                                                //     {/*            <tr className="hover:bg-gray-700/60" key={swapPair.symbol}>*/}
                                                //     {/*                <td className="px-3 py-5">*/}
                                                //     {/*                    <div className="flex gap-0.5 items-center">*/}
                                                //     {/*                        <div className="relative w-fit">*/}
                                                //     {/*                            <Image className="rounded-full" width={35}*/}
                                                //     {/*                                 src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${swapPair.source_currency.symbol.toLowerCase()}.png&w=96&q=40`}*/}
                                                //     {/*                                 alt={swapPair.source_currency.symbol} />*/}
                                                //     {/*                            {*/}
                                                //     {/*                                (swapPair.source_network && swapPair.source_network.token_type) &&*/}
                                                //     {/*                                <Image*/}
                                                //     {/*                                    className="absolute -right-0.5 -bottom-0.5 border border-neutral-800 rounded-full"*/}
                                                //     {/*                                    width={20}*/}
                                                //     {/*                                    src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${swapPair.source_network.fee_currency.symbol.toLowerCase()}.png&w=96&q=40`}*/}
                                                //     {/*                                    alt={swapPair.source_network.fee_currency.symbol} />*/}
                                                //     {/*                            }*/}
                                                //     {/*                        </div>*/}
                                                //     {/*                        <ChevronRight className="w-5 h-5 ml-0.5" />*/}
                                                //     {/*                        <div className="relative w-fit">*/}
                                                //     {/*                            <Image className="rounded-full" width={35}*/}
                                                //     {/*                                 src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${swapPair.destination_currency.symbol.toLowerCase()}.png&w=96&q=40`}*/}
                                                //     {/*                                 alt={swapPair.destination_currency.symbol} />*/}
                                                //     {/*                            {*/}
                                                //     {/*                                (swapPair.destination_network && swapPair.destination_network.token_type) &&*/}
                                                //     {/*                                <Image*/}
                                                //     {/*                                    className="absolute -right-0.5 -bottom-0.5 border border-neutral-800 rounded-full"*/}
                                                //     {/*                                    width={20}*/}
                                                //     {/*                                    src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${swapPair.destination_network.fee_currency.symbol.toLowerCase()}.png&w=96&q=40`}*/}
                                                //     {/*                                    alt={swapPair.destination_network.fee_currency.symbol} />*/}
                                                //     {/*                            }*/}
                                                //     {/*                        </div>*/}
                                                //     {/*                    </div>*/}
                                                //     {/*                    <div className="mt-1 font-semibold">*/}
                                                //     {/*                        {swapPair.source_currency.symbol} {(swapPair.source_network && swapPair.source_network.token_type) ? `(${swapPair.source_network.token_type})` : ""}*/}
                                                //     {/*                        {" "}to{" "}*/}
                                                //
                                                //     {/*                    </div>*/}
                                                //     {/*                </td>*/}
                                                //     {/*                <td className="px-3 py-5">*/}
                                                //     {/*                    ≥ {parseFloat(swapPair.minimum_source_amount)} {swapPair.source_currency.symbol}*/}
                                                //     {/*                </td>*/}
                                                //     {/*                <td className="px-3 py-5">*/}
                                                //     {/*                    {*/}
                                                //     {/*                        parseFloat(swapPair.fixed_fee) > 0 &&*/}
                                                //     {/*                        <>{parseFloat(swapPair.fixed_fee)} {swapPair.source_currency.symbol} + </>*/}
                                                //     {/*                    }*/}
                                                //     {/*                    {*/}
                                                //     {/*                        parseFloat(swapPair.percentage_fee) > 0 &&*/}
                                                //     {/*                        <>{parseFloat(swapPair.percentage_fee)}%</>*/}
                                                //     {/*                    }*/}
                                                //     {/*                </td>*/}
                                                //     {/*            </tr>*/}
                                                //     {/*        ))*/}
                                                //     {/*    }*/}
                                                //     {/*</tbody>*/}
                                                // </table>
                                            )
                                        }
                                        {
                                            selectedSubTab == 3 && (
                                                <div className="pt-6 pb-14">
                                                    Coming Soon !
                                                </div>
                                            )
                                        }
                                    </>
                                )
                            }
                            {
                                selectedTab == 'GIFT_CARD' && (
                                    <>
                                        <div className="space-x-3 sm:space-x-5 mt-6 mb-4">
                                            <button onClick={() => setSelectedSubTab(1)} className={clsx(
                                                'cursor-pointer px-1 py-1.5',
                                                { 'border-b-2 border-amber-400 text-amber-400': selectedSubTab == 1 },
                                                { 'text-amber-100 border-b-2 border-b-transparent hover:border-amber-200/30': selectedSubTab != 1 }
                                            )}>Convert to Gift Card
                                            </button>
                                            <button onClick={() => setSelectedSubTab(2)} className={clsx(
                                                'cursor-pointer px-1 py-1.5',
                                                { 'border-b-2 border-amber-400 text-amber-400': selectedSubTab == 2 },
                                                { 'text-amber-100 border-b-2 border-b-transparent hover:border-amber-200/30': selectedSubTab != 2 }
                                            )}>Withdrawal
                                            </button>
                                        </div>

                                        {
                                            selectedSubTab == 1 && (
                                                <div className="w-full max-w-full overflow-x-auto">
                                                    <table className="text-sm w-full">
                                                        <thead className="bg-neutral-900 text-gray-300">
                                                        <tr>
                                                            <td className="px-3 py-3">
                                                             {t('symbol')}
                                                             </td>
                                                            <td className="px-3 py-3">
                                                             {t('minimumConversion')}
                                                             </td>
                                                            <td className="px-3 py-3">
                                                             {t('conversionFee')}
                                                             </td>
                                                        </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-neutral-700">
                                                        {
                                                            currencies.map((currency) => (
                                                                <tr className="hover:bg-gray-700/60"
                                                                    key={currency.symbol + "_convert_gift_card"}>
                                                                    <td className="px-3 py-5">
                                                                        <div className="relative w-fit">
                                                                            <Image className="rounded-full" width={35}
                                                                                 src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${currency.symbol.toLowerCase()}.png&w=96&q=40`}
                                                                                 alt={currency.symbol} />
                                                                        </div>
                                                                        <div
                                                                            className="mt-1 font-semibold">{currency.symbol}</div>
                                                                    </td>
                                                                    <td className="px-3 py-5">
                                                                        ≥ {currency?.gift_card_minimum_amount}
                                                                    </td>
                                                                    <td className="px-3 py-5">
                                                                        {
                                                                            currency.is_fiat ? (
                                                                                <ul className="list-disc">
                                                                                    <li>
                                                                                        {
                                                                                            parseFloat(currency.gift_card_percentage_fee) > 0 &&
                                                                                            <>{parseFloat(currency.gift_card_percentage_fee)}%</>
                                                                                        }
                                                                                        {
                                                                                            parseFloat(currency.gift_card_fixed_fee) > 0 &&
                                                                                            <> + {parseFloat(currency.gift_card_fixed_fee)} {currency.symbol}</>
                                                                                        }
                                                                                    </li>
                                                                                </ul>
                                                                            ) : (
                                                                                <ul className="list-disc">
                                                                                    <li>
                                                                                        {
                                                                                            parseFloat(currency.gift_card_percentage_fee) > 0 &&
                                                                                            <>{parseFloat(currency.gift_card_percentage_fee)}%
                                                                                                + </>
                                                                                        }
                                                                                        {parseFloat(currencies.find((i) => i.symbol == "AED")?.gift_card_fixed_fee ?? "0")} AED
                                                                                    </li>
                                                                                    <li>
                                                                                        {
                                                                                            parseFloat(currency.gift_card_percentage_fee) > 0 &&
                                                                                            <>{parseFloat(currency.gift_card_percentage_fee)}%
                                                                                                + </>
                                                                                        }
                                                                                        {parseFloat(currencies.find((i) => i.symbol == "USD")?.gift_card_fixed_fee ?? "0")} USD
                                                                                    </li>
                                                                                </ul>
                                                                            )
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )
                                        }
                                        {
                                            selectedSubTab == 2 && (
                                                <div className="w-full max-w-full overflow-x-auto">
                                                    <table className="text-sm w-full">
                                                        <thead className="bg-neutral-900 text-gray-300">
                                                        <tr>
                                                            <td className="px-3 py-3">
                                                                 {t('coinToken')}
                                                             </td>
                                                            <td className="px-3 py-3">
                                                                 {t('minimumWithdrawal')}
                                                             </td>
                                                            <td className="px-3 py-3">
                                                                 {t('withdrawalFee')}
                                                             </td>
                                                        </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-neutral-700">
                                                        {
                                                            cryptocurrencies.map((cryptocurrency) => (
                                                                <tr className="hover:bg-gray-700/60"
                                                                    key={cryptocurrency.name + "_gift_card_withdrawal"}>
                                                                    <td className="px-3 py-5">
                                                                        <div className="flex gap-0.5 items-center">
                                                                            <div className="relative w-fit">
                                                                                <Image className="rounded-full" width={35}
                                                                                     src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${cryptocurrency.currency.symbol.toLowerCase()}.png&w=96&q=40`}
                                                                                     alt={cryptocurrency.currency.symbol} />
                                                                                {
                                                                                    cryptocurrency.network.token_type &&
                                                                                    <Image
                                                                                        className="absolute -right-0.5 -bottom-0.5 border border-neutral-800 rounded-full"
                                                                                        width={20}
                                                                                        src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${cryptocurrency.network.fee_currency.symbol.toLowerCase()}.png&w=96&q=40`}
                                                                                        alt={cryptocurrency.network.fee_currency.symbol} />
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                        <div className="mt-1 font-semibold">
                                                                            {cryptocurrency.currency.symbol} {cryptocurrency.network.token_type ? `(${cryptocurrency.network.token_type})` : ""}
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-3 py-5">
                                                                        ≥ {parseFloat(cryptocurrency.wallet_withdrawal_minimum_amount)} {cryptocurrency.currency.symbol}
                                                                    </td>
                                                                    <td className="px-3 py-5">
                                                                        {
                                                                            parseFloat(cryptocurrency.deposit_percentage_fee) > 0 &&
                                                                            <>{parseFloat(cryptocurrency.deposit_percentage_fee)}%
                                                                                + </>
                                                                        }
                                                                        {parseFloat(cryptocurrency.deposit_fixed_fee)} {cryptocurrency.currency.symbol}
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )
                                        }
                                    </>
                                )
                            }
                            {
                                selectedTab == 'GATEWAY' && (
                                    <>
                                        <div className="space-x-3 sm:space-x-5 mt-6 mb-4">
                                            <button onClick={() => setSelectedSubTab(1)} className={clsx(
                                                'cursor-pointer px-1 py-1.5',
                                                { 'border-b-2 border-amber-400 text-amber-400': selectedSubTab == 1 },
                                                { 'text-amber-100 border-b-2 border-b-transparent hover:border-amber-200/30': selectedSubTab != 1 }
                                            )}>API
                                            </button>
                                            <button onClick={() => setSelectedSubTab(2)} className={clsx(
                                                'cursor-pointer px-1 py-1.5',
                                                { 'border-b-2 border-amber-400 text-amber-400': selectedSubTab == 2 },
                                                { 'text-amber-100 border-b-2 border-b-transparent hover:border-amber-200/30': selectedSubTab != 2 }
                                            )}>POS
                                            </button>
                                            <button onClick={() => setSelectedSubTab(3)} className={clsx(
                                                'cursor-pointer px-1 py-1.5',
                                                { 'border-b-2 border-amber-400 text-amber-400': selectedSubTab == 3 },
                                                { 'text-amber-100 border-b-2 border-b-transparent hover:border-amber-200/30': selectedSubTab != 3 }
                                            )}>Payment Link
                                            </button>
                                            <button onClick={() => setSelectedSubTab(4)} className={clsx(
                                                'cursor-pointer px-1 py-1.5',
                                                { 'border-b-2 border-amber-400 text-amber-400': selectedSubTab == 4 },
                                                { 'text-amber-100 border-b-2 border-b-transparent hover:border-amber-200/30': selectedSubTab != 4 }
                                            )}>Payment Page
                                            </button>
                                            <button onClick={() => setSelectedSubTab(5)} className={clsx(
                                                'cursor-pointer px-1 py-1.5',
                                                { 'border-b-2 border-amber-400 text-amber-400': selectedSubTab == 5 },
                                                { 'text-amber-100 border-b-2 border-b-transparent hover:border-amber-200/30': selectedSubTab != 5 }
                                            )}>Crypto Settlement
                                            </button>
                                        </div>

                                        {
                                            selectedSubTab == 1 && (
                                                <>
                                                    <div className="w-full max-w-full overflow-x-auto">
                                                        <table className="text-sm w-full">
                                                            <thead className="bg-neutral-900 text-gray-300">
                                                            <tr>
                                                                <td className="px-3 py-3">
                                                                 {t('coinToken')}
                                                             </td>
                                                                <td className="px-3 py-3"
                                                                    title={t('footnote1')}>
                                                                 {t('minimumAmount')}
                                                                 </td>
                                                                <td className="px-3 py-3"
                                                                    title={t('footnote1')}>
                                                                 {t('maximumAmount')}
                                                                 </td>
                                                                <td className="px-3 py-3"
                                                                    title={t('footnote2')}>
                                                                 {t('transactionFee')}
                                                                 </td>
                                                            </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-neutral-700">
                                                            {
                                                                cryptocurrencies.map((cryptocurrency) => (
                                                                    <>
                                                                        {
                                                                            depositSupportedCoins.includes(cryptocurrency.name) &&
                                                                            <tr className="hover:bg-gray-700/60"
                                                                                key={cryptocurrency.name}>
                                                                                <td className="px-3 py-5">
                                                                                    <div className="relative w-fit">
                                                                                        <Image className="rounded-full" width={35}
                                                                                             src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${cryptocurrency.currency.symbol.toLowerCase()}.png&w=96&q=40`}
                                                                                             alt={cryptocurrency.currency.symbol} />
                                                                                        {
                                                                                            cryptocurrency.network.token_type &&
                                                                                            <Image
                                                                                                className="absolute -right-0.5 -bottom-0.5 border border-neutral-800 rounded-full"
                                                                                                width={20}
                                                                                                src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${cryptocurrency.network.fee_currency.symbol.toLowerCase()}.png&w=96&q=40`}
                                                                                                alt={cryptocurrency.network.fee_currency.symbol} />
                                                                                        }
                                                                                    </div>
                                                                                    <div
                                                                                        className="mt-1 font-semibold">{cryptocurrency.currency.symbol} {cryptocurrency.network.token_type ? `(${cryptocurrency.network.token_type})` : ""}</div>
                                                                                </td>
                                                                                <td className="px-3 py-5">
                                                                                    ≥ {parseFloat(cryptocurrency.api_minimum_amount)} {cryptocurrency.currency.symbol}
                                                                                </td>
                                                                                <td className="px-3 py-5">
                                                                                    {parseFloat(cryptocurrency.api_maximum_amount)} {cryptocurrency.currency.symbol}
                                                                                </td>
                                                                                <td className="px-3 py-5">
                                                                                    {stableCoins.includes(cryptocurrency.currency.symbol) ? "0 - 0.9%" : "0 - 2.9%"}
                                                                                </td>
                                                                            </tr>
                                                                        }
                                                                    </>
                                                                ))
                                                            }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="text-xs italic space-y-2 mt-6">
                                                        <div className="flex gap-1">
                                                            <div>*</div>
                                                            {t('footnote1')}
                                                        </div>
                                                        <div className="flex gap-1">
                                                            <div>**</div>
                                                            {t('footnote2')}
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
                                        {
                                            selectedSubTab == 2 && (
                                                <>
                                                    <div className="w-full max-w-full overflow-x-auto">
                                                        <table className="text-sm w-full">
                                                            <thead className="bg-neutral-900 text-gray-300">
                                                            <tr>
                                                                <td className="px-3 py-3">
                                                                 {t('coinToken')}
                                                             </td>
                                                                <td className="px-3 py-3"
                                                                    title={t('footnote1')}>
                                                                 {t('minimumAmount')}
                                                                 </td>
                                                                <td className="px-3 py-3"
                                                                    title={t('footnote1')}>
                                                                 {t('maximumAmount')}
                                                                 </td>
                                                                <td className="px-3 py-3"
                                                                    title={t('footnote2')}>
                                                                 {t('transactionFee')}
                                                                 </td>
                                                            </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-neutral-700">
                                                            {
                                                                cryptocurrencies.map((cryptocurrency) => (
                                                                    <>
                                                                        {
                                                                            depositSupportedCoins.includes(cryptocurrency.name) &&
                                                                            <tr className="hover:bg-gray-700/60"
                                                                                key={cryptocurrency.name}>
                                                                                <td className="px-3 py-5">
                                                                                    <div className="relative w-fit">
                                                                                        <Image className="rounded-full"
                                                                                             width={35}
                                                                                             src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${cryptocurrency.currency.symbol.toLowerCase()}.png&w=96&q=40`}
                                                                                             alt={cryptocurrency.currency.symbol} />
                                                                                        {
                                                                                            cryptocurrency.network.token_type &&
                                                                                            <Image
                                                                                                className="absolute -right-0.5 -bottom-0.5 border border-neutral-800 rounded-full"
                                                                                                width={20}
                                                                                                src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${cryptocurrency.network.fee_currency.symbol.toLowerCase()}.png&w=96&q=40`}
                                                                                                alt={cryptocurrency.network.fee_currency.symbol} />
                                                                                        }
                                                                                    </div>
                                                                                    <div
                                                                                        className="mt-1 font-semibold">{cryptocurrency.currency.symbol} {cryptocurrency.network.token_type ? `(${cryptocurrency.network.token_type})` : ''}</div>
                                                                                </td>
                                                                                <td className="px-3 py-5">
                                                                                    ≥ {parseFloat(cryptocurrency.api_minimum_amount)} {cryptocurrency.currency.symbol}
                                                                                </td>
                                                                                <td className="px-3 py-5">
                                                                                    {parseFloat(cryptocurrency.api_maximum_amount)} {cryptocurrency.currency.symbol}
                                                                                </td>
                                                                                <td className="px-3 py-5">
                                                                                    {stableCoins.includes(cryptocurrency.currency.symbol) ? '0 - 0.9%' : '0 - 2.9%'}
                                                                                </td>
                                                                            </tr>
                                                                        }
                                                                    </>
                                                                ))
                                                            }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="text-xs italic space-y-2 mt-6">
                                                        <div className="flex gap-1">
                                                            <div>*</div>
                                                            {t('footnote1')}
                                                        </div>
                                                        <div className="flex gap-1">
                                                            <div>**</div>
                                                            {t('footnote2')}
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
                                        {
                                            selectedSubTab == 3 && (
                                                <>
                                                    <div className="w-full max-w-full overflow-x-auto">
                                                        <table className="text-sm w-full">
                                                            <thead className="bg-neutral-900 text-gray-300">
                                                            <tr>
                                                                <td className="px-3 py-3">
                                                                 {t('coinToken')}
                                                             </td>
                                                                <td className="px-3 py-3"
                                                                    title={t('footnote1')}>
                                                                 {t('minimumAmount')}
                                                                 </td>
                                                                <td className="px-3 py-3"
                                                                    title={t('footnote1')}>
                                                                 {t('maximumAmount')}
                                                                 </td>
                                                                <td className="px-3 py-3"
                                                                    title={t('footnote2')}>
                                                                 {t('transactionFee')}
                                                                 </td>
                                                            </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-neutral-700">
                                                            {
                                                                cryptocurrencies.map((cryptocurrency) => (
                                                                    <>
                                                                        {
                                                                            depositSupportedCoins.includes(cryptocurrency.name) &&
                                                                            <tr className="hover:bg-gray-700/60"
                                                                                key={cryptocurrency.name}>
                                                                                <td className="px-3 py-5">
                                                                                    <div className="relative w-fit">
                                                                                        <Image className="rounded-full"
                                                                                             width={35}
                                                                                             src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${cryptocurrency.currency.symbol.toLowerCase()}.png&w=96&q=40`}
                                                                                             alt={cryptocurrency.currency.symbol} />
                                                                                        {
                                                                                            cryptocurrency.network.token_type &&
                                                                                            <Image
                                                                                                className="absolute -right-0.5 -bottom-0.5 border border-neutral-800 rounded-full"
                                                                                                width={20}
                                                                                                src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${cryptocurrency.network.fee_currency.symbol.toLowerCase()}.png&w=96&q=40`}
                                                                                                alt={cryptocurrency.network.fee_currency.symbol} />
                                                                                        }
                                                                                    </div>
                                                                                    <div
                                                                                        className="mt-1 font-semibold">{cryptocurrency.currency.symbol} {cryptocurrency.network.token_type ? `(${cryptocurrency.network.token_type})` : ''}</div>
                                                                                </td>
                                                                                <td className="px-3 py-5">
                                                                                    ≥ {parseFloat(cryptocurrency.api_minimum_amount)} {cryptocurrency.currency.symbol}
                                                                                </td>
                                                                                <td className="px-3 py-5">
                                                                                    {parseFloat(cryptocurrency.api_maximum_amount)} {cryptocurrency.currency.symbol}
                                                                                </td>
                                                                                <td className="px-3 py-5">
                                                                                    {stableCoins.includes(cryptocurrency.currency.symbol) ? '0 - 0.9%' : '0 - 2.9%'}
                                                                                </td>
                                                                            </tr>
                                                                        }

                                                                    </>
                                                                ))
                                                            }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="text-xs italic space-y-2 mt-6">
                                                        <div className="flex gap-1">
                                                            <div>*</div>
                                                            {t('footnote1')}
                                                        </div>
                                                        <div className="flex gap-1">
                                                            <div>**</div>
                                                            {t('footnote2')}
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
                                        {
                                            selectedSubTab == 4 && (
                                                <>
                                                    <div className="w-full max-w-full overflow-x-auto">
                                                        <table className="text-sm w-full">
                                                            <thead className="bg-neutral-900 text-gray-300">
                                                            <tr>
                                                                <td className="px-3 py-3">
                                                                 {t('coinToken')}
                                                             </td>
                                                                <td className="px-3 py-3"
                                                                    title={t('footnote1')}>
                                                                 {t('minimumAmount')}
                                                                 </td>
                                                                <td className="px-3 py-3"
                                                                    title={t('footnote1')}>
                                                                 {t('maximumAmount')}
                                                                 </td>
                                                                <td className="px-3 py-3"
                                                                    title={t('footnote2')}>
                                                                 {t('transactionFee')}
                                                                 </td>
                                                            </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-neutral-700">
                                                            {
                                                                cryptocurrencies.map((cryptocurrency) => (
                                                                    <>
                                                                        {
                                                                            depositSupportedCoins.includes(cryptocurrency.name) &&
                                                                            <tr className="hover:bg-gray-700/60"
                                                                                key={cryptocurrency.name}>
                                                                                <td className="px-3 py-5">
                                                                                    <div className="relative w-fit">
                                                                                        <Image className="rounded-full"
                                                                                             width={35}
                                                                                             src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${cryptocurrency.currency.symbol.toLowerCase()}.png&w=96&q=40`}
                                                                                             alt={cryptocurrency.currency.symbol} />
                                                                                        {
                                                                                            cryptocurrency.network.token_type &&
                                                                                            <Image
                                                                                                className="absolute -right-0.5 -bottom-0.5 border border-neutral-800 rounded-full"
                                                                                                width={20}
                                                                                                src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${cryptocurrency.network.fee_currency.symbol.toLowerCase()}.png&w=96&q=40`}
                                                                                                alt={cryptocurrency.network.fee_currency.symbol} />
                                                                                        }
                                                                                    </div>
                                                                                    <div
                                                                                        className="mt-1 font-semibold">{cryptocurrency.currency.symbol} {cryptocurrency.network.token_type ? `(${cryptocurrency.network.token_type})` : ''}</div>
                                                                                </td>
                                                                                <td className="px-3 py-5">
                                                                                    ≥ {parseFloat(cryptocurrency.api_minimum_amount)} {cryptocurrency.currency.symbol}
                                                                                </td>
                                                                                <td className="px-3 py-5">
                                                                                    {parseFloat(cryptocurrency.api_maximum_amount)} {cryptocurrency.currency.symbol}
                                                                                </td>
                                                                                <td className="px-3 py-5">
                                                                                    {stableCoins.includes(cryptocurrency.currency.symbol) ? '0 - 0.9%' : '0 - 2.9%'}
                                                                                </td>
                                                                            </tr>
                                                                        }
                                                                    </>
                                                                ))
                                                            }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="text-xs italic space-y-2 mt-6">
                                                        <div className="flex gap-1">
                                                            <div>*</div>
                                                            {t('footnote1')}
                                                        </div>
                                                        <div className="flex gap-1">
                                                            <div>**</div>
                                                            {t('footnote2')}
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
                                        {
                                            selectedSubTab == 5 && (
                                                <div className="w-full max-w-full overflow-x-auto">
                                                    <table className="text-sm w-full">
                                                        <thead className="bg-neutral-900 text-gray-300">
                                                        <tr>
                                                            <td className="px-3 py-3">
                                                                 {t('coinToken')}
                                                             </td>
                                                            <td className="px-3 py-3">
                                                                 {t('minimumWithdrawal')}
                                                             </td>
                                                            <td className="px-3 py-3">
                                                                 {t('withdrawalFee')}
                                                             </td>
                                                        </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-neutral-700">
                                                        {
                                                            cryptocurrencies.map((cryptocurrency) => (
                                                                <tr className="hover:bg-gray-700/60"
                                                                    key={cryptocurrency.name}>
                                                                    <td className="px-3 py-5">
                                                                        <div className="relative w-fit">
                                                                            <Image className="rounded-full" width={35}
                                                                                 src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${cryptocurrency.currency.symbol.toLowerCase()}.png&w=96&q=40`}
                                                                                 alt={cryptocurrency.currency.symbol} />
                                                                            {
                                                                                cryptocurrency.network.token_type &&
                                                                                <Image
                                                                                    className="absolute -right-0.5 -bottom-0.5 border border-neutral-800 rounded-full"
                                                                                    width={20}
                                                                                    src={`https://dashboard.pallapay.com/_next/image?url=%2Fcoins%2F${cryptocurrency.network.fee_currency.symbol.toLowerCase()}.png&w=96&q=40`}
                                                                                    alt={cryptocurrency.network.fee_currency.symbol} />
                                                                            }
                                                                        </div>
                                                                        <div
                                                                            className="mt-1 font-semibold">{cryptocurrency.currency.symbol} {cryptocurrency.network.token_type ? `(${cryptocurrency.network.token_type})` : ''}</div>
                                                                    </td>
                                                                    <td className="px-3 py-5">
                                                                        ≥ {parseFloat(cryptocurrency.wallet_withdrawal_minimum_amount)} {cryptocurrency.currency.symbol}
                                                                    </td>
                                                                    <td className="px-3 py-5">
                                                                        0%
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )
                                        }
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter className="!mt-0" hasContactSection={true} />
        </>
    )
}



