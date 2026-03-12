import { BuyBitcoinInDubai } from "@/views/buy-bitcoin-in-dubai";
import { SeoHead } from "@/components/SeoHead";
import { getMetaData } from "@/lib/meta-config";
// import { getPrices } from "@/lib/get-prices";

export default async function BuyBitcoinInDubaiPage() {
  const meta = getMetaData("buy-bitcoin-in-dubai");
  // const prices = await getPrices();

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden bg-white!">
        <BuyBitcoinInDubai />
      </div>
    </>
  );
}
