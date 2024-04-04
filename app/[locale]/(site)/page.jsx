import Hero from '@/features/Hero';
import Skills from '@/features/Skills';
import Projects from '@/features/Projects';
import Articles from '@/features/Articles';
import Certifications from '@/features/Certifications';
import Contact from '@/features/Contact';
import Educations from '@/features/Educations';
import Stats from '@/features/Stats';
import Strategy from '@/features/Strategy';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-4">
          <Projects featured={true} />
          <Skills />
          <Stats />
          <Articles featured={true} />
          <Educations />
          <Certifications />
          <Contact />
        </div>
      </div>
    </>
  );
}
