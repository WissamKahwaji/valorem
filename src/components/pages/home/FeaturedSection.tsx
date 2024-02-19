import React from "react";
import PropertySlider from "../../items/home/PropertySlider";

const FeaturedSection = () => {
  return (
    <div className="bg-seconBackground py-10">
      <div className="text-center">
        <p className="text-hoverColor font-header text-base md:text-xl lg:text-2xl mb-3">
          EXCLUSIVE LISTINGS IN TOP LOCATIONS
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-primary font-header mb-8">
          FEATURED LISTINGS
        </h1>

        <p className="font-body text-sm md:text-base lg:text-lg mx-auto md:w-2/3 lg:w-1/2 mb-14">
          Experience Dubai's diverse neighborhoods, offering serene beachfronts,
          green communities, and vibrant city districts. Find your ideal home or
          investment property today.
        </p>
      </div>
      <div className="container mx-auto">
        <PropertySlider />
      </div>
    </div>
  );
};

export default FeaturedSection;
