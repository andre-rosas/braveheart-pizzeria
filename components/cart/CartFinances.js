import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function cartFinances({
  cartOrders,
  couponValue,
  setValidCoupon,
  cartPage,
}) {
  const [cartTotal, setCartTotal] = useState(0);

  const [couponEntry, setCouponEntry] = useState({});

  const router = useRouter();
  const shippingFees = 5;

  useEffect(() => {
    let prices = [];
    for (let order in cartOrders) {
      prices.push(cartOrders[order].price * cartOrders[order].quantity);
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let totalPrice = prices.reduce(reducer);
    setCartTotal(totalPrice);
  }, [cartOrders]);

  useEffect(() => {
    if (couponValue.coupon !== undefined) {
      setCouponEntry(couponValue);
    } else {
      setCouponEntry();
    }
  }, [couponValue]);
  const removeCouponHandler = () => {
    setCouponEntry({});
    setValidCoupon({});
  };
  const checkoutHandler = () => {
    router.push("/checkout");
  };

  return (
    <div className="flex flex-wrap flex-col-reverse md:flex-col">
      <div>
        {cartPage && (
          <button
            onClick={checkoutHandler}
            className="rounded-md text-center w-full mx-auto my-3 shadow-md bg-scotland-blue text-white font-bold px-5 py-3 text-lg  outline-none focus:outline-none border border-scotland-blue hover:bg-white hover:text-scotland-blue hover:border-2 hover:border-scotland-blue"
          >
            Proceed to Checkout
          </button>
        )}
      </div>

      <div className="mt-3 mb-6 pb-3 border rounded-md shadow-md w-full">
        <div className="p-3 mb-3 bg-scotland-blue text-white text-lg font-medium capitalize">
          Cart Summary
        </div>
        <div className="flex justify-between px-3 my-2">
          <div className="font-semibold text-lg text-scotland-blue">Total</div>
          <div className="font-bold text-lg">{cartTotal.toFixed(2)} £</div>
        </div>
        <div className="flex justify-between px-3 my-2">
          <div className="font-semibold text-lg text-scotland-blue">
            Shipping Fees
          </div>
          <div className="font-bold text-lg">{shippingFees} £</div>
        </div>
        <div className="flex justify-between px-3 my-2">
          <div className="font-semibold text-lg text-scotland-blue">
            Coupon Discount
            {couponEntry && (
              <p className="text-red-500 text-sm font-medium pb-3 pt-1">
                {cartPage && (
                  <i
                    className="fas fa-times cursor-pointer"
                    onClick={removeCouponHandler}
                  ></i>
                )}{" "}
                {couponEntry.coupon}
              </p>
            )}
          </div>
          <div className="font-bold text-right text-lg">
            {couponEntry ? (cartTotal * couponEntry.value) / 100 : 0} £{" "}
            {couponEntry &&
              `(
           ${couponEntry.value}%)`}
          </div>
        </div>
        <hr />
        <div className="flex justify-between px-3 my-2">
          <div className="font-semibold text-lg text-scotland-blue">
            Total Price
          </div>
          <div className="font-bold text-lg">
            {couponEntry
              ? (
                  (cartTotal * (100 - couponEntry.value)) / 100 +
                  shippingFees
                ).toFixed(2)
              : (cartTotal + shippingFees).toFixed(2)}{" "}
            £
          </div>
        </div>
      </div>
    </div>
  );
}
