'use client';
import { Card, CardContent } from './ui/card';
import Link from 'next/link';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function Certification({ certification }) {
  const t = useTranslations('Certifications');
  const [hover, setHover] = useState(false);
  return (
    <Card className="shadow-none min-h-36">
      <CardContent className="p-0 h-full" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Link
          href={certification.link}
          target="_blank"
          className="p-5 flex flex-col gap-2 justify-start items-start h-full"
        >
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-500">
              {t('start')}: {certification.issue_date} - {t('end')}: {certification.expiration_date}
            </p>
          </div>
          <div className="flex gap-1 flex-col">
            <h4
              className={`uppercase text-base text-brand font-semibold hover:underline transition duration-300 ${
                hover ? 'underline' : ''
              }`}
            >
              {certification.title}
            </h4>
            <p href="#" className="text-sm">
              {certification.issuer}
            </p>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
