import { Privacy } from '@/views/privacy';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function PrivacyPage() {
  const meta = getMetaData('privacy');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <Privacy />
      </div>
    </>
  );
}
