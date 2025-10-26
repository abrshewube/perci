import { Mail, Phone, Linkedin, Github, Send, MapPin, Clock, MessageSquare, Sparkles, Heart, Zap, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'perciwolday2@gmail.com',
      link: 'mailto:perciwolday2@gmail.com',
      color: 'primary',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '469-360-6158',
      link: 'tel:469-360-6158',
      color: 'accent',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/PerciWolday',
      link: 'https://linkedin.com/in/PerciWolday',
      color: 'primary',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/PerciErmiasWolday',
      link: 'https://github.com/PerciErmiasWolday',
      color: 'accent',
    },
  ];

  const availability = [
    { icon: Clock, text: 'Response time: Within 24 hours' },
    { icon: MapPin, text: 'Location: Alma, Michigan' },
    { icon: MessageSquare, text: 'Open to: Projects, Collaborations, Opportunities' },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary rounded-full blur-3xl opacity-10 animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary rounded-full blur-3xl opacity-5 animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full opacity-80 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-primary rounded-full opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-accent rounded-full opacity-50 animate-pulse" style={{ animationDelay: '3s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
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

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Let's Connect
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-theme-muted max-w-3xl mx-auto leading-relaxed font-bold"
          >
            I'm always excited to discuss new opportunities, collaborate on innovative projects, 
            or simply chat about technology and AI. Let's create something amazing together! 
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block ml-2"
            >
              ✨
            </motion.span>
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent max-w-2xl mx-auto mt-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-theme p-8 rounded-2xl border border-theme">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-theme">
                <Send className="w-6 h-6 text-primary" />
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-theme-muted mb-2">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-theme-light border-2 ${
                      focusedField === 'name' ? 'border-primary' : 'border-theme'
                    } rounded-lg text-theme focus:outline-none transition-all font-bold`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-theme-muted mb-2">
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-theme-light border-2 ${
                      focusedField === 'email' ? 'border-primary' : 'border-theme'
                    } rounded-lg text-theme focus:outline-none transition-all font-bold`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-theme-muted mb-2">
                    Subject
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-theme-light border-2 ${
                      focusedField === 'subject' ? 'border-primary' : 'border-theme'
                    } rounded-lg text-theme focus:outline-none transition-all font-bold`}
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-theme-muted mb-2">
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 bg-theme-light border-2 ${
                      focusedField === 'message' ? 'border-primary' : 'border-theme'
                    } rounded-lg text-theme focus:outline-none transition-all resize-none font-bold`}
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-lg transition-all duration-300 font-black text-lg ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-primary to-accent hover:shadow-2xl hover:shadow-primary/50'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="send"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3"
                      >
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Success Message */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.9 }}
                      className="bg-green-500/20 border-2 border-green-500/30 rounded-lg p-4 flex items-center gap-3"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4 }}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                      </motion.div>
                      <div>
                        <h4 className="text-green-400 font-semibold">Message Sent Successfully!</h4>
                        <p className="text-green-300 text-sm">I'll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-black mb-6 text-theme">Contact Information</h3>
            
            <div className="grid gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.03, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group bg-theme p-6 rounded-xl border-2 border-theme hover:border-${method.color} transition-all flex items-center gap-6 relative overflow-hidden`}
                  >
                    {/* Animated background on hover */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 bg-gradient-to-r from-${method.color}/10 to-transparent`}
                    />
                    
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`p-4 bg-${method.color} bg-opacity-20 rounded-xl relative z-10`}
                    >
                      <Icon className={`w-7 h-7 text-${method.color}`} />
                    </motion.div>
                    <div className="relative z-10">
                      <h4 className="text-lg font-black text-theme mb-1 group-hover:text-theme transition-colors">{method.title}</h4>
                      <p className="text-theme-muted group-hover:text-theme-muted transition-colors font-bold">{method.value}</p>
                    </div>
                    
                    {/* Hover effect indicator */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-auto relative z-10"
                    >
                      <Rocket className={`w-5 h-5 text-${method.color}`} />
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>

            {/* Availability Info */}
            <div className="bg-gradient-to-br from-theme to-theme-light p-6 rounded-xl border border-theme mt-8">
              <h4 className="text-xl font-bold mb-4 text-gradient">Availability</h4>
              <div className="space-y-4">
                {availability.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <Icon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-theme-muted font-bold">{item.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-primary/10 border-2 border-primary/30 p-6 rounded-xl"
            >
              <h4 className="text-lg font-black mb-2 text-primary">Looking for a collaborator?</h4>
              <p className="text-theme-muted mb-4 font-bold">
                I'm always interested in hearing about new projects and opportunities.
                Whether it's a research collaboration, internship, or full-time role, let's talk!
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:perciwolday2@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all font-black"
              >
                <Mail className="w-5 h-5" />
                Email Me Directly
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-theme to-theme-light p-8 md:p-12 rounded-2xl border border-theme relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-12 h-12 text-primary mx-auto" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-theme-muted mb-6 leading-relaxed font-bold"
            >
              "Let's build something <span className="text-gradient font-bold">extraordinary</span> together"
            </motion.p>
            
            <div className="flex justify-center gap-6">
              {[
                { icon: Github, color: 'primary', delay: 0.4 },
                { icon: Linkedin, color: 'accent', delay: 0.5 },
                { icon: Mail, color: 'primary', delay: 0.6 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay }}
                  whileHover={{ scale: 1.2, rotate: 360, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`p-4 bg-${item.color} bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all cursor-pointer`}
                >
                  <item.icon className={`w-6 h-6 text-${item.color}`} />
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-theme-muted"
            >
              <p className="text-sm font-bold">Ready to start your next project?</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
