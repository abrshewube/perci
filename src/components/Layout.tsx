import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

