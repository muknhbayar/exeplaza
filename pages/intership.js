import React from "react";
import MainLayout from "../layout/MainLayout";

const intership = () => {
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
            <h2 className="font-bold text-4xl font-sans text-white uppercase">
              インターンシップ
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-auto max-w-6xl">
        <p className="font-sans font-light mt-8 py-4 text-gray-600">
          <em>
            &ldquo;「自ら変化を求める方」&rdquo; <br />
            &ldquo;「人と同じではなく自分なりの価値観を持っている方」&rdquo;
          </em>
        </p>
        <p className="font-sans font-bold text-gray-600">
          新しいことにチャレンジしてみませんか！？
        </p>
        <p className="font-sans font-light text-gray-600">
          年齢・学生・社会人は問いません。
          私たちの目的は、新たな一歩へ皆さんの背中を押すことです。
          チャレンジ、お待ちしています。
        </p>

        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden"></div>
            <table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                height: "180px",
              }}
              width="100%"
            >
              <colgroup>
                <col style={{ width: "20%" }} />
                <col style={{ width: "49.9341%" }} />
              </colgroup>
              <tbody>
                <tr>
                  <th className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8">
                    実施場所
                  </th>
                  <td className="text-md font-sans font-light text-black px-6 py-4 bg-slate-200 leading-8">
                    <span className="font-sans font-bold">
                      サクラタワー &nbsp;
                    </span>
                    <a
                      href="http://sakura-tower-yangon.com/"
                      className="underline text-sky-600 hover:text-sky-800"
                    >
                      http://sakura-tower-yangon.com/
                    </a>
                    <br />
                    <span className="font-sans font-bold">
                      サクラレジデンス &nbsp;
                    </span>
                    <a
                      href="http://sakura-residence-yangon.com/"
                      className="underline text-sky-600 hover:text-sky-800 "
                    >
                      http://sakura-residence-yangon.com/
                    </a>
                    <p>
                      (ミャンマー：ヤンゴン）
                      <br />
                      ※日本人が常に駐在しています。
                    </p>
                  </td>
                </tr>
                <tr>
                  <th className="text-md font-bold font-sans text-black px-6 py-4 leading-8">
                    お問い合わせ方法
                  </th>
                  <td className="text-md font-sans font-light text-black px-6 py-4 leading-8">
                    <p>
                      お電話又はお問い合わせフォームよりご連絡下さい。
                      <br />
                      株式会社エクセ　
                      <strong>TEL: (81) 3 3288 2371 / FAX: (81) 3 3288 2471</strong>
                      <br />
                      採用担当 中塚（なかつか）
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />

            {/*Internship overview  */}

            <h2 className="mt-12 font-bold text-xl pb-4">
              インターンシップ概要：別ページ
            </h2>

            <table
              style={{
                borderCollapse: "collapse",
                width: "100%",
                height: "509.6px",
              }}
              width="100%"
            >
              <colgroup>
                <col style={{ width: "20%" }} />
                <col style={{ width: "49.9341%" }} />
              </colgroup>
              <tbody>
                <tr style={{ height: "19.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                    style={{ height: "19.6px", textAlign: "left" }}
                  >
                    時期
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4 bg-slate-200 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    随時
                  </td>
                </tr>
                <tr style={{ height: "58.8px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                    style={{ height: "58.8px", textAlign: "left" }}
                  >
                    参加対象
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                    style={{ height: "58.8px" }}
                  >
                    年齢・職歴問わず、学生歓迎。
                  </td>
                </tr>
                <tr style={{ height: "19.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                    style={{ height: "19.6px", textAlign: "left" }}
                  >
                    応募資格
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    <ol className="list-decimal">
                      <li>アジアに興味がある、アジアが大好きな方。</li>
                      <li>
                        ホテル運営に興味があるなど好奇心を持ち、また向上心をもった元気のあ
                        る方。
                      </li>
                      <li>
                        リゾートホテルにおけるサービス、国際的な感覚、英語力等を身につけた
                        い方。
                      </li>
                      <li>自分の英語力、その他の言語力を試したい方。</li>
                      <li>旅行ではなく、人とは違った海外経験をしたい方。</li>
                    </ol>
                  </td>
                </tr>
                <tr style={{ height: "19.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                    style={{ height: "19.6px", textAlign: "left" }}
                  >
                    実施場所
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    サクラタワー、サクラレジデンス（ミャンマー：ヤンゴン）
                    <br />
                    ※日本人が常に駐在しています。
                  </td>
                </tr>
                <tr style={{ height: "19.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                    style={{ height: "19.6px", textAlign: "left" }}
                  >
                    職種
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    ウェイター・ウェイトレス、ハウスキーピング、お土産販売　など
                  </td>
                </tr>
                <tr style={{ height: "19.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                    style={{ height: "19.6px", textAlign: "left" }}
                  >
                    研修期間
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    1ヶ月～（要相談）
                  </td>
                </tr>
                <tr style={{ height: "39.2px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                    style={{ height: "39.2px", textAlign: "left" }}
                  >
                    応募から研修までの流れ
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                    style={{ height: "39.2px" }}
                  >
                    <ol className="list-decimal">
                      <li>
                        書類審査：履歴書（社会人の方は職務経歴書もご提出下さい）、作文「私
                        がビジネスインターンシップでしたいこと（400字）」、TOEICスコア検定
                        証のコピーをご提出頂きます。
                      </li>
                      <li>
                        一次面接：電話・Skypeによる研修概要と面接を行います。
                      </li>
                      <li>
                        最終面接：株式会社エクセ（東京・半蔵門オフィス）またはヤンゴンにて
                        面接を行います。
                        ※費用は交通・宿泊費は自己負担となります。
                      </li>
                      <li>最終合否判定</li>
                      <li>合格者はヤンゴンでの研修開始</li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                    style={{ height: "110px", textAlign: "left" }}
                  >
                    自己負担
                  </th>
                  <td className="text-md font-sans font-light text-black px-6 py-4 leading-8">
                    航空券・保険等費用
                    <br />
                    （日本－ヤンゴン航空券代、ヤンゴン－バガン移動費用、海外旅行保険料等）
                    <br />
                    ※研修は現地集合（ヤンゴン）となります。
                  </td>
                </tr>
                <tr>
                  <th className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8 text-left">
                    企業負担
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                    style={{ height: 196 }}
                  >
                    宿泊・食事等費用、通勤送迎費
                  </td>
                </tr>

                <tr style={{ height: "19.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                    style={{ height: "19.6px", textAlign: "left" }}
                  >
                    その他補足
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    <ol className="list-decimal">
                      <li>給与等の支給はございません。</li>
                      <li>
                        ミャンマー未来塾は採用に結びつくものではありません。
                        <br />
                        本採用を希望される方は別途選考を受けて頂く必要があります。
                        <br />
                        ※ミャンマー未来塾の生徒インターン生から本採用の実績あり。
                      </li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />

            {/* FAQs */}
            {/* <div>
              <h1 className="mt-8 font-serif text-3xl text-black font-bold pb-4">
                FAQs
              </h1>
            </div> */}

            {/* accordion */}

            {/* <div className="accordion bg-gray-500" id="accordionExample">
              <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingOne">
                  <button
                    className="
  accordion-button
  relative
  flex
  items-center
  w-full
  py-4
  px-5
  text-base text-gray-800 text-left
  bg-sky-50
  border-0
  rounded-none
  transition
  focus:outline-none
"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Duis aute irure dolor in reprehenderit?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-4 px-5 text-black">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingTwo">
                  <button
                    className="
  accordion-button
  collapsed
  relative
  flex
  items-center
  w-full
  py-4
  px-5
  text-base text-gray-800 text-left
  bg-sky-50
  border-0
  rounded-none
  transition
  focus:outline-none
"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-4 px-5">
                    <strong>
                      This is the second item&apos;s accordion body.
                    </strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It&apos;s also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="headingThree">
                  <button
                    className="
  accordion-button
  collapsed
  relative
  flex
  items-center
  w-full
  py-4
  px-5
  text-base text-gray-800 text-left
  bg-sky-50
  border-0
  rounded-none
  transition
  focus:outline-none
"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-4 px-5">
                    <strong>
                      This is the third item&apos;s accordion body.
                    </strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It&apos;s also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default intership;
