import { GiftCardIntro } from '@/views/gift-card-intro';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function GiftCardIntroPage() {
  const meta = getMetaData('gift-card-intro');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <GiftCardIntro />
      </div>
    </>
  );
}
