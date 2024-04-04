export const profile = {
  image: '/images/me.png',
};

export const projects = {
  en: [
    {
      title: 'Minimalist',
      description:
        'An efficient and elegant task management web application that incorporates social authentication, OAuth2, NextAuth and is developed under the TDD approach. It uses the Django Rest Framework and is hosted on Vercel, combining a Rest API with a PostgreSQL database for an optimized user experience.',
      link: 'https://minimalist-tasks.vercel.app/',
      textKey: 'viewProduction',
      github: 'https://github.com/matiasvallejosdev/minimalist-todo-app-nextjs',
      tags: [
        'Next.js',
        'TailwindCSS',
        'Django',
        'React',
        'Javascript',
        'Django Rest Framework',
        'Github Actions',
        'Tailwind CSS',
        'OAuth2',
        'NextAuth',
        'Google Social Authentication',
      ],
      video: '/projects/movies/minimalist.mp4',
      featured: true,
      category: 'Fullstack',
      date: '2023-01-01',
    },
    {
      title: 'Desafio Planeta',
      description:
        'Video game developed in collaboration with the organization Manos Verdes to promote environmental awareness, a project from my career in Virtual Simulations and Video Games. Web based video game developed in Next.js and Django Rest Framework.',
      link: 'https://github.com/matiasvallejosdev/desafio-planeta-rest-api',
      textKey: 'viewCode',
      github: 'https://github.com/matiasvallejosdev/desafio-planeta-rest-api',
      tags: [
        'Next.js',
        'Django',
        'React',
        'Javascript',
        'Django Rest Framework',
        'TailwindCSS',
        'Game Development',
        'Educational Game',
        'Climate Change',
      ],
      image: '/projects/images/desafio-planeta.png',
      featured: true,
      category: 'Fullstack',
      date: '2024-02-01',
    },
  ],
  es: [
    {
      title: 'Minimalist',
      description:
        'Una aplicación web de gestión de tareas, eficiente y elegante, que incorpora autenticación social, OAuth2, NextAuth y está desarrollada bajo el enfoque de TDD. Utiliza Django Rest Framework y está alojada en Vercel, combinando una API Rest con una base de datos PostgreSQL para una experiencia de usuario optimizada.',
      link: 'https://minimalist-tasks.vercel.app/',
      textKey: 'viewProduction',
      github: 'https://github.com/matiasvallejosdev/minimalist-todo-app-nextjs',
      tags: [
        'Next.js',
        'React',
        'TailwindCSS',
        'Javascript',
        'Tailwind CSS',
        'Django',
        'Django Rest Framework',
        'Github Actions',
        'OAuth2',
        'NextAuth',
        'Google Social Authentication',
      ],
      video: '/projects/movies/minimalist.mp4',
      featured: true,
      category: 'Fullstack',
      date: '2023-01-01',
    },
    {
      title: 'Desafío Planeta',
      description:
        'Videojuego desarrollado en colaboración con la organización Manos Verdes para promover la conciencia ambiental, un proyecto de mi carrera en Simulaciones Virtuales y Videojuegos. Basado en web desarrollado en Next.js y Django Rest Framework.',
      link: 'https://github.com/matiasvallejosdev/desafio-planeta-rest-api',
      textKey: 'viewCode',
      github: 'https://github.com/matiasvallejosdev/desafio-planeta-rest-api',
      tags: [
        'Next.js',
        'Django',
        'React',
        'Javascript',
        'Django Rest Framework',
        'TailwindCSS',
        'Desarrollo de Juegos',
        'Juego Educativo',
        'Cambio Climático',
      ],
      image: '/projects/images/desafio-planeta.png',
      featured: true,
      category: 'Fullstack',
      date: '2024-02-01',
    },
  ],
};

export const educations = {
  en: [
    {
      institution: 'Colegio Universitario IES',
      logo: '/education/ies.png',
      link: 'https://ies21.edu.ar/',
      degree: 'Superior in Virtual Simulations and Video Games',
      dates: {
        start: '01/2018',
        end: '12/2022',
      },
      status: 'On Thesis',
      details: [
        'Academic average of 8.9',
        '100% self-taught. Career developed 80% remotely and completely online.',
        'Career focus on product and business.',
      ],
    },
  ],
  es: [
    {
      institution: 'Colegio Universitario IES',
      logo: '/education/ies.png',
      link: 'https://ies21.edu.ar/',
      degree: 'Tecnicatura Superior en Simulaciones virtuales y videojuegos',
      dates: {
        start: '01/2018',
        end: '12/2022',
      },
      status: 'En Tesis',
      details: [
        'Promedio académico de 8.9',
        '100% autodidacta. Carrera desarrollada 80% de forma remota y completamente en línea.',
        'Enfoque de la carrera en producto y negocio.',
      ],
    },
  ],
};

export const skills = [
  { svgIcon: '/icons/skills/react.svg', name: 'React', description: 'JavaScript library for UIs.', category: 'frameworks' },
  { svgIcon: '/icons/skills/next.svg', name: 'Next.js', description: 'React framework for web apps.', category: 'frameworks' },
  { svgIcon: '/icons/skills/html5.svg', name: 'HTML', description: 'Markup language for web pages.', category: 'languages' },
  { svgIcon: '/icons/skills/css.svg', name: 'CSS', description: 'Style sheet language for web.', category: 'languages' },
  { svgIcon: '/icons/skills/js.svg', name: 'JavaScript', description: 'Scripting language for web pages.', category: 'languages' },
  { svgIcon: '/icons/skills/tailwindcss.svg', name: 'Tailwind CSS', description: 'Utility-first CSS framework.', category: 'frameworks' },
  { svgIcon: '/icons/skills/python.svg', name: 'Python', description: 'Interpreted language with clear syntax.', category: 'languages' },
  { svgIcon: '/icons/skills/django.svg', name: 'Django', description: 'High-level Python web framework.', category: 'frameworks' },
  { svgIcon: '/icons/skills/mysql.svg', name: 'MySQL', description: 'Relational database management system.', category: 'databases' },
  { svgIcon: '/icons/skills/postgresql.svg', name: 'PostgreSQL', description: 'Open-source relational database.', category: 'databases' },
  { svgIcon: '/icons/skills/dotnet.svg', name: '.NET', description: 'Platform for many types of apps.', category: 'frameworks' },
  { svgIcon: '/icons/skills/csharp.svg', name: 'C#', description: 'Simple, modern, and type-safe language.', category: 'languages' },
  { svgIcon: '/icons/skills/aws.svg', name: 'AWS', description: 'Cloud computing services.', category: 'cloud' },
  { svgIcon: '/icons/skills/unity.svg', name: 'Unity', description: 'Game engine for 2D and 3D games.', dark: '/icons/skills/unity_dark.svg', category: 'others' },
  { svgIcon: '/icons/skills/git.svg', name: 'Git', description: 'Version control system.', category: 'tools' },
  { svgIcon: '/icons/skills/notion.svg', name: 'Notion', description: 'Project management and note-taking tool.', category: 'tools' },
];

export const certifications = [
  {
    title: 'Build a Backend REST API with Python & Django - Advanced',
    issuer: 'Udemy',
    issue_date: 'January 2023',
    expiration_date: 'January 2026',
    link: 'https://www.udemy.com/certificate/UC-38a5b293-e2fd-416d-9de3-330780a40fba/', // Add the appropriate link
  },
  {
    title: 'Front-End Web Development with React',
    issuer: 'The Hong Kong University of Science and Technology',
    issue_date: 'December 2022',
    expiration_date: 'December 2025',
    link: 'https://www.coursera.org/account/accomplishments/verify/R79W7FPACZW4', // Add the appropriate link
  },
  {
    title: 'Build Responsive Real-World Websites with HTML and CSS',
    issuer: 'Udemy',
    issue_date: 'June 2022',
    expiration_date: 'June 2024',
    link: 'https://www.udemy.com/certificate/UC-220487bc-8752-49e6-afe4-974922e796b4/', // Add the appropriate link
  },
  {
    title: 'Building Modern Python Applications on AWS',
    issuer: 'Amazon Web Services (AWS)',
    issue_date: 'January 2022',
    expiration_date: 'December 2025',
    link: 'https://www.coursera.org/account/accomplishments/verify/GHQUDT3FLPNM', // Add the appropriate link
  },
  {
    title: 'Git + Github',
    issuer: 'Udemy',
    issue_date: 'February 2021',
    expiration_date: 'February 2024',
    link: 'https://www.udemy.com/certificate/UC-P6Z5NR9O/', // Add the appropriate link
  },
  {
    title: 'EF SET Certificate (C1 Advanced)',
    issuer: 'EF Standard English Test',
    issue_date: 'March 2023',
    expiration_date: 'March 2024',
    link: 'https://cert.efset.org/zvskhG', // Add the appropriate link
  },
];
