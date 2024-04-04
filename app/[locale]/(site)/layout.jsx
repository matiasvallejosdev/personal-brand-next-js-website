import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';

export default function SiteLayout({ children }) {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div className="px-5 sm:px-4">
          <Header />
          <main>{children}</main>
        </div>
      </div>
      <div className="w-full relative pt-10 mt-12">
        <div className="top-0 left-0 absolute w-full h-0.5 bg-zinc-100 dark:bg-zinc-800" />
        <div className="max-w-5xl mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}
