import { Button } from '@/components/ui/button';
import Link from 'next/link';

import SocialBar from '@/features/SocialBar';

import { IconMail, IconBriefcase, IconArrowUpRight } from '@tabler/icons-react';

import MeImage from '@/components/me/MeImage';

import { Section } from '@/components/section/Section';

import { useTranslations } from 'next-intl';

import { Fira_Code as CustomFont } from 'next/font/google';
const customFont = CustomFont({
  subsets: ['latin'],
  variable: '--font-custom',
  weight: ['400', '500', '700'],
});

export default function Hero() {
  const t = useTranslations('Hero');
  const buttons = useTranslations('Buttons');
  const links = useTranslations('Links');

  return (
    <Section>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-6 md:gap-0">
        <div className="col-span-2 flex flex-col gap-3 justify-center items-start">
          <p className={`font-bold text-brand ${customFont.className}`}>{t('up')}</p>
          <h1 className="text-5xl font-bold pb-1">{t('title')}</h1>
          <h3 className={`text-2xl font-bold text-brand ${customFont.className}`}>{t('subtitle')}</h3>
          <p className={`text-zinc-600 dark:text-zinc-300 text-base`}>{t('description')}</p>
          <Button variant="link" className="p-0">
            <Link href="/about" className="text-xs flex gap-1 text-zinc-600 dark:text-zinc-300">
              {buttons('knowMore')}
              <IconArrowUpRight size={16} />
            </Link>
          </Button>
          <div className="w-full flex justify-between items-start py-2 gap-2">
            <div className="flex gap-2">
              <Button size="default" variant="default" className="w-auto flex gap-2 items-center">
                <IconMail size={22} />
                <Link href="/#contact" target="_parent">
                  {buttons('contactMe')}
                </Link>
              </Button>
              <Button size="default" variant="secondary" className="w-auto flex gap-2 items-center">
                <IconBriefcase size={22} />
                <Link href="/#projects">
                  {buttons('checkMyWork')}
                </Link>
              </Button>
            </div>
          </div>
          <div className="py-2">
            <SocialBar isIcon={true} isQuick={true} />
          </div>
        </div>
        <div className="col-span-1 flex justify-start items-start md:justify-start md:items-center flex-col gap-6 row-start-1 md:row-auto">
          <MeImage />
        </div>
      </div>
    </Section>
  );
}
