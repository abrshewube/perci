import { Code, Database, Wrench, Brain, Zap, Award, TrendingUp, Target, Star, CheckCircle, Circle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTrail, animated } from '@react-spring/web';
import { useState } from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Python', proficiency: 'Expert', years: '3+', projects: '15+' },
      { name: 'Java', proficiency: 'Advanced', years: '2+', projects: '8+' },
      { name: 'JavaScript', proficiency: 'Advanced', years: '2+', projects: '12+' },
      { name: 'TypeScript', proficiency: 'Intermediate', years: '1+', projects: '5+' },
      { name: 'HTML/CSS', proficiency: 'Expert', years: '3+', projects: '20+' },
      { name: 'SQL', proficiency: 'Advanced', years: '2+', projects: '10+' },
      { name: 'C++', proficiency: 'Intermediate', years: '1+', projects: '3+' },
    ],
    color: 'primary',
  },
  {
    title: 'Frameworks & Libraries',
    icon: Wrench,
    skills: [
      { name: 'React', proficiency: 'Advanced', years: '2+', projects: '8+' },
      { name: 'Node.js', proficiency: 'Advanced', years: '2+', projects: '6+' },
      { name: 'Spring Boot', proficiency: 'Advanced', years: '2+', projects: '5+' },
      { name: 'Flask', proficiency: 'Advanced', years: '2+', projects: '7+' },
      { name: 'Tailwind CSS', proficiency: 'Expert', years: '2+', projects: '15+' },
      { name: 'Express.js', proficiency: 'Intermediate', years: '1+', projects: '4+' },
      { name: 'NumPy/Pandas', proficiency: 'Advanced', years: '2+', projects: '8+' },
    ],
    color: 'accent',
  },
  {
    title: 'Tools & Technologies',
    icon: Database,
    skills: [
      { name: 'Git/GitHub', proficiency: 'Expert', years: '3+', projects: '25+' },
      { name: 'Firebase', proficiency: 'Advanced', years: '2+', projects: '6+' },
      { name: 'MongoDB', proficiency: 'Intermediate', years: '1+', projects: '4+' },
      { name: 'MySQL', proficiency: 'Advanced', years: '2+', projects: '8+' },
      { name: 'REST APIs', proficiency: 'Expert', years: '2+', projects: '12+' },
      { name: 'Docker', proficiency: 'Intermediate', years: '1+', projects: '3+' },
      { name: 'AWS', proficiency: 'Beginner', years: '<1', projects: '2+' },
    ],
    color: 'primary',
  },
  {
    title: 'Specializations',
    icon: Brain,
    skills: [
      { name: 'Machine Learning', proficiency: 'Advanced', years: '2+', projects: '6+' },
      { name: 'Motion Planning', proficiency: 'Advanced', years: '1+', projects: '3+' },
      { name: 'Control Theory', proficiency: 'Intermediate', years: '1+', projects: '2+' },
      { name: 'Algorithm Design', proficiency: 'Expert', years: '3+', projects: '15+' },
      { name: 'Data Structures', proficiency: 'Expert', years: '3+', projects: '20+' },
      { name: 'System Design', proficiency: 'Advanced', years: '2+', projects: '5+' },
      { name: 'AI Ethics', proficiency: 'Intermediate', years: '1+', projects: '2+' },
    ],
    color: 'accent',
  },
];

const certifications = [
  { title: 'Machine Learning Specialization', issuer: 'Online Course', year: '2024' },
  { title: 'Python for Data Science', issuer: 'Online Certification', year: '2024' },
  { title: 'Advanced Algorithms', issuer: 'Coursera', year: '2023' },
];

const softSkills = [
  { name: 'Problem Solving', icon: Zap },
  { name: 'Team Leadership', icon: Target },
  { name: 'Communication', icon: TrendingUp },
  { name: 'Project Management', icon: Award },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const trail = useTrail(skillCategories.length, {
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 280, friction: 60 },
  });

  const getProficiencyLevel = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return { 
          color: 'text-green-400', 
          bgColor: 'bg-green-400/20', 
          borderColor: 'border-green-400/30',
          icon: Star,
          stars: 5
        };
      case 'Advanced':
        return { 
          color: 'text-blue-400', 
          bgColor: 'bg-blue-400/20', 
          borderColor: 'border-blue-400/30',
          icon: CheckCircle,
          stars: 4
        };
      case 'Intermediate':
        return { 
          color: 'text-yellow-400', 
          bgColor: 'bg-yellow-400/20', 
          borderColor: 'border-yellow-400/30',
          icon: Circle,
          stars: 3
        };
      case 'Beginner':
        return { 
          color: 'text-orange-400', 
          bgColor: 'bg-orange-400/20', 
          borderColor: 'border-orange-400/30',
          icon: Circle,
          stars: 2
        };
      default:
        return { 
          color: 'text-gray-400', 
          bgColor: 'bg-gray-400/20', 
          borderColor: 'border-gray-400/30',
          icon: Circle,
          stars: 1
        };
    }
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary rounded-full blur-3xl opacity-10 animate-float" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-theme-muted max-w-2xl mx-auto font-bold">
            A comprehensive overview of my technical skills and professional capabilities
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <animated.div
                key={catIndex}
                style={trail[catIndex]}
                onMouseEnter={() => setActiveCategory(catIndex)}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`group bg-theme p-4 sm:p-6 lg:p-8 rounded-2xl border-2 ${
                    activeCategory === catIndex ? `border-${category.color}` : 'border-theme'
                  } transition-all duration-300 shadow-xl h-full`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-2 sm:p-3 bg-${category.color} bg-opacity-20 rounded-lg`}
                    >
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-${category.color}`} />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-theme">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const proficiency = getProficiencyLevel(skill.proficiency);
                      const ProficiencyIcon = proficiency.icon;
                      
                      return (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.1 }}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          whileHover={{ scale: 1.02 }}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                            hoveredSkill === skill.name 
                              ? `${proficiency.borderColor} ${proficiency.bgColor}` 
                              : 'border-theme bg-theme-light'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <ProficiencyIcon className={`w-5 h-5 ${proficiency.color}`} />
                              <span className={`font-black text-lg ${
                                hoveredSkill === skill.name ? proficiency.color : 'text-theme'
                              } transition-colors`}>
                                {skill.name}
                              </span>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-sm font-bold ${proficiency.bgColor} ${proficiency.color}`}>
                              {skill.proficiency}
                            </div>
                          </div>
                          
                          {/* Star Rating */}
                          <div className="flex items-center gap-1 mb-3">
                            {[...Array(5)].map((_, starIndex) => (
                              <Star
                                key={starIndex}
                                className={`w-4 h-4 ${
                                  starIndex < proficiency.stars 
                                    ? proficiency.color 
                                    : 'text-gray-600'
                                }`}
                                fill={starIndex < proficiency.stars ? 'currentColor' : 'none'}
                              />
                            ))}
                          </div>
                          
                          {/* Experience Info */}
                          <div className="flex items-center justify-between text-sm text-theme-muted font-bold">
                            <div className="flex items-center gap-1">
                              <span>📅</span>
                              <span>{skill.years} years</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span>🚀</span>
                              <span>{skill.projects} projects</span>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </animated.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gradient">Soft Skills</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-theme p-6 rounded-xl border border-theme hover:border-primary transition-all text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block p-4 bg-primary bg-opacity-20 rounded-full mb-4"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h4 className="text-lg font-black text-theme group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-theme to-theme-light p-8 md:p-12 rounded-3xl border border-theme mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gradient">Relevant Coursework</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'Data Structures and Algorithms',
              'Machine Learning Fundamentals',
              'Optimization with Python',
              'Object-Oriented Programming (Java)',
              'Algorithmic Techniques',
              'Computational Engineering',
              'Cybersecurity Fundamentals',
              'Electrical Circuits & Systems',
              'Database Management Systems',
              'Software Engineering Principles',
              'Artificial Intelligence',
              'Computer Networks',
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.03, x: 5 }}
                className="flex items-center gap-3 p-4 bg-theme rounded-lg hover:bg-theme-light transition-all group"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse group-hover:scale-150 transition-transform" />
                <span className="text-theme-muted group-hover:text-theme transition-colors font-bold">{course}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-gradient">Certifications & Learning</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-theme p-6 rounded-xl border-2 border-theme hover:border-accent transition-all"
              >
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="text-lg font-black text-theme mb-2">{cert.title}</h4>
                <p className="text-theme-muted text-sm mb-1 font-bold">{cert.issuer}</p>
                <p className="text-accent font-black">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/20 to-accent/20 p-8 rounded-2xl border border-primary/30"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-primary mb-2">7+</div>
              <div className="text-theme-muted font-bold">Languages</div>
            </div>
            <div>
              <div className="text-4xl font-black text-accent mb-2">15+</div>
              <div className="text-theme-muted font-bold">Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">20+</div>
              <div className="text-theme-muted font-bold">Projects</div>
            </div>
            <div>
              <div className="text-4xl font-black text-accent mb-2">3+</div>
              <div className="text-theme-muted font-bold">Years Coding</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
