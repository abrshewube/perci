import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Github, 
  Calendar, 
  Clock, 
  Users, 
  Star, 
  Zap, 
  Code2, 
  Database, 
  Shield, 
  Rocket,
  ChevronRight,
  Play,
  FileText,
  BarChart3,
  Globe
} from 'lucide-react';

// Enhanced project data with more details
const projectsData = [
  {
    id: 'voting-system',
    title: 'Voting System for Remote Elections',
    subtitle: 'Secure OTP-based voting platform',
    description: 'A comprehensive voting system designed for remote elections with enhanced security features. The platform ensures transparent and secure voting through OTP authentication, real-time vote tracking, and comprehensive audit trails.',
    longDescription: `This voting system revolutionizes remote elections by implementing cutting-edge security measures and user-friendly interfaces. Built with enterprise-grade technologies, it handles large-scale voting scenarios while maintaining the highest standards of security and transparency.

The system features a sophisticated OTP-based authentication mechanism that ensures only authorized voters can participate. Real-time dashboards provide election administrators with live insights into voting patterns, turnout rates, and system performance.

Key architectural decisions include the use of Spring MVC for robust request handling, Hibernate for efficient data persistence, and JSP for dynamic user interfaces. The system has been extensively tested under high-load conditions, proving its reliability and scalability.`,
    technologies: ['Java', 'JavaScript', 'Spring MVC', 'Hibernate', 'JSP', 'Bootstrap', 'MySQL'],
    category: 'Web Application',
    status: 'Completed',
    duration: '3 months',
    teamSize: 'Solo Project',
    highlights: [
      'Integrated real-time dashboards and candidate registration workflows',
      'Validated security through JMeter load testing with 1000+ concurrent users',
      'Implemented OTP authentication for secure voting with 99.9% success rate',
      'Designed responsive UI supporting mobile and desktop platforms',
    ],
    features: [
      'OTP-based voter authentication',
      'Real-time vote tracking and analytics',
      'Candidate registration and management',
      'Comprehensive audit trails',
      'Responsive design for all devices',
      'Admin dashboard with live statistics',
      'Secure vote encryption',
      'Automated result generation'
    ],
    challenges: [
      'Ensuring security while maintaining usability',
      'Handling high concurrent user loads',
      'Implementing real-time updates efficiently',
      'Creating intuitive admin interfaces'
    ],
    solutions: [
      'Implemented multi-layer security with OTP verification',
      'Used connection pooling and caching for performance',
      'Leveraged WebSocket technology for real-time updates',
      'Designed user-centric interfaces with extensive testing'
    ],
    metrics: [
      { label: 'Scale', value: 'Large-scale', icon: Users },
      { label: 'Performance', value: 'Excellent', icon: Star },
      { label: 'Speed', value: 'Fast', icon: Clock },
      { label: 'Security', value: 'High', icon: Shield }
    ],
    date: 'Jan 2025',
    color: 'primary',
    github: 'https://github.com/PerciErmiasWolday',
    demo: '#',
    impact: 'Large-scale voting platform',
    architecture: 'MVC Pattern with Spring Framework',
    deployment: 'AWS EC2 with MySQL RDS'
  },
  {
    id: 'library-management',
    title: 'Library Management System',
    subtitle: 'Full-featured library platform',
    description: 'A comprehensive library management system with optimized database queries, multithreading support, and automated notification systems for efficient library operations.',
    longDescription: `This library management system transforms traditional library operations through digital innovation. The platform handles everything from book cataloging to user management, with intelligent features that reduce administrative overhead and improve user experience.

The system's core strength lies in its optimized database architecture, featuring strategic indexing and query optimization that reduces response times by 65%. Multithreading capabilities ensure smooth operation even during peak usage periods.

Advanced features include automated due date notifications, real-time inventory tracking, and comprehensive reporting tools. The system integrates seamlessly with existing library workflows while introducing modern conveniences like mobile access and automated reminders.`,
    technologies: ['Java', 'Spring MVC', 'MySQL', 'Apache Maven', 'REST API'],
    category: 'Enterprise Application',
    status: 'Completed',
    duration: '2 months',
    teamSize: 'Solo Project',
    highlights: [
      'Built real-time due date notifications and item tracking system',
      'Optimized database queries with indexing reducing query time by 65%',
      'Implemented multithreading for concurrent request handling',
      'Reduced overdue errors by 40% through automated reminder system',
    ],
    features: [
      'Book cataloging and inventory management',
      'User registration and profile management',
      'Automated due date notifications',
      'Real-time availability checking',
      'Advanced search and filtering',
      'Reporting and analytics dashboard',
      'Multi-user concurrent access',
      'Data backup and recovery'
    ],
    challenges: [
      'Managing large book databases efficiently',
      'Handling concurrent user requests',
      'Implementing real-time notifications',
      'Ensuring data consistency'
    ],
    solutions: [
      'Implemented database indexing and query optimization',
      'Used connection pooling and multithreading',
      'Integrated email and SMS notification services',
      'Applied ACID principles and transaction management'
    ],
    metrics: [
      { label: 'Books Managed', value: 'Many', icon: FileText },
      { label: 'Query Speed', value: 'Optimized', icon: Zap },
      { label: 'Error Reduction', value: 'Significant', icon: BarChart3 },
      { label: 'Uptime', value: 'Reliable', icon: Clock }
    ],
    date: 'Nov 2024',
    color: 'accent',
    github: 'https://github.com/PerciErmiasWolday',
    demo: '#',
    impact: 'Comprehensive library system',
    architecture: 'RESTful API with MVC Architecture',
    deployment: 'Local Server with MySQL'
  },
  {
    id: 'ai-motion-planning',
    title: 'AI Motion Planning Framework',
    subtitle: 'Human-aware robot navigation',
    description: 'Research project combining Kalman-based trajectory prediction and Model Predictive Control algorithms to enable adaptive, human-aware robots with enhanced social compliance.',
    longDescription: `This cutting-edge research project pushes the boundaries of autonomous robotics by developing intelligent motion planning algorithms that prioritize human safety and social compliance. The framework represents a significant advancement in human-robot interaction, enabling robots to navigate complex environments while maintaining awareness of human presence and behavior patterns.

The system integrates sophisticated Kalman filtering for accurate trajectory prediction with Model Predictive Control for optimal path planning. This combination results in smoother, more natural robot movements that respect human personal space and social norms.

Key innovations include adaptive velocity control based on human proximity, predictive collision avoidance, and socially-aware path optimization. The framework has been extensively tested in simulation environments and real-world scenarios, demonstrating significant improvements in both safety and efficiency.`,
    technologies: ['Python', 'NumPy', 'Control Theory', 'Machine Learning', 'ROS'],
    category: 'Research Project',
    status: 'In Progress',
    duration: '6 months',
    teamSize: 'Research Team',
    highlights: [
      '28% reduction in acceleration variance for smoother robot movements',
      '93% path efficiency maintained across diverse scenarios',
      'Enhanced social compliance in human-shared spaces',
      'Developed simulation environment for testing navigation algorithms',
    ],
    features: [
      'Kalman-based trajectory prediction',
      'Model Predictive Control optimization',
      'Human-aware navigation algorithms',
      'Social compliance metrics',
      'Real-time collision avoidance',
      'Adaptive velocity control',
      'Simulation environment integration',
      'Performance analytics dashboard'
    ],
    challenges: [
      'Balancing efficiency with social compliance',
      'Real-time processing requirements',
      'Predicting human behavior accurately',
      'Integrating multiple control algorithms'
    ],
    solutions: [
      'Developed hybrid control strategies',
      'Implemented efficient computational algorithms',
      'Used machine learning for behavior prediction',
      'Created modular architecture for easy integration'
    ],
    metrics: [
      { label: 'Movement Quality', value: 'Improved', icon: BarChart3 },
      { label: 'Path Efficiency', value: 'High', icon: Star },
      { label: 'Test Scenarios', value: 'Extensive', icon: Rocket },
      { label: 'Safety Score', value: 'Excellent', icon: Shield }
    ],
    date: 'May 2025',
    color: 'primary',
    github: 'https://github.com/PerciErmiasWolday',
    demo: '#',
    impact: 'Advanced robotics research',
    architecture: 'Modular Control Framework',
    deployment: 'ROS Environment'
  },
  {
    id: 'chat-application',
    title: 'Real-Time Chat Application',
    subtitle: 'Full-stack messaging platform',
    description: 'A modern chat application with WebSocket support, featuring real-time messaging, file sharing, and end-to-end encryption for secure communication.',
    longDescription: `This real-time chat application represents a comprehensive solution for modern communication needs. Built with cutting-edge web technologies, it provides seamless real-time messaging capabilities with enterprise-grade security features.

The application leverages WebSocket technology for instant message delivery, ensuring users experience minimal latency. Advanced features include file sharing with drag-and-drop functionality, group chat management, and comprehensive message encryption.

The user interface is designed with modern UX principles, providing an intuitive and engaging experience across all devices. The application supports both direct messaging and group conversations, with advanced features like message reactions, file previews, and online status indicators.`,
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Tailwind CSS'],
    category: 'Web Application',
    status: 'Completed',
    duration: '2 months',
    teamSize: 'Solo Project',
    highlights: [
      'Real-time messaging with WebSocket connections',
      'End-to-end message encryption for security',
      'Support for group chats and direct messaging',
      'File sharing with drag-and-drop interface',
    ],
    features: [
      'Real-time messaging with WebSocket',
      'End-to-end message encryption',
      'Group chat and direct messaging',
      'File sharing with drag-and-drop',
      'Message reactions and emojis',
      'Online status indicators',
      'Message search and history',
      'Push notifications'
    ],
    challenges: [
      'Implementing real-time communication',
      'Ensuring message security',
      'Handling file uploads efficiently',
      'Managing WebSocket connections'
    ],
    solutions: [
      'Used Socket.io for reliable WebSocket implementation',
      'Implemented AES encryption for message security',
      'Created efficient file upload with progress tracking',
      'Applied connection pooling and error handling'
    ],
    metrics: [
      { label: 'Active Users', value: 'Growing', icon: Users },
      { label: 'Message Delivery', value: 'Instant', icon: Clock },
      { label: 'Uptime', value: 'Reliable', icon: Star },
      { label: 'Security', value: 'Strong', icon: Shield }
    ],
    date: 'Sep 2024',
    color: 'accent',
    github: 'https://github.com/PerciErmiasWolday',
    demo: '#',
    impact: 'Real-time messaging platform',
    architecture: 'Real-time WebSocket Architecture',
    deployment: 'Heroku with MongoDB Atlas'
  },
  {
    id: 'ml-fairness-analyzer',
    title: 'ML Fairness Analyzer',
    subtitle: 'Bias detection and analysis tool',
    description: 'A comprehensive tool for analyzing machine learning models for bias and fairness across protected attributes, providing detailed metrics and visualizations.',
    longDescription: `This ML Fairness Analyzer addresses one of the most critical challenges in modern machine learning: ensuring fairness and reducing bias in AI systems. The tool provides comprehensive analysis capabilities for detecting and quantifying bias across various protected attributes.

The analyzer implements over 10 different fairness metrics, including demographic parity, equalized odds, and individual fairness measures. It generates detailed reports with interactive visualizations that help data scientists and ML engineers understand and mitigate bias in their models.

The tool supports analysis across multiple real-world datasets and provides actionable insights for model improvement. It includes features for comparing different models, tracking bias over time, and generating compliance reports for regulatory requirements.`,
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Flask'],
    category: 'Data Science Tool',
    status: 'Completed',
    duration: '3 months',
    teamSize: 'Solo Project',
    highlights: [
      'Implemented 10+ fairness metrics including demographic parity',
      'Analyzed models across 5+ real-world datasets',
      'Generated comprehensive bias reports with visualizations',
      'Created interactive dashboard for metric exploration',
    ],
    features: [
      '10+ fairness metrics implementation',
      'Interactive bias visualization dashboard',
      'Multi-dataset analysis support',
      'Model comparison tools',
      'Automated report generation',
      'Bias trend tracking',
      'Compliance reporting',
      'API for integration'
    ],
    challenges: [
      'Implementing complex fairness metrics',
      'Creating meaningful visualizations',
      'Handling large datasets efficiently',
      'Ensuring metric accuracy'
    ],
    solutions: [
      'Used established fairness research frameworks',
      'Implemented interactive plotting libraries',
      'Applied data sampling and caching strategies',
      'Conducted extensive validation testing'
    ],
    metrics: [
      { label: 'Fairness Metrics', value: 'Comprehensive', icon: BarChart3 },
      { label: 'Datasets Analyzed', value: 'Multiple', icon: Database },
      { label: 'Accuracy', value: 'High', icon: Star },
      { label: 'Processing Speed', value: 'Fast', icon: Clock }
    ],
    date: 'Jul 2025',
    color: 'primary',
    github: 'https://github.com/PerciErmiasWolday',
    demo: '#',
    impact: 'ML bias analysis tool',
    architecture: 'Microservices with Flask API',
    deployment: 'Docker Containers'
  },
  {
    id: 'portfolio-optimizer',
    title: 'Portfolio Optimization Tool',
    subtitle: 'Financial analysis and optimization',
    description: 'A sophisticated financial portfolio optimization application using modern portfolio theory, featuring efficient frontier calculation and Monte Carlo simulation.',
    longDescription: `This Portfolio Optimization Tool brings advanced financial theory to practical application, enabling investors to make data-driven decisions about their investment portfolios. The tool implements sophisticated algorithms based on Modern Portfolio Theory, providing users with optimal portfolio allocations that balance risk and return.

The application features comprehensive risk analysis tools, including Monte Carlo simulation with over 10,000 iterations to model various market scenarios. Users can explore the efficient frontier, analyze risk-return trade-offs, and test different investment strategies.

Interactive visualizations help users understand complex financial concepts, while the underlying algorithms ensure accurate calculations based on historical market data. The tool supports multiple asset classes and provides detailed performance analytics.`,
    technologies: ['Python', 'NumPy', 'Pandas', 'Plotly', 'Streamlit'],
    category: 'Financial Application',
    status: 'Completed',
    duration: '2 months',
    teamSize: 'Solo Project',
    highlights: [
      'Implemented efficient frontier algorithm for optimal portfolios',
      'Monte Carlo simulation with 10,000+ iterations',
      'Risk-return visualization with interactive charts',
      'Sharpe ratio and volatility analysis',
    ],
    features: [
      'Efficient frontier calculation',
      'Monte Carlo simulation (10,000+ iterations)',
      'Risk-return analysis and visualization',
      'Sharpe ratio optimization',
      'Portfolio rebalancing recommendations',
      'Historical performance analysis',
      'Interactive charts and dashboards',
      'Export capabilities for reports'
    ],
    challenges: [
      'Implementing complex financial algorithms',
      'Handling large-scale simulations',
      'Creating intuitive visualizations',
      'Ensuring calculation accuracy'
    ],
    solutions: [
      'Used optimized NumPy operations for performance',
      'Implemented parallel processing for simulations',
      'Leveraged Plotly for interactive visualizations',
      'Applied rigorous testing and validation'
    ],
    metrics: [
      { label: 'Simulations', value: 'Extensive', icon: Rocket },
      { label: 'Processing Time', value: 'Efficient', icon: Clock },
      { label: 'Accuracy', value: 'High', icon: Star },
      { label: 'Asset Classes', value: 'Diverse', icon: BarChart3 }
    ],
    date: 'Mar 2024',
    color: 'accent',
    github: 'https://github.com/PerciErmiasWolday',
    demo: '#',
    impact: 'Financial optimization platform',
    architecture: 'Streamlit Web Application',
    deployment: 'Streamlit Cloud'
  }
];

export default function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');

  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Project Details`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-theme mb-4">Project Not Found</h1>
          <p className="text-theme-muted mb-8 font-bold">The project you're looking for doesn't exist.</p>
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary rounded-lg hover:bg-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'features', label: 'Features', icon: Star },
    { id: 'architecture', label: 'Architecture', icon: Code2 }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5 animate-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent rounded-full blur-3xl opacity-5 animate-float" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-theme rounded-lg hover:bg-theme-light transition-colors text-theme-muted hover:text-theme font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`p-3 bg-${project.color} bg-opacity-20 rounded-lg`}
                >
                  <Code2 className={`w-6 h-6 text-${project.color}`} />
                </motion.div>
                <span className={`px-3 py-1 bg-${project.color} bg-opacity-20 text-${project.color} rounded-full text-sm font-semibold`}>
                  {project.category}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="text-gradient">{project.title}</span>
              </h1>
              
              <p className="text-xl text-theme-muted mb-6 font-bold">{project.subtitle}</p>
              
              <p className="text-lg text-theme-muted leading-relaxed mb-8 font-bold">{project.description}</p>

              {/* Project Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {project.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-theme rounded-lg p-4 text-center"
                  >
                    <metric.icon className={`w-6 h-6 text-${project.color} mx-auto mb-2`} />
                    <div className="text-2xl font-black text-theme">{metric.value}</div>
                    <div className="text-sm text-theme-muted font-bold">{metric.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 bg-${project.color} rounded-lg hover:bg-opacity-80 transition-all text-white font-semibold`}
                >
                  <Github className="w-5 h-5" />
                  View Code
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-theme rounded-lg hover:bg-theme-light transition-all text-theme font-black"
                >
                  <Play className="w-5 h-5" />
                  Live Demo
                </motion.a>
              </div>
            </motion.div>

            {/* Project Name Display */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className={`relative rounded-2xl overflow-hidden shadow-2xl h-96 flex items-center justify-center bg-gradient-to-br from-${project.color}/20 via-${project.color}/10 to-accent/20 border-2 border-${project.color}/30`}>
                <div className="text-center p-8">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className={`p-6 bg-${project.color}/20 rounded-2xl mb-6 inline-block`}
                  >
                    <Code2 className={`w-16 h-16 text-${project.color}`} />
                  </motion.div>
                  
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-3xl md:text-4xl font-black text-theme mb-4"
                  >
                    {project.title}
                  </motion.h2>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className={`text-lg text-${project.color} font-bold mb-4`}
                  >
                    {project.subtitle}
                  </motion.p>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex items-center justify-center gap-2 text-theme-muted"
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="font-bold">{project.date}</span>
                  </motion.div>
                </div>
                
                {/* Decorative elements */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-${project.color}/10 rounded-full blur-xl`} />
                <div className={`absolute bottom-4 left-4 w-16 h-16 bg-accent/10 rounded-full blur-lg`} />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Navigation Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="sticky top-20 z-40 bg-theme/95 backdrop-blur-sm border-b border-theme"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap sm:flex-nowrap gap-1 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 font-semibold transition-all whitespace-nowrap text-sm sm:text-base ${
                  activeTab === tab.id
                    ? `text-${project.color} border-b-2 border-${project.color}`
                    : 'text-theme-muted hover:text-theme font-bold'
                }`}
              >
                <tab.icon className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Project Details */}
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-black mb-6 text-theme">Project Overview</h3>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-lg text-theme-muted leading-relaxed mb-6 font-bold">
                      {project.longDescription}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-theme rounded-lg p-6">
                    <h4 className="text-xl font-black mb-4 text-theme">Project Info</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-theme-muted" />
                        <span className="text-theme-muted font-bold">Started: {project.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-theme-muted" />
                        <span className="text-theme-muted font-bold">Duration: {project.duration}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-theme-muted" />
                        <span className="text-theme-muted font-bold">Team: {project.teamSize}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Rocket className="w-5 h-5 text-theme-muted" />
                        <span className="text-theme-muted font-bold">Status: {project.status}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-theme rounded-lg p-6">
                    <h4 className="text-xl font-black mb-4 text-theme">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1 bg-${project.color} bg-opacity-20 text-${project.color} rounded-full text-sm font-medium`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h3 className="text-3xl font-black mb-6 text-theme">Key Highlights</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-theme rounded-lg"
                    >
                      <Zap className={`w-5 h-5 text-${project.color} mt-1 flex-shrink-0`} />
                      <span className="text-theme-muted font-bold">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'features' && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-3xl font-black mb-8 text-theme">Features & Capabilities</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-theme rounded-lg p-6 hover:bg-theme-light transition-colors"
                    >
                      <Star className={`w-6 h-6 text-${project.color} mb-3`} />
                      <h4 className="text-lg font-black text-theme mb-2">{feature}</h4>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-black mb-6 text-theme">Challenges</h3>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                      >
                        <Shield className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                        <span className="text-theme-muted font-bold">{challenge}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black mb-6 text-theme">Solutions</h3>
                  <div className="space-y-4">
                    {project.solutions.map((solution, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                      >
                        <Rocket className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-theme-muted font-bold">{solution}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'architecture' && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-3xl font-black mb-8 text-theme">Architecture & Technical Details</h3>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-theme rounded-lg p-6">
                    <h4 className="text-xl font-black mb-4 text-theme flex items-center gap-2">
                      <Code2 className="w-5 h-5" />
                      Architecture Pattern
                    </h4>
                    <p className="text-theme-muted font-bold">{project.architecture}</p>
                  </div>

                  <div className="bg-theme rounded-lg p-6">
                    <h4 className="text-xl font-black mb-4 text-theme flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      Deployment
                    </h4>
                    <p className="text-theme-muted font-bold">{project.deployment}</p>
                  </div>
                </div>

                <div className="bg-theme rounded-lg p-6">
                  <h4 className="text-xl font-black mb-4 text-theme flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Technology Stack
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className={`p-3 bg-${project.color} bg-opacity-20 rounded-lg text-center`}
                      >
                        <span className={`text-${project.color} font-semibold`}>{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Related Projects */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-theme py-16"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-black mb-8 text-theme text-center">Related Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-theme-light rounded-lg p-6 hover:bg-theme transition-colors"
                >
                  <Link to={`/projects/${relatedProject.id}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 bg-${relatedProject.color} bg-opacity-20 rounded-lg`}>
                        <Code2 className={`w-5 h-5 text-${relatedProject.color}`} />
                      </div>
                      <span className={`text-${relatedProject.color} text-sm font-semibold`}>
                        {relatedProject.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-black text-theme mb-2">{relatedProject.title}</h4>
                    <p className="text-theme-muted text-sm mb-4 font-bold">{relatedProject.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-theme-muted text-sm font-bold">{relatedProject.date}</span>
                      <ChevronRight className="w-4 h-4 text-theme-muted" />
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
