import { MobileApps } from '@/views/mobile-apps';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function MobileAppsPage() {
  const meta = getMetaData('prohibited-use');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <MobileApps />
      </div>
    </>
  );
}
