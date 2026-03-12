import { KycPolicy } from '@/views/kyc-policy';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function KycPolicyPage() {
  const meta = getMetaData('kyc-policy');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <KycPolicy />
      </div>
    </>
  );
}
