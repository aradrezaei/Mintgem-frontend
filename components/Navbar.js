'use client';

// Modern, elegant Next.js navbar with animated mobile drawer, color transitions, and clean dark/light toggle.
import { useState, useEffect } from 'react';
import { ShoppingCart, Sun, Moon, Menu, User, Search, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all ${isScrolled ? 'bg-white/80 dark:bg-black/60 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="MintGem Logo" className="w-12 h-12 rounded-full" />
          <span className="text-xl font-bold text-gray-800 dark:text-gray-200">مینت جم</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          {['خانه', 'خدمات', 'وبلاگ', 'درباره ما', 'ارتباط با ما', 'فرایند خرید'].map((item, idx) => (
            <Link
              key={idx}
              href={
                idx === 0 ? '/' :
                idx === 1 ? '/services' :
                idx === 2 ? '/blog' :
                idx === 3 ? '/about' :
                idx === 4 ? '/contact-us' : '/purchaseprocess'
              }
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent font-medium transition"
            >
              {item}
            </Link>
          ))}
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link href="/login" className="flex items-center gap-1 px-4 py-2 bg-accent text-white rounded-full font-medium hover:bg-pink-500 transition">
            <User size={18} /> <span>ورود</span>
          </Link>
          <button className="relative p-2 rounded-full bg-primary text-white hover:bg-secondary transition">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-white text-primary text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(true)} className="lg:hidden p-2 bg-primary text-white rounded-full hover:bg-secondary transition">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-lg z-50 p-6 flex flex-col gap-6"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-primary">مینت جم</span>
              <button onClick={() => setMenuOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-red-500">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {['خانه', 'خدمات', 'وبلاگ', 'درباره ما', 'ارتباط با ما', 'فرایند خرید'].map((item, idx) => (
                <Link
                  key={idx}
                  href={
                    idx === 0 ? '/' :
                    idx === 1 ? '/services' :
                    idx === 2 ? '/blog' :
                    idx === 3 ? '/about' :
                    idx === 4 ? '/contact-us' : '/purchaseprocess'
                  }
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent font-medium transition"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link href="/login" onClick={() => setMenuOpen(false)} className="flex items-center gap-1 px-4 py-2 bg-accent text-white rounded-full font-medium hover:bg-pink-500 transition">
                <User size={18} /> <span>ورود</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
