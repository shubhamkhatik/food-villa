import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../constants";

export const Orders = () => {
  const orderItems = useSelector((store) => store.order.orders);

  return (
    <div className="mx-8 flex flex-col sm:mx-14 md:mx-24 lg:mx-44 pb-4 my-3">
      {
        orderItems.length === 0 && (
          <div className="w-100% md:h-[calc(100vh-80px)] flex items-center flex-col justify-center my-0 mx-auto text-center">
            <div className="w-96">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
                alt=""
              />
            </div>
            <div className="mt-6 text-base font-semibold">
             NO any current orders
            </div>
            <div className="mt-2">
              You can go to home page to buy some food
            </div>            
          </div>  
        )
      }
      {orderItems.map((order, index) => (
        <div className="border-b-2">
          <div className="text-black font-bold mb-2">
            Order Date and Time:{" "}
            <span className="text-blue-500">
              {order?.time?.toLocaleString()}
            </span>
          </div>
          {order?.orderData?.items.map((item) => (
            <div
              key={item.id}
              className="pl-2 pb-2 grid grid-cols-2 md:flex justify-between md:items-center gap-1 my-2"
            >
              <img
                className="w-24"
                src={IMG_CDN_URL + item.imageId}
                alt=""
                onError={(event) => (event.target.style.display = "block")}
              />
              <div className="text-sm line-clamp-1 md:line-clamp-none lg:line-clamp-none md:w-60 md:text-lg">
                {item?.name}
              </div>
              <div className="flex justify-between font-poppins w-20 h-7 border bg-slate-50 text-black py-[2px] px-2">
                <span className="text-base">quantity: {item?.quantity}</span>
              </div>
              <div className="w-14 font-medium flex justify-center">
                <span className="text-lg">
                  &#8377;{(item?.price + 0.0) / 100}.00
                </span>
              </div>
            </div>
          ))}
          <div className="text-black font-bold mb-2">
            Total Item Count:{" "}
            <span className="text-green-500">
              {order?.orderData?.totalItemCount}
            </span>
          </div>
          <div className="text-black font-bold mb-2">
            Amount:{" "}
            <span className="text-yellow-500">{order?.orderData?.amount/100}.00</span>
          </div>
        </div>
      ))}
    </div>
  );
};
