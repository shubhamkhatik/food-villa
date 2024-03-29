import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../constants";

const MenuCard = ({ ItemDetails }) => {
  const { imageId, name, defaultPrice, price, description, id } = ItemDetails;
  const cartItems = useSelector((store) => store.cart.items);
  const currentItem = cartItems.find((cartItem) => id === cartItem.id);

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <>
      <div className="flex justify-between">
        <div>
          <div>
            <h3 className="text-sm mr-1 sm:text-base font-medium text-[#3e4152] break-words">
              {name}
            </h3>
          </div>
          <div>
            <span className="mr-2 font-normal text-[#3e4152] text-sm">
              Rs {defaultPrice / 100 || price / 100}
            </span>
          </div>
          <div className=" mt-3 text-[#282c3f73] text-sm overflow-x-auto max-w-md md:max-w-xl">
            {description}
          </div>
          <div></div>
        </div>
        <div className="relative">
          <img
            src={IMG_CDN_URL + imageId}
            className="h-24 w-[118px] border border-[#d4d5d9] rounded-lg shadow-md"
            alt="menuItem"
          />
          <div className="absolute inset-0 left-1/2 top-20 -translate-x-1/2 grid item-center w-20 md:w-24 h-9 rounded-lg text-sm font-semibold bg-white text-center border shadow-md">
            {!currentItem ? (
              <button
                data-testid="addBtn"
                className=" text-[#60b246] w-full g-full cursor-pointer"
                onClick={() => addFoodItem(ItemDetails)}
              >
                Add
              </button>
            ) : (
              <button
                data-testid="addBtn"
                className=" text-[#4a7dbe] w-full g-full"
              >
                Added
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="border-b my-5"></div>
    </>
  );
};

export default MenuCard;
