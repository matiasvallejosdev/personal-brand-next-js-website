import Link from 'next/link';
import Image from 'next/image';
import { NavigationBar } from '@/features/NavigationBar';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="flex flex-col justify-end items-center gap-4 mb-1">
        <div className="flex flex-col w-full gap-4 justify-center items-center">
          <NavigationBar />
          <div className="text-center text-base py-2 text-gray-500">
            &copy; {currentYear} Matias Vallejos | Made in 🇦🇷
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/" className="flex hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
            <Image src="/brand/logo.webp" width="65" height="65" alt="Matias Vallejos" priority />
          </Link>
        </div>
      </div>
    </>
  );
}
