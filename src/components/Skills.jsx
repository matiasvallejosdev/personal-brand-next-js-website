'use client';
import Skill from '@/components/Skill';
import { skills } from '@/data/pages/resume';
import { navbarSkills } from '@/data/pages/layout';

import { useTranslations } from 'next-intl';

import { Button } from './ui/button';

import { useState } from 'react';

export function Skills() {
  const [skillsData, setSkillsData] = useState(skills);
  const [filter, setFilter] = useState('');

  const buttons = useTranslations('Buttons');

  const filterSkills = (skills, filter) => {
    setFilter(filter);
    return skills.filter((skill) => skill.category.toLowerCase().includes(filter.toLowerCase()));
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex items-center flex-wrap">
          {navbarSkills.map((item, index) => {
            return (
              <Button
                key={`${index}_${item.key}`}
                variant="ghost"
                size="default"
                onClick={() => setSkillsData(filterSkills(skills, item.filter))}
              >
                <span
                  className={`
                ${filter === item.filter ? 'text-primary-500' : 'text-zinc-500'}
              `}
                >
                  { buttons(item.key) }
                </span>
              </Button>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {skillsData.map((skill, index) => (
            <Skill key={`${index}_${skill.name}`} name={skill.name} svgIcon={skill.svgIcon} svgIconDark={skill?.dark} />
          ))}
        </div>
      </div>
    </>
  );
}
