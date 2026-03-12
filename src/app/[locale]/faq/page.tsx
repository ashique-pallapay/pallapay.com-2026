import { Faq } from '@/views/faq';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function FaqPage() {
  const meta = getMetaData('faq');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <Faq />
      </div>
    </>
  );
}
