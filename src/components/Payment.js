import React, { useState } from "react";
import { useSelector } from "react-redux";

const Payment = () => {
  const Amount = useSelector((store) => store.cart.amount);
  const cartAmount = Amount / 100;

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., payment processing)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto mt-8 max-w-md   bg-gradient-to-br from-yellow-300 via-green-400 to-blue-400 rounded p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-gradient-to-br from-yellow-300 via-green-400 to-blue-400 rounded p-4"
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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="amount"
          >
            Amount
          </label>
          <input
            //bgcolor added from plugin tailwind css
            className=" number-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            type="number"
            placeholder="Enter the amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
