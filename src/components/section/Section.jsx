import { Fira_Code as CustomFont } from 'next/font/google';
const customFont = CustomFont({
  subsets: ['latin'],
  variable: '--font-custom',
  weight: ['400', '500', '700'],
});

export function Section({ children, id }) {
  return (
    <section className="py-6 md:py-14" id={id}>
      {children}
    </section>
  );
}

export function SectionTitle({ title, icon }) {
  return (
    <h3 className={`font-bold text-2xl mt-8 mb-4 flex items-center justify-start`}>
      {icon && <span className="mr-2">{icon}</span>}
      <span>{title}</span>
    </h3>
  );
}

export function SectionSubtitle({ subtitle }) {
  return <p className={`text-base text-zinc-600 dark:text-zinc-300 mb-14 mt-2 ${customFont.className}`}>{subtitle}</p>;
}
