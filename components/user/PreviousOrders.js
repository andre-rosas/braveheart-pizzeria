import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import OrderDetailsModal from "./OrderDetailsModal";

export default function PreviousOrders() {
  const { confirmedOrders } = useContext(AppContext);
  const [orderDetailsModal, setOrderDetailsModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});

  const orderDetailsHandler = (order) => {
    console.log(order);
    setSelectedOrder(order);
    setOrderDetailsModal(true);
  };

  return (
    <div className="my-3 mb-5 mx-auto">
      <h3 className="text-center text-xl py-3 text-red-700 font-bold">
        Previous Orders
      </h3>
      {confirmedOrders.length > 0 && (
        <>
          <div className="grid grid-cols-4 text-center bg-scotland-blue text-white">
            <div className="border p-3 mx-auto w-full sm:text-base text-2xl">
              Order
            </div>
            <div className="border p-3 mx-auto w-full sm:text-base text-2xl">
              Price
            </div>
            <div className="border p-3 mx-auto w-full sm:text-base text-2xl">
              Date
            </div>
            <div className="border p-3 mx-auto w-full sm:text-base text-2xl">
              Details
            </div>
          </div>
          <div className="grid grid-cols-4 text-center bg-scotland-blue">
            {confirmedOrders.map((order, index) => {
              return (
                <>
                  <div className="border p-3 mx-auto w-full sm:text-base text-lg lg:text-xl xl:text-3xl text-white">
                    {index + 1}
                  </div>
                  <div className="border p-3 mx-auto w-full sm:text-base text-lg lg:text-xl xl:text-3xl text-white">
                    £{order.finalPrice}
                  </div>
                  <div className="border p-3 mx-auto w-full sm:text-sm text-lg lg:text-xl xl:text-2xl text-white">
                    {order.date}
                  </div>
                  <div className="border av:p-3 lg:p-3 xl:p-3 mx-auto w-full">
                    <button
                      className="bg-red-600 text-white font-medium text-center sm:text-xs lg:text-base xl:text-xl w-4/5 my-3 mx-auto block py-2 av:px-3 lg:px-3 xl:px-3 border-2 border-white outline-none hover:bg-white hover:text-red-700 hover:border-red-700 focus:outline-none"
                      onClick={() => orderDetailsHandler(order)}
                    >
                      Order Details
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
      {orderDetailsModal && (
        <OrderDetailsModal
          order={selectedOrder}
          setOrderDetailsModal={setOrderDetailsModal}
        />
      )}
    </div>
  );
}
