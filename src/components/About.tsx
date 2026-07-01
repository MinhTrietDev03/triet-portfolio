import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Briefcase,
  GraduationCap,
  Code2,
  FolderGit2,
  Sparkles,
  Quote,
} from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '1+', label: 'Years of Experience' },
  { icon: GraduationCap, value: 'HUTECH', sub: 'UNIVERSITY' },
  { icon: Code2, value: 'Software Engineer', label: 'Major' },
  { icon: FolderGit2, value: '6+', label: 'Projects Completed' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 sm:py-32 px-4 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            About Me
          </span>
          <h2 className="section-title">
            Building Digital <span className="gradient-text">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left: Profile image với tech badges */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center"
          >
            <ProfileWithTechBadges isInView={isInView} />
          </motion.div>

          {/* Right: Text content (giữ nguyên) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Quote / headline */}
            <div className="relative pl-5">
              <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-indigo-500 to-pink-500 rounded-full" />
              <Quote className="absolute -left-3 -top-1 w-5 h-5 text-cyan-400 bg-slate-950 rounded-full p-0.5" />
              <p className="text-slate-100 text-lg sm:text-xl leading-relaxed font-medium">
                Software Engineer with nearly <span className="text-cyan-300">one year of experience</span> building
                backend applications and enterprise systems that scale.
              </p>
            </div>

            <p className="text-slate-400 leading-relaxed text-base">
              Strong background in <span className="text-slate-200 font-medium">Java, Spring Boot</span>, relational
              databases, and API development, with a passion for building scalable, maintainable, and
              high-performance software solutions.
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              Dedicated to improving code quality, system architecture, and development processes through
              continuous learning and best engineering practices. Motivated by solving real-world business
              problems and delivering reliable products that create value for users and organizations.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="relative p-4 rounded-2xl glass-card text-center hover:border-cyan-500/40 transition-all group cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-sky-600/0 group-hover:from-cyan-500/10 group-hover:to-sky-600/10 transition-all" />
                  <div className="relative">
                    <div className="inline-flex p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 mb-3 group-hover:scale-110 transition-transform">
                      <s.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className={`font-bold text-white leading-tight ${s.sub ? 'text-base' : 'text-lg'}`}>
                      {s.value}
                      {s.sub && <div className="text-cyan-400 text-[11px] tracking-widest mt-0.5">{s.sub}</div>}
                    </div>
                    {s.label && <div className="text-xs text-slate-500 mt-2">{s.label}</div>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProfileWithTechBadges({ isInView }: { isInView: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div className="relative w-full max-w-sm flex justify-center">
      {/* Ambient glow behind carousel */}
      <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/15 via-indigo-500/10 to-pink-500/10 rounded-2xl blur-3xl -z-10" />

      {/* Outer frame with soft border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-cyan-500/10"
      >
        {/* Image carousel */}
        {['/profile-1.png', '/profile-suit.png', '/profile-2.png', '/profile-3.png'].map((src, i) => (
          <div
            key={src}
            className="absolute inset-0"
            style={{ opacity: currentIndex === i ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }}
          >
            <img src={src} alt={`Profile ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent" />

        {/* Top shine line */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        />

        {/* Carousel dot indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {[0, 1, 2, 3].map((i) => (
            <motion.button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="h-1.5 rounded-full transition-all duration-300 cursor-pointer"
              animate={{ width: currentIndex === i ? 24 : 8, backgroundColor: currentIndex === i ? '#22d3ee' : '#475569' }}
              transition={{ duration: 0.3 }}
              aria-label={`View profile ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating ambient particles */}
      <motion.div
        animate={{ y: [0, -12, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-6 -right-6 w-2 h-2 rounded-full bg-cyan-400/60"
      />
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-12 -left-4 w-1.5 h-1.5 rounded-full bg-pink-400/60"
      />
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 -left-8 w-2 h-2 rounded-full bg-indigo-400/50"
      />

      {/* Floating label badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute -bottom-4 -right-4 sm:right-auto sm:left-0 px-3 py-1.5 rounded-lg glass-card border border-cyan-500/30 shadow-lg shadow-cyan-500/10"
      >
        <div className="flex items-center gap-1.5">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-green-400"
          />
          <span className="text-xs font-medium text-slate-200">Available for work</span>
        </div>
      </motion.div>
    </div>
  );
}
