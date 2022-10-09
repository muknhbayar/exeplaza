import React from "react";
import Link from "next/link";
import MainLayout from "../layout/MainLayout";
import LazyLoad from "react-lazy-load";

const mongolia = () => {
  return (
    <MainLayout>
      <div
        className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/assets/img/mv-sm.jpg")',
          backgroundColor: "rgba(0, 0, 0, 0)",
          height: 450,
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div>
            <h2 className="font-bold text-3xl font-sans text-white uppercase">
              モンゴルのプロジェクト
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl py-16">
        <div className="flex justify-center col-span-2 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex md:order-last md:ml-16 ">
              <img
                src="/assets/img/1659508110.jpg"
                loading="lazy"
                className="transition duration-300 ease-linear align-middle w-full h-72"
              />
            </div>
            <div className="w-full mr-8 pb-16 pl-8">
              <h2 className="font-serif text-3xl text-gray-800 font-bold ">
                教育
              </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl ">
                17年以上に渡り国内外の数学や物理学その他の様々な大会やコンテストにおいて500以上のメダルや栄誉を受け、50人以上の専任の優秀な教師を抱える「Olonglong」スクールは、モンゴルの中等学校の中でもトップ水準の学校です。現地子会社を通して、当社は同校に対し、ウランバートルの中心地に新しい校舎と設備を建設する資金を提供して参りました。「Olonglong」スクールとの協力体制の成功をベースに、当社はモンゴル社会への貢献に努めています。優秀な生徒だけではなくモンゴル各地の生徒たちにも広く教育の機会を与え、高品質な教育水準を提供することでモンゴルの急速な発展を期待しています。
              </p>
              {/* <Link href="/education">
                <a
                  className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  もっと詳しく知る
                </a>
              </Link> */}
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4 col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-16">
            <div>
              <img
                src="/assets/img/1659582198.jpg"
                loading="lazy"
                className="transition duration-300 ease-linear align-middle w-full"
              />
            </div>
            <div className="w-full mx-8 md:mx-16">
              <h2 className="font-serif text-3xl text-gray-800 font-bold ">
                金融業界
              </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl ">
                当社は、モンゴルで最大手の証券会社であるBD
                Secの大株主であり、取締役会のメンバーです。強大な経済発展の可能性を秘めているモンゴルの資本金融市場は、これからの数年以内に急成長を遂げることが予想されます。そのため、新しい金融商品や金融サービスをマーケットに紹介することを目的に、当社はEXE
                Operationという金融サービス会社を設立しました。
              </p>
              {/* <Link href="/finance">
                <a
                  className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  もっと詳しく知る
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default mongolia;
