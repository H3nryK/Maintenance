import React from 'react';
import { motion } from 'framer-motion';
import typescriptLogo from './assets/typescript.png';
import pythonLogo from './assets/python.png';
import tailwindcssLogo from './assets/tailwind.png';
import javascriptLogo from './assets/js.png';

const languages = [
  { name: 'TypeScript', logo: typescriptLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'TailwindCSS', logo: tailwindcssLogo },
  { name: 'JavaScript', logo: javascriptLogo },
];

const LanguageAnimation: React.FC = () => {
    return (
      <div className="flex flex-wrap justify-center mt-10 space-x-4 space-y-4">
        {languages.map((language, index) => (
          <motion.div
            key={index}
            className="m-3 p-3 bg-white text-gray-800 shadow-lg rounded flex items-center justify-center w-24 h-24"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: [0, 360, 0], transition: { duration: 3, repeat: Infinity } }}
          >
            <img src={language.logo} alt={language.name} className="h-16 w-16" />
          </motion.div>
        ))}
      </div>
    );
  };

export default LanguageAnimation;
