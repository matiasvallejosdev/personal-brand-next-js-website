import { IconDownload } from '@tabler/icons-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

import Link from 'next/link';

import { useTranslations } from 'next-intl';

export default function CardMe() {
  const t = useTranslations('Hero');
  const buttons = useTranslations('Buttons');
  const links = useTranslations('Links');

  return (
    <Card className="h-auto shadow-none">
      <CardContent className="p-4">
        <div className="py-4 flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-center flex items-center justify-center gap-2">{t("title")}</h3>
          <p className="text-center text-brand">{t("subtitle")}</p>
          <Button size="default" variant="outline" className="w-auto flex gap-2 items-center">
            <IconDownload size={22} />
            <Link href={links("cv")} target="_blank">
              {
                buttons('downloadCV')
              }
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
