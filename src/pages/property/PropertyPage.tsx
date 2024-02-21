import React from "react";
import HeaderSection from "../../components/pages/property_page/HeaderSection";
import FilterBox from "../../components/items/property_page/FilterBox";
import PropertyCard from "../../components/ui/PropertyCard";
import { motion } from "framer-motion";
import { useGetPropertiesInfoQuery } from "../../api/properties/queries";
const PropertyPage = () => {
  const { data: propertyInfo } = useGetPropertiesInfoQuery();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderSection
        img="https://www.sobharealty.com/media/yn2a4sbg/apartments_banner_desktop-1.webp?width=1920&height=944&rnd=133517550605730000"
        title="OUR PROPERTIES"
        description="Discover a haven of luxury and community at Valorem Properties, where
      meticulous design and lush greenery redefine urban living."
        bottom="bottom-0"
        top="top-0"
      />
      <div className="mb-20 mt-10  flex flex-col items-center justify-center">
        <p className="text-lg md:text-3xl lg:text-3xl text-primary font-header mb-8">
          DISCOVER A PREMIUM LIFESTYLE
        </p>
        {/* <FilterBox /> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16 lg:px-24 mb-10">
        {propertyInfo &&
          propertyInfo.map(property => (
            <PropertyCard
              key={property._id} // Don't forget to add a unique key prop
              id={property._id}
              name={property.name}
              image={property.img}
              location={property.location}
              description={property.description}
              price={property.breifDetails.at(3)?.value ?? "Call Us"}
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
              space={property.space}
            />
          ))}
      </div>
    </motion.div>
  );
};

export default PropertyPage;
