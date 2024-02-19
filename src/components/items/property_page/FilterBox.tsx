import React from "react";

const FilterBox = () => {
  return (
    <div className="bg-black w-auto sm:w-full md:w-auto py-8 px-4 shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* First Column: Bedrooms */}
        <div className="flex flex-col border-b sm:border-r border-gray-500 sm:pr-4">
          <label
            htmlFor="bedrooms"
            className="text-hoverColor font-semibold font-header mb-2"
          >
            Bedrooms
          </label>
          <select
            id="bedrooms"
            className="bg-transparent text-gray-300 rounded-md py-2 px-3 "
          >
            <option value="1" className="bg-hoverColor text-black font-mono">
              1 Bedroom
            </option>
            <option value="2" className="bg-hoverColor text-black font-mono">
              2 Bedrooms
            </option>
            <option value="3" className="bg-hoverColor text-black font-mono">
              3 Bedrooms
            </option>
            <option value="4" className="bg-hoverColor text-black font-mono">
              4 Bedrooms
            </option>
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Second Column: Price */}
        <div className="flex flex-col border-b sm:border-r border-gray-500 sm:pr-4">
          <label
            htmlFor="price"
            className="text-hoverColor font-semibold font-header mb-2"
          >
            Price
          </label>
          <select
            id="price"
            className="bg-transparent text-gray-300 rounded-md py-2 px-3 "
          >
            <option
              value="100000"
              className="bg-hoverColor text-black font-mono"
            >
              $100,000
            </option>
            <option
              value="200000"
              className="bg-hoverColor text-black font-mono"
            >
              $200,000
            </option>
            <option
              value="300000"
              className="bg-hoverColor text-black font-mono"
            >
              $300,000
            </option>
            <option
              value="400000"
              className="bg-hoverColor text-black font-mono"
            >
              $400,000
            </option>
            {/* Add more options as needed */}
          </select>
        </div>
        {/* Third Column: Submit Button */}
        <button className="bg-white text-hoverColor text-2xl font-header py-2 px-4  hover:bg-hoverColor hover:text-black transition-colors duration-300 ease-in-out col-span-3 sm:col-span-1">
          APPLY FILTERS
        </button>
      </div>
    </div>
  );
};

export default FilterBox;
