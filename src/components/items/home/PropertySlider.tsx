import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetMinPricePropertiesInfoQuery } from "../../../api/properties/queries";
import { Link } from "react-router-dom";

const PropertySlider = () => {
  const { data: propertyInfo } = useGetMinPricePropertiesInfoQuery();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} className="mx-10">
        {propertyInfo &&
          propertyInfo.map((property, index) => (
            <Link to={`/property-details/${property._id}`}>
              <div key={index}>
                <div
                  key={index}
                  className="relative w-full h-[400px] md:h-[520px] lg:h-[520px] overflow-hidden border border-gray-300 group"
                >
                  <img
                    src={property.img}
                    alt=""
                    className="w-full h-full object-cover transition-transform transform scale-100 group-hover:scale-105"
                  />
                  <p className="absolute left-4 bottom-7 text-white font-header font-bold text-2xl">
                    {property.location}
                  </p>
                  <div className="absolute top-0 left-0 w-full h-full bg-primary flex flex-col justify-center items-center transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out">
                    <div className="text-white text-center font-body text-xs md:text-base lg:text-lg px-2 md:px-3 lg:px-5 py-3 overflow-y-auto">
                      {property.bio}
                    </div>
                    <button className="p-2 mt-5 mb-10 font-header border border-white bg-transparent text-white hover:bg-white hover:text-primary transform duration-500 ease-in-out">
                      DISCOVER MORE
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </Slider>
    </div>
  );
};

export default PropertySlider;
