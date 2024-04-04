import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

import { IconCode, IconDownload } from '@tabler/icons-react';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function CardProjects() {
  const buttons = useTranslations('Buttons');
  const links = useTranslations('Links');
  return (
    <Card className="h-auto shadow-none">
      <CardContent className="p-4">
        <div className=" flex flex-col gap-4 justify-center items-center">
          <Link href={links('cv')} target="_blank" className="w-full">
            <Button size="default" variant="outline" className="w-full flex gap-2 items-center">
              <IconDownload size={22} />
              {buttons('downloadCV')}
            </Button>
          </Link>
          <Link href="/portfolio" className="w-full">
            <Button size="default" variant="outline" className="w-full flex gap-2 items-center">
              <IconCode size={22} />
              {buttons('goProjects')}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
