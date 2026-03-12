import { Casinos } from '@/views/casinos';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function CasinosPage() {
  const meta = getMetaData('industries.casinos');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <Casinos />
      </div>
    </>
  );
}
