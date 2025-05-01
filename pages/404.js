'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AlertTriangle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main>
              <Navbar />
        
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center px-6">
      <div className="flex flex-col items-center gap-6">
        <div className="bg-red-100 dark:bg-red-900 p-6 rounded-full">
          <AlertTriangle size={64} className="text-red-600 dark:text-red-400" />
        </div>
        <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white">404</h1>
        <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-300">صفحه‌ای که دنبالش هستی پیدا نشد!</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md">
          آدرس وارد شده اشتباه است یا ممکن است صفحه حذف شده باشد. برای بازگشت به خانه از دکمه زیر استفاده کن.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block px-6 py-3 bg-primary hover:bg-secondary text-white rounded-full font-semibold transition"
        >
          بازگشت به خانه
        </Link>
      </div>
    </div>

      <Footer />

    </main>
  );
}
