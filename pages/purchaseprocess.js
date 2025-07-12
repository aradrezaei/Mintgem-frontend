'use client';



export default function PurchaseProcess() {
  return (
    <main>
        
    <section className="py-24 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-10 text-center text-indigo-600 dark:text-indigo-400">فرایند خرید در مینت جم</h1>

        <ol className="space-y-8 text-lg leading-relaxed">
          <li>
            <strong>۱. انتخاب بازی:</strong> ابتدا بازی مورد نظر خود را از لیست بازی‌ها در صفحه اصلی انتخاب کنید تا به صفحه اختصاصی آن هدایت شوید.
            <br />
            <span className="text-sm text-gray-500 dark:text-gray-400">نکته: اگر بازی مورد نظر شما موجود نبود، می‌توانید با پشتیبانی تماس بگیرید.</span>
          </li>

          <li>
            <strong>۲. انتخاب بسته:</strong> بسته‌ی مورد نظر را انتخاب کرده و اگر به صورت خودکار به سبد خرید هدایت نشدید، روی آیکون سبد خرید کلیک کرده و گزینه “تسویه حساب” را بزنید.
            <br />
            <span className="text-sm text-gray-500 dark:text-gray-400">نکته: بسته باید در بازی شما نیز قابل خرید باشد.</span>
          </li>

          <li>
            <strong>۳. بررسی سبد خرید:</strong> می‌توانید بسته‌های انتخابی را حذف یا ویرایش کرده و سپس روی “اقدام به پرداخت” کلیک کنید.
          </li>

          <li>
            <strong>۴. ورود یا ثبت‌نام:</strong> اگر حساب کاربری دارید وارد شوید، در غیر این‌صورت فرم ثبت‌نام را تکمیل کنید. (امکان خرید بدون ثبت‌نام هم وجود دارد.)
            <ul className="text-sm text-gray-500 dark:text-gray-400 list-disc ml-6 mt-2">
              <li>اطلاعات را با دقت وارد کنید.</li>
              <li>نام کاربری و رمز بازی برای شارژ حساب استفاده می‌شود.</li>
            </ul>
          </li>

          <li>
            <strong>۵. انتخاب درگاه پرداخت:</strong> یکی از درگاه‌های بانکی را انتخاب و خرید خود را انجام دهید.
            <br />
            <span className="text-sm text-gray-500 dark:text-gray-400">نکته: با هر کارت بانکی عضو شتاب می‌توانید پرداخت کنید.</span>
          </li>

          <li>
            <strong>۶. تکمیل خرید:</strong> پس از پرداخت، به سایت بازگردید و فاکتور خود را مشاهده کنید. همچنین پیامک و ایمیل تایید دریافت خواهید کرد.
            <ul className="text-sm text-gray-500 dark:text-gray-400 list-disc ml-6 mt-2">
              <li>تا پایان خرید وارد بازی نشوید.</li>
              <li>وضعیت سفارش‌ها از طریق پیامک ارسال می‌شود.</li>
              <li>در حساب کاربری، بسته در بخش "آخرین سفارشات" نمایش داده می‌شود.</li>
              <li>پس از تکمیل خرید، وضعیت به "تکمیل‌یافته" تغییر می‌کند.</li>
            </ul>
          </li>
        </ol>

        <div className="mt-12 p-6 bg-yellow-100 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-200 rounded-xl shadow">
          <p className="font-semibold">در صورتی که امکان خرید اینترنتی ندارید:</p>
          <p>می‌توانید از طریق تلگرام یا واتساپ مینت جم، خرید را به صورت دستی ثبت کنید.</p>
        </div>
      </div>
    </section>
    
    </main>
  );
}

