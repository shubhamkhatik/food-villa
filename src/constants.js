
export const Resturant_Data_URL =
"https://swiggyappserver.onrender.com/api/restaurants?lat=12.9715987&lng=77.5945627";

  // "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9715987%26lng%3D77.5945627%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING";

  // "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
export const IMG_CDN_URL =
  // "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";


export const FETCH_MENU_URL =
"https://swiggyappserver.onrender.com/api/menu?lat=12.9715987&lng=77.5945627&restaurantId=";

// "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=43836";
// "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=78036&catalog_qa=undefined&submitAction=ENTER";

// "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D12.9715987%26lng%3D77.5945627%26restaurantId%3D";
//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=43836
export const FETCH_MENU_URL_MOBILE =
"https://swiggyappserver.onrender.com/api/menumobile?lat=12.9715987&lng=77.5945627&restaurantId=352792";
  // "https://corsproxy.org/?" +
  // encodeURIComponent(
  //   "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&submitAction=ENTER&restaurantId=352792"
  // );
export const scrollApi = 
"https://swiggyappserver.onrender.com/api/restaurants/more"

// "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/update"

         
/* Mock FAQ */
export const FAQ = [
  {
    id: 473,
    title: "Can I edit my order?",
    description:
      "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents",
  },
  {
    id: 474,
    title: "I want to cancel my order",
    description:
      "We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.",
  },
  {
    id: 475,
    title: "Will Insta Food be accountable for quality/quantity? ",
    description:
      "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.",
  },
  {
    id: 476,
    title: "Is there a minimum order value?",
    description:
      "We have no minimum order value and you can order for any amount. ",
  },
  {
    id: 477,
    title: "Do you charge for delivery?",
    description:
      "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. ",
  },
  {
    id: 478,
    title: "How long do you take to deliver?",
    description:
      "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.",
  },
  {
    id: 479,
    title: "What are your delivery hours?",
    description:
      "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.",
  },
  {
    id: 481,
    title: "Is single order from many restaurants possible?",
    description:
      "We currently do not support this functionality. However, you can place orders for individual items from different restaurants.",
  },
];
