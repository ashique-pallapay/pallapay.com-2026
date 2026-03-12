import { GiftCard } from '@/views/gift-card';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function GiftCardPage() {
  const meta = getMetaData('products.gift-card');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <GiftCard />
      </div>
    </>
  );
}
