import { useTranslations } from "next-intl";

export default function LayoutAbout({ children }) {
  const t = useTranslations("About");

  return (
    <main className="w-full">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-1 pb-2">
          <h1 className="text-4xl font-bold">{t('title')}</h1>
        </div>
        <div className="w-full py-6">

        {children}
        </div>
      </div>
    </main>
  );
}
