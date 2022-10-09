import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const Domesticprojects = () => {
  return (
    <div className="pb-8">
      <div className="my-8 pt-8">
        <h2 className="font-serif text-3xl text-gray-800 text-center font-semibold">
          国内プロジェクト
        </h2>
        <div className="flex justify-center">
          <hr className="border-b border-1 border-rose-300 w-16 mt-4" />
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              src="/assets/img/1663423410.jpg"
              loading="lazy"
              className="transition duration-300 ease-linear align-middle"
            />
          </div>

          <div className="m-4 max-w-lg">
            <h2 className="font-serif text-2xl text-gray-800 font-bold ">
              高級家具付き賃貸マンション（ベルサージュ目白）
            </h2>
            <p className="font-light mt-6 font-sans text-gray-800 max-w-xl ">
              ベルサージュ目白は、入居したその日からすぐに生活を始められる高級家具付き賃貸マンションです。東京メトロ副都心線「雑司が谷」駅より徒歩1分、閑静な目白の住宅街の一角にあります。副都心線は、渋谷、明治神宮前（原宿）、新宿3丁目、池袋などを結ぶ人気路線です。周辺には緑豊かで格式高い学習院大学、日本女子大学、広大で美しい
            </p>
            <Link href="/bellsarge">
              <a
                className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                もっと詳しく知る
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domesticprojects;
