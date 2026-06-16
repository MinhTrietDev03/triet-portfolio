import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Award, X, ChevronLeft, ChevronRight, Calendar, Building2 } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: 'Java Backend Excellence',
    issuer: 'Cybersoft',
    date: '01/2026',
    image: '/certificates/cybersoft-java-backend.png',
    description: 'Comprehensive backend development program covering Java, Spring Boot, REST APIs, and modern software engineering practices.',
    skills: ['Java', 'Spring Boot', 'REST APIs', 'Microservices'],
  },
  {
    id: 2,
    title: 'Personal Programming Project',
    issuer: 'HUTECH',
    date: '05/2022',
    image: '/certificates/java-oop.jpg',
    description: 'A self-driven personal programming project focused on building a complete application — covering problem analysis, coding, debugging, and documentation through hands-on practice.',
    skills: ['Java', 'OOP', 'Design Patterns'],
  },
  {
    id: 3,
    title: 'Workshop on "Software Testing and QA" — DXC Technology',
    issuer: 'DXC Technology',
    date: '12/03/2025',
    image: '/certificates/mobile-programming.jpg',
    description: 'Workshop on "Software Testing and QA" hosted by DXC Technology — covering software testing fundamentals, quality assurance processes, test case design, defect lifecycle, and enterprise testing best practices delivered by DXC Technology engineers.',
    skills: ['Software Testing', 'QA', 'Test Cases', 'Defect Tracking'],
  },
  {
    id: 4,
    title: 'Workshop on Using AI Tools in Programming',
    issuer: 'HUTECH',
    date: '22/02/2025',
    image: '/certificates/project-management.jpg',
    description: 'Workshop on using AI tools in programming — exploring modern AI-powered development tools (such as Cursor, GitHub Copilot, and ChatGPT) to boost productivity, generate code, refactor, debug, and accelerate the software development workflow.',
    skills: ['AI Tools', 'Cursor', 'GitHub Copilot', 'Productivity'],
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const next = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % certificates.length));
  const prev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + certificates.length) % certificates.length));

  useEffect(() => {
    if (lightboxIndex === null) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <section id="certificates" ref={ref} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            Achievements
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Certificates</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.button
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="group text-left rounded-2xl glass-card overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm text-xs font-mono text-slate-200 border border-slate-700/50">
                  {cert.date}
                </div>
                <div className="absolute top-3 left-3 p-2 rounded-lg bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30">
                  <Award className="w-4 h-4 text-cyan-300" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{cert.issuer}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 text-slate-300 hover:text-white border border-slate-700 z-20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white border border-slate-700 hover:bg-cyan-500/30 z-20"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white border border-slate-700 hover:bg-cyan-500/30 z-20"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[90vh] rounded-2xl glass-card border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid lg:grid-cols-2 max-h-[90vh]">
              <div className="relative bg-slate-950 flex items-center justify-center p-6 min-h-[300px]">
                <img
                  src={certificates[lightboxIndex].image}
                  alt={certificates[lightboxIndex].title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">Certificate</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {certificates[lightboxIndex].title}
                </h2>
                <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    {certificates[lightboxIndex].issuer}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {certificates[lightboxIndex].date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
