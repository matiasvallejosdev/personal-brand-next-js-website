import CardCoffee from './cards/CardCoffee';
import CardProjects from './cards/CardProjects';
import CardSocial from './cards/CardSocial';
import CardStats from './cards/CardStats';

import { useTranslations } from 'next-intl';

export function Stats() {
  const t = useTranslations('Stats');

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <CardStats t={t} />
      <div className="flex flex-col gap-4 justify-between">
        <CardProjects />
        <CardCoffee showCoffee={false} />
      </div>
    </div>
  );
}
