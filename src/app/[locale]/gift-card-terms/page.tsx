import { GiftCardTerms } from '@/views/gift-card-terms';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function GiftCardTermsPage() {
  const meta = getMetaData('gift-card-terms');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <GiftCardTerms />
      </div>
    </>
  );
}
