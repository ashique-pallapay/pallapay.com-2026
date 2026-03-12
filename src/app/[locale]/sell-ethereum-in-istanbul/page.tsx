import { SellEthereumInIstanbul } from "@/views/sell-ethereum-in-istanbul";
import { SeoHead } from "@/components/SeoHead";
import { getMetaData } from "@/lib/meta-config";

export default async function SellEthereumInIstanbulPage() {
  const meta = getMetaData("sell-ethereum-in-istanbul");

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden ">
        <SellEthereumInIstanbul />
      </div>
    </>
  );
}
