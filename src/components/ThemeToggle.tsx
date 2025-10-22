import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-3 rounded-xl bg-theme border-2 border-theme hover:border-primary transition-all duration-300 group text-theme"
      aria-label={`Switch to ${theme === 'dark' ? 'bright' : 'dark'} theme`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative"
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
        ) : (
          <Sun className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
        )}
      </motion.div>
      
      {/* Glowing effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.button>
  );
}
