import { useTranslations } from 'next-intl';

export function MobileApps() {
  const t = useTranslations('mobileApps');
  return (
    <div className="container py-12">
      <h1 className="text-2xl font-semibold">{t('title')}</h1>
      <p className="mt-4">{t('description')}</p>
    </div>
  );
}
