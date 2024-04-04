'use client';
import Project from '@/components/project/Project';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { useState } from 'react';

import { navbarProjects } from '@/data/pages/layout';

export function Projects({ projects, showNavbar, showGoToProjects }) {
  const buttons = useTranslations('Buttons');
  const [projectsData, setProjectsData] = useState(projects);
  const [filter, setFilter] = useState('');

  const filterProjects = (projects, filter) => {
    setFilter(filter);
    return projects.filter((project) => project.category.toLowerCase().includes(filter.toLowerCase()));
  };

  const filterCategories = (projects, navbarProjects) => {
    // if there is not any project for a category, don't show the category
    return navbarProjects.filter((item) => {
      return projects.some((project) => project.category.toLowerCase().includes(item.filter.toLowerCase()));
    });
  };

  const navbar = filterCategories(projects, navbarProjects);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center flex-wrap">
          {showNavbar &&
            navbar.map((item, index) => {
              return (
                <Button
                  key={`${index}_${item.key}`}
                  variant="ghost"
                  size="default"
                  onClick={() => setProjectsData(filterProjects(projects, item.filter))}
                >
                  <span
                    className={`
                ${filter === item.filter ? 'text-primary-500' : 'text-zinc-500'}
              `}
                  >
                    {buttons(item.key)}
                  </span>
                </Button>
              );
            })}
        </div>
        <div className={`w-full grid grid-cols-1 sm:grid-cols-2 gap-4`}>
          {projectsData.map((project, index) => (
            <Project key={`${index}_${project.title}`} project={project} />
          ))}
        </div>
        {showGoToProjects && (
          <div className="pt-10">
            <Button variant="ghost">
              <Link href={`/portfolio`} className="text-xs" target='_parent'>
                {buttons('viewProjects')}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
