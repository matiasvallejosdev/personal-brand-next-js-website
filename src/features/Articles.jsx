import { Section, SectionSubtitle, SectionTitle } from '@/components/section/Section';
import Blog from './Blog';
import { Button } from '@/components/ui/button';

import Link from 'next/link';

import { useTranslations } from 'next-intl';
import { Suspense } from 'react';

import { IconArticle } from '@tabler/icons-react';

export default function Articles({ maxArticles }) {
  const t = useTranslations('Articles');
  const buttons = useTranslations('Buttons');

  return (
    <>
      <Section id="blog">
        <SectionTitle title={t('title')} icon={<IconArticle />} />
        <SectionSubtitle subtitle={t('subtitle')} />
        <Suspense fallback={'Loading..'}>
          <Blog maxArticles={4} featured={true} />
        </Suspense>
        <div className="pt-10">
          <Button variant="ghost">
            <Link href="/blog" className="text-xs" target='_parent'>
              {buttons('viewBlog')}
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
