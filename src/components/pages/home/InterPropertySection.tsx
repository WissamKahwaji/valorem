import React from "react";
import { useGetInterPropertiesInfoQuery } from "../../../api/inter_property/queries";
import PropertyCard from "../../ui/PropertyCard";

const InterPropertySection = () => {
  const { data: interPropertyInfo } = useGetInterPropertiesInfoQuery();

  return (
    <div className="bg-background py-5">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-primary font-header mb-3 capitalize">
          international projects
        </h1>
        <p className="text-hoverColor font-mono mb-8 text-lg md:text-lg lg:text-xl uppercase">
          COLLECTION OF BEST PROJECTS arround the world
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16 lg:px-24">
        {interPropertyInfo &&
          interPropertyInfo.map(property => (
            <PropertyCard
              key={property._id} // Don't forget to add a unique key prop
              id={property._id}
              name={property.name}
              image={property.img}
              location={property.location}
              description={property.description}
              price={property.price}
              linkTo={`/international-properties/${property._id}`}
            />
          ))}
      </div>
    </div>
  );
};

export default InterPropertySection;
