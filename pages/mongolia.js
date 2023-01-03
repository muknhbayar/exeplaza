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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl md:py-16">
        <div className="flex justify-center col-span-2 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex md:order-last md:ml-16 ">
              <img
                src="/assets/img/1659508110.jpg"
                loading="lazy"
                className="transition duration-300 ease-linear align-middle w-full h-72"
              />
            </div>
            <div className="w-full pb-16 px-8">
              <h2 className="font-serif text-3xl text-gray-800 font-bold mt-8">
              教育分野
              </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl text-justify ">
              2010年からモンゴルの教育現場を支援し、総生徒数3,500人の校舎ビル建設プロジェクトを実行しました。従って次の段階として2018年にモンゴル初のITカリキュラムを小学校から教えるOlonlog EXE IT学校（オロンログ・エグゼ）を設立し運営をしています。IT以外に数学、英語といった科目を上級レベルまで勉強できるようにしています。現時点では「オロンロゴ・エグゼ」学校で小学校1年生から高校生まで500人近くの優秀な生徒が通い、デジタル時代のモンゴル代表になるため勤勉に勉強を続けています。<br/><br/>
              設立以来、短期間で生徒たちの学習意欲は高まり、その成果は成績で現れています。卒業後カナダ、日本、トルコといった国々の大学から全額奨学金を受け留学をしている生徒たちがいます。またモンゴル国内で大学に進学する生徒たちが全員がモンゴル国立大学、モンゴル国立工業大学といったトップの大学に進学しています。オロンログ・エグゼ学校が2020年度、2022年度の大学進学全国共通試験でトップ15校の中に入っています。また2019年度にはForbes Mongolia雑誌のモンゴル最優秀教育機関賞も受けています。
              </p>
              <Link href="/education">
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

        <div className="flex justify-center pt-4 col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-16">
            <div>
              <img
                src="/assets/img/1659582198.jpg"
                loading="lazy"
                className="transition duration-300 ease-linear align-middle w-full"
              />
            </div>
            <div className="w-full md:mx-16 px-8">
              <h2 className="font-serif text-3xl text-gray-800 font-bold mt-8 ">
              金融業界
              </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl text-justify ">
              株式会社エクセは、モンゴル最大手証券会社であるBDSec JSCの機関投資家大株主の一つであり、役員会に取締役も務めています。今までBDSecがモンゴル最大手の鉱山会社であるErdenes Tavan Tolgoi社の社債発行、最大手商業銀行であるKhan銀行のIPOといったモンゴル証券市場の主な大きな案件の主幹事会社を務めて来ました。その中でエグゼのモンゴル現地法人である金融サービス会社ターコイズ・ファイナンスがBDSecの引受業務の主なパートナーの一つです。<br/><br/>
              ターコイズ・ファイナンスがモンゴル金融庁の金融サービス免許を受けています。モンゴル証券取引所や店頭取引における株式や債券の引受業務など以外に現地の事業法人に直接ローンを発行し、非銀行部門の金融市場のマーケット・メーカーとしての役割も果たしています。
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
