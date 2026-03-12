import { PosMachine as CryptoPOSMachine } from '@/views/pos-machine';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function CryptoPOSMachinePage() {
  const meta = getMetaData('products.pos-machine');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <CryptoPOSMachine />
      </div>
    </>
  );
}
