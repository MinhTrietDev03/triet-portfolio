import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Facebook, MapPin, Mail, ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-12"
    >
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs sm:text-sm text-cyan-300 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for new opportunities</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-cyan-400 font-mono text-sm sm:text-base mb-3 tracking-wide">
                Hi there 👋, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight mb-4 leading-[1.05] whitespace-nowrap">
                <span className="gradient-text">Le Minh Triet</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3 mb-10"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-200 font-semibold tracking-tight">
                <span className="text-cyan-400 font-mono">{'</>'}</span>{' '}
                <span>Software Engineer</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <button
                onClick={() => handleScroll('projects')}
                className="btn-primary"
              >
                <Sparkles className="w-4 h-4" />
                View My Work
              </button>
              <button
                onClick={() => handleScroll('contact')}
                className="btn-outline"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-3 mb-6"
            >
              {[
                { icon: Github, href: 'https://github.com/MinhTrietDev03', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/le-minh-triet-76bb9a35b', label: 'LinkedIn' },
                { icon: Facebook, href: 'https://www.facebook.com/triet.leminh.942/', label: 'Facebook' },
                { icon: Mail, href: 'mailto:minhtriet03.dev@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="group p-3 rounded-full glass-card text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-2 text-sm text-slate-500"
            >
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Ho Chi Minh City, Vietnam</span>
            </motion.div>
          </div>

          {/* Right: Profile image with creative layout */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <ProfileCard isInView={isInView} />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => handleScroll('about')}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1, y: [0, 8, 0] } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 1.2, repeat: Infinity, repeatType: 'loop' }}
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}

function ProfileCard({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-xs sm:max-w-sm"
    >
      {/* Background glow blobs */}
      <div className="absolute -top-12 -right-12 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

      {/* Decorative ring */}
      <div className="absolute inset-4 rounded-3xl border-2 border-dashed border-cyan-500/20 animate-spin-slow" />
      <div className="absolute inset-8 rounded-3xl border border-indigo-500/15 animate-spin-reverse" />

      {/* Profile card */}
      <div className="relative rounded-3xl overflow-hidden glass-card p-2 group">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          <img
            src="/profile.png"
            alt="Le Minh Triet"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}
