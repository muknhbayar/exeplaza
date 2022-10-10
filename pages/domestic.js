import React from "react";
import Aboutexe from "../components/Aboutexe";
import Announcements from "../components/Announcements";
import Domesticprojects from "../components/Domesticprojects";
import Sharedhouse from "../components/Sharedhouse";
import MainLayout from "../layout/MainLayout";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const domestic = () => {
  return (
    <MainLayout>
      <div
        className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/assets/img/japan.jpg")',
          backgroundColor: "rgba(0, 0, 0, 0)",
          height: 450,
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div>
            <h2 className="font-bold text-3xl font-sans text-white uppercase">
              国内プロジェクト
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl md:py-16">
        <div className="w-full p-4 md:col-span-2 md:px-16 lg:col-span-3 ">
          <h1 className="font-serif text-3xl font-bold">不動産事業</h1>
          <h2 className="font-serif text-2xl font-bold py-4">
            <em>不動産流動化事業</em>
          </h2>
          <p className="font-sans font-light leading-7 mt-4 ">
            主に都心エリアを対象に、エリアマーケットやニーズに合わせてバリューアップを行うことで、その不動産の価値を最大限まで引き上げる事業を行っています。取得から、リノベーション、リーシング、プロパティマネジメント、売却までをトータルに行います。
          </p>
          <h2 className="font-serif text-2xl font-bold py-4">
            <em>不動産賃貸事業</em>
          </h2>
          <p className="font-sans font-light leading-7 mt-4 ">
            都心を中心にレジデンスビル、商業ビル、パーキングなどを保有し、様々なノウハウで高稼働を維持しながら賃貸を行うことで、安定的な収益をあげています。
            また、デザイン性に優れたリノベーションを行ったシェアハウス、ゲストハウス事業にも力を入れており、国内外の学生、単身者向けに新たなライフスタイルの空間提供を行っています。
          </p>
          <h2 className="font-serif text-2xl font-bold py-4">
            <em>インベストメント事業</em>
          </h2>
          <p className="font-sans font-light leading-7 mt-4 ">
            不動産担保付債券の取得や不動産保有会社のM&Aなどを行っています。マーケットの変化を見逃すことなく、不動産と金融を融合させた新たな投資事業にも積極的に取り組んでいます。
          </p>
        </div>

        <div className="flex justify-center pt-4 col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-16">
            <div>
              <img
                src="/assets/img/1663423410.jpg"
                loading="lazy"
                className="transition duration-300 ease-linear align-middle w-full"
              />
            </div>
            <div className="w-full md:mx-8 p-4">
              <h2 className="font-serif text-2xl text-gray-800 font-bold ">
                高級家具付き賃貸マンション（ベルサージュ目白）
              </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl ">
                ベルサージュ目白は、入居したその日からすぐに生活を始められる高級家具付き賃貸マンションです。東京メトロ副都心線「雑司が谷」駅より徒歩1分、閑静な目白の住宅街の一角にあります。副都心線は、渋谷、明治神宮前（原宿）、新宿3丁目、池袋などを結ぶ人気路線です。
                周辺には緑豊かで格式高い学習院大学、日本女子大学、広大で美しい日本庭園を擁する椿山荘などがあります。
                また都電荒川線「鬼子母神駅」からは徒歩4分、おしゃれなレストランやカフェが多数あるJR山手線「目白駅」からは徒歩13分と3駅が徒歩圏内にあります。
                本物件1階にはコンビニエンスストアが入っており生活の拠点として大変便利な場所です。
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

            <div className="flex justify-center col-span-2 mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="flex md:order-last md:ml-16 w-full">
                  <img
                    src="/assets/img/1663422100.jpg"
                    loading="lazy"
                    className="transition duration-300 ease-linear align-middle w-full"
                  />
                </div>
                <div className="w-full md:mr-8 md:pb-16 mx-auto p-4">
                  <h2 className="font-serif text-2xl text-gray-800 font-bold">
                    シェアハウス（四谷・早稲田）
                  </h2>
                  <p className="font-light mt-6 font-sans text-gray-800 max-w-xl">
                    当社では、海外からの留学生を中心としたシェアハウスの運営をしております。シェアハウスとは一軒の家やマンションを数人で使用する共同賃貸スタイルです。
                    居室は個室になりますが、リビング、トイレ、キッチン、シャワー、家電（一部）などは共用となります。物価の高い東京で生活するため新スタイルとして特に外国人の間で定着しており、「外人ハウス」という呼び方でも知られています。
                    “日本の大学や日本語学校へ留学される方が日本で快適な生活を送れるためのお手伝いをしたい”という想いのもと、運営を行っております。
                    また、海外の方だけでなく日本人の方でもご入居いただけますので、異文化交流の場としてご活用いただきたいと思っております。
                    当社物件は学生の町として知られる四谷、早稲田にあります。いずれも駅から近く、周辺にコンビニエンスストアなどがある便利な場所で、すぐに生活をスタートできます。
                  </p>
                  <Link href="/sharedhouse">
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
        </div>
      </div>
    </MainLayout>
  );
};

export default domestic;
