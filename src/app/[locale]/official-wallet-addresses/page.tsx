import { OfficialWalletAddresses } from '@/views/official-wallet-addresses';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function OfficialWalletAddressesPage() {
  const meta = getMetaData('official-wallet-addresses');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <OfficialWalletAddresses />
      </div>
    </>
  );
}
