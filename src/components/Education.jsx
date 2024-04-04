'use client';
import { Card, CardContent } from './ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Education = ({ education }) => {
  const [hover, setHover] = useState(false);

  return (
    <Card className="w-full border-none shadow-none">
      <CardContent className="p-0 flex gap-4">
        <div className="w-auto">
          <Image
            src={education.logo}
            width="80"
            height="80"
            alt="Institution Logo"
            className={`rounded-full transition duration-300 ${hover ? 'scale-110' : ''}`}
          />
        </div>
        <div>
          <div className="flex gap-1 flex-col">
            <Link href={education.link} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
              <h4 className="uppercase text-base font-semibold transition duration-300 text-brand">{education.institution}</h4>
            </Link>
            <p className="text-sm">{education.degree}</p>
            <p className="text-sm text-gray-500">
              {education.dates.start} - {education.dates.end}
            </p>
            <p className="flex flex-col items-start justify-center text-sm">
              {education.details.map((detail, index) => (
                <span key={index}>- {detail}</span>
              ))}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;
