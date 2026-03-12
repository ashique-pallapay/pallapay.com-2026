import { BuyUsdtInDubai } from "@/views/buy-usdt-in-dubai";
import { SeoHead } from "@/components/SeoHead";
import { getMetaData } from "@/lib/meta-config";
import { getPrices } from "@/lib/get-prices";

export default async function BuyUsdtInDubaiPage() {
  const meta = getMetaData("buy-usdt-in-dubai");

  const prices = await getPrices();

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden  page-white">
        <BuyUsdtInDubai prices={prices} />
      </div>
    </>
  );
}
