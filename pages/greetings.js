import React from "react";
import MainLayout from "../layout/MainLayout";
import LazyLoad from "react-lazy-load";

const greetings = () => {
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
              社長メッセージ
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto bg-white max-w-7xl md:py-16">
        <div className="w-full p-4 md:mx-auto md:ml-4 md:w-72 xl:w-full ">
          <img src="/assets/img/1657970132.jpg" loading="lazy" />
        </div>

        <div className="w-full p-4 md:col-span-2 md:px-16 lg:col-span-3 ">
          <p className="font-sans font-light leading-7 mt-4 ">
            私ども、株式会社エクセは1991年8月6日に生まれました。
            <br />
            それから20年、20世紀の最後の10年と21世紀の最初の10年の激動の中をブティックの投資事業会社として、時代の流れとともに前へ前へと進んでまいりました。
          </p>

          <h2 className="font-serif text-2xl font-bold py-4">
            <em>変化こそチャンスである</em>
          </h2>
          <p className="font-sans font-light leading-7 mt-4 ">
            当社が常に掲げてきた信念は、「変化こそチャンスである」ということです。
            <br />
            時代の変化にたじろぐことなく、不安定化をむしろビジネスチャンスと捉えていくのが当社のスピリットです。
            <br />
            そして投資にあたっては、真に社会が必要としているものは何なのかを見据え、世の中の大勢がなびく「今」に乗るのではなく、時代の「これから」を見つけ出してそこに投資をし、事業を起こし、更に育てていくことを基本的な方針としております
            <br />
            <br />
            この信念が結実したものが、ここでご紹介する国内及びアジアを中心とするプロジェクトです。当社は、ミャンマー、モンゴル、イスラエルなどで数多くのプロジェクトを完成・運営し、雇用を通じてこれらの国々のお手伝いをさせていただいております。
            <br />
          </p>

          <h2 className="font-serif text-2xl font-bold py-4">
            <em> 「人材へのこだわり」 </em>
          </h2>

          <p className="font-sans font-light leading-7 mt-4 ">
            投資に関する信念は、「人」に対する信念にもつながります。
            <br />
            当社は人材への投資こそ最高の投資であると考えて、「自ら変化を求める人材」、「人と同じではなく自分なりの価値観を持っている人材」を常に求めております。
            <br />{" "}
            安定した人生を求めるより、当社をステップに将来は独立して経営者を目指そうとするような人材を歓迎いたします。
            <br />
            やる気のある若者を支援するために、当社は海外インターンシップを含めた実践研修の場も提供しております。{" "}
            <br />
            <br />
            ユニークな投資事業会社として常に前進を続ける当社のことを是非知っていただき、応援していただきますようお願いいたします。
            <br />
            <br />
            2017年9月吉日
            <br />
            代表取締役社長　谷　均
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default greetings;
