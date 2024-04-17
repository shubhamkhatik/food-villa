import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../utils/orderSlice";
import { clearCart } from "../utils/cartSlice";

const Payment = () => {
  const cartData= useSelector((store) => store.cart);
  const dispatch =useDispatch()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const Amount = useSelector((store) => store.cart.amount);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const amount = Amount;
    const currency = "INR";
    const receiptId = "Raz" + Date.now();

    try {
      const response = await fetch(
        "https://razorpay-swiggy.onrender.com/order",
        {
          method: "POST",
          body: JSON.stringify({
            amount,
            currency,
            receipt: receiptId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const order = await response.json();
      console.log("order=>", order);
      setLoading(false);

      var options = {
        key: "rzp_test_13wQJzMWMgzywK", // Enter the Key ID generated from the Dashboard
        amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency,
        name: "HiTech Solutions", //your business name
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        
        handler: async function (response) {
          const body = {
            ...response,
          };

          const validateRes = await fetch(
            "https://razorpay-swiggy.onrender.com/order/validate",
            {
              method: "POST",
              body: JSON.stringify(body),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const jsonRes = await validateRes.json();
          console.log("jsonRes", jsonRes);
          if(jsonRes){
            const currentTime = new Date();
            const orderData={
              orderData:cartData,
              time: currentTime
            }
            dispatch(addOrder(orderData))
            dispatch(clearCart());
            navigate("/orders");
          }
        },
        prefill: {
          //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          name: formData.name, //your customer's name
          email: formData.email,
          contact: formData.contact, //Provide the customer's phone number for better conversion rates
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new window.Razorpay(options);
     
      rzp1.on("payment.failed", function (response) {

        navigate("/error-page");
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
      rzp1.open();
     
      
    } catch (error) {
      navigate("/error-page");
    }
  };

  return (
    <div className="container mx-auto mt-8 max-w-md   bg-gradient-to-br from-yellow-300 via-green-400 to-blue-400 rounded p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-gradient-to-br from-yellow-300 via-green-400 to-blue-400  p-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            bg-gradient-to-r from-purple-300 to-pink-400 
            "
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            bg-gradient-to-r from-purple-300 to-pink-400 
            "
            id="email"
            type="text"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Contact
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            bg-gradient-to-r from-purple-300 to-pink-400 
            "
            id="contact"
            type="text"
            placeholder="Enter your contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline first-letter:
            bg-gradient-to-r from-purple-300 to-pink-400 
            "
            id="address"
            placeholder="Enter your address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={4} // Set the number of rows as needed
            required
          />
        </div>

        <div className="flex items-center justify-center">
          {!loading ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Pay
            </button>
          ) : (
            <button className="bg-neutral-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Wait Bro....
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Payment;
