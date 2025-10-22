import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme border-t border-theme py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-theme-muted flex items-center justify-center gap-2 mb-4 font-bold">
          Made with <Heart className="w-4 h-4 text-primary animate-pulse" fill="currentColor" /> by Perci Wolday
        </p>
        <p className="text-theme-muted text-sm font-bold">
          © {currentYear} Perci Wolday. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
