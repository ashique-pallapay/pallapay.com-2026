import { SellBitcoinInIstanbul } from "@/views/sell-bitcoin-in-istanbul";
import { SeoHead } from "@/components/SeoHead";
import { getMetaData } from "@/lib/meta-config";

export default async function SellBitcoinInIstanbulPage() {
  const meta = getMetaData("sell-bitcoin-in-istanbul");

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <SellBitcoinInIstanbul  />
      </div>
    </>
  );
}
