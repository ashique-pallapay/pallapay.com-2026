import { BuySellBitcoinTetherDubai } from "@/views/buy-sell-bitcoin-tether-dubai";
import { SeoHead } from "@/components/SeoHead";
import { getMetaData } from "@/lib/meta-config";

export default async function BuySellBitcoinTetherDubaiPage() {
  const meta = getMetaData("buy-sell-bitcoin-tether-dubai");

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden !bg-white ">
        <BuySellBitcoinTetherDubai />
      </div>
    </>
  );
}
