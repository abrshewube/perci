import { Code2, ExternalLink, Github, Star, Users, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'voting-system',
    title: 'Voting System for Remote Elections',
    description: 'Secure OTP-based voting platform using Spring MVC for routing, Hibernate for persistence, and JSP for dynamic UI. Enhanced election transparency through one-time password authentication and real-time vote tracking.',
    technologies: ['Java', 'JavaScript', 'Spring MVC', 'Hibernate', 'JSP', 'Bootstrap', 'MySQL'],
    highlights: [
      'Integrated real-time dashboards and candidate registration workflows',
      'Validated security through JMeter load testing with 1000+ concurrent users',
      'Implemented OTP authentication for secure voting with 99.9% success rate',
      'Designed responsive UI supporting mobile and desktop platforms',
    ],
    date: 'Jan 2025',
    color: 'primary',
    github: 'https://github.com/PerciErmiasWolday',
<<<<<<< HEAD
    impact: 'Large-scale voting platform',
=======
    impact: '1000+ votes processed',
>>>>>>> 66049c950eab7b50658c8ec6b9b580182e2ab4df
  },
  {
    id: 'library-management',
    title: 'Library Management System',
    description: 'Full-featured library management platform with optimized database queries using indexing and multithreading for faster response times during high-traffic periods. Supports book tracking, user management, and automated notifications.',
    technologies: ['Java', 'Spring MVC', 'MySQL', 'Apache Maven', 'REST API'],
    highlights: [
      'Built real-time due date notifications and item tracking system',
      'Optimized database queries with indexing reducing query time by 65%',
      'Implemented multithreading for concurrent request handling',
      'Reduced overdue errors by 40% through automated reminder system',
    ],
    date: 'Nov 2024',
    color: 'accent',
    github: 'https://github.com/PerciErmiasWolday',
<<<<<<< HEAD
    impact: 'Comprehensive library system',
=======
    impact: '500+ books managed',
>>>>>>> 66049c950eab7b50658c8ec6b9b580182e2ab4df
  },
  {
    id: 'ai-motion-planning',
    title: 'AI Motion Planning Framework',
    description: 'Research project combining Kalman-based trajectory prediction and Model Predictive Control algorithms to enable adaptive, human-aware robots. Focuses on social compliance and trust in autonomous systems.',
    technologies: ['Python', 'NumPy', 'Control Theory', 'Machine Learning', 'ROS'],
    highlights: [
      '28% reduction in acceleration variance for smoother robot movements',
      '93% path efficiency maintained across diverse scenarios',
      'Enhanced social compliance in human-shared spaces',
      'Developed simulation environment for testing navigation algorithms',
    ],
    date: 'May 2025',
    color: 'primary',
    github: 'https://github.com/PerciErmiasWolday',
<<<<<<< HEAD
    impact: 'Advanced robotics research',
=======
    impact: '100+ test scenarios',
>>>>>>> 66049c950eab7b50658c8ec6b9b580182e2ab4df
  },
  {
    id: 'chat-application',
    title: 'Real-Time Chat Application',
    description: 'Full-stack chat application with WebSocket support for real-time messaging. Features include user authentication, group chats, file sharing, and message encryption for secure communication.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Tailwind CSS'],
    highlights: [
      'Real-time messaging with WebSocket connections',
      'End-to-end message encryption for security',
      'Support for group chats and direct messaging',
      'File sharing with drag-and-drop interface',
    ],
    date: 'Sep 2024',
    color: 'accent',
    github: 'https://github.com/PerciErmiasWolday',
<<<<<<< HEAD
    impact: 'Real-time messaging platform',
=======
    impact: '50+ active users',
>>>>>>> 66049c950eab7b50658c8ec6b9b580182e2ab4df
  },
  {
    id: 'ml-fairness-analyzer',
    title: 'ML Fairness Analyzer',
    description: 'Tool for analyzing machine learning models for bias and fairness across protected attributes. Calculates multiple fairness metrics and provides visualizations for model auditing and compliance.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Flask'],
    highlights: [
      'Implemented 10+ fairness metrics including demographic parity',
      'Analyzed models across 5+ real-world datasets',
      'Generated comprehensive bias reports with visualizations',
      'Created interactive dashboard for metric exploration',
    ],
    date: 'Jul 2025',
    color: 'primary',
    github: 'https://github.com/PerciErmiasWolday',
<<<<<<< HEAD
    impact: 'ML bias analysis tool',
=======
    impact: '5+ datasets analyzed',
>>>>>>> 66049c950eab7b50658c8ec6b9b580182e2ab4df
  },
  {
    id: 'portfolio-optimizer',
    title: 'Portfolio Optimization Tool',
    description: 'Financial portfolio optimization application using modern portfolio theory. Implements efficient frontier calculation, risk-return analysis, and Monte Carlo simulation for investment strategy testing.',
    technologies: ['Python', 'NumPy', 'Pandas', 'Plotly', 'Streamlit'],
    highlights: [
      'Implemented efficient frontier algorithm for optimal portfolios',
      'Monte Carlo simulation with 10,000+ iterations',
      'Risk-return visualization with interactive charts',
      'Sharpe ratio and volatility analysis',
    ],
    date: 'Mar 2024',
    color: 'accent',
    github: 'https://github.com/PerciErmiasWolday',
<<<<<<< HEAD
    impact: 'Financial optimization platform',
=======
    impact: '100+ simulations run',
>>>>>>> 66049c950eab7b50658c8ec6b9b580182e2ab4df
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="pt-28 pb-16 px-6 relative overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl opacity-8 animate-float" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl opacity-8 animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary rounded-full blur-3xl opacity-5 animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Floating Particles */}
      <div className="absolute top-32 right-32 w-1 h-1 bg-primary rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-64 left-32 w-1.5 h-1.5 bg-accent rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-primary rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Link to={`/projects/${project.id}`} className="block h-full group">
                <div className={`group bg-theme rounded-2xl border-2 ${
                  hoveredIndex === index ? `border-${project.color}` : 'border-theme'
                } overflow-hidden transition-all duration-500 h-full flex flex-col shadow-xl hover:shadow-2xl hover:shadow-${project.color}/30 cursor-pointer transform hover:scale-105 hover:-translate-y-2`}>
                <div className={`h-2 bg-gradient-to-r from-${project.color} to-accent`} />

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 bg-${project.color} bg-opacity-20 rounded-lg`}
                    >
                      <Code2 className={`w-6 h-6 text-${project.color}`} />
                    </motion.div>
                    <div className="flex gap-2">
                      <span className="text-theme-muted text-sm font-bold">{project.date}</span>
                    </div>
                  </div>

                  <h3 className={`text-2xl font-black mb-3 text-theme group-hover:text-${project.color} transition-colors`}>
                    {project.title}
                  </h3>

                  <p className="text-theme-muted mb-4 leading-relaxed flex-1 font-bold">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-black text-theme-muted mb-3 flex items-center gap-2">
                      <Star className={`w-4 h-4 text-${project.color}`} />
                      Key Highlights:
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-theme-muted font-bold">
                          <Zap className={`w-3 h-3 text-${project.color} mt-1 flex-shrink-0`} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-theme-light text-accent text-xs rounded-full border border-theme hover:border-accent transition-colors font-bold"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-theme">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-sm text-theme-muted font-bold">
                        <Users className="w-4 h-4" />
                        <span>{project.impact}</span>
                      </div>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`flex items-center gap-2 px-3 py-1 bg-${project.color} bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all text-${project.color}`}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-xs font-black">Code</span>
                      </motion.a>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-${project.color} to-accent rounded-lg text-white font-black text-sm group`}
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/PerciErmiasWolday"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary via-accent to-primary rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 font-black text-lg group"
          >
            <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>View More on GitHub</span>
            <ExternalLink className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
