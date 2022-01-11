import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function PizzaCard({ pizza, customizePizzaHandler }) {
  const { addCart } = useContext(AppContext);
  const addToCartHandler = (pizza) => {
    addCart({ ...pizza, quantity: 1 });
  };

  return (
    <>
      <style jsx>
        {`
          .truncate-overflow {
            --lh: 1.2rem;
            line-height: var(--lh);
            --max-lines: 2;
            position: relative;
            max-height: calc(var(--lh) * var(--max-lines));
            overflow: hidden;
            padding-right: 5px; /* space for ellipsis */
          }
          .truncate-overflow:after{
            content: '...',
            position: 'absolute',
            
          }
        `}
      </style>
      <div className="rounded-sm shadow-md bg-white my-3 pb-12 relative">
        <img src={pizza.image} className="rounded-b-none w-full mb-3" />
        <h3 className="font-black sm:text-xs av:text-xl lg:text-xl xl:text-xl text-red-600 sm:px-0 lg:px-0 px-3">
          {pizza.name}
        </h3>
        <p className="text-sm text-blue-400 sm:px-0 lg:px-0 px-3 pb-3 sm:pb-16 sm:text-xs overflow-ellipsis overflow-hidden">
          {pizza.ingDescription}
        </p>
        <div className="sm:flex sm:flex-col grid grid-cols-4 text-center my-3 absolute w-full -bottom-3">
          <div>
            <button
              onClick={() => addToCartHandler(pizza)}
              className="outline-none sm:text-base text-lg bg-scotland-blue text-white w-full sm:pt-0 py-2 text-center focus:outline-none border border-scotland-blue hover:bg-white hover:text-scotland-blue hover:border-2 hover:border-scotland-blue"
            >
              <i className="fas fa-cart-plus sm:text-xs text-center"></i>
            </button>
          </div>
          <div className="col-span-2 border sm:text-sm lg:text-base text-lg font-medium py-2">
            {pizza.pizzaType.includes("drinks")
              ? pizza.price + " £"
              : "From " + pizza.price + " £"}
          </div>
          <div>
            <button
              onClick={() => customizePizzaHandler(pizza)}
              hidden={pizza.pizzaType.includes("drinks")}
              className="outline-none sm:text-base sm:pt-0 text-lg focus:outline-none text-center bg-white text-scotland-blue w-full py-2 px-2 border border-scotland-blue hover:bg-scotland-blue hover:text-white hover:border-2 hover:border-scotland-blue"
            >
              <i className="fas fa-edit sm:text-xs text-center"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
