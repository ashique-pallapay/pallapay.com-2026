import { Wallet } from '@/views/wallet';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function WalletPage() {
  const meta = getMetaData('wallet');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <Wallet />
      </div>
    </>
  );
}
