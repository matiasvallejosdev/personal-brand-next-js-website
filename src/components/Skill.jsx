'use client';
import { Card } from './ui/card';
import Image from 'next/image';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const SkillTag = ({ name, svgIcon, svgIconDark }) => {
  const { theme } = useTheme();
  const [hover, setHover] = useState(false);

  return (
    <Card
      variant="outline"
      className="shadow-none h-full w-full hover:bg-inherit py-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-default
      hover:scale-105 transition duration-200 ease-in-out flex justify-center items-center
      "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex flex-col items-center gap-4 justify-center w-auto">
        {theme == 'dark' && svgIconDark != null ? (
          <>
            <Image
              src={svgIconDark}
              alt={name}
              width={30}
              height={30}
              className={`${hover ? 'scale-150 -translate-y-1' : ''} transition duration-500 ease-in-out`}
            />
            <span className="text-lg font-light">{name}</span>
          </>
        ) : (
          <>
            <Image
              src={svgIcon}
              alt={name}
              width={30}
              height={30}
              className={`${hover ? 'scale-150 -translate-y-1' : ''} transition duration-500 ease-in-out`}
            />
            <span className="text-lg font-light">{name}</span>
          </>
        )}
      </div>
    </Card>
  );
};

export default SkillTag;
