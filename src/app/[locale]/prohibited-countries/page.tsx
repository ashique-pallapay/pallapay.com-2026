import { ProhibitedCountries } from '@/views/prohibited-countries';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function ProhibitedCountriesPage() {
  const meta = getMetaData('prohibited-countries');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <ProhibitedCountries />
      </div>
    </>
  );
}
