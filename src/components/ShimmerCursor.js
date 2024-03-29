import React from "react";

const ShimmerCursor = () => {
  return (
    <div className="h-96 bg-[#171a29] flex flex-col items-center justify-center">
      <div className="relative flex flex-col items-center">
        <div className="absolute animate-ping rounded-full h-16 w-16 border-t-8 border-b-2 border-b-blue-300 mx-auto"></div>
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa"
          alt="ice-cream"
          className="w-11 mt-3"
        />
      </div>
      <div className="text-white text-xl font-bold mt-6">
        Looking for great food near you...
      </div>
    </div>
  );
};

export default ShimmerCursor;
