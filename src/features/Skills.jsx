import { Section, SectionTitle, SectionSubtitle } from '@/components/section/Section';

import { Skills as SkillsGrid } from '@/components/Skills';
import { useTranslations } from 'next-intl';

import { IconTerminal } from '@tabler/icons-react';

export default function Skills() {
  const t = useTranslations('Skills');

  return (
    <Section id="skills">
      <SectionTitle title={t('title')} icon={<IconTerminal />}/>
      <SectionSubtitle subtitle={t('subtitle')} />
      <SkillsGrid />
    </Section>
  );
}
