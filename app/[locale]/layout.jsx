import { Montserrat as CustomFont } from 'next/font/google';

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
  keywords: SITE.keywords
};

export default function RootLayout({ children, params: { locale } }) {
  const messages = useMessages();
  return (
    <html lang={locale} className={`${customFont.variable}`}>
      <head>
        <link rel="icon" href="/static/favicon.ico" />
      </head>
      <body className={`relative ${customFont.className} antialiased`}>
        <Providers messages={messages} locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
