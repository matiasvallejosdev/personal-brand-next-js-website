import Blog from '@/features/Blog';
import { useTranslations } from "next-intl";

export default function BlogPage() {
  const t = useTranslations('Blog');

  return (
    <>
      <div className="flex flex-col justify-start items-start">
        <div className="flex flex-col gap-1 pb-2">
          <h1 className="text-4xl font-bold">{t('title')}</h1>
        </div>
        <div className="flex flex-col justify-start items-start w-full p-0 py-8">
          <Blog featured={false}/>
        </div>
      </div>
    </>
  );
}
