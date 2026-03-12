import { ProhibitedUse } from '@/views/prohibited-use';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function ProhibitedUsePage() {
  const meta = getMetaData('prohibited-use');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <ProhibitedUse />
      </div>
    </>
  );
}
