import React from 'react'
import { toast } from 'react-toastify';

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    toast.success("Subscribed Successfully!");
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
      <p className="text-3xl font-bold text-gray-900 mb-2">
        Subscribe now & get <span className="text-indigo-600">20% off</span>
      </p>
      <p className="text-gray-600 mb-6">
        Subscribe for style updates, exclusive offers, and first dibs on new drops!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col sm:flex-row items-center gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-gray-50"
      >
        <input
          className="w-full sm:flex-1 outline-none px-4 py-2 rounded-md border border-gray-300 focus:border-indigo-500 transition"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-8 py-3 rounded-md transition"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox
