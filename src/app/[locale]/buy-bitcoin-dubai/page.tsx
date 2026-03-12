import { BuyBitcoinDubai } from '@/views/buy-bitcoin-dubai';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';
import { getPrices } from '@/lib/get-prices';

export default async function BuyBitcoinDubaiPage() {
  const meta = getMetaData('buy-bitcoin-dubai');
  const prices = await getPrices();

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden !bg-white page-white">
        <BuyBitcoinDubai prices={prices} />
      </div>
    </>
  );
}
