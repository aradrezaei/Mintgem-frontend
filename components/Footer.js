'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-lg font-semibold">MintGem - فروشگاه پول بازی</p>
          <p className="text-sm text-gray-400">
            ساخته شده توسط{' '}
            <a href="https://mintgem.vercel.app/" target="_blank" className="underline hover:text-primary">
              آراد رضایی
            </a>{' '}
            | © 2025
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-primary transition">Instagram</a>
          <a href="#" className="hover:text-primary transition">GitHub</a>
          <a href="#" className="hover:text-primary transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
