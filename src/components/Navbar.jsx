import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  console.log(navbar);
  return (
    <nav className=" w-full  bg-blue-500  xl:bg-gray-700 sticky top-0 z-50    ">
      <div className=" justify-between px-2 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
        <div>
          <div className="flex items-center justify-between py-2 md:py-2 md:block">
          
            <Link to="/" className=" flex items-center md:block">
              <img src="../../public/img/logo.png"  alt="Logo" />
            </Link>

            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3  md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            
            <div className=" flex flex-col m-0 md:flex-row items-center justify-center space-y-2  md:space-x-4 md:space-y-0  ">
              <Link to="/" className="link">
                Home
              </Link>
              <Link to="/play" className="link">
                Play Together
              </Link>
              <Link to="/explore" className="link">
                Explore
              </Link>
              <Link to="/bowser" className="link-border-yellow  my-4 inline-block">
                Bowser Fury
              </Link>
              <Link
                to="/buy"
                className="my-4 inline-block rounded-full bg-red-500 text-white font-bold px-6 py-2 md:py-3 hover:bg-white hover:text-black transition duration-500 text-center"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
