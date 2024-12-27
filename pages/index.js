import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/Layouts/Layout";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <style jsx>{``}</style>
      <Layout>
        <Head>
          <title>Braveheart Pizzeria</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="title"
            content="Braveheart Pizzeria home Page"
            key="title"
          />
          <meta
            name="description"
            content="Pizza Restaurant for families that provides great pizzas and appetizers "
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
            rel="stylesheet"
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
        <section className="top-section w-full flex flex-col items-center justify-center">
          <h1 className="block text-center text-white text-5xl lg:text-6xl xl:text-7xl font-bold pt-10 pb-1 font-serif">
            Welcome to Braveheart Pizzeria
          </h1>
          <h3 className="block font-cursive text-center text-indigo-400 xl:text-5xl lg:text-4xl av:text-3xl sm:text-2xl md:text-3xl font-semibold pt-1 pb-5">
            Free the hunger with Scottish taste
          </h3>
        </section>
        <div className="container mx-auto px-4">
          <section className="py-3 mt-3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center my-3">
              <i className="fas fa-pizza-slice  text-red-700 text-lg"></i>
              <h3 className="text-3xl font-bold py-2">
                Welcome to Braveheart Pizzeria
              </h3>
              <h5 className="text-2xl font-medium text-red-700 py-2">
                Coffee & Pizzeria
              </h5>
              <p className="text-lg font-medium text-scotland-blue py-2">
                Always open for you, your family and your companions after 16:00
                hs.
              </p>
              <p className="text-lg font-medium text-black py-2">
                We would like to to welcome you at our Pizza Place and enjoy the
                view of the land of the braves. We are offer a warm, friendly
                atmosphere to share a meal with family and friends at any time
                after 16:00 hs.
              </p>
              <button
                onClick={() => {
                  router.push("/menu");
                }}
                className="my-3 outline-none focus:outline-none rounded-2xl border border-transparent py-3 px-5 bg-scotland-blue text-white shadow-md hover:bg-white hover:text-scotland-blue hover:border-scotland-blue"
              >
                Visit Menu
              </button>
            </div>
            <div className="grid grid-cols-2 gap-5 my-3 items-center">
              <div>
                <img
                  src="https://i.imgur.com/QzqkL1X.png"
                  className="w-full "
                />
              </div>
              <div>
                <img
                  src="https://i.imgur.com/4h3jyek.png"
                  className="w-full "
                />
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
