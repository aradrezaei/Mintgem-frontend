'use client';

// 404 Page – Custom not found page for MintGem

import Link from 'next/link';

import { AlertTriangle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main>

      {/* Main 404 Content */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center px-6 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Error Icon */}
          <div className="bg-red-100 dark:bg-red-900 p-6 rounded-full shadow-md">
            <AlertTriangle size={64} className="text-red-600 dark:text-red-400" />
          </div>

          {/* Error Code */}
          <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white">404</h1>

          {/* Error Message */}
          <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-300">
            صفحه‌ای که دنبالش هستی پیدا نشد!
          </h2>

          {/* Description */}
          <p className="text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
            آدرس وارد شده اشتباه است یا ممکن است صفحه حذف شده باشد.
            لطفاً با استفاده از دکمه زیر به صفحه اصلی بازگردید.
          </p>

          {/* Back to Home Button */}
          <Link
            href="/"
            className="mt-4 inline-block px-6 py-3 bg-primary hover:bg-secondary text-white rounded-full font-semibold transition duration-300"
          >
            بازگشت به خانه
          </Link>
        </div>
      </div>


    </main>
  );
}
