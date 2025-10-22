import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 page-transition relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />

      <div className="max-w-2xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <Search className="w-32 h-32 mx-auto text-primary mb-6" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-9xl font-bold text-gradient mb-4"
          >
            404
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '8rem' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"
          />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Page Not Found
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-xl text-gray-400 mb-8"
        >
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          But don't worry, let's get you back on track!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              <span className="font-semibold">Go Home</span>
            </Link>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="group flex items-center gap-3 px-8 py-4 bg-dark-light border-2 border-accent rounded-full hover:bg-accent hover:border-accent transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Go Back</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12"
        >
          <p className="text-gray-500 text-sm">Error Code: 404 | Page Not Found</p>
        </motion.div>
      </div>
    </div>
  );
}

