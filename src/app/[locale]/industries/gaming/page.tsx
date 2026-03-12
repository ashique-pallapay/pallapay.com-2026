import { Gaming } from '@/views/gaming';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function GamingPage() {
  const meta = getMetaData('industries.gaming');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <Gaming />
      </div>
    </>
  );
}
