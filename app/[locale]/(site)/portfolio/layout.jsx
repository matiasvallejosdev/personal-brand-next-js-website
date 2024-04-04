import { useTranslations } from 'next-intl';
import { SectionSubtitle } from '@/components/section/Section';

export default function LayoutProjects({ children }) {
  const t = useTranslations('Projects');

  return (
    <main className="w-full my-4">
      <div className="flex flex-col gap-1 pb-2">
        <h1 className="text-4xl font-bold">{t('title')}</h1>
      </div>
      <div className="py-10 w-full">{children}</div>
    </main>
  );
}
