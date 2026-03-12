import { SellEthereumInDubai } from "@/views/sell-ethereum-in-dubai";
import { SeoHead } from "@/components/SeoHead";
import { getMetaData } from "@/lib/meta-config";

export default async function SellEthereumInDubaiPage() {
  const meta = getMetaData("sell-ethereum-in-dubai");

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden bg-white!">
        <SellEthereumInDubai />
      </div>
    </>
  );
}
