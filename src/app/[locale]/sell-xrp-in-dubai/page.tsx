import { SellXrpInDubai } from "@/views/sell-xrp-in-dubai";
import { SeoHead } from "@/components/SeoHead";
import { getMetaData } from "@/lib/meta-config";

export default async function SellXrpInDubaiPage() {
  const meta = getMetaData("sell-xrp-in-dubai");

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden bg-white!">
        <SellXrpInDubai />
      </div>
    </>
  );
}
