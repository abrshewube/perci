import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { useState } from 'react';

const experiences = [
  {
    role: 'Undergraduate Researcher',
    company: 'AI-Driven Motion Planning Under Uncertainty',
    location: 'Alma College, MI',
    period: 'May 2025 - Oct 2025',
    highlights: [
      'Engineered motion planning framework combining Kalman-based trajectory prediction and MPC algorithms',
      'Optimized control algorithms reducing acceleration variance by 28% while preserving 93% path efficiency',
      'Collaborated with cross-university students to evaluate robot legibility and trust in human-shared spaces',
      'Developed Python-based simulation environment for testing autonomous navigation scenarios',
      'Presented research findings at undergraduate research symposium',
    ],
    color: 'primary',
    skills: ['Python', 'Control Theory', 'Machine Learning', 'NumPy', 'Research'],
  },
  {
    role: 'Engineering & Project Management Intern',
    company: 'Kadeya',
    location: 'Remote',
    period: 'Aug 2025 - May 2026',
    highlights: [
      'Designed automated cleaning and drying system for refillable bottle vending machines',
      'Reduced manual maintenance time by 60% through streamlined sanitation process',
      'Reduced material costs by 15% while improving part reliability through strategic sourcing',
      'Led cross-functional team meetings to align engineering goals with business objectives',
      'Created detailed CAD models and technical documentation for manufacturing',
    ],
    color: 'accent',
    skills: ['Project Management', 'CAD', 'System Design', 'Cost Optimization', 'Leadership'],
  },
  {
    role: 'Machine Learning Policy Researcher',
    company: 'OsGood Center',
    location: 'Washington, DC',
    period: 'Jun 2025 - Aug 2025',
    highlights: [
      'Assisted technical research on ML policy frameworks and cybersecurity for AI compliance auditing',
      'Developed Python scripts to calculate fairness metrics on ML models across 5+ datasets',
      'Attended congressional hearings, think tanks, and conferences tracking tech policy developments',
      'Analyzed bias patterns in algorithmic decision-making systems',
      'Contributed to policy recommendations for ethical AI deployment',
    ],
    color: 'primary',
    skills: ['Python', 'ML Fairness', 'Policy Analysis', 'Data Analysis', 'Research'],
  },
  {
    role: 'Technical Lead',
    company: 'Girls Who Code',
    location: 'Alma College, MI',
    period: 'Oct 2024 - Present',
    highlights: [
      'Founded Alma College\'s first Girls Who Code chapter, growing to 10+ active members',
      'Led weekly workshops on algorithms, OOP, coding interview prep, and debugging sessions',
      'Guided 5+ team projects including Generative AI initiative with 2,000+ lines of code',
      'Developed curriculum covering Python, JavaScript, and web development fundamentals',
      'Mentored students through hackathons and coding competitions',
    ],
    color: 'accent',
    skills: ['Teaching', 'Python', 'JavaScript', 'Curriculum Design', 'Mentorship'],
  },
  {
    role: 'Computer Science Instructor',
    company: 'Independent Mentorship Program',
    location: 'Addis Ababa, Ethiopia (Remote)',
    period: 'Jun 2024 - Jul 2025',
    highlights: [
      'Mentored 10+ high school students in Ethiopia in OOP, data structures, and algorithms',
      'Organized 6-week coding bootcamp achieving 100% completion rate',
      'Improved test performance by 40% through 15+ interactive learning modules',
      'Created hands-on projects covering sorting algorithms, linked lists, and trees',
      'Established ongoing mentorship program with monthly check-ins',
    ],
    color: 'primary',
    skills: ['Teaching', 'Java', 'Data Structures', 'Algorithms', 'Mentorship'],
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const trail = useTrail(experiences.length, {
    from: { opacity: 0, transform: 'translateX(-40px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { tension: 280, friction: 60 },
  });

  return (
    <section id="experience" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary rounded-full blur-3xl opacity-10 animate-float" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-theme-muted max-w-2xl mx-auto font-bold">
            My professional journey spanning research, engineering, and education
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <animated.div
                key={index}
                style={trail[index]}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-[52%] md:text-right' : 'md:pl-[52%] md:ml-auto'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="ml-8 md:ml-0"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`group bg-theme p-8 rounded-2xl border-2 ${
                      activeIndex === index ? `border-${exp.color}` : 'border-theme'
                    } transition-all duration-300 shadow-xl hover:shadow-2xl`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className={`p-3 bg-${exp.color} bg-opacity-20 rounded-lg`}
                      >
                        <Briefcase className={`w-6 h-6 text-${exp.color}`} />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-black text-theme mb-2 group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className={`text-${exp.color} font-black mb-2 text-lg`}>{exp.company}</p>
                        <div className="flex flex-wrap gap-3 text-theme-muted text-sm mb-3 font-bold">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 text-theme-muted mb-6 font-bold">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <TrendingUp className={`w-4 h-4 text-${exp.color} mt-1 flex-shrink-0`} />
                          <span className="leading-relaxed">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className={`px-3 py-1 bg-theme-light text-${exp.color} text-sm rounded-full border border-theme hover:border-${exp.color} transition-all font-bold`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`absolute top-8 ${
                    index % 2 === 0 ? 'left-0 md:right-[-0.65rem]' : 'left-0 md:left-[-0.65rem]'
                  } w-5 h-5 rounded-full bg-${exp.color} border-4 border-theme animate-pulse shadow-lg shadow-${exp.color}/50`}
                />
              </animated.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-theme p-8 rounded-2xl border border-theme inline-block">
            <p className="text-theme-muted text-lg mb-4 font-bold">
              <span className="text-primary font-black text-3xl">5+</span> Roles | 
              <span className="text-accent font-black text-3xl ml-2">3</span> Industries | 
              <span className="text-primary font-black text-3xl ml-2">100%</span> Dedication
            </p>
            <p className="text-theme-muted font-bold">Building innovative solutions and empowering the next generation</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
