'use client'
import Project from "@/components/project/Project";
import { projects } from "@/data/pages/resume";

import { Projects as ProjectGrid } from "@/components/Projects";

import { useLocale } from "next-intl";

export default function ProjectsPage() {
  const locale = useLocale();
  const localeProjects = projects[locale];

  return (
    <ProjectGrid projects={localeProjects} showNavbar={true} />
  );
}
