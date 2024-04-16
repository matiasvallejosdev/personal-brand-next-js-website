import { Montserrat as CustomFont } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";

import { useMessages } from 'next-intl';

import Providers from '@/context/Providers';
import { SITE } from 'src/config';

import '@/styles/globals.css';

const customFont = CustomFont({
  subsets: ['latin'],
  variable: '--font-custom',
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: SITE.title,
  description: SITE.description,
  keywords: SITE.keywords,
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();
  return (
    <html lang={locale} className={`${customFont.variable}`}>
      <head>
        <link rel="icon" href="/static/favicon.ico" sizes="256x256" type="image/png" />

        <meta property="og:url" content={SITE.origin} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SITE.title} />
        <meta property="og:description" content={SITE.description} />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/documents/2e9e4522-425e-4bd2-9665-d4b5f5f33565.png?token=vhAVX5a_ezZ8CjVDqH6rGolG-qXo4CtYqC3H_mvZc7w&height=750&width=750&expires=33248333306"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="matiasvallejos.com" />
        <meta property="twitter:url" content={SITE.origin} />
        <meta name="twitter:title" content={SITE.title} />
        <meta name="twitter:description" content={SITE.description} />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/documents/2e9e4522-425e-4bd2-9665-d4b5f5f33565.png?token=vhAVX5a_ezZ8CjVDqH6rGolG-qXo4CtYqC3H_mvZc7w&height=750&width=750&expires=33248333306"
        />
      </head>
      <body className={`relative ${customFont.className} antialiased`}>
        <Providers messages={messages} locale={locale}>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
