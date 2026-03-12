import { Dashboard } from '@/views/dashboard';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function DashboardPage() {
  const meta = getMetaData('prohibited-use');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <Dashboard />
      </div>
    </>
  );
}
