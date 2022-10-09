import React from "react";
import Link from "next/link";
import MainLayoutEn from '../../layout/MainLayoutEn';
import LazyLoad from "react-lazy-load";

const mongolia = () => {
  return (
    <MainLayoutEn>
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
              Mongolia Projects
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto bg-white max-w-6xl py-16">
        
        
      <div className="flex justify-center col-span-2 mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="flex md:order-last md:ml-16 ">
                  <img
                    src="/assets/img/1659508110.jpg"
                    loading="lazy"
                    className="transition duration-300 ease-linear align-middle w-full h-72"
                  />
                </div>
                <div className="w-full mr-8 pb-16 pl-8">
                  <h2 className="font-serif text-3xl text-gray-800 font-bold ">
                    Education
                  </h2>
                  <p className="font-light mt-6 font-sans text-gray-800 max-w-xl ">
                    After supporting Mongolian educational sector, financing
                    several school buildings with total capacity of 3,500
                    students, in 2018 we started operating our own private
                    school in Mongolia. This is “Olonlog EXE” ITschool, the
                    first kind of school in Mongolia, in which we teach the IT
                    curriculum from the elementary school stage. Now in “Olonlog
                    EXE” school there are nearly 500 bright students, from
                    elementary school grade 1 to high school, who are striving
                    to become the innovative power of Mongolia in the digital
                    era. <br />
                    Since the establishment within this short period of time the
                    students showed the great attitude towards the learning
                    where it is proven by the academic achievement. We have
                    students who received full scholarships from the US, Canada
                    and Japanese educational institutions. Not only scholarships
                    after their high school graduation but during their study in
                    the school, our students are winning medals constantly from
                    the various national and provincial level IT, Math and
                    English language competitions. We believe our students can
                    become the top international level professionals who will
                    lead not only in Mongolia but globally.
                  </p>
                  <Link href="/en/education">
                    <a
                      className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      role="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      LEARN MORE
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
            <div className="w-full mx-8 md:mx-16">
              <h2 className="font-serif text-3xl text-gray-800 font-bold ">
                Finance Industry
              </h2>
              <p className="font-light mt-6 font-sans text-gray-800 max-w-xl ">
                EXE Corporation is one of the biggest institutional shareholder
                and board member of BDSec JSC, the biggest brokerage and
                underwriting firm in Mongolia. Through our local subsidiary
                Turquoise Finance Non bank financial institution, a financial
                services company licensed by Mongolian Financial Regulatory
                Agency, we...
              </p>
              <Link href="/en/finance">
                <a
                  className="inline-block px-7 py-4 my-4 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  LEARN MORE
                </a>
              </Link>
            </div>

            
          </div>
        </div>
      </div>
    </MainLayoutEn>
  );
};

export default mongolia;
