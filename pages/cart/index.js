import React, { useEffect, useContext, useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layouts/Layout";
import { AppContext } from "../../context/AppContext";
import { useRouter } from "next/router";
import CartPizzaCard from "../../components/cart/CartPizzaCard";
import CartFinances from "../../components/cart/CartFinances";
import CouponForm from "../../components/cart/CouponForm";

export default function CartPage() {
  const { cartOrders } = useContext(AppContext);
  const [validCoupon, setValidCoupon] = useState({});

  useEffect(() => {
    if (process.browser) {
      let localData = localStorage.getItem("validCoupon");
      let savedCoupon = localData ? JSON.parse(localData) : {};
      setValidCoupon(savedCoupon);
    }
  }, []);

  useEffect(() => {
    console.log(validCoupon);
    localStorage.setItem("validCoupon", JSON.stringify(validCoupon));
  }, [validCoupon]);
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Cart Page</title>
        <link rel="shortcut icon" href="../../public/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="title"
          content="Braveheart Pizzeria home Page"
          key="title"
        />
        <meta
          name="description"
          content="Pizza Restaurant for families that provides great pizzas and appetizers "
        />
      </Head>
      <div className="container px-3 my-3 mx-auto">
        {cartOrders.length > 0 ? (
          <>
            <h1 className="sm:text-xl text-3xl text-scotland-blue text-center font-bold py-3">
              You have {cartOrders.length} items in Cart
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 md:col-span-2 w-full">
                {cartOrders.map((pizza) => {
                  return <CartPizzaCard key={pizza.id} pizza={pizza} />;
                })}
              </div>
              <div>
                <div className="grid grid-cols-1 gap-6">
                  <div className="row-start-2 md:row-start-1">
                    <CartFinances
                      cartOrders={cartOrders}
                      couponValue={validCoupon}
                      setValidCoupon={setValidCoupon}
                      cartPage
                    />
                  </div>

                  <CouponForm setValidCoupon={setValidCoupon} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-lg text-scotland-blue font-bold py-8 pb-20 text-center ">
              You Haven't Ordered any Thing yet, Check Our{" "}
              <span
                className="cursor-pointer underline pb-1 text-red-700 "
                onClick={() => {
                  router.push("/menu");
                }}
              >
                Menu
              </span>{" "}
              First
            </h1>
          </>
        )}
      </div>
    </Layout>
  );
}
