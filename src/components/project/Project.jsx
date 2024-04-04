'use client';
import { Card } from '@/components/ui/card';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';

import { IconBrandGithub, IconExternalLink, IconNotes, IconCalendar } from '@tabler/icons-react';

import { useState, useEffect, useRef } from 'react';

import Tag from '../Tag';
import Video from '../Video';

import { useTranslations, useLocale } from 'next-intl';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

import { formatDate } from '@/utils/utils';

export function HoverTitle({ title, description, date, locale, tags, link, sethover }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="p-0 text-white cursor-default">
          <Link href={link} target="_blank">{title}</Link>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 md:w-96 cursor-default"
      onMouseEnter={() => sethover(false)}
      onMouseLeave={() => sethover(true)}
      >
        <div className="flex justify-between space-x-4">
          <div className="space-y-1 flex flex-col gap-2">
            <h4 className="text-base font-semibold pt-1">{title}</h4>
            <Card className="shadow-none rounded-lg border-none p-0">
              <div className="flex flex-wrap gap-1">
                {tags.map((tag, index) => {
                  return <Tag key={index} name={tag} />;
                })}
              </div>
            </Card>
            <p className="text-sm pb-1.5">{description}</p>
            <div className="flex items-center gap-1">
              <IconCalendar className="h-4 w-4 opacity-70" />{' '}
              <span className="text-xs text-muted-foreground">{formatDate(date, locale)}</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default function Project({ project }) {
  const { title, description, tags, link, github, video, slug, date, image } = project;
  const locale = useLocale();

  const buttons = useTranslations('Buttons');

  const videoContainerRef = useRef(null);
  const [videoHeight, setVideoHeight] = useState(280);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (videoContainerRef.current) {
        const width = videoContainerRef.current.offsetWidth;
        const height = (width * 9) / 16; // Calculate the height for a 16:9 aspect ratio
        setVideoHeight(height);
      }
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Card ref={videoContainerRef} className={`relative p-1 shadow-none`}>
        <div className="flex flex-col h-full gap-1">
          <div
            className="cursor-pointer w-full overflow-hidden border relative"
            style={{ height: videoHeight, borderRadius: '0.5rem' }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="absolute top-0 left-0 flex justify-between p-3 w-full z-10 h-auto">
              <Button
                variant="outline"
                size="icon"
                className="w-auto h-auto p-1.5 rounded-lg text-sm"
                onMouseEnter={() => setHover(false)}
                onMouseLeave={() => setHover(true)}
              >
                <Link href={github} target="_blank" aria-label={github}>
                  <IconBrandGithub size={14} />
                </Link>
              </Button>
              {slug && (
                <Button
                  variant="outline"
                  size="icon"
                  className="w-auto h-auto p-1.5 rounded-lg"
                  onMouseEnter={() => setHover(false)}
                  onMouseLeave={() => setHover(true)}
                >
                  <Link href={slug}>
                    <IconNotes size={14} />
                  </Link>
                </Button>
              )}
            </div>
            <div className={`aspect-w-16 aspect-h-9 w-full h-full`}>
              <Link href={link} target="_blank" aria-label={title}>
                {video ? (
                  <Video srcVideo={video} className="w-full h-full object-cover" />
                ) : (
                  <Image src={image} alt={title} className="w-full h-full object-cover" width="1280" height="720" />
                )}
              </Link>
            </div>
            <div
              className="absolute bottom-0 left-0 flex justify-between px-3 py-2 pb-1 w-full z-10"
              style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)' }}
            >
              <HoverTitle
                title={title}
                description={description}
                date={date}
                locale={locale}
                tags={tags}
                link={link}
                sethover={setHover}
                onMouseEnter={() => setHover(false)}
                onMouseLeave={() => setHover(true)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between w-full gap-1">
            <div className="w-full">
              <Button
                variant="outline"
                className={`rounded-lg shadow-none w-full ${hover ? 'bg-zinc-100 dark:bg-zinc-800' : ''}`}
              >
                <Link href={link} target="_blank" className="flex gap-2 w-full justify-center items-center">
                  <IconExternalLink size={18} />
                  {buttons(project.textKey)}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
