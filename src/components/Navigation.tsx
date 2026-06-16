import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Sparkles } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
];

const contactId = 'contact';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = navItems.map((n) => (n.id === 'experience' ? 'work' : n.id));
      const all = [...sectionIds, contactId];
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current = 'hero';
      for (const id of all) {
        const sec = document.getElementById(id);
        if (sec && sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
          current = id === 'work' ? 'experience' : id;
          break;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    const target = id === 'experience' ? 'work' : id;
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick('hero')}
          className="flex items-center gap-2.5 group"
          aria-label="Go to top"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <span className="text-sm font-mono tracking-tight">&lt;/&gt;</span>
            </div>
          </div>
          <div className="hidden sm:flex flex-col items-start leading-tight">
            <span className="font-bold text-white text-sm">Le Minh Triet</span>
            <span className="text-[10px] text-cyan-400 uppercase tracking-wider">Software Engineer</span>
          </div>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-cyan-300'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/30 shadow-md shadow-cyan-500/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <motion.button
            onClick={() => handleClick(contactId)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-sky-600 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Mail className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Contact</span>
            <Sparkles className="w-3.5 h-3.5 relative z-10 text-cyan-100 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
            </span>
          </motion.button>

          <button
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-cyan-500/20 bg-slate-950/95 backdrop-blur-xl"
          >
            <ul className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.id)}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleClick(contactId)}
                  className="w-full flex items-center justify-center gap-2 mt-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-sky-600 shadow-lg shadow-cyan-500/30"
                >
                  <Mail className="w-4 h-4" />
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
