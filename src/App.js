import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Body from "./components/Body";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { Provider } from "react-redux";
import store from "./utils/store";
import MainRestaurantList from "./components/MainRestaurantList";
import SearchRestaurants from "./components/SearchRestaurants";
import Payment from "./components/Payment";
import Success from "./components/phonepe/success";
import Failure from "./components/phonepe/failure";
import { Orders } from "./components/Orders";

const Help = lazy(() => import("./components/Help"));
const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/offers",
        element: <MainRestaurantList />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/error-page",
        element: <Failure />,
      },
      {
        path: "/help",
        element: (
          <Suspense>
            <Help />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: <SearchRestaurants />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
