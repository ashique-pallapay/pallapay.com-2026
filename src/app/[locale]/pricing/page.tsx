import { Pricing } from '@/views/pricing';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function PricingPage() {
  const meta = getMetaData('pricing');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <Pricing
          currencies={[]}
          cryptocurrencies={[]}
          walletConfigs={[]}
          swapPairs={[]}
        />
      </div>
    </>
  );
}
