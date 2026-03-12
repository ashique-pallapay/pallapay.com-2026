import { PaymentApi } from '@/views/payment-api';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function PaymentApiPage() {
  const meta = getMetaData('products.payment-api');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <PaymentApi />
      </div>
    </>
  );
}
