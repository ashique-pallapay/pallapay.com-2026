import { SellUsdtInIstanbul } from "@/views/sell-usdt-in-istanbul";
import { SeoHead } from "@/components/SeoHead";
import { getMetaData } from "@/lib/meta-config";

export default async function SellUsdtInIstanbulPage() {
  const meta = getMetaData("sell-usdt-in-istanbul");

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <SellUsdtInIstanbul />
      </div>
    </>
  );
}
