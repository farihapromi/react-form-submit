import React from 'react';

const Reusable = ({ formTitle, handleSubmit }) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
    };
    handleSubmit(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center text-blue-600">{formTitle}</h1>
      <form onSubmit={handleLocalSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="Submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          />
        </div>
      </form>
    </div>
  );
};

export default Reusable;
