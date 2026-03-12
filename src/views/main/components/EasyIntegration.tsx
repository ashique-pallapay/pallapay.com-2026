import * as React from "react"
import Image from "next/image";
import { ScrollAnimation } from '@/components/base/ScrollAnimation';

export function EasyIntegration() {
    return (
        <div className="container text-black hidden sm:block">
            <div className="mt-20 sm:mt-24">
                <ScrollAnimation>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-center">
                        Easy Integration and Setup
                    </h3>
                    <div className="text-center text-xl mt-2">
                        Start Accepting Crypto Payments Now
                    </div>
                </ScrollAnimation>
                <ScrollAnimation delay={200}>
                    <div className="mt-8">
                        <Image className="shadow-[0_0px_30px_rgba(0,0,0,0.15)] rounded-[1.85rem]" src="/images/easy-integration.png" alt="Easy Integration" width={600} height={400} />
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}
