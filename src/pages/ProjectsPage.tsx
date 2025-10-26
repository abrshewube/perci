import { motion } from 'framer-motion';
import { Code2, Sparkles, Rocket, Star } from 'lucide-react';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl opacity-10 animate-float" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-accent rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-primary rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full opacity-80 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-primary rounded-full opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-80 right-1/4 w-2 h-2 bg-accent rounded-full opacity-50 animate-pulse" style={{ animationDelay: '3s' }} />

      {/* Enhanced Header Section */}
      <motion.section 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-32 pb-20"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Code2 className="w-10 h-10 text-white" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border-2 border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 border border-accent/20 rounded-full"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              My Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-theme-muted max-w-3xl mx-auto mb-8 leading-relaxed font-bold"
          >
            A showcase of innovative solutions, cutting-edge technologies, and creative problem-solving across various domains
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          >
            {[
              { icon: Rocket, label: 'Projects', value: 'Multiple', color: 'primary' },
              { icon: Star, label: 'Technologies', value: 'Diverse', color: 'accent' },
              { icon: Code2, label: 'Code Quality', value: 'High', color: 'primary' },
              { icon: Sparkles, label: 'Innovation', value: 'Creative', color: 'accent' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-theme rounded-2xl p-6 border border-theme hover:border-${stat.color} transition-all duration-300`}
              >
                <stat.icon className={`w-8 h-8 text-${stat.color} mx-auto mb-3`} />
                <div className={`text-3xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-theme-muted font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent max-w-2xl mx-auto"
          />
        </div>
      </motion.section>

      {/* Projects Component */}
      <div className="relative z-10">
        <Projects />
      </div>

      {/* Bottom Decorative Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 py-16"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20"
          >
            <h3 className="text-3xl md:text-4xl font-black mb-6 text-theme">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-theme-muted mb-8 max-w-2xl mx-auto font-bold">
              Let's collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 font-black text-lg group"
            >
              <span>Start a Project</span>
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

