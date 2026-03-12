import { SellBnbInDubai } from "@/views/sell-bnb-in-dubai";
import { SeoHead } from "@/components/SeoHead";
import { getMetaData } from "@/lib/meta-config";

export default async function SellBnbInDubaiPage() {
  const meta = getMetaData("sell-bnb-in-dubai");

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden bg-white!">
        <SellBnbInDubai />
      </div>
    </>
  );
}
