import { SeoHead } from "@/components/SeoHead";
import { getMetaData } from "@/lib/meta-config";
import { BuyTethernTurkey } from "@/views/buy-tether-in-turkey";

export default async function BuyUsdtInIstanbulPage() {
  const meta = getMetaData("buy-usdt-in-istanbul");

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden ">
        <BuyTethernTurkey />
      </div>
    </>
  );
}
