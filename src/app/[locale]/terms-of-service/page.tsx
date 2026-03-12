import { TermsOfService } from '@/views/terms-of-service';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function TermsOfServicePage() {
  const meta = getMetaData('agreement');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <TermsOfService />
      </div>
    </>
  );
}
