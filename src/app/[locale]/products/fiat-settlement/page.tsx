import { FiatSettlement } from '@/views/fiat-settlement';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function FiatSettlementPage() {
  const meta = getMetaData('products.fiat-settlement');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <FiatSettlement />
      </div>
    </>
  );
}
