import { BuyBitcoinTurkey } from "@/views/buy-bitcoin-in-turkey";
import { SeoHead } from "@/components/SeoHead";
import { getMetaData } from "@/lib/meta-config";
// import { getPrices } from "@/lib/get-prices";

export default async function BuyBitcoinTurkeyPage() {
  const meta = getMetaData("buy-bitcoin-in-istanbul");
    // const prices = await getPrices();

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <BuyBitcoinTurkey />
      </div>
    </>
  );
}
