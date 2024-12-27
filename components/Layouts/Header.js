import React, { useState, useRef, useEffect, useContext } from "react";
import Link from "next/link";
import { NavLinks } from "../nav/NavLinks";

const Header = () => {
  return (
    <>
      <header className="relative mt-3 border-t-0 border-b-2 border-l-0 border-r-0 border-solid border-gray-400 shadow p-1">
        <style jsx>
          {`
            @import url("../public/fonts/stylesheet.css");

            .logo-brand {
              font-family: "Braveheart", serif;
            }
          `}
        </style>
        <div style={{ bottom: "0", width: "100%" }}>
          <nav className="container mx-auto px-4 flex flex-col md:flex-row justify-around space-y-3 md:space-y-0 bg-white">
            <Link href="/">
              <div className="text-center md:items-center md:w-320 flex flex-wrap justify-center md:justify-evenly md:flex-nowrap md:text-left">
                <img
                  src={"https://i.imgur.com/R2suUiF.png"}
                  alt={"Shield-logo"}
                  style={{
                    width: "48px",
                    height: "48px",
                    marginRight: "8px",
                  }}
                ></img>
                <h3
                  className="logo-brand text-center inline text-4xl lg:text-5xl xl:text-6xl text-red-700 hover:text-scotland-blue"
                  style={{ cursor: "pointer" }}
                >
                  BraveHeart Pizzeria
                </h3>
              </div>
            </Link>
            <div className="pt-2 flex justify-evenly md:block">
              <NavLinks />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
