import { LawEnforcement } from '@/views/law-enforcement';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function LawEnforcementPage() {
  const meta = getMetaData('prohibited-use');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <LawEnforcement />
      </div>
    </>
  );
}
