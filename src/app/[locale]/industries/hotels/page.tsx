import { Hotels } from '@/views/hotels';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function HotelsPage() {
  const meta = getMetaData('industries.hotels');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <Hotels />
      </div>
    </>
  );
}
