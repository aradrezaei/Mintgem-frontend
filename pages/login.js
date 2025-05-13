'use client';

import { useState } from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState('');
  const [codeSent, setCodeSent] = useState(false);

  const handleSendCode = () => {
    // اینجا منطق ارسال کد تایید اضافه شود
    setCodeSent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 dark:from-gray-900 dark:to-black transition-colors">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-primary dark:text-white mb-8">
          {isLogin ? 'ورود به حساب کاربری' : 'ثبت‌نام در مینت جم'}
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">شماره موبایل</label>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md">
            <FaMobileAlt className="text-gray-400 mr-2" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-transparent outline-none w-full text-gray-800 dark:text-white"
              placeholder="مثلاً 09123456789"
            />
          </div>
        </div>

        {codeSent && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">کد تایید</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md outline-none text-gray-800 dark:text-white"
              placeholder="کد ارسال شده را وارد کنید"
            />
          </div>
        )}

        <button
          onClick={handleSendCode}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md font-bold hover:bg-secondary transition-all"
        >
          دریافت کد تایید
          <ArrowRight size={18} />
        </button>

        <p className="text-center mt-6 text-sm text-gray-600 dark:text-gray-400">
          {isLogin ? 'حساب ندارید؟' : 'حساب دارید؟'}
          <button onClick={() => setIsLogin(!isLogin)} className="text-primary font-bold ml-2">
            {isLogin ? 'ثبت‌نام' : 'ورود'}
          </button>
        </p>
      </div>
    </div>
  );
}
