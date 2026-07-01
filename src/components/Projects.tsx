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
    description: 'A cross-platform food ordering mobile app built with Flutter & Dart, featuring multi-payment integration (PayPal, VNPay), real-time order tracking, and a seamless user experience.',
    longDescription:
      'FastBite is a complete mobile food ordering and delivery application designed to bring restaurants closer to customers. Built with Flutter & Dart for a single codebase across iOS and Android, the app delivers a smooth, native-feel experience with rich animations and gesture-based navigation. The backend is powered by Firebase for real-time data, authentication, and cloud storage, while the checkout flow supports popular payment gateways (PayPal, VNPay) to serve both local and international users. From browsing menus and customizing orders to tracking delivery in real time, FastBite covers the full customer journey.',
    image: '/projects/fastbite/1.png',
    tags: ['Flutter', 'Dart', 'Firebase', 'PayPal', 'VNPay'],
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
      'Multi-payment gateway support: PayPal and VNPay for local & international users',
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
    ],
  },
  {
    id: 2,
    title: 'TourRaveloGo',
    tagline: 'AI-powered tour booking website with smart search',
    description: 'A full-featured tour booking platform with AI chatbot, natural language search, and integrated VNPay payment gateway.',
    longDescription:
      'TourRaveloGo is a comprehensive tour booking website built with Spring Boot and MySQL, designed to help travelers discover and book tours effortlessly. It features AI-powered chatbot for instant customer assistance, natural language search powered by AI that helps users find tours through conversational queries, and a complete booking flow with VNPay online payment gateway integration. The platform supports full CRUD operations for tour management, blog posts, user accounts, and includes pagination for smooth browsing of large datasets.',
    image: '/projects/tourravelogo/1.png',
    tags: ['Spring Boot', 'MySQL', 'Docker', 'VNPay', 'AI'],
    github: 'https://github.com/MinhTrietDev03/SpringBootCapstone.git',
    live: '#',
    featured: true,
    icon: Sparkles,
    previewUrl: 'https://demo.example.com/tourravelogo',
    features: [
      'User authentication and authorization using Spring Security with JWT tokens',
      'Complete tour management — create, read, update, delete tours with rich media',
      'AI-powered chatbot providing instant customer support and FAQ responses',
      'Natural language AI search — users can describe tours in plain language to get personalized recommendations',
      'VNPay payment gateway integration with callback processing to sync order status after successful payment',
      'Booking management with order tracking and payment confirmation',
      'Blog system for travel articles and destination guides',
      'Pagination, filtering, and sorting for tour and blog listings',
      'Deployed with Docker for consistent environments across development and production',
    ],
    techStack: [
      { name: 'Spring Boot', purpose: 'Backend framework & REST APIs' },
      { name: 'MySQL', purpose: 'Relational database' },
      { name: 'Docker', purpose: 'Containerization & deployment' },
      { name: 'VNPay', purpose: 'Online payment gateway' },
      { name: 'Spring Security + JWT', purpose: 'Authentication & authorization' },
      { name: 'AI / NLP', purpose: 'Chatbot & natural language search' },
    ],
  },
  {
    id: 3,
    title: 'Employee Management System',
    tagline: 'Enterprise employee management built with Java & JSP',
    description: 'A comprehensive employee management system with full CRUD operations, role-based access control, and responsive Bootstrap interfaces.',
    longDescription:
      'Employee Management System (CMR08) is a robust enterprise application designed to streamline HR operations within organizations. Built with Java, JSP, Servlet, and JDBC connected to a MySQL database, the system provides complete CRUD modules for employee data management, secure authentication, and granular role-based access control. The frontend is built with responsive JSP pages styled using Bootstrap, providing a clean and accessible interface across devices.',
    image: '/projects/ems/1.png',
    tags: ['Java', 'JSP', 'Servlet', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/MinhTrietDev03/CMR08.git',
    live: '#',
    featured: true,
    icon: Layers,
    previewUrl: 'https://demo.example.com/employee-management',
    gallery: Array.from({ length: 7 }, (_, i) => `/projects/ems/${i + 1}.png`),
    features: [
      'Full CRUD operations for employee records — create, read, update, and delete',
      'Secure user authentication with login, logout, and session management',
      'Role-based access control (RBAC) — Admin, Manager, and Employee roles',
      'Responsive Bootstrap-based UI for desktop and mobile browsers',
      'Business logic layer implemented in Java Servlets with clean separation of concerns',
      'Database connectivity via JDBC with parameterized queries to prevent SQL injection',
      'Search, filter, and paginate employee lists for large datasets',
      'Department and position management modules',
    ],
    techStack: [
      { name: 'Java', purpose: 'Backend logic & Servlet' },
      { name: 'JSP', purpose: 'Server-side rendering' },
      { name: 'Servlet', purpose: 'Request handling' },
      { name: 'JDBC', purpose: 'Database connectivity' },
      { name: 'MySQL', purpose: 'Relational database' },
      { name: 'Bootstrap', purpose: 'Responsive UI design' },
    ],
  },
];

const categories = ['All', 'Featured', 'Web App', 'Mobile'];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProjects = (() => {
    if (activeCategory === 'All') return projects;
    if (activeCategory === 'Featured') return projects.filter(p => p.featured);
    if (activeCategory === 'Mobile') return projects.filter(p => p.tags.some(t => /flutter|dart/i.test(t)));
    if (activeCategory === 'Web App') return projects.filter(p => !p.tags.some(t => /flutter|dart/i.test(t)));
    return projects;
  })();

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
