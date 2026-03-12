import { Ecommerce } from '@/views/ecommerce';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function EcommercePage() {
  const meta = getMetaData('industries.ecommerce');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <Ecommerce />
      </div>
    </>
  );
}
