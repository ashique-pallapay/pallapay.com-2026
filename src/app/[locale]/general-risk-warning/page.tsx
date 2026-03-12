import { GeneralRiskWarning } from '@/views/general-risk-warning';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function GeneralRiskWarningPage() {
  const meta = getMetaData('general-risk-warning');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <GeneralRiskWarning />
      </div>
    </>
  );
}
