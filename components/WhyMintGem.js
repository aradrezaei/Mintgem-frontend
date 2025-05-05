'use client';

export default function WhyMintGem() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-14">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">درباره مینت جم</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            در دنیای شگفت‌انگیز بازی‌های دیجیتال، مینت جم با ارائه‌ی بهترین خدمات و تجربه خرید متفاوت، 
            مسیر خرید جم و ارزهای درون‌برنامه‌ای را برای گیمرهای ایرانی هموار کرده است. از خرید آنی و تحویل فوری گرفته تا 
            پشتیبانی حرفه‌ای، قیمت‌های رقابتی و امنیت سطح بالا، ما در کنار شما هستیم تا خیال‌تان از همه جهت راحت باشد.
            با مینت جم وارد دنیایی از امکانات ویژه شوید، جایی که کیفیت، سرعت و اعتماد، سه اصل اساسی ماست.
          </p>
        </div>
        <div className="w-full">
          <div className="overflow-hidden rounded-xl shadow-2xl border dark:border-gray-700">
            <img
              src="banner-mintgem.webp"
              alt="چرا MintGem"
              className="w-full h-80 object-cover hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
