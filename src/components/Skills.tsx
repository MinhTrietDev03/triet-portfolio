import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Server, Database, Cloud, Wrench, type LucideIcon } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiOpenjdk,
  SiSharp,
  SiPython,
  SiSpring,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiCircleci,
  SiLinux,
  SiVercel,
  SiGit,
  SiFigma,
  SiPostman,
  SiAnthropic,
  type SimpleIcon,
} from 'react-icons/si';

const SiMicrosoftsqlserver = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 4.7c0-.4.3-.7.7-.7h16.6c.4 0 .7.3.7.7v14.6c0 .4-.3.7-.7.7H3.7c-.4 0-.7-.3-.7-.7V4.7zm1.4.7v13.2h15.2V5.4H4.4zm1.5 1.4h2v1.6h2.4V6.8H8.9V5.4H5.9zm9.1 0h.8v6.2c0 .4 0 .7.1.9.1.2.2.4.4.5.2.1.4.2.7.2.3 0 .5-.1.7-.2.2-.1.3-.3.4-.5.1-.2.1-.5.1-.9V6.8h.8v6.1c0 .5-.1.9-.2 1.2-.1.3-.3.6-.6.8-.3.2-.6.3-1 .3-.4 0-.7-.1-1-.3-.3-.2-.5-.4-.6-.7-.1-.3-.2-.7-.2-1.1V6.8zm-3 0h.8v6.7h3.2v.7H12V6.8zm-4 4.4c.3.3.6.5 1 .7.4.2.8.3 1.2.3.4 0 .7-.1.9-.2.2-.2.3-.4.3-.6 0-.2-.1-.4-.2-.5-.1-.1-.3-.2-.6-.3-.2 0-.5-.1-.9-.2-.5-.1-.9-.2-1.2-.3-.3-.1-.5-.3-.7-.6-.2-.2-.2-.5-.2-.9 0-.3.1-.6.3-.9.2-.3.4-.5.8-.6.3-.1.7-.2 1.1-.2.5 0 .9.1 1.4.2.4.2.8.4 1.1.7l-.5.6c-.3-.3-.6-.5-.9-.6-.3-.1-.7-.2-1.1-.2-.4 0-.7.1-.9.3-.2.2-.3.4-.3.7 0 .2.1.4.2.5.1.1.3.2.5.3.2.1.5.1 1 .2.5.1 1 .2 1.3.3.3.1.6.3.8.5.2.3.3.6.3 1 0 .4-.1.7-.3 1-.2.3-.5.5-.9.6-.4.2-.8.2-1.3.2-.5 0-1-.1-1.5-.3-.5-.2-.9-.5-1.2-.8l.5-.7z" />
  </svg>
);

type SkillItem = { name: string; icon: SimpleIcon | React.FC<React.SVGProps<SVGSVGElement>>; color: string };

type Category = {
  title: string;
  icon: LucideIcon;
  color: string;
  accent: string;
  skills: SkillItem[];
};

const skillCategories: Category[] = [
  {
    title: 'Front-end',
    icon: Globe,
    color: 'from-cyan-500 to-sky-600',
    accent: 'cyan',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
    ],
  },
  {
    title: 'Back-end',
    icon: Server,
    color: 'from-emerald-500 to-teal-600',
    accent: 'emerald',
    skills: [
      { name: 'Java', icon: SiOpenjdk, color: '#F89820' },
      { name: 'C#', icon: SiSharp, color: '#A179DC' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-violet-500 to-purple-600',
    accent: 'violet',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Microsoft SQL', icon: SiMicrosoftsqlserver, color: '#CC2927' },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'from-orange-500 to-amber-600',
    accent: 'orange',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'CI/CD', icon: SiCircleci, color: '#9CA3AF' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
    ],
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    color: 'from-pink-500 to-rose-600',
    accent: 'pink',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Claude', icon: SiAnthropic, color: '#D97757' },
    ],
  },
];

const accentMap: Record<string, { text: string; glow: string }> = {
  cyan: { text: 'text-cyan-400', glow: 'shadow-cyan-500/20' },
  emerald: { text: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
  violet: { text: 'text-violet-400', glow: 'shadow-violet-500/20' },
  orange: { text: 'text-orange-400', glow: 'shadow-orange-500/20' },
  pink: { text: 'text-pink-400', glow: 'shadow-pink-500/20' },
};

const ROW_DIRECTIONS = ['left', 'right'] as const;

function SkillBadge({ skill }: { skill: SkillItem }) {
  return (
    <div className="group relative flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-900/60 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-default shrink-0">
      <div
        className="p-2 rounded-xl bg-slate-950/80 group-hover:scale-110 transition-transform duration-300"
        style={{ boxShadow: `0 0 18px ${skill.color}33` }}
      >
        <skill.icon
          className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300"
          style={{ color: skill.color }}
        />
      </div>
      <span className="text-sm sm:text-base font-semibold text-slate-100 whitespace-nowrap group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  duration,
  isInView,
}: {
  items: SkillItem[];
  direction: 'left' | 'right';
  duration: number;
  isInView: boolean;
}) {
  const loopedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent" aria-hidden />
      <motion.div
        className="flex w-max gap-3 will-change-transform"
        initial={false}
        animate={
          isInView
            ? { x: direction === 'left' ? ['0%', '-33.333%'] : ['-33.333%', '0%'] }
            : { x: '0%' }
        }
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {loopedItems.map((skill, i) => (
          <SkillBadge key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}

function CategoryRow({
  category,
  index,
  isInView,
}: {
  category: Category;
  index: number;
  isInView: boolean;
}) {
  const accent = accentMap[category.accent];
  const direction = ROW_DIRECTIONS[index % ROW_DIRECTIONS.length];
  const duration = 28 + index * 4;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 px-1">
        <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} shadow-md ${accent.glow}`}>
          <category.icon className="w-4 h-4 text-white" />
        </div>
        <h3 className={`text-sm sm:text-base font-bold ${accent.text} tracking-wide uppercase`}>
          {category.title}
        </h3>
        <div className="flex-1 h-px bg-gradient-to-r from-slate-800 to-transparent ml-2" />
      </div>

      <MarqueeRow items={category.skills} direction={direction} duration={duration} isInView={isInView} />
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            My Technical <span className="gradient-text">Toolkit</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto p-6 sm:p-8 rounded-3xl glass-card border border-cyan-500/10 space-y-5"
        >
          {skillCategories.map((category, index) => (
            <CategoryRow key={category.title} category={category} index={index} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
