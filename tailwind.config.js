export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      'hero-pattern': "url('/src/assets/milimani.jpg')",
    },
    colors: {
      primary: '#1e3a8a',
      secondary: '#10b981',
    },
    animation: {
      'spin-slow': 'spin 20s linear infinite',
    }
  },
};
export const plugins = [];
