import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconHeart,
  IconBrandYoutube,
  IconBrandDiscord,
} from '@tabler/icons-react';

export const contact = {
  location: 'Argentina',
  email: 'matiasvallejosdev@outlook.com',
  twitter: {
    user: '@matiasvallejosdev',
    url: 'https://x.com/matiasvallejosdev',
  },
  linkedin: {
    user: 'in/matiasvallejos',
    url: 'https://linkedin.com/in/matiasvallejos',
  },
  github: {
    user: '@matiasvallejosdev',
    url: 'https://github.com/matiasvallejosdev',
  },
  buyMeACoffee: {
    user: '@matiasvallejosdev',
    url: 'https://buymeacoffee.com/matiasvallejosdev',
  },
};

export const social = [
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/matiasvallejos/',
    icon: <IconBrandLinkedin size={26} />,
    quick: true,
  },
  { name: 'Twitter', link: 'https://twitter.com/mativallejosdev', icon: <IconBrandTwitter size={26} />, quick: true },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/channel/UC9z3z5J3Y5YX9f3J3YXJN5A',
    icon: <IconBrandYoutube size={26} />,
    quick: false,
  },
  {
    name: 'Discord',
    link: 'https://discordapp.com/users/950753337802687168',
    icon: <IconBrandDiscord size={26} />,
    quick: false,
  },
  { name: 'Github', link: 'https://github.com/matiasvallejosdev', icon: <IconBrandGithub size={26} />, quick: true },
  {
    name: 'Sponsor',
    link: 'https://github.com/sponsors/matiasvallejosdev',
    icon: <IconHeart size={26} />,
    quick: true,
  },
];
