'use client';

import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-darkbg transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="flex items-center justify-center h-96 bg-gradient-to-r from-primary to-secondary text-white text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">درباره ما</h1>
          <p className="text-xl">داستان مینت جم - سرعت، امنیت، حرفه‌ای بودن</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-primary mb-6">ماموریت ما</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-8">
            ما در مینت جم متعهد هستیم که سریع‌ترین، امن‌ترین و حرفه‌ای‌ترین تجربه خرید پول بازی‌های دیجیتال را ارائه دهیم.
            ماموریت ما ساده است: دنیای بازی‌ها را برای همه قابل دسترس‌تر و لذت‌بخش‌تر کنیم.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1614798572541-68b4efbdc052" alt="Gaming" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">چرا مینت جم؟</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-2">سرعت بالا</h3>
              <p>خرید سریع و بدون معطلی.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-2">امنیت فوق‌العاده</h3>
              <p>محافظت از اطلاعات و پرداخت‌ها.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-2">تخفیف‌های ویژه</h3>
              <p>تخفیف برای کاربران وفادار.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-2">پشتیبانی حرفه‌ای</h3>
              <p>همیشه در کنار شما.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-extrabold text-primary mb-6">به خانواده مینت جم بپیوندید</h2>
        <Link href="/" className="px-6 py-3 bg-accent text-white rounded-full font-bold hover:bg-pink-500 transition">
          بازگشت به صفحه اصلی
        </Link>
      </section>
      
    </div>
  );
}
