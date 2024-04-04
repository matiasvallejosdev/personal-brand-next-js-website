import { Card, CardContent } from '../ui/card';

import { Button } from '../ui/button';
import Link from 'next/link';

import { IconLocation, IconBrandGithub, IconBrandLinkedin, IconMail, IconBrandTwitter } from '@tabler/icons-react';
import { contact } from '@/data/pages/contact';

export default function CardContact({ customClass }) {
  return (
    <Card className={`h-auto ${customClass} shadow-none`}>
      <CardContent className="p-4">
        <div className="flex flex-col gap-2 items-start">
          <Button variant="link" className="px-0">
            <Link href="https://es.wikipedia.org/wiki/Argentina" target="_blank" className="flex gap-2 items-center">
              <IconLocation size={24} className="text-brand" />
              <span className="">{contact.location}</span>
            </Link>
          </Button>
          <Button variant="link" className="px-0">
            <Link href={`mailto:${contact.email}`} target="_blank" className="flex gap-2 items-center">
              <IconMail size={24} className="text-brand" />
              <span className="">{contact.email}</span>
            </Link>
          </Button>
          <Button variant="link" className="px-0">
            <Link href={contact.github.url} target="_blank" className="flex gap-2 items-center">
              <IconBrandGithub size={24} className="text-brand" />
              <span className="">{contact.github.user}</span>
            </Link>
          </Button>
          <Button variant="link" className="px-0">
            <Link href={contact.linkedin.url} target="_blank" className="flex gap-2 items-center">
              <IconBrandLinkedin size={24} className="text-brand" />
              <span className="">{contact.linkedin.user}</span>
            </Link>
          </Button>
          <Button variant="link" className="px-0">
            <Link href={contact.twitter.url} target="_blank" className="flex gap-2 items-center">
              <IconBrandTwitter size={24} className="text-brand" />
              <span className="">{contact.twitter.user}</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
