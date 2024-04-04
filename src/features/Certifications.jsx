import { Section, SectionSubtitle, SectionTitle } from '@/components/section/Section';

import { certifications } from '@/data/pages/resume';
import Certification from '@/components/Certification';

import { useTranslations } from 'next-intl';

import { IconCertificate } from '@tabler/icons-react';

export default function Certifications() {
  const t = useTranslations('Certifications');
  return (
    <Section id="certifications">
      <SectionTitle title={t('title')} icon={<IconCertificate />} />
      <SectionSubtitle subtitle={t('subtitle')} />
      <div className={`w-full grid grid-cols-1 sm:grid-cols-2 gap-4`}>
        {certifications.map((certification, index) => (
          <div className="flex flex-col h-full" key={index}>
            <Certification certification={certification} />
          </div>
        ))}
      </div>
    </Section>
  );
}
