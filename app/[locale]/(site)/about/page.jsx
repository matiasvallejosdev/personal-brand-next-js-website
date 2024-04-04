import { Mdx } from '@/components/mdx/mdx';
import { allDocuments } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

import { useLocale } from 'next-intl';

const getPostContent = (slug) => {
  const post = allDocuments.find((doc) => doc.slugAsParams === slug);
  if (post === undefined || post === null) {
    return notFound();
  }
  return post;
};

export default async function AboutPage() {
  const locale = useLocale();
  const name = `${locale}_about-me`;
  const post = await getPostContent(name);
  
  return (
    <>
      <article className="">
        <Mdx code={post.body.code} />
      </article>
    </>
  );
}
