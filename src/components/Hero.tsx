import { Github, Linkedin, Mail, Sparkles, Award, Code2, Brain, Users, Download, ArrowRight, Terminal, Database, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { animated, useTrail } from '@react-spring/web';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  
  const roles = ['AI Researcher', 'Software Engineer', 'Problem Solver', 'Innovator'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing effect
  useEffect(() => {
    const text = roles[roleIndex];
    let index = 0;
    setTypedText('');
    
    const interval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [roleIndex]);

  const stats = [
    { icon: Award, label: 'GPA', value: '3.9', color: 'primary', description: 'Academic Excellence' },
    { icon: Sparkles, label: 'Projects', value: '20+', color: 'accent', description: 'Completed' },
    { icon: Users, label: 'Students', value: '10+', color: 'primary', description: 'Mentored' },
    { icon: Code2, label: 'Technologies', value: '15+', color: 'accent', description: 'Mastered' },
  ];

  const skills = [
    { icon: Brain, name: 'AI & ML', color: 'primary' },
    { icon: Code2, name: 'Full-Stack', color: 'accent' },
    { icon: Database, name: 'Data Science', color: 'primary' },
    { icon: Terminal, name: 'Robotics', color: 'accent' },
  ];

  const trail = useTrail(stats.length, {
    from: { opacity: 0, transform: 'scale(0.8) translateY(40px)' },
    to: { opacity: 1, transform: 'scale(1) translateY(0px)' },
    config: { tension: 280, friction: 60 },
  });

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, #FF6B35 0%, transparent 50%)`,
        }}
      />

        {/* Floating orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-[32rem] h-[32rem] bg-accent rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary rounded-full blur-3xl opacity-10"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>

      <div className="relative z-10 text-center px-6 max-w-7xl w-full">
        {/* Main Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-4"
          >
            <motion.span
              className="inline-block font-black"
              whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
            >
              Hi, I'm
            </motion.span>
            <span className="mx-2"></span>
            <span className="text-gradient font-black">Perci Wolday</span>
          </motion.h1>
          
          <motion.div
            initial={{ width: 0, backgroundPosition: '0% 0%' }}
            animate={{ 
              width: '12rem',
              backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
            }}
            transition={{ 
              width: { duration: 1, delay: 0.4 },
              backgroundPosition: { duration: 3, repeat: Infinity }
            }}
            className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto mb-8 rounded-full"
            style={{ backgroundSize: '200% 100%' }}
          />
        </motion.div>

        {/* Animated Role */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-theme-muted">
            <span className="text-gradient font-black inline-flex items-center gap-2 justify-center">
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block w-1 h-8 md:h-12 bg-primary"
              />
            </span>
        </h2>
        </motion.div>

        {/* Skills Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`flex items-center gap-2 px-5 py-2.5 bg-${skill.color}/10 border border-${skill.color}/30 rounded-full`}
              >
                <Icon className={`w-5 h-5 text-${skill.color}`} />
                <span className="text-sm font-black text-theme">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-12"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <animated.div
                key={index}
                style={trail[index]}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group bg-theme p-6 rounded-2xl border-2 border-theme hover:border-primary transition-all duration-300 overflow-hidden"
                >
                  {/* Animated background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br from-${stat.color}/10 to-transparent opacity-0 group-hover:opacity-100`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`w-10 h-10 text-${stat.color} mx-auto mb-3`} />
                    </motion.div>
                    <motion.div
                      className={`text-4xl md:text-5xl font-black text-${stat.color} mb-1`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm font-black text-theme mb-1">{stat.label}</div>
                    <div className="text-xs font-bold text-theme-muted">{stat.description}</div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-${stat.color} opacity-5 rounded-bl-full`} />
                </motion.div>
              </animated.div>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 107, 53, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            href="mailto:perciwolday2@gmail.com"
            className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-primary-dark to-primary rounded-full overflow-hidden font-bold text-lg shadow-2xl shadow-primary/30"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <Mail className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Let's Connect</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/assets/Perci_Wolday_Resume 3.pdf"
            download="Perci_Wolday_Resume.pdf"
            className="group flex items-center gap-3 px-8 py-4 bg-theme border-2 border-accent rounded-full hover:bg-accent/10 transition-all duration-300 font-black text-lg text-theme"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span>Resume</span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex gap-4 justify-center mb-12"
        >
          {[
            { icon: Github, url: 'https://github.com/PerciErmiasWolday', color: 'primary' },
            { icon: Linkedin, url: 'https://linkedin.com/in/PerciWolday', color: 'accent' },
            { icon: Mail, url: 'mailto:perciwolday2@gmail.com', color: 'primary' },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.url}
                target={social.url.startsWith('http') ? '_blank' : undefined}
                rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 bg-theme rounded-xl border-2 border-theme hover:border-${social.color} hover:bg-${social.color}/10 transition-all duration-300 group relative overflow-hidden`}
              >
                <motion.div
                  className={`absolute inset-0 bg-${social.color} opacity-0 group-hover:opacity-10`}
                  transition={{ duration: 0.3 }}
                />
                <Icon className={`w-6 h-6 text-theme-muted group-hover:text-${social.color} transition-colors relative z-10`} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex items-center justify-center gap-2 text-theme-muted font-bold"
        >
          <Globe className="w-5 h-5 text-primary" />
          <span className="font-black">Alma College, Michigan</span>
        </motion.div>
      </div>
    </section>
  );
}
