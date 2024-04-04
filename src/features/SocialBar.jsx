import Link from 'next/link';

import { social } from '@/data/pages/contact';
import { Button } from '@/components/ui/button';

export default function SocialBar({customClass, isIcon, isQuick}) {
  const socialData = isQuick ? social.filter((item) => item.quick) : social;
  
  return (
    <>
      <div className={`flex justify-center items-center gap-4 ${customClass}`}>
        {socialData.map((item) => {
          return (
            <>
            <Button variant={`${isIcon ? 'ghost' : 'link'}`} size={`${isIcon ? 'icon' : 'default'}`}>
              <Link aria-label={item.name} href={item.link} key={item.name} target="_blank" alt={item.name} className={`text-base ${isIcon ? "" : "text-gray-500"}`}>
                {
                  isIcon ? item.icon : item.name
                }
              </Link>
            </Button>
            </>
          );
        })}
      </div>
    </>
  );
}
