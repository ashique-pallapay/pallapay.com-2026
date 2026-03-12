"use client"

import * as React from 'react';
import { MainFooter } from '@/components/base/MainFooter';
import { MainNav } from '@/components/base/MainNav';
import { BackToTopButton } from '@/components/base/BackToTop';

export function GeneralRiskWarning() {
    return (
        <>
            <MainNav hasBackground={true} />
            <BackToTopButton />
            <div className="text-black container py-10">
                <div className="space-y-5">
                    <h1 className="text-3xl mt-10 font-semibold">General Risk Warning</h1>
                    <p className="text-xl font-semibold mt-4">Last Updated: 13 November 2025</p>
                    <ul className="space-y-2 mt-5">
                        <li>
                            <span className="font-semibold">A. How to interpret this Risk Warning</span>
                            <div className="space-y-2 mt-2">
                                1.  All capitalised terms used in this Risk Warning that are defined in the Pallapay Terms of Use (the “Terms of Use”, which includes any Product Terms (as defined in the Terms of Use)), have the same meaning and construction as in the Terms of Use.
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">B. Pallapay Services</span>
                            <div className="space-y-2 mt-2">
                                <p>2. In line with our commitments to compliance and user protection, this Risk Warning provides you with information about some of the key risks associated with Pallapay Services. Each Pallapay Service has its own distinct risks. This Risk Warning provides a general description of some of the risks that may arise when you use Pallapay Services.</p>
                                <p>3. This Risk Warning does not explain all of the risks or how such risks relate to your personal circumstances. It is important that you fully understand the risks involved before making a decision to use Pallapay Services and you should also read the relevant terms applicable to the specific Pallapay Service. By using the Pallapay Services and entering into any Transactions, you agree that you assume all of the related risks.</p>
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">C. No Personal Advice</span>
                            <div className="space-y-2 mt-2">
                                4. We do not provide personal advice in relation to Pallapay Services. We sometimes provide factual information, information about transaction procedures and information about the potential risks. However, any decision to use Pallapay Services is made by you. No communication or information provided to you by Pallapay is intended as, or shall be considered or construed as, investment advice, financial advice, trading advice, or any other sort of advice. You are solely responsible for determining whether any investment, investment strategy or related transaction is appropriate for you according to your personal investment objectives, financial circumstances and risk tolerance.
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">D. No Monitoring</span>
                            <div className="space-y-2 mt-2">
                                5. Pallapay is not your broker, intermediary, agent, or advisor and has no fiduciary relationship or obligation to you in connection with any trades or other decisions or activities undertaken by you using Pallapay Services. We do not monitor whether your use of Pallapay Services is consistent with your financial goals and objectives. It is up to you to assess whether any activity that you engage in through the Pallapay Services is appropriate given your financial position and risk appetite.
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">E. No Tax, Regulatory or Legal Advice</span>
                            <div className="space-y-2 mt-2">
                                <p>6. You have sole responsibility for determining what taxes you might be liable to, how and when they apply, and meeting such tax obligations, when transacting through the Pallapay Services. It is your responsibility to report and pay any taxes that may arise from entering into a Transaction by using the Pallapay Services, and you acknowledge that Pallapay does not provide legal or tax advice in relation to these transactions. If you have any doubts about your tax status or obligations when using Pallapay Services, or with respect to the Digital Assets held to the credit of your Pallapay account, you are encouraged to seek independent advice.</p>
                                <p>7. You acknowledge that, when, where and as required by Applicable Law, Pallapay shall report information regarding your transactions, transfers, distributions or payments to tax or other public authorities. Similarly, when, where and as required by Applicable Law, Pallapay shall withhold taxes related to your transactions, transfers, distributions or payments. Applicable Laws could also prompt Pallapay to request that you provide additional tax information, status, certificates or documentation or other information. You acknowledge that failure to comply with these requests within the specified timeframe may result in taxes withheld by Pallapay, to be remitted to tax authorities as defined by Applicable Law. You are encouraged to seek professional and personal tax advice regarding the above and before entering into any Transaction.</p>
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">F. Market Risks</span>
                            <div className="space-y-2 mt-2">
                                <p>8. An investment in Digital Assets carries significant risk. The value of an investment and any returns can go up or down, and you may lose all or part of your investment and not get back the amount you had invested. If you are new to Digital Assets, consider investing only a small amount. Only invest what you can afford to lose. It is important to do your own research to understand the risks of investing in Digital Assets.</p>
                                <p>9. Digital Asset trading is speculative, prices are volatile, and market movements are difficult to predict. Supply and demand for Digital Assets can change rapidly without warning and can be affected by a variety of factors which may not be predictable, including regulation, general economic trends, and developments in the Digital Asset ecosystem. All investments in Digital Assets carry the risk of loss.</p>
                                <p>10. Past performance is not an indicator of future performance. Pallapay does not in any way guarantee or provide any assurance about the performance or market price of Digital Assets or products available through the Pallapay Services.</p>
                                <p>11. The Digital Asset industry is subject to systemic and systematic risk. Systemic and systematic risks are both threats to the Digital Asset markets and economy, but the cause of these risks and the approaches for managing them are different. Systemic risk is the risk that a company- or industry-level risk could trigger a major collapse. Systematic risk is the risk inherent to the entire market, which can be economic, sociopolitical, technological, or natural in origin. These risks can affect the prices of Digital Assets.</p>
                                <p>12. Blockchain technology is a relatively new technology that is evolving rapidly and is likely to be subject to continued technological development. The future development and growth of the Digital Asset industry is subject to a variety of factors that are difficult to predict and evaluate. Similarly, the sustainability of Digital Asset networks may also be affected by a range of different factors. All such factors may impact the value of a Digital Asset.</p>
                                <p>13. Negative perceptions about Digital Assets may reduce the confidence of investors in the industry and result in greater volatility of the prices in Digital Assets, including possibly a significant depreciation in value. Any events that trigger negative publicity in respect of Digital Asset markets may therefore have an adverse impact on the value of any investment in Digital Assets.</p>
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">G. Counterparty Risk</span>
                            <div className="space-y-2 mt-2">
                                <p>14 You may be exposed to counterparty risk in various circumstances when using Pallapay Services. This may include, without limitation, if a market maker or liquidity provider faces issues which could result in slippage or an inability to execute trades; failures by or disputes with payment processors which may delay deposit and withdrawal transactions; borrowers defaulting on their repayment obligations which may delay the redemption of deposits from certain products.</p>
                                <p>15. In such other exceptional circumstances, your holdings and your ability to transact or deal with your holdings may be adversely affected, which may result in a range of outcomes including, without limitation, transactions not completing as expected, trading costs being irrecoverable, loss of profits, or inability to acquire or dispose of assets at the desired time or price.</p>
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">H. Liquidity Risk</span>
                            <div className="space-y-2 mt-2">
                                16. Digital Asset prices on the secondary market are driven by supply and demand and may be highly volatile. Digital Assets may have limited liquidity which may make it difficult or impossible for you to sell or exit a position when you wish to do so. This may occur at any time, including at times of rapid price movements.
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">I. Fees & Charges</span>
                            <div className="space-y-2 mt-2">
                                17. Our fees and charges are set out here. Pallapay may, in its discretion, update the fees and charges from time to time. Please be aware of all fees and charges that apply to you, because such fees and charges will affect the returns you generate from using Pallapay Services.
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">J. Availability Risk</span>
                            <div className="space-y-2 mt-2">
                                <p>18. While we aim to deliver a seamless user experience, we cannot guarantee that the Pallapay Services will be available at any particular time or that Pallapay Services will not be subject to unplanned service outages or network congestion. It may not be possible for you to buy, sell, transfer, send or receive Digital Assets when you wish to do so.</p>
                                <p>19. There are legal requirements in various countries which may restrict the products and services that Pallapay can lawfully provide. Accordingly, some products and services and/or certain functionality within the Platform, including but not limited to fiat services, may not be available or may be restricted in certain jurisdictions or regions or to certain Users or other promotions will not be open to (and are not targeted at or intended for) Users to whom restrictions apply. Users are responsible for informing themselves about, and observing any restrictions and/or requirements imposed with respect to the access to and use of the Platform and the Pallapay Services in each jurisdiction from which the Platform and the Pallapay Services are accessed by or on behalf of the User. Pallapay reserves the right to modify such restrictions or impose additional restrictions with respect to the access to and use of the Platform and/or the Pallapay Services from time to time in its sole discretion without notification.</p>
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">K. Third Party Risk</span>
                            <div className="space-y-2 mt-2">
                                20. Third parties, such as payment providers, custodians, and banking partners may be involved in the provision of Pallapay Services. You may be subject to the terms & conditions of these third parties. Unless expressly provided otherwise, Pallapay will not be responsible for any loss that may be incurred by you as a result of or arising from the services provided by such third parties.
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">L. Security Risk</span>
                            <div className="space-y-2 mt-2">
                                <p>21. The nature of Digital Assets exposes them to an increased risk of cyberattack. While Pallapay uses all reasonable efforts to safeguard Digital Assets and protect the Platform from cyberattack, it is not possible for any exchange to eliminate security risks entirely. There can be no guarantee that systems in place to mitigate cybersecurity threats will always be effective to prevent improper access to the Platform and Digital Assets.</p>
                                <p>22. You are responsible for keeping your Pallapay Account information safe, and you shall be responsible for all the Transactions under your Pallapay Account, whether you authorised them or not. Transactions in Digital Assets may be irreversible, and losses due to fraudulent or unauthorised transactions may not be recoverable.</p>
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">M. Risks related to Digital Assets</span>
                            <div className="space-y-2 mt-2">
                                <p>23. Given the nature of Digital Assets and their underlying technologies, there are a number of intrinsic risks, including but not limited to:</p>
                                <p>a. faults, defects, hacks, exploits, errors, protocol failures or unforeseen circumstances occurring in respect of a Digital Asset or the technologies or economic systems on which the Digital Asset rely;</p>
                                <p>b. transactions in Digital Assets being irreversible. Consequently, losses due to fraudulent or accidental transactions may not be recoverable;</p>
                                <p>c. technological developments leading to the obsolescence of a Digital Asset;</p>
                                <p>d. network delays causing transactions to not be settled on the scheduled delivery date;</p>
                                <p>e. attacks on the protocol or technologies on which a Digital Asset depends;</p>
                                <p>f. a hard fork may occur if Digital Asset developers suggest changes to a particular Digital Asset software and the updated software is not compatible with the original software and a sufficient number (but not necessarily a majority) of users and minors elect not to migrate to the updated software. This would result in two versions of Digital Asset networks running in parallel and a split of the blockchain underlying the Digital Asset network, which could impact the demand of the Digital Asset and adversely impact the price of the Digital Asset;</p>
                                <p>g. certain addresses on the blockchain networks hold a significant amount of the currently outstanding asset on that network. If one of these addresses were to exit their positions, this may result in volatility that could adversely affect the price of that asset;</p>
                                <p>h. if anyone gains control of over 51% of the computing power (hash rate) used by a blockchain network, they could use their majority share to double spend their Digital Assets. Whilst the risk of this occurring for networks with wider adoption is remote, if such a “51% attack” were to be successful, this would significantly erode trust in public blockchain networks (like Bitcoin and Ethereum) to store value and serve as a means of exchange, which may significantly decrease the value of Digital Assets;</p>
                                <p>i. Digital Assets are subject to the risk of fraud or cyber attacks;</p>
                                <p>j. Digital Assets purchased and held in an account with Pallapay are not covered by any external investor compensation, customer asset protection, deposit protection, insurance or other similar schemes; and</p>
                                <p>k. new risks may arise from investing in new types of Digital Assets or market participants’ engagement in more complex transaction strategies. Digital Assets and the Digital Asset market is subject to speculative interest, rapid price swings and uncertainty.</p>
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">N. Monitoring Risks</span>
                            <div className="space-y-2 mt-2">
                                24. Digital Asset markets are open 24 hours a day, 7 days a week. Rapid price changes may occur at any time, including outside of normal business hours.
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">O. Communication Risks</span>
                            <div className="space-y-2 mt-2">
                                25. When you communicate with us via electronic communication, you should be aware that electronic communications can fail, can be delayed, may not be secure and/or may not reach the intended destination.
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">P. Currency</span>
                            <div className="space-y-2 mt-2">
                                26. Currency exchange fluctuations may impact your gains and losses.
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">Q. Legal and Regulatory Risks</span>
                            <div className="space-y-2 mt-2">
                                <p>27. Most Digital Assets operate without a central authority and are generally not backed by any government or authority. Changes in laws and regulations may materially affect the value of Digital Assets. This risk is unpredictable and may vary from market to market.</p>
                                <p>28. Further, Digital Assets may not be considered “property” under Applicable Laws in some jurisdictions. This may affect the nature and enforceability of your interest in the Digital Assets.</p>
                                <p>29. Legislative and regulatory changes may adversely affect or restrict (as applicable) the use, transfer, exchange and value of Digital Assets, as well as the provision of the <span className="font-semibold">Pallapay</span> Services in certain jurisdictions. Legislative and regulatory changes may occur quickly and without prior notice.</p>
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">R. Risk of Gift Card Services</span>
                            <div className="space-y-2 mt-2">
                                <p>30. A non-Pallapay entity or individual asking for Pallapay Gift Cards as a payment method for goods or services may be a scam.</p>
                                <p>31. We are not responsible in any way for any Pallapay Gift Cards that are lost, stolen, or destroyed, or if your Pallapay Gift Cards are used without your permission.</p>
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">S. Risk of Depegging for Stablecoins</span>
                            <div className="space-y-2 mt-2">
                                <p>32. This disclosure outlines the risks associated with the potential depegging of stablecoins, including (without limitation) USD Coin (USDC) and Tether (USDT), from their intended 1:1 parity with a commodity or denomination of fiat currency.</p>
                                <div className="space-y-2 mt-2 ml-5">
                                    <p>1. Stablecoins are designed to maintain a stable value relative to a commodity or denomination of fiat currency. For example, USDC and USDT are designed to maintain a stable value relative to the US Dollar (USD). However, market conditions, regulatory changes, or operational failures may cause these stablecoins to deviate from their intended 1:1 parity. Such deviations, commonly referred to as "depegging," could result in significant price fluctuations or loss of value.</p>
                                    <p>2. Depegging events may lead to reduced liquidity for the stablecoin, impacting the ability to execute trades or exit positions at favorable rates.</p>
                                    <p>3. Unexpected market movements during depegging may lead to substantial price fluctuations, potentially increasing margin requirements or triggering liquidations. Where USD stablecoins are used as collateral, depegging could reduce the value of collateral and increase the risk of margin calls or forced liquidations. Depegging may also result in the stablecoin asset no longer being accepted as eligible collateral.</p>
                                    <p>4. The value of stablecoins typically depends on the creditworthiness and operational resilience of their issuer. Any doubts regarding the issuers' ability to back the stablecoins with sufficient reserves may amplify depegging risks.</p>
                                    <p>5. As stablecoins are centrally issued, they are subject to counterparty risks, including potential regulatory actions or operational failures by the issuers. Legal or regulatory measures against stablecoin issuers or related parties may impact the stability or usability of their stablecoin. Cyberattacks, technical malfunctions, or other operational issues affecting the issuers could also trigger, or increase the risk of, depegging.</p>
                                    <p>6. You are encouraged to monitor market conditions, issuer announcements, and regulatory developments that could affect the stability of any stablecoin you may use.</p>
                                    <p>7. A depegging event in one particular stablecoin may have a contagion effect, negatively impacting market sentiment towards other issues of stablecoin or the trading venues that have used or otherwise facilitated trading activity involving that stablecoin (particularly where that stablecoin may have been used as collateral or for settlement of transactions).</p>
                                    <p>8. You should consider diversifying your collateral and funding sources to mitigate the potential impact of depegging risks.</p>
                                    <p>9. There is no guarantee that any stablecoin (including, without limitation, USDC or USDT) will maintain their 1:1 parity with the reference asset/currency under all circumstances. Users should conduct independent assessments and understand the risks associated with holding or using these stablecoins.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <MainFooter className="!mt-14" />
        </>
    )
}
