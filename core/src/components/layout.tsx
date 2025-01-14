import React from 'react';
import ParticleBackground from './particles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      <main className="relative z-10">
        <div className="container mx-auto pt-2">
          <ParticleBackground />
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;