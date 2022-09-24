import React from 'react';
//Layout-ийг дуудаж байгаа хэсэг
import MainLayout from "../layout/MainLayout";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';




const recrut = () => {
  return (

    <MainLayout>

      {/* accordion react */}
      <div>

      <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Эхний асуулт
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                       Хариулт 1
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Асуулт 2
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Хариулт 2
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

      </div>
      <div className="max-w-2xl mx-auto text-center pt-4 font-sans">
        <h2 className="mx-auto text-center p-2 font-bold text-md">
        The latest recruitment information of EXE Corporation
        </h2>
        <p className="mx-auto text-center font-light text-md font-sans" >        
        EXE has operated a number of projects in Myanmar, Mongolia and we are hiring new graduates and mid-career employees at any time.
        </p>
      </div>
      <div className="flex flex-col mx-auto max-w-6xl">
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
                    Location
                  </th>
                  <td className="text-md font-sans font-light text-black px-6 py-4 bg-slate-200 leading-8">
                    <span className="font-sans font-bold">
                      {" "}
                      Sakura Tower&nbsp;{" "}
                    </span>
                    <a
                      href="http://sakura-tower-yangon.com/"
                      className="underline text-sky-600 hover:text-sky-800"
                    >
                      http://sakura-tower-yangon.com/
                    </a>
                    <br />
                    <span className="font-sans font-bold">
                      Sakura Residence&nbsp;
                    </span>
                    <a
                      href="http://sakura-residence-yangon.com/"
                      className="underline text-sky-600 hover:text-sky-800 "
                    >
                      http://sakura-residence-yangon.com/
                    </a>
                    <p>
                      (Myanmar: Yangon)
                      <br />
                      *Japanese are always stationed.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th className="text-md font-bold font-sans text-black px-6 py-4 leading-8">
                    Contact method
                  </th>
                  <td className="text-md font-sans font-light text-black px-6 py-4 leading-8">
                    <p>
                      Please contact us by phone or through the inquiry form.
                      <br />
                      EXE Co., Ltd.
                      <strong>TEL: (03) 3288 2371 / FAX: (03) 3288 2471</strong>
                      <br />
                      Recruitment Manager Nakatsuka
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />

            {/*Internship overview  */}

            <h2 className="mt-12 font-bold text-lg pb-4">
              Internship overview
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
                    Season
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4 bg-slate-200 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    As needed
                  </td>
                </tr>
                <tr style={{ height: "58.8px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                    style={{ height: "58.8px", textAlign: "left" }}
                  >
                    Participation target
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                    style={{ height: "58.8px" }}
                  >
                    Students are welcome regardless of age or work experience.
                  </td>
                </tr>
                <tr style={{ height: "19.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                    style={{ height: "19.6px", textAlign: "left" }}
                  >
                    Qualification requirements
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    <ol className="list-decimal">
                      <li>Those who are interested in Asia and love Asia.</li>
                      <li>
                        Enthusiastic person who has curiosity, such as an
                        interest in hotel management, and is ambitious.
                      </li>
                      <li>
                        Those who want to acquire service at a resort hotel, an
                        international sense, English ability, etc.
                      </li>
                      <li>
                        Those who want to test their English and other language
                        skills.
                      </li>
                      <li>
                        Those who want to have an overseas experience that is
                        different from other people, not a trip.
                      </li>
                    </ol>
                  </td>
                </tr>
                <tr style={{ height: "19.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                    style={{ height: "19.6px", textAlign: "left" }}
                  >
                    Location
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    Sakura Tower, Sakura Residence (Myanmar: Yangon)
                    <br />
                    *Japanese are always stationed.
                  </td>
                </tr>
                <tr style={{ height: "19.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                    style={{ height: "19.6px", textAlign: "left" }}
                  >
                    Occupation
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    Waiters/waitresses, housekeeping, souvenir sales, etc.
                  </td>
                </tr>
                <tr style={{ height: "19.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                    style={{ height: "19.6px", textAlign: "left" }}
                  >
                    Training period
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    From 1 month (consultation required)
                  </td>
                </tr>
                <tr style={{ height: "39.2px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8"
                    style={{ height: "39.2px", textAlign: "left" }}
                  >
                    Flow from application to training
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                    style={{ height: "39.2px" }}
                  >
                    <ol className="list-decimal">
                      <li>
                        Document review: We will ask you to submit your resume
                        (if you are working, please also submit your work
                        history), an essay "What I want to do in a business
                        internship (400 characters)", and a copy of your TOEIC
                        score certificate.
                      </li>
                      <li>
                        1st interview: We will conduct an interview with an
                        outline of the training by telephone or Skype.
                      </li>
                      <li>
                        Final interview: The interview will be held at EXE Co.,
                        Ltd. (Hanzomon office in Tokyo) or Yangon.
                      </li>
                      <li>
                        *Transportation and accommodation expenses will be borne
                        by the participants.
                      </li>
                      <li>Final pass/fail judgment</li>
                      <li>Successful applicants start training in Yangon</li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                    style={{ height: "110px", textAlign: "left" }}
                  >
                    Self-pay
                  </th>
                  <td className="text-md font-sans font-light text-black px-6 py-4 leading-8">
                    Air ticket, insurance, etc. <br />
                    (Japan-Yangon air ticket, Yangon-Bagan travel, overseas
                    travel insurance, etc.)
                    <br />
                    *The training will be held locally (Yangon).
                  </td>
                </tr>
                <tr>
                  <th className="text-md font-bold font-sans text-black px-6 py-4 bg-slate-200 leading-8">
                    Corporate burden
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4  bg-slate-200 leading-8"
                    style={{ height: 196 }}
                  >
                    Expenses for accommodation, meals, etc., commuting
                    transportation expenses
                  </td>
                </tr>

                <tr style={{ height: "19.6px" }}>
                  <th
                    className="text-md font-bold font-sans text-black px-6 py-4 leading-8"
                    style={{ height: "19.6px", textAlign: "left" }}
                  >
                    Other supplements
                  </th>
                  <td
                    className="text-md font-sans font-light text-black px-6 py-4 leading-8"
                    style={{ height: "19.6px" }}
                  >
                    <ol className="list-decimal">
                      <li>No salary is paid.</li>
                      <li>
                        Myanmar Mirai Juku does not lead to recruitment.
                        <br />
                        Those who wish to be hired must undergo a separate
                        selection process. <br />
                        *There is a track record of full-time employment from
                        students of Myanmar Mirai Juku.
                      </li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />

      
          </div>
        </div>
      </div>
    </MainLayout>

  )
}

export default recrut