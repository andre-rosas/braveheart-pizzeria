import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-5 relative bottom--100">
      <style jsx>
        {`
          @import url("../public/fonts/stylesheets.css");

          .logo-brand {
            font-family: "Braveheart", serif;
          }
        `}
      </style>
      <hr />
      <div className="flex flex-col md:flex-row items-center text-center md:justify-around md:text-left py-5 bg-scotland-blue text-white">
        <div>
          <Link href="/">
            <div>
              <h3
                className="logo-brand text-bold inline text-center text-3xl py-3 px-3 text-white md:text-4xl md:text-left"
                style={{ cursor: "pointer" }}
              >
                BraveHeart Pizzeria
              </h3>
            </div>
          </Link>
          <p className="text-base text-medium text-center pb-3 px-3 text-white md:text-lg md:text-left">
            Your stomach is free, have the courage to fill it.
          </p>
        </div>
        <div className="block md:flex flex-wrap justify-items-center my-0 md:my-5">
          <i className="fab fa-facebook my-9 cursor-pointer mx-2 text-center text-3xl md:text-4xl font-bold text-white hover:text-red-600"></i>
          <i className="fab fa-instagram my-9 cursor-pointer mx-2 text-center text-3xl md:text-4xl font-bold text-white hover:text-red-600"></i>
          <i className="fab fa-twitter my-9 cursor-pointer mx-2 text-center text-3xl md:text-4xl font-bold text-white hover:text-red-600"></i>
        </div>
        <div className="flex flex-wrap justify-items-center mb-1">
          <p className="text-lg md:text-xl">Made in 2022 |</p>
          <Link href="https://github.com/andre-rosas">
            <p
              className="hover:text-red-600 text-base md:text-lg"
              style={{ cursor: "pointer" }}
            >
              | Github
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
