import { SellBitcoinInDubai } from "@/views/sell-bitcoin-in-dubai";
import { SeoHead } from "@/components/SeoHead";
import { getMetaData } from "@/lib/meta-config";
import { getPrices } from "@/lib/get-prices";

export default async function SellBitcoinInDubaiPage() {
  const meta = getMetaData("sell-bitcoin-in-dubai");
  const prices = await getPrices();

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden !bg-white">
        <SellBitcoinInDubai prices={prices} />
      </div>
    </>
  );
}
