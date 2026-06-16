import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Backend Developer (Intern)',
    company: 'CYCBERSOFT',
    period: '2025',
    location: 'Ho Chi Minh City, Vietnam',
    description:
      'Built RESTful APIs with Spring Boot, designed database schemas, and collaborated with frontend teams to deliver full-stack features.',
    highlights: [
      'Implemented 15+ REST endpoints with proper authentication',
      'Wrote unit and integration tests with JUnit / Mockito',
      'Deployed services on AWS EC2 with Docker',
    ],
    tech: ['Java', 'Spring Boot', 'MySQL', 'Docker', 'AWS'],
  },
  {
    id: 2,
    role: 'Odoo Developer',
    company: 'TECH4 SOFTWARE',
    period: '03/2025 — 07/2025',
    location: 'Ho Chi Minh City, Vietnam',
    description:
      'Design and develop custom Odoo modules for enterprise clients. Build REST APIs, integrate third-party services, and optimize ERP performance for business workflows.',
    highlights: [
      'Developed 10+ custom Odoo modules for sales, inventory, and HR',
      'Integrated payment gateways (VNPay, MoMo) into e-commerce modules',
      'Optimized database queries, reducing report generation time by 40%',
    ],
    tech: ['Python', 'Odoo Framework', 'PostgreSQL', 'JavaScript', 'XML'],
  },
  {
    id: 3,
    role: 'Freelance Backend Developer',
    company: 'Self-Employed',
    period: '01/2026 — Present',
    location: 'Remote',
    description:
      'Delivered backend solutions for small businesses and startups. Built RESTful APIs, integrated third-party services, and maintained production systems.',
    highlights: [
      'Developed FastBite — a cross-platform food ordering app with Flutter & Firebase',
      'Designed and deployed REST APIs using Java Spring Boot',
      'Integrated payment gateways and authentication services for client projects',
    ],
    tech: ['Java', 'Spring Boot', 'Flutter', 'Firebase', 'PostgreSQL'],
  },
];

export default function WorkExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="work" ref={ref} className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            Career
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            My professional journey so far
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/30 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative mb-12 sm:flex sm:items-start ${index % 2 === 0 ? '' : 'sm:flex-row-reverse'}`}
            >
              <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-6 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50 ring-4 ring-slate-950 z-10" />

              <div className={`pl-12 sm:pl-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'}`}>
                <div className="p-6 rounded-2xl glass-card hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  </div>
                  <p className="text-cyan-300 font-semibold mb-3">{exp.company}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-4">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h) => (
                      <li key={h} className="text-sm text-slate-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
