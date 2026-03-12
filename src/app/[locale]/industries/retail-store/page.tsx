import { RetailStore } from '@/views/retail-store';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function RetailStorePage() {
  const meta = getMetaData('industries.retail-store');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <RetailStore />
      </div>
    </>
  );
}
