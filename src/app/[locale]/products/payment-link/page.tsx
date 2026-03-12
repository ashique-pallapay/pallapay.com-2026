import { PaymentLink } from '@/views/payment-link';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function PaymentLinkPage() {
  const meta = getMetaData('products.payment-link');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <PaymentLink />
      </div>
    </>
  );
}
