import { Section, SectionTitle, SectionSubtitle } from '@/components/section/Section';

import { useTranslations } from 'next-intl';

import { projects } from '@/data/pages/resume';
import { useLocale } from 'next-intl';

import { Projects as ProjectsGrid } from '@/components/Projects';

import { IconCode } from '@tabler/icons-react';

export default function Projects({ featured }) {
  const t = useTranslations('Projects');
  const locale = useLocale();
  const localeProjects = projects[locale];
  const projectsFiltered =
    featured === true
      ? localeProjects.filter((project) => {
          return project.featured === true;
        })
      : localeProjects;
  
  return (
    <Section id="projects">
      <SectionTitle title={t('title')} icon={<IconCode />} />
      <SectionSubtitle subtitle={t('subtitle')} />
      <ProjectsGrid projects={projectsFiltered} showNavbar={true} showGoToProjects={true}/>
    </Section>
  );
}
