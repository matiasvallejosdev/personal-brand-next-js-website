import { NavigationBar, NavigationBarResponsive } from '@/features/NavigationBar';
import ToggleTheme from '@/components/settings/ToggleTheme';
import ToggleLanguage from '@/components/settings/ToggleLanguage';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="py-6 md:py-8 w-full flex items-center justify-between gap-2 mb-0 md:mb-6">
        <Link href="/" className="flex hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer h-full justify-center items-center">
          <Image src="/brand/logo.webp" width="65" height="65" alt="Matias Vallejos" priority />
        </Link>
        <div className="hidden md:flex gap-4">
          <NavigationBar />
          <ToggleLanguage />
          <ToggleTheme />
        </div>
        <div className="block md:hidden">
          <NavigationBarResponsive />
        </div>
      </div>
    </>
  );
}
