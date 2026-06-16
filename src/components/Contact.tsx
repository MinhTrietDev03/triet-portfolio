import { motion, useInView } from 'framer-motion';
import { useRef, useState, FormEvent } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Facebook, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;
const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const RECIPIENT_EMAIL = 'minhtriet03.dev@gmail.com';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    if (!isEmailJsConfigured) {
      await new Promise((r) => setTimeout(r, 1200));
      console.log('Demo mode — message:', form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID!,
        TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject || 'New message from portfolio',
          message: form.message,
          to_email: RECIPIENT_EMAIL,
        },
        { publicKey: PUBLIC_KEY! }
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Failed to send. Please try again or email me directly.');
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project or want to chat? Drop me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Mail, label: 'Email', value: RECIPIENT_EMAIL, href: `mailto:${RECIPIENT_EMAIL}` },
              { icon: Phone, label: 'Phone', value: '+84 65 839 654', href: 'tel:+8465839654' },
              { icon: MapPin, label: 'Location', value: 'Ho Chi Minh City, Vietnam', href: null },
            ].map((c) => {
              const Wrapper = c.href ? 'a' : 'div';
              return (
                <Wrapper
                  key={c.label}
                  href={c.href ?? undefined}
                  className="flex items-start gap-4 p-5 rounded-2xl glass-card hover:border-cyan-500/30 transition-all"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                    <c.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">{c.label}</p>
                    <p className="text-white font-medium text-sm">{c.value}</p>
                  </div>
                </Wrapper>
              );
            })}

            <div className="flex gap-3 pt-2">
              {[
                { icon: Github, href: 'https://github.com/MinhTrietDev03', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/le-minh-triet-76bb9a35b', label: 'LinkedIn' },
                { icon: Facebook, href: 'https://www.facebook.com/triet.leminh.942/', label: 'Facebook' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl glass-card text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 p-6 sm:p-8 rounded-2xl glass-card space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 text-white placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 text-white placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={onChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 text-white placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">Message *</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 text-white placeholder-slate-500 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm">
                <AlertCircle className="w-4 h-4" />
                {errorMsg}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
            >
              {status === 'sending' ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>

            <p className="text-xs text-slate-500 text-center">
              {isEmailJsConfigured
                ? 'Messages are sent directly to my inbox.'
                : 'Demo mode — fill in your EmailJS keys in .env to send real emails.'}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
