import * as React from 'react';
import { MainFooter } from '@/components/base/MainFooter';
import { MainNav } from '@/components/base/MainNav';
import { BackToTopButton } from '@/components/base/BackToTop';

export function ProhibitedCountries() {
    return (
        <>
            <MainNav hasBackground={true} />
            <BackToTopButton />
            <div className="text-black container py-10">
                <div className="space-y-5">
                    <h1 className="text-3xl mt-10 font-semibold">List of Prohibited Countries</h1>
                    <p className="text-xl font-semibold mt-4">Last Updated: 13 November 2025</p>
                    <div className="space-y-3">
                        <p>The below countries, and such other locations as designated by Pallapay from time to time, form the <span className="font-semibold">List of Prohibited Countries</span> as described in Pallapay’s Terms of Use. Pallapay reserves the right to update this list at its discretion without prior notice.</p>
                        <p>To be eligible to register for a Pallapay Account and use the Pallapay Services, you must not be located, incorporated, otherwise established in, or resident of:</p>
                    </div>
                    <div className="space-y-5 mt-5">
                        <p>Belarus</p>
                        <p>Burma (Myanmar)</p>
                        <p>Cote d’Ivoire</p>
                        <p>Cuba</p>
                        <p>Democratic Republic of the Congo</p>
                        <p>Iran</p>
                        <p>Iraq</p>
                        <p>Liberia (Former Regime of Charles Taylor)</p>
                        <p>North Korea</p>
                        <p>Persons undermining the sovereignty of Lebanon or its democratic processes and institutions</p>
                        <p>Sierra Leone</p>
                        <p>Sudan</p>
                        <p>Western Balkans</p>
                        <p>Zimbabwe</p>
                        <p>Crimea (as defined in applicable U.S. or Canadian sanctions)</p>
                        <p>The so-called Donetsk People’s Republic (as defined in applicable U.S. or Canadian sanctions)</p>
                        <p>The so-called Luhansk People’s Republic (as defined in applicable U.S. or Canadian sanctions)</p>
                    </div>
                </div>
            </div>
            <MainFooter className="!mt-14" />
        </>
    )
}
