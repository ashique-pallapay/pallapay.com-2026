import { BuyEthereumInDubai } from "@/views/buy-ethereum-in-dubai";
import { SeoHead } from "@/components/SeoHead";
import { getMetaData } from "@/lib/meta-config";
import { getPrices } from "@/lib/get-prices";

export default async function BuyEthereumInDubaiPage() {
  const meta = getMetaData("buy-ethereum-in-dubai");
  const prices = await getPrices();

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden bg-white!">
        <BuyEthereumInDubai prices={prices} />
      </div>
    </>
  );
}
