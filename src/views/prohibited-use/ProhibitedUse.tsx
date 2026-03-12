import * as React from 'react';
import { MainFooter } from '@/components/base/MainFooter';
import { MainNav } from '@/components/base/MainNav';
import { BackToTopButton } from '@/components/base/BackToTop';

export function ProhibitedUse() {
    return (
        <>
            <MainNav hasBackground={true} />
            <BackToTopButton />
            <div className="text-black container py-10">
                <div className="space-y-5">
                    <h1 className="text-3xl mt-10 font-semibold">Prohibited Use Policy</h1>
                    <p className="text-xl font-semibold mt-4">Last Updated: 13 November 2025</p>
                    <ul className="space-y-2">
                        <li>
                            <span className="font-semibold">1. How to interpret this Prohibited Use Policy</span>
                            <div className="space-y-2 mt-2">
                                <p>All terms used in this Prohibited Use Policy, which are defined in the Pallapay Terms of Use (the “Terms of Use”), have the same meaning and construction as in the Terms of Use.</p>
                                <p>To the extent that you are a customer or user of our services, this Prohibited Use Policy applies together with any terms of business and other contractual documents, including but not limited to any agreements we may have with you.</p>
                                <p>Your Pallapay Account must not be used in a manner that violates public interests, public morals, or the legitimate interests of others, including any actions that would interfere with, disrupt, negatively affect, or prevent other users from using Pallapay Services.</p>
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">2. Abuse of Services</span>
                            <div className="space-y-2 mt-2">
                                Utilizing Pallapay Services in a manner leading to the depreciation or disruption in the quality of services or tampering with other users' experiences is strictly prohibited, including engaging in activities that contravene laws and regulations, are harmful, threatening, defamatory, obscene, infringing, insulting, or otherwise violate the legal rights of others. For example, this includes, without limitation, the promotion, facilitation, generation, or distribution of spam, the generation of content for deceptive or fraudulent activities, scams, phishing or malware, and any fraudulent or dishonest conduct (such as providing false, misleading or incomplete information or using fake identities).
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">3. Financial Misconduct</span>
                            <div className="space-y-2 mt-2">
                                The execution of fraudulent transactions, trading in banned goods including narcotics or certain controlled substances or other products that present a risk to consumer safety, items that encourage, promote, facilitate or instruct others to engage in illegal activity, sale of goods and services that are illegally imported or exported, stolen goods including digital and virtual goods, regulated products such as tobacco, e-cigarettes, age restricted goods or services, weapons and munitions, money laundering, funding terrorist activities, or engagement in other forms of financial irregularities on the Platform is strictly forbidden, including without limitation market manipulation, material misuse of Pallapay Services (such as exploiting system vulnerabilities or pricing anomalies), coordinated trading strategies to disadvantage others or evade limits, and any fraudulent or dishonest conduct as described above.
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">4. False Representation</span>
                            <div className="space-y-2 mt-2">
                                Actions imitating any person or entity, claiming false affiliations, or unapproved access to the accounts of others is prohibited.
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">5. Restricted Persons and Prohibited Countries</span>
                            <div className="space-y-2 mt-2">
                                The Platform should not be used in contravention of any jurisdiction’s sanctions or export control laws or regulations. This includes prohibited activities involving Restricted Persons or territories on the <a href="/prohibited-countries" target="_blank" className="text-blue-600">List of Prohibited Countries</a>, as determined in Pallapay’s sole discretion.
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">6. Violations Impacting Public Interest</span>
                            <div className="space-y-2 mt-2">
                                The Platform should not be used in contravention of any jurisdiction’s sanctions or export control laws or regulations. This includes prohibited activities involving Restricted Persons or territories on the <a href="/prohibited-countries" target="_blank" className="text-blue-600">List of Prohibited Countries</a>, as determined in Pallapay’s sole discretion.The use of the Platform to conduct activities that harm the public interest is unacceptable. Such activities include those potentially harmful to society, spreading misinformation, or influencing societal welfare.
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">7. Violations of Public Morals</span>
                            <div className="space-y-2 mt-2">
                                Activities considered a transgression against public morals including, but not limited to, the creation, distribution, or possession of items considered obscene and sexually oriented materials, adult content and services, or child sexual abuse material, which includes content, materials, or information linked to the sexual exploitation or abuse of minors, are prohibited in accordance with applicable laws.
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">8. Promotion of Hate</span>
                            <div className="space-y-2 mt-2">
                                <p>Promotion of hate, discrimination, and violence in any form, including hate speech based on race, gender identity, ethnicity, religion, sexual orientation, disability, or any other characteristic protected under applicable law is prohibited.</p>
                                <p>Violations of this Prohibited Use Policy are seen as serious offenses, for which Pallapay reserves the right to take appropriate actions against the offenders, including termination and suspension of access to Pallapay Services or legal action, if deemed necessary.</p>
                                <p>Any violation of this Prohibited Use Policy should be reported to <a href="mailto:legal@pallapay.com" target="_blank" className="text-blue-600">legal@pallapay.com</a>.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <MainFooter className="!mt-14" />
        </>
    )
}
