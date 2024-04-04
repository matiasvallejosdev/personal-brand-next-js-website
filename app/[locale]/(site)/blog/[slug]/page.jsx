import { Mdx } from '@/components/mdx/mdx';
import { allArticles } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

import { IconCalendar, IconClock } from '@tabler/icons-react';
import { getOnlyDate, calculateReadingTime } from '@/utils/utils';

import Tag from '@/components/Tag';

const getPostContent = (slug) => {
  const post = allArticles.find((doc) => doc.slugAsParams === slug);
  if (!post) {
    notFound();
  }
  return post;
};

const divisor = () => {
  return <span className="px-0.5">•</span>;
};

export default async function MarkdownPage({ params }) {
  const { slug } = params;
  const post = await getPostContent(slug);
  return (
    <>
      <div className="flex flex-col gap-4 pb-8">
        <div className="flex flex-wrap gap-2 justify-start items-center">
          {post.tags.map((tag, index) => (
            <Tag name={tag} key={index} />
          ))}
        </div>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="flex flex-col sm:flex-row gap-2 justify-start items-start sm:items-center">
          <p className="text-xs  flex gap-1 items-center">
            <IconCalendar size={18} />
            <span className="text-brand">{getOnlyDate(post.date)}</span>
          </p>
          <p className="text-xs  flex gap-1 items-center">
            <IconClock size={18} />
            {calculateReadingTime(post.body.code)} reading minutes
          </p>
        </div>
      </div>
      <article>
        <Mdx code={post.body.code} />
      </article>
    </>
  );
}
