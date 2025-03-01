import { useEffect, useState } from "react";
import { Resturant_Data_URL } from "../constants";
import {
  FOOD_CAROUSEL,
  ITEM_CAROUSEL,
  RESTAURANT_CAROUSEL,
  RESTAURANT_DATA,
} from "../mocks/data";

const useRestaurantData = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [carousel, setCarousel] = useState([]);
  const [restaurantCarousel, setRestaurantCarousel] = useState([]);
  const [itemCarousel, setItemCarousel] = useState([]);

  async function getRestaurants() {
    const data = await fetch(Resturant_Data_URL);
    console.log("data", data);

    const json = await data.json();
    if (window.innerWidth < 1024) {
      setCarousel(FOOD_CAROUSEL?.imageGridCards.info);
      setAllRestaurants(RESTAURANT_DATA?.restaurants);
      setFilteredRestaurants(RESTAURANT_DATA?.restaurants);
      setItemCarousel(ITEM_CAROUSEL?.card?.card?.imageGridCards?.info);
      setRestaurantCarousel(
        RESTAURANT_CAROUSEL?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } else {
      setCarousel(FOOD_CAROUSEL?.imageGridCards.info);

      // setCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      setItemCarousel(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);

      setRestaurantCarousel(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setAllRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    }
  }
  useEffect(() => {
    getRestaurants();
    window.scrollTo(0, 0);
  }, []);
  return {
    carousel,
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    setAllRestaurants,
    restaurantCarousel,
    itemCarousel,
  };
};

export default useRestaurantData;
