import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Layers, Zap, Shield, Sparkles, UtensilsCrossed } from 'lucide-react';
import ProjectDetailModal, { ProjectDetail } from './ProjectDetailModal';

const GITHUB_URL = 'https://github.com/MinhTrietDev03';
const LINKEDIN_URL = 'https://www.linkedin.com/in/le-minh-triet-76bb9a35b';
const FACEBOOK_URL = 'https://www.facebook.com/triet.leminh.942/';

const projects: ProjectDetail[] = [
  {
    id: 1,
    title: 'FastBite',
    tagline: 'Mobile food ordering & delivery app built with Flutter',
    description: 'A cross-platform food ordering mobile app built with Flutter & Dart, featuring multi-payment integration (PayPal, VNPay, MoMo), real-time order tracking, and a seamless user experience.',
    longDescription:
      'FastBite is a complete mobile food ordering and delivery application designed to bring restaurants closer to customers. Built with Flutter & Dart for a single codebase across iOS and Android, the app delivers a smooth, native-feel experience with rich animations and gesture-based navigation. The backend is powered by Firebase for real-time data, authentication, and cloud storage, while the checkout flow supports popular payment gateways (PayPal, VNPay, MoMo) to serve both local and international users. From browsing menus and customizing orders to tracking delivery in real time, FastBite covers the full customer journey.',
    image: '/projects/fastbite/1.png',
    tags: ['Flutter', 'Dart', 'Firebase', 'PayPal', 'VNPay', 'MoMo'],
    github: '#',
    live: '#',
    featured: true,
    icon: UtensilsCrossed,
    previewUrl: 'https://demo.example.com/fastbite',
    gallery: Array.from({ length: 26 }, (_, i) => `/projects/fastbite/${i + 1}.png`),
    features: [
      'Browse restaurants and menus with rich images and detailed descriptions',
      'Smart search with filters by cuisine, price, rating, and delivery time',
      'Customize orders with options, add-ons, special instructions, and quantity controls',
      'Real-time order tracking from preparation to delivery on an interactive map',
      'Multi-payment gateway support: PayPal, VNPay, and MoMo for local & international users',
      'User authentication and profile management powered by Firebase Auth',
      'Order history, reorder favorite meals in one tap, and push notifications for order updates',
      'Customer reviews, ratings, and in-app chat support for restaurant owners',
    ],
    techStack: [
      { name: 'Flutter', purpose: 'Cross-platform UI framework' },
      { name: 'Dart', purpose: 'Programming language' },
      { name: 'Firebase', purpose: 'Auth, Firestore, Cloud Messaging' },
      { name: 'PayPal', purpose: 'International payments' },
      { name: 'VNPay', purpose: 'Vietnamese online payments' },
      { name: 'MoMo', purpose: 'Mobile wallet payments' },
    ],
  },
  {
    id: 2,
    title: 'AI Chat Application',
    tagline: 'Real-time messaging powered by artificial intelligence',
    description: 'Real-time chat application with AI-powered responses, message threading, and end-to-end encryption.',
    longDescription:
      'A sophisticated real-time chat platform combining modern messaging features with AI-powered assistance. Leveraging WebSocket for instant communication and the OpenAI API for intelligent responses, it includes end-to-end encryption, message threading, and a beautiful, responsive UI.',
    image: 'https://images.pexels.com/photos/8386443/pexels-photo-8386443.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'OpenAI API', 'WebSocket', 'Redis'],
    github: '#',
    live: '#',
    featured: true,
    icon: Sparkles,
    previewUrl: 'https://demo.example.com/ai-chat',
    features: [
      'AI-powered smart replies',
      'End-to-end encryption',
      'Real-time message delivery',
      'Threaded conversations',
      'File & media sharing',
      'Typing indicators & read receipts',
    ],
    techStack: [
      { name: 'React', purpose: 'Frontend UI' },
      { name: 'OpenAI API', purpose: 'AI responses' },
      { name: 'WebSocket', purpose: 'Real-time comms' },
      { name: 'Redis', purpose: 'Caching & pub/sub' },
    ],
  },
  {
    id: 3,
    title: 'Project Management Tool',
    tagline: 'Collaborative workspace for modern teams',
    description: 'Collaborative project management tool with Kanban boards, time tracking, and team analytics.',
    longDescription:
      'A comprehensive project management platform that helps teams collaborate effectively. Features include drag-and-drop Kanban boards, time tracking with detailed reports, team analytics dashboards, and seamless integrations with popular developer tools.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Docker'],
    github: '#',
    live: '#',
    featured: true,
    icon: Layers,
    previewUrl: 'https://demo.example.com/pm-tool',
    features: [
      'Drag-and-drop Kanban boards',
      'Time tracking & reporting',
      'Team performance analytics',
      'Role-based access control',
      'Email & push notifications',
      'API integrations',
    ],
    techStack: [
      { name: 'Vue.js', purpose: 'Reactive UI' },
      { name: 'Node.js', purpose: 'Backend API' },
      { name: 'MongoDB', purpose: 'Document store' },
      { name: 'Docker', purpose: 'Containerization' },
    ],
  },
  {
    id: 4,
    title: 'Security Dashboard',
    tagline: 'Enterprise-grade threat monitoring and response',
    description: 'Enterprise security monitoring dashboard with real-time threat detection and incident response.',
    longDescription:
      'An enterprise security monitoring platform that provides real-time visibility into an organization\'s security posture. Built with D3.js for advanced data visualization and Python for backend analytics, it helps security teams detect and respond to threats quickly.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'D3.js', 'Python', 'AWS'],
    github: '#',
    live: '#',
    featured: false,
    icon: Shield,
    previewUrl: 'https://demo.example.com/security',
    features: [
      'Real-time threat detection',
      'Interactive security dashboards',
      'Automated incident response',
      'Compliance reporting',
      'Log aggregation & search',
      'Custom alert rules',
    ],
    techStack: [
      { name: 'React', purpose: 'Admin UI' },
      { name: 'D3.js', purpose: 'Data visualization' },
      { name: 'Python', purpose: 'Analytics engine' },
      { name: 'AWS', purpose: 'Cloud infrastructure' },
    ],
  },
  {
    id: 5,
    title: 'Social Media Analytics',
    tagline: 'Deep insights into your social presence',
    description: 'Comprehensive analytics platform for social media metrics with custom reporting and data visualization.',
    longDescription:
      'A powerful analytics platform that helps brands understand their social media performance. With custom reporting, beautiful data visualizations powered by Chart.js, and a GraphQL API for flexible data queries, it turns complex metrics into actionable insights.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'Chart.js', 'GraphQL', 'PostgreSQL'],
    github: '#',
    live: '#',
    featured: false,
    icon: Layers,
    previewUrl: 'https://demo.example.com/social-analytics',
    features: [
      'Multi-platform integration',
      'Custom report builder',
      'Engagement analytics',
      'Competitor benchmarking',
      'Scheduled report delivery',
      'Export to PDF/CSV',
    ],
    techStack: [
      { name: 'Next.js', purpose: 'Full-stack framework' },
      { name: 'Chart.js', purpose: 'Charts & graphs' },
      { name: 'GraphQL', purpose: 'Flexible API' },
      { name: 'PostgreSQL', purpose: 'Data warehouse' },
    ],
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    tagline: 'Modern property search with virtual tours',
    description: 'Property listing and management platform with virtual tours, mortgage calculator, and lead generation.',
    longDescription:
      'A modern real estate platform that transforms how people buy, sell, and rent properties. Featuring immersive Three.js virtual tours, a built-in mortgage calculator, advanced search filters, and integrated lead generation for agents and brokers.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Three.js', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
    featured: false,
    icon: Zap,
    previewUrl: 'https://demo.example.com/realestate',
    features: [
      'Immersive 3D virtual tours',
      'Advanced property search',
      'Mortgage calculator',
      'Lead capture & CRM',
      'Map-based browsing',
      'Saved favorites & alerts',
    ],
    techStack: [
      { name: 'React', purpose: 'User interface' },
      { name: 'Three.js', purpose: '3D virtual tours' },
      { name: 'Node.js', purpose: 'API server' },
      { name: 'MongoDB', purpose: 'Property data' },
    ],
  },
];

const categories = ['All', 'Featured', 'Web Apps', 'Mobile', 'Full Stack'];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : activeCategory === 'Featured'
    ? projects.filter(p => p.featured)
    : projects;

  const openProjectDetail = (project: ProjectDetail) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" ref={ref} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-sky-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'glass-card text-slate-400 hover:text-white hover:border-cyan-500/30'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => openProjectDetail(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProjectDetail(project);
                }
              }}
              className="group relative cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl glass-card hover:border-cyan-500/30 transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredProject === project.id ? 1.1 : 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center gap-3"
                  >
                    <motion.a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      className="p-3 rounded-full bg-slate-950/80 text-white hover:bg-cyan-500 transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      className="p-3 rounded-full bg-slate-950/80 text-white hover:bg-cyan-500 transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </motion.div>

                  <div className="absolute top-4 right-4">
                    <div className="p-2 rounded-lg glass-card">
                      <project.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-cyan-500/50 text-cyan-400 font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
          >
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      <ProjectDetailModal project={selectedProject} open={modalOpen} onClose={closeModal} />
    </section>
  );
}
