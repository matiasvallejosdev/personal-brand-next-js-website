import Image from 'next/image';
import Link from 'next/link';

import { profile } from '@/data/pages/resume';
import { useTranslations } from 'next-intl';

import { contact } from '@/data/pages/contact';
import Tag from '../Tag';

export default function MeImage() {
  const t = useTranslations('Hero');
  const linkedin = contact.linkedin;

  return (
    <div className="relative">
      <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden flex justify-center items-center border-4 bg-brand">
        <Image
          src={profile.image}
          fetchPriority="high"
          width="600"
          height="300"
          alt="Matias Vallejos"
          className="absolute bottom-0 scale-110 transition-transform duration-300 ease-in-out"
          priority
        />
      </div>
    </div>
  );
}
