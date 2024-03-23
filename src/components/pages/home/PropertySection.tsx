import React from "react";
import PropertyCard from "../../ui/PropertyCard";
import {
  useGetLastPropertiesInfoQuery,
  useGetPropertiesInfoQuery,
} from "../../../api/properties/queries";

const PropertySection = () => {
  const { data: propertyInfo } = useGetLastPropertiesInfoQuery();

  return (
    <div className="bg-background py-5">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-primary font-header mb-3">
          NEW DEVELOPMENTS
        </h1>
        <p className="text-hoverColor font-mono mb-8 text-lg md:text-lg lg:text-xl">
          COLLECTION OF BEST PROJECTS IN DUBAI
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16 lg:px-24">
        {propertyInfo &&
          propertyInfo.map(property => (
            <PropertyCard
              key={property._id} // Don't forget to add a unique key prop
              id={property._id}
              name={property.name}
              image={property.img}
              location={property.location}
              description={property.description}
              price={property.price}
              bathrooms={property.bedrooms}
              bedrooms={property.bathrooms}
              space={property.space}
              linkTo={`/property-details/${property._id}`}
            />
          ))}
      </div>
    </div>
  );
};

export default PropertySection;
