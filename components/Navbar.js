import React from "react";
import Link from "next/link";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between py-3" style={{backgroundColor: '#0e1447'}}>
        <div className="container pl-8 mx-auto flex flex-wrap items-center justify-between ml-0">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className=" font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
               <div>
        <img
          src="/assets/img/exe-logo.png" loading="lazy"
          className="w-28 px-2 transition duration-300 ease-linear align-middle "
        />
      </div>  
            </a>
            <button
              className="text-white font-light cursor-pointer text-3xl mr-0 lg:hidden outline-none focus:outline-none mr-8"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href="/">
                <a className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">                 
                  <span className="ml-2">HOME</span>
                </a>
                </Link>
              </li>
              {/* <li className="nav-item">
                <a
                  className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300"
                  href="/about"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">ABOUT EXE</span>
                </a>
              </li> */}
              <li className="nav-item">
                <Link href="/greetings">
                <a className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300">
                  <span className="ml-2">Message from SEO</span>
                </a>
                </Link>
              </li>
              <li className="nav-item">
               <Link  href="/corporate">
               <a
                  className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300"
                 
                >
                  <span className="ml-2">Corporate profile</span>
                </a>
               
               </Link>
              </li>
              <li className="nav-item">
                <Link href="/overseas">
                <a
                  className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300"
                  
                >
                  {/* <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i> */}
                  <span className="ml-2">OVERSEAS PROJECTS</span>
                </a>
                
                </Link>
              </li>
              <li className="nav-item">
               <Link href="/domestic">
               <a
                  className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300"
                  
                >
                  <span className="ml-2">DOMESTIC PROJECTS</span>
                </a>
               </Link>
              </li>
              <li className="nav-item">
                <Link href="/intership">
                <a
                  className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300"
                  
                >
                  <span className="ml-2">INTERSHIP</span>
                </a>
                
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/recrut">
                <a
                  className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300"
                  
                >
                  <span className="ml-2">RECRUT</span>
                </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                <a
                  className="px-2 py-2 flex items-center text-sm uppercase leading-snug text-white hover:text-sky-300"
                  
                >
                  <span className="ml-2">CONTACT</span>
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
