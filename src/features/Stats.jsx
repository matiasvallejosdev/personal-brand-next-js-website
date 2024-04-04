import { Section, SectionTitle, SectionSubtitle } from "@/components/section/Section";
import { useTranslations } from "next-intl";
import { IconGraph } from "@tabler/icons-react";

import {Stats as StatsGrid} from "@/components/Stats";

export default function Stats() {
  const t = useTranslations('Stats');

  return (
    <Section id="skills">
      <SectionTitle title={t('title')} icon={<IconGraph />} />
      <SectionSubtitle subtitle={t('subtitle')} />
      <StatsGrid />
    </Section>
  );
}
