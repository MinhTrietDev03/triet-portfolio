import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { X, ExternalLink, Github, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export interface ProjectDetail {
  id: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  icon: React.ComponentType<{ className?: string }>;
  longDescription: string;
  features: string[];
  techStack: { name: string; purpose: string }[];
  previewUrl: string;
  gallery?: string[];
}

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  open: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, open, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      window.addEventListener('keydown', handleKey);
    }
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl glass-card border border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
          >
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/40 border border-slate-700 backdrop-blur-sm transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto max-h-[92vh] custom-scrollbar">
              <div className="relative h-56 sm:h-72 lg:h-80 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl glass-card">
                      <project.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm">
                      {project.tags[0]}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-slate-300 text-base sm:text-lg">
                    {project.tagline}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500" />
                    Overview
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500" />
                    Key Features
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 p-3 rounded-xl glass-card border border-slate-700/50">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500" />
                    Technology Stack
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.techStack.map((tech) => (
                      <div key={tech.name} className="flex items-center justify-between gap-3 p-3 rounded-xl glass-card border border-slate-700/50">
                        <span className="text-white font-semibold">{tech.name}</span>
                        <span className="text-slate-400 text-sm text-right">{tech.purpose}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {project.gallery && project.gallery.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500" />
                      Screenshots
                      <span className="ml-auto text-xs font-normal text-slate-400">
                        {project.gallery.length} photos
                      </span>
                    </h3>
                    <ImageGallery images={project.gallery} title={project.title} />
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-sky-500" />
                    Live Preview
                  </h3>
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900/50">
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900/80 border-b border-slate-700/50">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                      </div>
                      <div className="flex-1 mx-4 px-3 py-1 rounded-md bg-slate-800/80 text-slate-400 text-xs font-mono truncate">
                        {project.previewUrl}
                      </div>
                    </div>
                    <div className="aspect-video w-full bg-slate-950 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-sky-600/20 border border-cyan-500/30 flex items-center justify-center">
                          <ExternalLink className="w-8 h-8 text-cyan-400" />
                        </div>
                        <p className="text-slate-300 font-semibold mb-1">
                          {project.title} — Interactive Preview
                        </p>
                        <p className="text-slate-500 text-sm">
                          Click the button below to open the live demo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-600 text-slate-300 font-semibold hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    View Source
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ImageGallery({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goPrev, goNext]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900/50">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900/80 border-b border-slate-700/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 mx-4 px-3 py-1 rounded-md bg-slate-800/80 text-slate-400 text-xs font-mono truncate">
          {title} — Screenshot {index + 1}/{images.length}
        </div>
      </div>

      <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: 'easeOut' }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_e, info) => {
              if (info.offset.x > 60) goPrev();
              else if (info.offset.x < -60) goNext();
            }}
            className="absolute inset-0 w-full h-full object-contain cursor-grab active:cursor-grabbing select-none"
          />
        </AnimatePresence>

        <button
          onClick={goPrev}
          aria-label="Previous screenshot"
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-slate-900/80 backdrop-blur-sm text-white border border-slate-700/50 hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all z-10"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={goNext}
          aria-label="Next screenshot"
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-slate-900/80 backdrop-blur-sm text-white border border-slate-700/50 hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all z-10"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-xs font-mono text-slate-200 border border-slate-700/50 z-10">
          {index + 1} / {images.length}
        </div>
      </div>

      <div className="flex gap-1.5 p-2.5 overflow-x-auto bg-slate-900/80 border-t border-slate-700/50 custom-scrollbar">
        {images.map((img, i) => (
          <button
            key={img}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`relative shrink-0 w-16 h-10 sm:w-20 sm:h-12 rounded-md overflow-hidden border-2 transition-all ${
              i === index
                ? 'border-cyan-400 shadow-md shadow-cyan-500/30'
                : 'border-slate-700/50 hover:border-cyan-500/50 opacity-70 hover:opacity-100'
            }`}
            aria-label={`Go to screenshot ${i + 1}`}
          >
            <img src={img} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
