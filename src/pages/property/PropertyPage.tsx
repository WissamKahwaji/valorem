import React, { useEffect, useState } from "react";
import HeaderSection from "../../components/pages/property_page/HeaderSection";
// import FilterBox from "../../components/items/property_page/FilterBox";
import PropertyCard from "../../components/ui/PropertyCard";
import { motion } from "framer-motion";
import { useGetPropertiesInfoQuery } from "../../api/properties/queries";
import { useGetInterPropertiesInfoQuery } from "../../api/inter_property/queries";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { PropertyPathParams } from "./type";
import { PropertyInfo } from "../../api/properties/type";
import { InterPropertyInfo } from "../../api/inter_property/type";
const PropertyPage = () => {
  const { propertyLocation } = useParams<PropertyPathParams>();
  const tt = propertyLocation ?? "all";
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState<PropertyInfo[]>([]);
  const [Interproperties, setInterProperties] = useState<InterPropertyInfo[]>(
    []
  );

  const type = searchParams.get("propertyType");
  const subtype = searchParams.get("propertySubType");

  const propertyQuery = {
    type: type,
    subType: subtype,
  };
  const { data: propertyInfo, refetch: refetchProperties } =
    useGetPropertiesInfoQuery(propertyQuery);
  const { data: interPropertyInfo, refetch: refetchInterProperties } =
    useGetInterPropertiesInfoQuery(propertyQuery);

  useEffect(() => {
    if (propertyInfo) {
      setProperties(propertyInfo);
    }
    if (interPropertyInfo) {
      setInterProperties(interPropertyInfo);
    }
  }, [interPropertyInfo, propertyInfo]);
  useEffect(() => {
    const cleanup = () => {};

    refetchProperties({});
    refetchInterProperties({});

    return cleanup;
  }, [location.search, refetchInterProperties, refetchProperties]);
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
      <div className="  mt-10  flex flex-col items-center justify-center">
        <p className="text-lg md:text-3xl lg:text-3xl text-primary font-header mb-8">
          DISCOVER A PREMIUM LIFESTYLE
        </p>
        {/* <FilterBox /> */}
      </div>
      {tt === "all" || tt === "uae" ? (
        <div className="bg-background">
          <div className="mx-8 md:mx-16 lg:mx-24 flex flex-col ">
            <p className="mb-10 mt-10 font-header font-semibold text-hoverColor text-3xl">
              UAE Properties
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mb-10">
              {properties &&
                properties.map(property => (
                  <PropertyCard
                    key={property._id} // Don't forget to add a unique key prop
                    id={property._id}
                    name={property.name}
                    image={property.img}
                    location={property.location}
                    description={property.description}
                    price={property.price}
                    bathrooms={property.bathrooms}
                    bedrooms={property.bedrooms}
                    space={property.space}
                    linkTo={`/property-details/${property._id}`}
                  />
                ))}
            </div>
          </div>
        </div>
      ) : null}
      {tt === "all" || tt === "international" ? (
        <div className="bg-seconBackground">
          <div className="mx-8 pt-14 md:mx-16 lg:mx-24 flex flex-col">
            <p className="mb-10 font-header font-semibold text-primary text-3xl capitalize">
              international Properties
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mb-10">
              {Interproperties &&
                Interproperties.map((interProperty, index) => (
                  <PropertyCard
                    key={interProperty._id} // Don't forget to add a unique key prop
                    id={interProperty._id}
                    name={interProperty.name}
                    image={interProperty.img}
                    location={interProperty.location}
                    description={interProperty.description}
                    price={interProperty.price}
                    linkTo={`/international-properties/${interProperty._id}`}
                  />
                ))}
            </div>
          </div>
        </div>
      ) : null}
    </motion.div>
  );
};

export default PropertyPage;
