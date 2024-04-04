'use client';
import Link from 'next/link';
import { IconCalendar, IconClock } from '@tabler/icons-react';

import { getOnlyDate, calculateReadingTime } from '@/utils/utils';

import { useState } from 'react';
import Tag from '../Tag';

import { Card } from '../ui/card';

import { useTranslations } from 'next-intl';


export default function Article({ article }) {
  const [hover, setHover] = useState(false);
  const t = useTranslations('Articles');

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <Link href={article.slug} className="w-full cursor-pointer">
      <Card
        className="outline-none shadow-none
      w-full
      p-4
      cursor-pointer
       border-none hover:bg-zinc-100 dark:hover:bg-zinc-800 transition duration-300 ease-in-out"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full cursor-pointer">
          <div className="flex flex-col items-start justify-center gap-3">
            <h2
              className={`text-lg font-bold
                    ${hover ? '' : ''}`}
            >
              {article.title}
            </h2>
            <div className="flex gap-3 flex-col lg:flex-row justify-center items-start lg:items-center">
              <p className="text-xs flex gap-1 items-center">
                <IconCalendar size={18} />
                <span className="text-brand">{getOnlyDate(article.date)}</span>
              </p>
              <p className="text-xs  flex gap-1 items-center">
                <IconClock size={18} />
                {calculateReadingTime(article.body.code)} {t('readTimeText')}
              </p>
            </div>
            <div className="flex flex-wrap gap-1 justify-start items-center">
              {article.tags.map((tag, index) => (
                <Tag name={tag} key={index} />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
