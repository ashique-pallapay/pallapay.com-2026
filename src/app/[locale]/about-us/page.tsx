import { AboutUs } from '@/views/about-us';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function AboutPage() {
  const meta = getMetaData('about');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <AboutUs />
      </div>
    </>
  );
}
