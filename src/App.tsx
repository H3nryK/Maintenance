import React from 'react';
import Countdown from './Countdown';
import LanguageAnimation from './LanguageAnimation';
import background from './assets/milimani.jpg';
import './index.css';

const App: React.FC = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      <header className="py-5 bg-black bg-opacity-50 w-full text-center">
        <h1 className="text-4xl font-bold">Milimani High School</h1>
        <p className="text-xl mt-2">Our website is undergoing maintenance and security updates.</p>
      </header>
      <main className="flex flex-col items-center my-10 bg-black bg-opacity-50 p-5 rounded-lg">
        <Countdown targetDate={new Date('2024-12-31T00:00:00')} />
        <p className="text-center mt-5 max-w-2xl">
          Milimani High School is dedicated to providing quality education and a conducive learning environment. We are currently improving our website to serve you better. Stay tuned for updates!
        </p>
        <LanguageAnimation />
      </main>
      <footer className="mt-auto py-5 bg-black bg-opacity-50 w-full text-center">
        <p>Contact us: info@milimanihighschool.co.ke</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-blue-300">Twitter</a>
          <a href="#" className="text-blue-600">Facebook</a>
          <a href="#" className="text-red-600">YouTube</a>
        </div>
      </footer>
      <div className="fixed bottom-5 right-5 bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
        <p>Contact us: info@milimanihighschool.co.ke</p>
      </div>
    </div>
  );
}

export default App;
