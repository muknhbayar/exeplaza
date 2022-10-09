import React from "react";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const Sharedhouse = () => {
  return (
    <div className="flex justify-center m-0 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto ">
        <div>
          <h2 className="font-serif text-2xl text-gray-900 font-semibold mt-4 md:pl-10 text-center">
            シェアハウス（四谷・早稲田）
          </h2>
          <p className="font-light mt-8 font-sans text-gray-800 max-w-lg mx-4">
            当社では、海外からの留学生を中心としたシェアハウスの運営をしております。シェアハウスとは一軒の家やマンションを数人で使用する共同賃貸スタイルです。居室は個室になりますが、リビング、トイレ、キッチン、シャワー、家電（一部）などは共用となります。物価の高い東京で生活するため新スタイルとして特に外国人の間で定着しており、「外人ハウス」という呼び方でも知られています。&ldquo;日本の大学や日本語学校へ留学される方が日本で快適な生活を送れ
          </p>
          <Link href="/sharedhouse">
            <a
              className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mx-4"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              もっと詳しく知る
            </a>
          </Link>
        </div>

        <div>
          <img
            src="/assets/img/1663422100.jpg"
            loading="lazy"
            className="w-full px-8 pb-4 transition duration-300 ease-linear align-middle "
          />
        </div>
      </div>
    </div>
  );
};

export default Sharedhouse;
