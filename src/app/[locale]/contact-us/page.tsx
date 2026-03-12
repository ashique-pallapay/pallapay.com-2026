import { ContactUs } from '@/views/contact-us';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function ContactPage() {
  const meta = getMetaData('contact');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <ContactUs />
      </div>
    </>
  );
}
