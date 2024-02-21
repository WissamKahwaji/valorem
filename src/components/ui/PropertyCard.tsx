import React from "react";
import { FaBath, FaBed, FaMapMarkerAlt, FaRuler } from "react-icons/fa";
import { Link } from "react-router-dom";

type PropertyProps = {
  id: string;
  image: string;
  name: string;
  price: string;
  location: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  space: string;
};

const PropertyCard = (props: PropertyProps) => {
  return (
    <Link to={`/property-details/${props.id}`}>
      <div
        key={props.id}
        className="h-[565px] md:h-[615px] lg:h-[630px] bg-white shadow-md rounded-lg overflow-hidden   duration-300 ease-in-out transform hover:scale-105"
      >
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-40 lg:h-64 object-cover"
        />
        <div className="bg-primary  py-2 px-4 text-white font-body font-bold text-xl">
          {props.price}
        </div>
        <div className="p-4 h-14  text-center">
          <h2 className="text-lg md:text-lg  md:h-28 lg:h-14 font-semibold font-header mb-1">
            {props.name}
          </h2>
          <div className="flex flex-row md:h-14 justify-center">
            <FaMapMarkerAlt className="text-lg md:text-lg text-hoverColor mr-2" />
            <p className="text-base md:text-base font-body text-subTitle mb-3">
              {props.location}
            </p>
          </div>
          <p className="h-14  overflow-hidden line-clamp-3 text-sm font-serif text-gray-600 mb-4 lg:mb-6">
            {props.description}
          </p>
          <div className="flex flex-col justify-between items-center">
            <div className="flex flex-col  lg:flex-row justify-center md:justify-between lg:justify-between w-full mb-2 md:mb-5 lg:mb-10">
              <div className="flex items-center">
                <FaBed className="text-subTitle mr-1" />
                <p className="text-sm text-gray-600 font-body font-semibold">
                  Bedrooms: {props.bedrooms}
                </p>
              </div>
              <div className="flex items-center">
                <FaBath className="text-subTitle mr-1" />
                <p className="text-sm text-gray-600 font-body font-semibold">
                  Bathrooms: {props.bathrooms}
                </p>
              </div>
              <div className="flex items-center">
                <FaRuler className="text-subTitle mr-1" />
                <p className="text-sm text-gray-600 font-body font-semibold">
                  Space: {props.space}
                </p>
              </div>
            </div>
            <hr className="w-full border-t border-gray-300 mb-3" />
            <button className="bg-subTitle w-full border border-white hover:border-subTitle hover:bg-primary text-white px-4 py-2 rounded-md text-sm transition-colors duration-300 ease-in-out">
              Read More
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
