'use client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function ToggleTheme() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [hover, setHover] = useState(false);

  const getLanguage = (locale) => {
    const language = locale === 'en' ? 'es' : 'en';
    return language;
  };

  const handleOnClick = () => {
    const newLocale = getLanguage(locale);
    const currentPath = pathname.replace(`/${locale}`, '');
    startTransition(() => {
      router.replace(`/${newLocale}${currentPath}`);
    });
  };

  return (
    <Button variant="ghost" onClick={handleOnClick} size="icon" className={`hover:bg-inherit transition duration-300 ${hover ? "scale-125" : ""}`}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
    >
      {locale === 'en' ? (
        <Image src="/languages/british.png" width="30" height="30" alt="English" />
      ) : (
        <Image src="/languages/spain.png" width="30" height="30" alt="Español" />
      )}
    </Button>
  );
}
