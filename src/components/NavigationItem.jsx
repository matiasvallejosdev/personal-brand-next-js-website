'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { usePathname } from 'next/navigation';

const basePath = (pathname) => {
  const path = pathname.replace(/\/(es|en)/, '');
  return path ? path : '/';
}

export default function NavigationItem({ path, name, customLink, onClickCallback}) {
  const pathname = usePathname();
  const isSelected = true;

  return (
    <Button
      variant="link"
      size="default"
      className={`
    p-0
    ${isSelected ? 'text-primary-500' : 'text-zinc-500'}
    `}
    >
      <Link
        href={path}
        key={name}
        alt={name}
        className={`flex gap-1 items-center justify-center text-sm ${customLink}`}
        onClick={onClickCallback}
      >
        {name}
      </Link>
    </Button>
  );
}
