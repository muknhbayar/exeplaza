import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="grid gap-2 grid-cols md:grid-cols-3 bg-neutral-800 w-full p-12">
        <div className="max-w-lg pl-4 mt-4 md:p-4 md:ml-4">
          <h2 className="text-white text-md">CONTACT</h2>
          <ul className="text-gray-300 font-light pl-4 list-none w-full">
            <li>
              6F Sawada Kojimachi Bldg., 1-10-5 Kojimachi, Chiyoda-ku, <br />
              Tokyo 102-0083
            </li>
            <li>(813) 32882371 </li>
            <li>mail@exegroup.co.jp</li>
          </ul>
        </div>

        <div className="max-w-lg pl-4 mt-4 md:p-4 md:ml-4">
          <h2 className="text-white text-md ">About EXE</h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
            <li> <a href="/greetings" className="hover:text-sky-300"> Message from the CEO </a> </li>
            <li> <a href="/corporate" className="hover:text-sky-300"> Corporate Profile </a> </li>
          </ul>
        </div>

        <div className="max-w-lg pl-4 pb-4 mt-4 md:p-4 md:ml-4">
          <h2 className="text-white text-md ">Projects</h2>
          <ul className="text-gray-300 font-light pl-6 list-none">
            <li> <a href="/domestic" className="hover:text-sky-300"> Domestic Projects </a> </li>
            <li> <a href="/myanmar" className="hover:text-sky-300"> Myanmar Projects </a> </li>
            <li> <a href="/mongolia" className="hover:text-sky-300"> Mongolia Projects </a> </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm font-light bg-zinc-900 text-gray-300 p-2">
        Copyright © 2022 EXE Corporation All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
