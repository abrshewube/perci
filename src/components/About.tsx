import { GraduationCap, Award, Users, Target, Heart, Code2, Globe, BookOpen, Sparkles, Rocket, Brain, Zap, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { animated, useTrail } from '@react-spring/web';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const mainCards = [
    {
      icon: GraduationCap,
      title: 'Education',
      color: 'primary',
      gradient: 'from-primary to-primary-dark',
      items: [
        { label: 'University', value: 'Alma College' },
        { label: 'Degree', value: 'B.S. Computer Engineering' },
        { label: 'GPA', value: '3.9/4.0', highlight: true },
        { label: 'Graduation', value: 'April 2027' },
      ],
      badge: 'Dean\'s List',
    },
    {
      icon: Award,
      title: 'Research',
      color: 'accent',
      gradient: 'from-accent to-accent-dark',
      items: [
        { label: 'Focus', value: 'AI Motion Planning' },
        { label: 'Method', value: 'MPC Algorithms' },
        { label: 'Optimization', value: '28% Improvement', highlight: true },
        { label: 'Efficiency', value: '93% Path Success' },
      ],
      badge: 'Published',
    },
    {
      icon: Users,
      title: 'Leadership',
      color: 'primary',
      gradient: 'from-primary via-accent to-primary',
      items: [
        { label: 'Role', value: 'Girls Who Code Founder' },
        { label: 'Team', value: '10+ Active Members' },
        { label: 'Projects', value: '5+ Team Initiatives', highlight: true },
        { label: 'Impact', value: '2,000+ Lines of Code' },
      ],
      badge: 'Community Builder',
    },
  ];

  const journey = [
    {
      year: '2024-Present',
      title: 'AI Research & Development',
      company: 'Alma College',
      description: 'Developing human-aware robots using advanced motion planning algorithms. Achieved 28% optimization improvement in acceleration variance.',
      icon: Brain,
      color: 'primary',
    },
    {
      year: '2025',
      title: 'Engineering Intern',
      company: 'Kadeya',
      description: 'Designed automated systems reducing maintenance time by 60% and material costs by 15%. Led cross-functional engineering projects.',
      icon: Rocket,
      color: 'accent',
    },
    {
      year: '2024',
      title: 'Community Leadership',
      company: 'Girls Who Code',
      description: 'Founded Alma College\'s first chapter, mentoring 10+ students in programming, algorithms, and software development.',
      icon: Users,
      color: 'primary',
    },
  ];

  const skills = [
    { icon: Code2, title: 'Technical Excellence', desc: 'Expert in Python, Java, React, and modern frameworks', color: 'primary' },
    { icon: Globe, title: 'Global Impact', desc: 'Mentored students across multiple continents', color: 'accent' },
    { icon: BookOpen, title: 'Lifelong Learner', desc: 'Constantly exploring cutting-edge technologies', color: 'primary' },
    { icon: Zap, title: 'Problem Solver', desc: 'Innovative solutions for complex challenges', color: 'accent' },
  ];

  const trail = useTrail(mainCards.length, {
    from: { opacity: 0, transform: 'translateY(40px) scale(0.95)' },
    to: { opacity: 1, transform: 'translateY(0px) scale(1)' },
    config: { tension: 280, friction: 60 },
  });

  return (
    <section ref={containerRef} id="about" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y, opacity }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl opacity-10"
        />
        <motion.div
          style={{ y: useTransform(y, (value) => -value) }}
          className="absolute bottom-20 left-20 w-[32rem] h-[32rem] bg-accent rounded-full blur-3xl opacity-10"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary font-bold text-sm">Get to know me</span>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-theme-muted max-w-3xl mx-auto font-semibold"
          >
            Computer Engineering student passionate about AI, robotics, and building innovative solutions that make a difference.
          </motion.p>
        </motion.div>

        {/* Main Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <animated.div
                key={index}
                style={trail[index]}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group h-full"
                >
                  {/* Glowing border effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />
                  
                  <div className="relative bg-theme p-8 rounded-3xl border-2 border-theme group-hover:border-transparent transition-all duration-300 h-full">
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`px-3 py-1 bg-${card.color}/20 border border-${card.color}/50 rounded-full`}
                      >
                        <span className={`text-xs font-bold text-${card.color}`}>{card.badge}</span>
                      </motion.div>
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl shadow-${card.color}/30`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>

                    <h3 className={`text-3xl font-black mb-6 text-${card.color}`}>{card.title}</h3>

                    {/* Items */}
                    <div className="space-y-4">
                      {card.items.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          className="flex justify-between items-center"
                        >
                          <span className="text-theme-muted font-semibold">{item.label}</span>
                          <span className={`font-bold ${item.highlight ? `text-${card.color}` : 'text-theme'}`}>
                            {item.value}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Decorative corner */}
                    <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${card.gradient} opacity-5 rounded-tl-full`} />
                  </div>
                </motion.div>
              </animated.div>
            );
          })}
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black mb-4">
              <span className="text-gradient">My Journey</span>
            </h3>
            <p className="text-theme-muted font-semibold">Key milestones and experiences that shaped my path</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {journey.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative ${
                      index % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%] md:ml-auto'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03, x: index % 2 === 0 ? -10 : 10 }}
                      className="ml-8 md:ml-0 bg-theme p-8 rounded-2xl border-2 border-theme hover:border-primary transition-all duration-300"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 bg-${item.color}/20 rounded-xl`}>
                          <Icon className={`w-6 h-6 text-${item.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className={`text-sm font-bold text-${item.color} mb-2`}>{item.year}</div>
                          <h4 className="text-2xl font-black text-theme mb-1">{item.title}</h4>
                          <p className={`text-${item.color} font-bold mb-3`}>{item.company}</p>
                          <p className="text-theme-muted leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                      className={`absolute top-8 ${
                        index % 2 === 0 ? 'left-0 md:right-[-0.75rem]' : 'left-0 md:left-[-0.75rem]'
                      } w-6 h-6 rounded-full bg-${item.color} border-4 border-dark shadow-xl shadow-${item.color}/50`}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-full bg-${item.color}`}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {[
            {
              icon: Target,
              title: 'Mission',
              description: 'To bridge the gap between cutting-edge AI research and real-world applications, creating technology that enhances human capabilities while maintaining ethical standards.',
              color: 'primary',
            },
            {
              icon: Heart,
              title: 'Passion',
              description: 'Passionate about autonomous systems, machine learning fairness, and using technology for social good. Committed to making tech education accessible to all.',
              color: 'accent',
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-${item.color} to-accent rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-500`} />
                
                <div className="relative bg-theme p-8 rounded-2xl border-2 border-theme group-hover:border-transparent transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-4 bg-${item.color}/20 rounded-xl`}
                    >
                      <Icon className={`w-8 h-8 text-${item.color}`} />
                    </motion.div>
                    <h3 className="text-3xl font-black text-theme">{item.title}</h3>
                  </div>
                  <p className="text-theme-muted leading-relaxed font-semibold">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Hobbies Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black mb-4">
              <span className="text-gradient">For Fun</span>
            </h3>
            <p className="text-theme-muted font-semibold">Things I enjoy when I'm not coding or studying</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group bg-theme p-8 rounded-3xl border-2 border-theme hover:border-primary transition-all duration-300"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-50 blur transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-4 bg-primary/20 rounded-xl"
                  >
                    <Heart className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h4 className="text-2xl font-black text-theme">I like to:</h4>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '🎬',
                      title: 'Watch old movies',
                      description: 'Classic cinema and timeless storytelling',
                      color: 'primary',
                      gradient: 'from-primary to-primary-dark'
                    },
                    {
                      icon: '🎵',
                      title: 'Take walks with a playlist',
                      description: 'Like I\'m the lead in a coming-of-age movie',
                      color: 'accent',
                      gradient: 'from-accent to-accent-dark'
                    },
                    {
                      icon: '✈️',
                      title: 'Plan trips',
                      description: 'I\'m not taking anytime soon… but definitely will one day!',
                      color: 'primary',
                      gradient: 'from-primary to-primary-dark'
                    }
                  ].map((hobby, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="relative group/item"
                    >
                      {/* Glowing border effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${hobby.gradient} rounded-3xl opacity-0 group-hover/item:opacity-100 blur transition-all duration-500`} />
                      
                      {/* Main card */}
                      <div className={`relative p-8 rounded-3xl bg-theme border-4 border-${hobby.color}/30 hover:border-${hobby.color}/60 transition-all duration-300 group-hover/item:shadow-2xl group-hover/item:shadow-${hobby.color}/20`}>
                        <div className="text-center">
                          <motion.div
                            whileHover={{ scale: 1.3, rotate: 15 }}
                            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                            className="text-5xl mb-6 relative"
                          >
                            {hobby.icon}
                            {/* Icon glow effect */}
                            <motion.div
                              className={`absolute inset-0 bg-gradient-to-r ${hobby.gradient} rounded-full blur-xl opacity-0 group-hover/item:opacity-30`}
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0, 0.2, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                          </motion.div>
                          
                          <h5 className={`text-xl font-black text-${hobby.color} mb-4 group-hover/item:text-theme transition-colors duration-300`}>
                            {hobby.title}
                          </h5>
                          
                          <p className="text-theme-muted text-base font-bold leading-relaxed">
                            {hobby.description}
                          </p>
                        </div>
                        
                        {/* Enhanced decorative elements */}
                        <Star className={`absolute top-4 right-4 w-4 h-4 text-${hobby.color} opacity-40 group-hover/item:opacity-80 transition-opacity`} />
                        <Star className={`absolute bottom-4 left-4 w-3 h-3 text-${hobby.color} opacity-30 group-hover/item:opacity-60 transition-opacity`} />
                        
                        {/* Corner accent */}
                        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-${hobby.color}/10 to-transparent rounded-br-3xl`} />
                        <div className={`absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tl from-${hobby.color}/10 to-transparent rounded-tl-3xl`} />
                        
                        {/* Hover overlay effect */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${hobby.gradient} opacity-0 group-hover/item:opacity-5 rounded-3xl`}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/10 to-accent/10 rounded-tl-full" />
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative group bg-theme p-6 rounded-xl border-2 border-theme hover:border-${skill.color} transition-all overflow-hidden`}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br from-${skill.color}/10 to-transparent opacity-0 group-hover:opacity-100`}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className={`w-10 h-10 text-${skill.color} mb-4`} />
                  </motion.div>
                  <h4 className="text-lg font-black text-theme mb-2">{skill.title}</h4>
                  <p className="text-theme-muted text-sm font-semibold">{skill.desc}</p>
                </div>
                
                {/* Star decoration */}
                <Star className={`absolute top-2 right-2 w-4 h-4 text-${skill.color} opacity-20`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
