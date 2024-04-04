import { Section } from '@/components/section/Section';
import { useTranslations } from 'next-intl';

const CardStrategy = ({ stage, title }) => {
  return (
    <div className="flex flex-col gap-4 p-4 justift-center items-center">
      <p className="text-5xl font-bold">0{stage}</p>
      <h3 className="text-xl font-bold text-center">{title}</h3>
    </div>
  );
};

export default function Strategy() {
  const t = useTranslations('Strategy');
  return (
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        <CardStrategy stage="1" title={t('s1_title')} />
        <CardStrategy stage="2" title={t('s2_title')} />
        <CardStrategy stage="3" title={t('s3_title')} />
        <CardStrategy stage="4" title={t('s4_title')} />
      </div>
    </Section>
  );
}
