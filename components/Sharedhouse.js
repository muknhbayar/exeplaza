import React from "react";

const Sharedhouse = () => {
  return (
    <div className="flex justify-center m-0 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto ">

      <div>
      <h2 className="font-serif text-2xl text-gray-900 font-semibold mt-4 pl-10">
          About EXE Corporation
        </h2>
        <p className="font-light mt-8 font-sans text-gray-800 max-w-lg mx-10">
          EXE Corporation was born on August 6th, 1991. Twenty years have passed
          since then, and as we were experiencing the turbulent last 10 years of
          the 20th century and the first 10 years of the 21st century, we have
          been constantly moving forward as a boutique investment house adapting
          to the change of air and the trend of the times.
        </p>
        <a
          className="inline-block px-8 py-4 mt-8 ml-10 bg-sky-500 text-white font-light text-sm leading-snug uppercase rounded hover:bg-sky-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          href="#!"
          role="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          LEARN MORE
        </a>
      </div>

        
      

      <div>
        <img
          src="/assets/img/1663422100.jpg" loading="lazy"
          className="w-full px-8 pb-4 transition duration-300 ease-linear align-middle "
        />
      </div>
    </div>
    </div>
  );
};

export default Sharedhouse;
