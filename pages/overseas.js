import React from "react";
import Projects from "../components/Projects";
import MainLayout from "../layout/MainLayout";
import Link from "next/link";
import LazyLoad from "react-lazy-load";

const overseas = () => {
  return (
    <MainLayout>
      <div
        className="top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden text-center relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'url("/assets/img/overseas.jpg")',
          backgroundColor: "rgba(0, 0, 0, 0)",
          height: 450,
        }}
      >
        <div className="flex justify-center items-center h-full">
          <div>
            <h2 className="font-bold text-4xl font-sans text-white uppercase">
              海外プロジェクト
            </h2>
          </div>
        </div>
      </div>

      <div className="p-8 mb-8 ">
        <div className="flex justify-center">
          <p className="text-center font-light mt-8 font-sans text-gray-800 max-w-3xl ">
            当社が常に掲げてきた信念「変化こそチャンスである」を形にしてきたのが、新興国を中心とした海外プロジェクトです。
            時代の変化をビジネスチャンスと捉え、社会に求められるもの、そして未来の時代を見据え投資を行って参りました。
            ミャンマー、モンゴル、ベトナム、イスラエルなどで数多くのプロジェクトを完成・運営し、これらの国々の発展のお手伝いをさせていただいております。
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl gap-8 pb-16">
        <div
          className="text-center relative overflow-hidden bg-no-repeat bg-cover fixed"
          style={{
            backgroundImage: 'url("/assets/img/1657618380.jpg")',
            height: 400,
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-white ">
                <h2 className="font-semibold text-3xl font-serif text-white pb-8">
                  ミャンマーのプロジェクト
                </h2>
                <Link href="/myanmar">
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

        <div>
          <div
            className="text-center relative overflow-hidden bg-no-repeat bg-cover fixed"
            style={{
              backgroundImage: 'url("/assets/img/1659582198.jpg")',
              height: 400,
            }}
          >
            <div
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <div className="flex justify-center items-center h-full">
                <div>
                  <h2 className="font-semibold text-3xl font-serif text-white pb-8">
                    モンゴルのプロジェクト
                  </h2>
                  <Link href="/mongolia">
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

export default overseas;
