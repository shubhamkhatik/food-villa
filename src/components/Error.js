import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex flex-col justify-center w-full bg-yellow-500">
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <h2>error from useRouteError</h2>
      <h2>{err.status + " :  " + err.statusText}</h2>
      <Link to="/">
        <button className="text-2xl text-red-800 bg-orange-400">Home 👈</button>
      </Link>
    </div>
  );
};

export default Error;
