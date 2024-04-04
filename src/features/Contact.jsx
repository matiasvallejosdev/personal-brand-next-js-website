import { Section, SectionSubtitle, SectionTitle } from '@/components/section/Section';

import CardContact from '@/components/cards/CardContact';
import CardCoffee from '@/components/cards/CardCoffee';
import CardSocial from '@/components/cards/CardSocial';
import CardMe from '@/components/cards/CardMe';

import { useTranslations } from 'next-intl';

import { IconMail } from '@tabler/icons-react';

export default function Contact() {
  const t = useTranslations('Contact');
  return (
    <Section id="contact">
      <SectionTitle title={t('title')} icon={<IconMail />} />
      <SectionSubtitle subtitle={t('subtitle')} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="col-span-1 flex flex-col gap-4">
          <CardMe />
          <CardCoffee />
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <CardContact customClass={'h-full'} />
          <CardSocial />
        </div>
      </div>
    </Section>
  );
}
