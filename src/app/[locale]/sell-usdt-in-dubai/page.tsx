import { SellUsdtInDubai } from "@/views/sell-usdt-in-dubai";
import { SeoHead } from "@/components/SeoHead";
import { getMetaData } from "@/lib/meta-config";

export default async function SellUsdtInDubaiPage() {
  const meta = getMetaData("sell-usdt-in-dubai");

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden bg-white!">
        <SellUsdtInDubai />
      </div>
    </>
  );
}
