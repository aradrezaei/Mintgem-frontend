'use client';

import { ShieldCheck, Clock, Headphones, ThumbsUp } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    { icon: ShieldCheck, title: "امنیت بالا", description: "اطلاعات شما با قوی‌ترین روش‌ها محافظت می‌شود." },
    { icon: Clock, title: "تحویل سریع", description: "سفارشات در کوتاه‌ترین زمان ممکن پردازش می‌شوند." },
    { icon: Headphones, title: "پشتیبانی ۲۴/۷", description: "تیم پشتیبانی همیشه در کنار شماست." },
    { icon: ThumbsUp, title: "رضایت کاربران", description: "بیش از هزاران کاربر راضی به ما اعتماد کرده‌اند." },
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-white text-primary p-4 rounded-full mb-4 shadow-lg">
              <feature.icon size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-sm opacity-80">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
