import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, title = "Welcome to Breaveheart Pizzeria" }) => {
  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap");
        .main-app {
          font-family: "Noto Sans SC", sans-serif !important;
        }
      `}</style>
      <div className="main-app">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="shortcut icon" href="/image/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/image/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/image/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/image/favicon-16x16.png"
          />
        </Head>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
