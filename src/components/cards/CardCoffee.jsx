import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

import Link from 'next/link';

import { IconCoffee, IconHeart } from '@tabler/icons-react';

import { contact } from '@/data/pages/contact';
import { useTranslations } from 'next-intl';

export default function CardCoffee({ showGithub = true, showCoffee = true }) {
  const buttons = useTranslations('Buttons');
  return (
    <Card className="h-full shadow-none">
      <CardContent className="p-4 flex flex-col gap-4 justify-center items-center h-full">
        {showGithub && (
          <Link href={contact.github.url} target="_blank" className="w-full">
            <Button size="default" variant="outline" className="w-full flex gap-2 items-center">
              <IconHeart size={22} />
              {buttons('supportGithub')}
            </Button>
          </Link>
        )}
        {showCoffee && (
          <Link href={contact.buyMeACoffee.url} target="_blank" className="w-full">
            <Button size="default" variant="outline" className="w-full flex gap-2 items-center">
              <IconCoffee size={22} />
              {buttons('buyMeACoffee')}
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
