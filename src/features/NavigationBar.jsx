'use client';
import { navbar } from '@/data/pages/layout';
import NavigationItem from '@/components/NavigationItem';

import { useTranslations } from 'next-intl';

import { useState } from 'react';

import { IconMenu2, IconX } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

import ToggleTheme from '@/components/settings/ToggleTheme';
import ToggleLanguage from '@/components/settings/ToggleLanguage';

export function NavigationBar() {
  const t = useTranslations('Navbar');

  return (
    <>
      <div className="flex justify-center items-center gap-6">
        {navbar.map((item, index) => {
          if (!item.isEnabled) return null;
          return (
            <NavigationItem key={`${index}_${item.key}`} path={item.path} name={t(item.key)} />
          );
        })}
      </div>
    </>
  );
}

export function NavigationBarResponsive() {
  const t = useTranslations('Navbar');
  const [isOpen, setIsOpen] = useState(false);

  const transitionClasses = 'transition-all duration-500 ease-in-out';

  return (
    <>
      <div
        className={`fixed w-full h-full z-20 bg-background top-0 ${
          isOpen ? 'left-0 opacity-100' : '-left-full opacity-0'
        } ${transitionClasses}`}
        style={{ visibility: isOpen ? 'visible' : 'hidden' }}
      >
        <div className="flex flex-col justify-center items-center gap-5 h-full">
          {navbar.map((item, index) => {
            if (!item.isEnabled) return null;
            return (
              <NavigationItem
                key={`${index}_${item.key}`}
                path={item.path}
                name={t(item.key)}
                customLink={'text-xl'}
                onClickCallback={() => setIsOpen(false)}
              />
            );
          })}
          <div className="w-1/3 h-0.5 bg-zinc-100 dark:bg-zinc-800" />
          <div className="flex gap-4">
            <ToggleTheme />
            <ToggleLanguage />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed left-0 top-0 w-full z-30 flex justify-end items-center py-7 px-6">
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="icon"
            className={`cursor-pointer ${transitionClasses} duration-75 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          >
            <IconX size={40} />
          </Button>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(true)}
        variant="ghost"
        size="icon"
        className={`cursor-pointer ${transitionClasses} ${isOpen ? 'opacity-0' : 'opacity-100 h-full flex justify-center items-center'}`}
      >
        <IconMenu2 size={40} />
      </Button>
    </>
  );
}
