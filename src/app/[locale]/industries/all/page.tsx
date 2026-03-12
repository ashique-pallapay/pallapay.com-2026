import { AllSolutions } from '@/views/all-solutions';
import { SeoHead } from '@/components/SeoHead';
import { getMetaData } from '@/lib/meta-config';

export default function AllSolutionsPage() {
  const meta = getMetaData('industries.all');

  return (
    <>
      <SeoHead meta={meta} />
      <div className="overflow-hidden">
        <AllSolutions />
      </div>
    </>
  );
}
