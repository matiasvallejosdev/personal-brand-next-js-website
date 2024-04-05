import ThemeModeProvider from './ThemeModeProvider';
import { NextIntlClientProvider } from 'next-intl';

export default function Providers({ children, messages, locale}) {
  return (
    <>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <ThemeModeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeModeProvider>
      </NextIntlClientProvider>
    </>
  );
}
