import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-theme/95 backdrop-blur-xl border-b-2 border-gradient-to-r from-primary/50 via-accent/50 to-primary/50 shadow-2xl shadow-primary/20' 
          : 'bg-gradient-to-b from-theme/90 via-theme/70 to-transparent backdrop-blur-md'
      } [data-theme="bright"]:shadow-lg [data-theme="bright"]:shadow-gray-200/50 [data-theme="bright"]:border-b [data-theme="bright"]:border-gray-200`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.15, rotate: 5 }} 
            whileTap={{ scale: 0.9 }}
            className="relative"
          >
            <Link
              to="/"
              className="relative z-10"
            >
              <motion.div
                className="text-3xl font-black relative"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(255, 107, 53, 0.5)',
                    '0 0 40px rgba(0, 217, 255, 0.5)',
                    '0 0 20px rgba(255, 107, 53, 0.5)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-gradient">I'm</span>
                <span className="text-theme mx-1">Perci</span>
                <span className="text-gradient"> W</span>
              </motion.div>
            </Link>
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur-xl opacity-0"
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <div className="hidden md:flex items-center gap-2 ml-48">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              >
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `relative px-4 py-2 font-bold transition-all duration-300 block ${
                      isActive ? 'text-primary' : 'text-theme-muted'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <motion.span
                        className="relative z-10"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.name}
                      </motion.span>
                      
                      {/* Animated underline */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ 
                          scaleX: isActive ? 1 : 0,
                          opacity: isActive ? 1 : 0 
                        }}
                        whileHover={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ transformOrigin: 'left' }}
                      />
                      
                      {/* Hover background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      {/* Active indicator dot */}
                      {isActive && (
                        <motion.div
                          layoutId="navIndicator"
                          className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.85 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-3 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-theme-muted hover:text-primary transition-colors overflow-hidden group font-bold"
            >
            {/* Animated background on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20"
              transition={{ duration: 0.3 }}
            />
            
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, type: "spring" }}
                  className="relative z-10"
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -180, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, type: "spring" }}
                  className="relative z-10"
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="md:hidden mt-6 pb-4 overflow-hidden"
            >
              <div className="flex flex-col gap-3 bg-theme/50 backdrop-blur-lg rounded-2xl p-4 border border-theme [data-theme='bright']:bg-white/80 [data-theme='bright']:border-gray-200 [data-theme='bright']:shadow-lg">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -50, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.8 }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <NavLink
                      to={item.href}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `relative text-left px-5 py-3 rounded-xl font-bold transition-all duration-300 block overflow-hidden group ${
                          isActive 
                            ? 'text-theme bg-gradient-to-r from-primary/30 to-accent/30 border-2 border-primary' 
                            : 'text-theme-muted border-2 border-transparent hover:border-primary/50'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <motion.span
                            className="relative z-10"
                            whileHover={{ x: 5 }}
                          >
                            {item.name}
                          </motion.span>
                          
                          {/* Hover effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"
                              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
                <div className="pt-4 border-t border-theme">
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
