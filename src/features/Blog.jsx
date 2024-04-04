import Article from '@/components/blog/Article';
import { allDocuments } from 'contentlayer/generated';

const getBlogPosts = () => {
  const posts = allDocuments.filter((doc) => {
    return doc.type === 'Article';
  });
  return posts;
};

export default async function Blog({ maxArticles, featured }) {
  const blog = await getBlogPosts();
  const articles = featured ? blog.slice(0, maxArticles).filter((doc) => doc.featured) : blog.slice(0, maxArticles);

  return (
    <div className="flex flex-col gap-1 justify-start items-center w-full">
      {articles.map((article) => (
        <Article key={article.slug} article={article} />
      ))}
    </div>
  );
}
