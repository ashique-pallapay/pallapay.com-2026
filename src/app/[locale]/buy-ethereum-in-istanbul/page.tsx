import { BuyEthereumInTurkey } from "@/views/buy-ethereum-in-turkey/BuyEthereumInTurkey";
import { SeoHead } from "@/components/SeoHead";
import { getMetaData } from "@/lib/meta-config";

export default async function BuyEthereumInIstanbulPage() {
  const meta = getMetaData("buy-ethereum-in-istanbul");

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden ">
        <BuyEthereumInTurkey />
      </div>
    </>
  );
}
