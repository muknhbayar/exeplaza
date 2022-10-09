import React from "react";
import Link from "next/link";

const Aboutexe = () => {
  return (
    <div className="flex justify-center m-0 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mx-auto md:pl-16">
          <h2 className="font-serif text-2xl text-gray-900 font-semibold mt-4 text-center">
            エクセについて
          </h2>
          <p className="font-light mt-4 font-sans text-gray-800 max-w-lg m-4 md:mr-16">
            私ども、株式会社エクセは1991年8月6日に生まれました。
            <br />
            それから20年、20世紀の最後の10年と21世紀の最初の10年の激動の中をブティックの投資事業会社として、時代の流れとともに前へ前へと進んでまいりました。
          </p>

          <Link href="/greetings">
            <a
              className="inline-block ml-4 px-7 py-4 mb-8 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
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
            src="/assets/img/1658049181.jpg"
            className="w-full h-screen max-h-96 transition duration-300 ease-linear align-middle "
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutexe;
