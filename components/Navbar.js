'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart, Sun, Moon, Menu, User, Search } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all ${isScrolled ? 'bg-white dark:bg-darkbg shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo and Name */}
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-extrabold text-primary">مینت جم</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/"><span className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition font-semibold">خانه</span></Link>
          <Link href="/services"><span className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition font-semibold">خدمات</span></Link>
          <Link href="/blog"><span className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition font-semibold">وبلاگ</span></Link>
          <Link href="/about"><span className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition font-semibold">درباره ما</span></Link>
          <Link href="/contact-us"><span className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition font-semibold">ارتباط با ما</span></Link>
          <Link href="/purchaseprocess"><span className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition font-semibold">فرایند خرید</span></Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search Box */}
          <div className="hidden lg:flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
            <input type="text" placeholder="جستجو..." className="bg-transparent outline-none text-sm text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400" />
            <Search size={18} className="text-gray-500 dark:text-gray-400 ml-2" />
          </div>

          {/* Light/Dark Mode Toggle */}
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Divider */}
          <div className="hidden lg:block w-px h-6 bg-gray-400/40 mx-2"></div>

          {/* Login/Register Button */}
          <button className="hidden lg:flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full font-semibold hover:bg-pink-500 transition">
            <User size={18} /> ورود / ثبت‌نام
          </button>

          {/* Shopping Cart */}
          <button className="relative p-2 bg-primary text-white rounded-full hover:bg-secondary transition">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-white text-primary text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 bg-primary text-white rounded-full hover:bg-secondary transition">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-darkbg shadow-md backdrop-blur-md flex flex-col items-center py-6 gap-6 animate-slideDown">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-primary">مینت جم</span>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <Link href="/"><span className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition font-semibold">خانه</span></Link>
            <Link href="/services"><span className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition font-semibold">خدمات</span></Link>
            <Link href="/blog"><span className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition font-semibold">وبلاگ</span></Link>
            <Link href="/about"><span className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition font-semibold">درباره ما</span></Link>
            <Link href="/contact-us"><span className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition font-semibold">ارتباط با ما</span></Link>
            <Link href="/purchaseprocess"><span className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition font-semibold">فرایند خرید</span></Link>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Search size={24} className="text-gray-700 dark:text-gray-300" />
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <User size={24} className="text-gray-700 dark:text-gray-300" />
            <ShoppingCart size={24} className="text-gray-700 dark:text-gray-300" />
          </div>
        </div>
      )}
    </header>
  );
}
