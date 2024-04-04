import { Section, SectionSubtitle, SectionTitle } from '@/components/section/Section';
import Education from '@/components/Education';

import { educations } from '@/data/pages/resume';

import { useTranslations, useLocale} from 'next-intl';

import { IconSchool } from '@tabler/icons-react';

export default function Educations() {
  const t = useTranslations('Education');
  const locale = useLocale();
  const localeEducations = educations[locale];
  
  return (
    <Section id="education">
      <SectionTitle title={t('title')} icon={<IconSchool />} />
      <SectionSubtitle subtitle={t('subtitle')} />
      <div className={`w-full flex flex-col items-start justify-center gap-4 py-4`}>
        {localeEducations.map((education, index) => (
          <Education key={index} education={education} />
        ))}
      </div>
    </Section>
  );
}
