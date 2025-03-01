import React, { useEffect, useState } from "react";
import useRestaurantData from "../utils/useRestaurantData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import FoodCarousel from "./FoodCarousel";
import RestaurantCarousel from "./RestaurantCarousel";
import ItemCarousel from "./ItemCarousel";
import ButtonList from "./ButtonList";
import ShimmerCursor from "./ShimmerCursor";
import { scrollApi } from "../constants";

// Throttle function to limit API calls
const throttle = (callback, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      callback(...args);
    }
  };
};

const Body = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(10);

  const {
    carousel,
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    setAllRestaurants,
    restaurantCarousel,
    itemCarousel,
  } = useRestaurantData();

  async function getRestaurantMore() {
    setLoading(true);
    try {
      const response = await fetch(scrollApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lat: 12.9715987,
          lng: 77.5945627,
          nextOffset: "COVCELQ4KID4ruup+9+KczCnEzgD",
          page: page, 
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (allRestaurants) {
        let newRestaurants =
          data.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

        setFilteredRestaurants((prev) => [...prev, ...newRestaurants]);
        setAllRestaurants((prev) => [...prev, ...newRestaurants]);
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (page > 10 && !loading) {
      getRestaurantMore();
    }
  }, [page]);

  // Throttled infinite scroll function
  const handelInfiniteScroll = throttle(() => {
    if (loading) return; 

    if (
      window.innerHeight + document.documentElement.scrollTop + 200 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  }, 1000); // Calls API at most once per 500ms

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  if (!allRestaurants) {
    return (
      <div>
        <ShimmerCursor />
        <Shimmer />
      </div>
    );
  }
  return allRestaurants.length === 0 ? (
    <div>
      <ShimmerCursor />
      <Shimmer />
    </div>
  ) : (
    <>
      <div className="mx-8 sm:mx-14 md:mx-24 lg:mx-44 pb-4">
        {carousel && <FoodCarousel data={carousel} />}
      </div>

      <div className="mx-8 sm:mx-14 md:mx-24 lg:mx-44 pb-4">
        <ItemCarousel data={itemCarousel} />
      </div>

      <hr className="mx-8 sm:mx-14 md:mx-24 lg:mx-44 border-1 border-solid border-gray-300 my-8" />

      <div className="mx-8 sm:mx-14 md:mx-24 lg:mx-40 p-4">
        <RestaurantCarousel data={restaurantCarousel} />
      </div>

      <hr className="mx-8 sm:mx-14 md:mx-24 lg:mx-44 border-1 border-solid border-gray-300 my-8" />

      <div className="mx-8 sm:mx-14 md:mx-24 lg:mx-44 ">
        <h1 className="font-bold text-2xl pb-4">
          Restaurants with online food delivery
        </h1>
        <div>
          <ButtonList />
        </div>
        <div
          className="grid grid-cols-1 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-8 mt-8"
          data-testid="res-list"
        >
          {filteredRestaurants &&
            filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.info.id}
                  key={restaurant.info.id}
                  className="pr-4"
                >
                  <RestaurantCard {...restaurant.info} />
                </Link>
              );
            })}
        </div>
      </div>
      {loading && <Shimmer />}
    </>
  );
};

export default Body;
