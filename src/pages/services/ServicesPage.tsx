import React, { useEffect } from "react";
import { motion } from "framer-motion";
import HeaderSection from "../../components/pages/property_page/HeaderSection";
import LoadingPage from "../loadingPage/LoadingPage";
import { useGetOurServicesInfoQuery } from "../../api/our_services/queries";
import ReactGA from "react-ga4";

const ServicesPage = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Service Page",
    });
  }, []);

  const {
    data: ourServices,
    isLoading,
    isError,
  } = useGetOurServicesInfoQuery();
  if (isLoading) return <LoadingPage />;
  if (isError) return <div></div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderSection
        img="https://www.sobharealty.com/media/40ghtic3/1-5.jpg?width=1920&height=944&rnd=133503807772900000"
        title="OUR SERVICES"
        description="OUR 6 SIDES OF REAL ESTATE RESIDENTIAL"
        bottom="bottom-0"
        top="top-0"
      />
      <div className=" ">
        <div className="py-8 md:py-16 lg:py-20 bg-seconBackground flex flex-col items-center justify-center">
          <p className="text-lg md:text-3xl lg:text-3xl text-primary font-header text-center ">
            OUR 6 SIDES OF REAL ESTATE RESIDENTIAL
          </p>
        </div>
        <div className="flex flex-col">
          {ourServices?.map((service, index) => (
            <div
              className={`grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ${
                index % 2 !== 0 ? "bg-seconBackground" : "bg-background"
              }`}
            >
              <img
                src={service.img}
                alt={service.title}
                className={`w-full h-full object-cover  ${
                  index % 2 !== 0 ? "lg:order-1" : ""
                } `}
              />
              <div className="  md:my-4  mx-4 lg:my-4">
                <div className=" mb-2 lg:mb-10">
                  <h1 className="text-2xl lg:text-5xl mb-0 lg:mb-10 lg:mt-3 text-primary font-header">
                    {service.title}
                  </h1>
                  {service.content.map(content => (
                    <div className="py-2">
                      <h2 className="text-sm md:text-lg mb-1  lg:text-2xl font-sans text-subTitle font-semibold">
                        {content.title}
                      </h2>
                      <p className="text-base  text-gray-800 font-body">
                        {content.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
