import React from 'react';
import Logo from './assets/olp_logo.webp';

const App: React.FC = () => {
  const styles = {
    container: {
      backgroundColor: '#1A1A1A',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative' as const,
    },
    logoContainer: {
      maxWidth: '300px',
      width: '80%',
      zIndex: 1,
      animation: 'float 3s ease-in-out infinite',
    },
    logo: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    star: {
      position: 'absolute' as const,
      width: '2px',
      height: '2px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 0 5px #FFFFFF',
    },
  };

  // Generate random stars
  const generateStars = () => {
    return Array.from({ length: 100 }).map((_, index) => ({
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${index * 0.1}s`,
      },
    }));
  };

  return (
    <div style={styles.container}>
      {/* Animated stars background */}
      {generateStars().map((star, i) => (
        <div
          key={i}
          style={{
            ...styles.star,
            ...star.style,
            animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
          }}
        />
      ))}

      {/* Centered Logo */}
      <div style={styles.logoContainer}>
        <img 
          src={Logo}
          alt="OLP Logo"
          style={styles.logo}
        />
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </div>
  );
};

export default App;