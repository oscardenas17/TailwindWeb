import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section>
        <div className=" m-auto w-full h-96">
          <img src="img/hero.jpg" alt="" className="w-full  md:h-[520px]" />

          <section>
            <div className="bg-wave-pattern h-6 bg-repeat-x relative -top-2">
              {" "}
            </div>
            <div className="bg-wave-pattern-dots text-center p-4 flex md:flex-row flex-col gap-3 justify-center">
              <Link
                to=""
                className="inline-block py-3 px-16 bg-black text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duraton-200"
              >
                Buy Now
              </Link>
              <Link
                to=""
                className="inline-block py-3 px-16 bg-red-500 text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duraton-200"
              >
                Watch the Trailer
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Header;
