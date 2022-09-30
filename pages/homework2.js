import React from "react";

const homework2 = () => {
  return (
    <div>
      <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
              Олонлог эгзэ сургуулийн Л.Хийдэрчулуун багштай 10А анги
            </h1>
            <p className="text-md pb-4 leading-4 font-medium text-white sm:text-slate-900 dark:sm:text-slate-400">
              Нээлттэй хичээлийн гэрийн даалгавар
            </p>
          </div>
          <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <img
              src="/assets/img/10a/all.jpg"
              alt
              className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
              loading="lazy"
            />
            <img
              src="/assets/img/10a/garden.jpg"
              alt
              className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
            <img
              src="/assets/img/10a/boys.jpg"
              alt
              className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
          </div>

          <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
            <button
              type="button"
              className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
            >
              ДЭЛГЭРЭНГҮЙ...
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400 text-justify">
            10А анги нь 2022-2023 оны хичээлийн жилд нийт 14 сурагчтайгаар
            хичээллэж байна. Үүнээс 6 хөвгүүн, 8 охинтой. Анги удирдсан багшаар
            “АНГЛИ ХЭЛНИЙ” багш Л. Хийдэрчулуун багш удирдан ажилладаг. <br/>Манай
            анги нь бусад ангиудаас сурагчдынхаа тоогоор бага учир багш бүрийн
            хичээл дээр бүгд идэвхитэй оролцож, бие биедээ өөрсдийн мэдсэн,
            сурсан мэдлэг чадвараасаа хуваалцаж тусалдаг.
          </p>
        </div>
      </main>
    </div>
  );
};

export default homework2;
