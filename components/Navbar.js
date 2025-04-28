'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all ${isScrolled ? 'bg-darkbg backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-extrabold text-primary">Gem Mint</div>
        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="px-4 py-2 bg-accent text-white rounded-full font-semibold hover:bg-pink-500 transition">ورود / ثبت‌نام</button>
          <button className="relative p-2 bg-primary text-white rounded-full hover:bg-secondary transition">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-white text-primary text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
          </button>
        </div>
      </div>
    </header>
  );
}
