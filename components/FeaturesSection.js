import { FaRocket, FaShieldAlt, FaTags, FaHeadset } from 'react-icons/fa';

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12">چرا مینت جم؟</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <FaRocket className="text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">سرعت بالا</h3>
            <p>خرید سریع و بدون معطلی.</p>
          </div>
          <div className="text-center">
            <FaShieldAlt className="text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">امنیت فوق‌العاده</h3>
            <p>محافظت از اطلاعات و پرداخت‌ها.</p>
          </div>
          <div className="text-center">
            <FaTags className="text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">تخفیف‌های ویژه</h3>
            <p>تخفیف برای کاربران وفادار.</p>
          </div>
          <div className="text-center">
            <FaHeadset className="text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-2">پشتیبانی حرفه‌ای</h3>
            <p>همیشه در کنار شما.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
