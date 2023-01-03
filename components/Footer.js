import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSearch,
//   faAmbulance,
//   faAnchor,
// } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="sticky active:border-[3px] active:border-r-0 border-cyan-600 active:rounded my-[3px] hover:bg-rose-800 duration-150">
        <Link href="/contact"> 問い合わせ </Link>
      </div>
      <div className="grid gap-2 grid-cols md:grid-cols-3 bg-neutral-800 w-full p-4 md:p-12">
        <div className="max-w-lg pl-4 mt-4 md:p-4 md:ml-4">
          <h2 className="text-white text-md">お問い合わせ</h2>
          <ul className="text-gray-300 font-light pl-4 list-none w-full">
            <li>〒102-0083 東京都千代田区麹町1-10-5 澤田麹町ビル6階</li>
            <li>(81) 3 3288 2371 </li>
            <li> <a href="mailto:mail@exegroup.co.jp" className="hover:text-blue-500" > mail@exegroup.co.jp </a></li>
          </ul>
        </div>

        <div className="max-w-lg pl-4 mt-4 md:p-4 md:ml-4">
          <h2 className="text-white text-md ">エクセについて</h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
            <li className="nav-item">
              <Link href="/greetings">
                <a className="px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">社長メッセージ</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/corporate">
                <a className="px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">会社概要</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="max-w-lg pl-4 pb-4 mt-4 md:p-4 md:ml-4">
          <h2 className="text-white text-md ">プロジェクト</h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
            <li className="nav-item">
              <Link href="/domestic">
                <a className="px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">国内プロジェクト</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/myanmar">
                <a className="px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">ミャンマーのプロジェクト</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/mongolia">
                <a className="px-2 py-2 flex items-center text-md text-white hover:text-sky-300">
                  <span className="ml-2">モンゴルのプロジェクト</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <a
        className="to-top-button show px-3 py-2 mb-16 mr-8 border text-[12px] bg-gray-300 rounded-lg duration-300 "
        href="#"
      >
        <i className="fa-sharp fa-solid fa-arrow-up"></i>
        {/* <FontAwesomeIcon
        icon={faAmbulance}
        style={{ fontSize: 100, color: "orange" }}
      />
      <FontAwesomeIcon icon=" fa-arrow-up" /> */}
      </a>

      <div className="text-center text-sm font-light bg-zinc-900 text-gray-300 p-2">
        Copyright © 2022 EXE Corporation All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
