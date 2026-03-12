import { TradingPlatforms } from '@/views/trading-platforms';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function TradingPlatformsPage() {
  const meta = getMetaData('industries.trading-platforms');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <TradingPlatforms />
      </div>
    </>
  );
}
