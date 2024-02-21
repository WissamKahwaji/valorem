import React from "react";
import { motion } from "framer-motion";
import HeaderSection from "../../components/pages/property_page/HeaderSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LiaAngleDoubleRightSolid } from "react-icons/lia";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IdParams } from "./type";
import { useParams } from "react-router-dom";
import { useGetPropertiesInfoByIdQuery } from "../../api/properties/queries";

const PropertyDetailsPage = () => {
  const { id } = useParams<IdParams>();
  const { data: property } = useGetPropertiesInfoByIdQuery(id);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const PRODUCT_TYPE_CAROUSAL_RESPONSIVE = {
    xxl: {
      breakpoint: { max: 5000, min: 1536 },
      items: 1,
    },
    xl: {
      breakpoint: { max: 1536, min: 1280 },
      items: 1,
    },
    lg: {
      breakpoint: { max: 1280, min: 1024 },
      items: 1,
    },
    md: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    sm: {
      breakpoint: { max: 768, min: 640 },
      items: 1,
    },
    xs: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderSection
        img={property?.coverImg ?? ""}
        title={property?.name ?? ""}
        description={property?.bio ?? ""}
        bottom="bottom-0"
        top="top-40"
      />
      <div className="bg-seconBackground py-8">
        <div className="flex flex-col justify-center items-center md:flex-row lg:flex-row lg:justify-center space-y-6 md:space-y-0 md:space-x-16">
          {property?.breifDetails.map((item, index) => (
            <div
              key={index}
              className="lg:border-r-2 border-hoverColor flex flex-col py-6 md:pr-16 justify-center items-center"
            >
              <img
                src={item.icon}
                alt=""
                className="w-12 h-12 object-cover mb-3 md:mb-5"
              />
              <p className="text-hoverColor font-bold font-header text-lg mb-2">
                {item.title}
              </p>
              <p className="text-black font-body text-lg text-center md:text-left">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-seconBackground py-10 px-6 md:px-12 lg:px-32">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl text-primary font-header uppercase mb-6 md:mb-10">
            about this property
          </h1>
          <p className="text-gray-500 text-start font-header text-lg md:text-xl lg:text-2xl whitespace-pre-wrap">
            {property?.description}
          </p>
        </div>
      </div>

      {property?.paymentPlan && (
        <div className="bg-background py-6 md:py-10 px-6 md:px-12 lg:px-32">
          <div className="text-center mb-6 md:mb-12">
            <h1 className="text-3xl md:text-5xl text-primary  font-header uppercase mb-6 md:mb-10">
              payment plan
            </h1>
            <p className="text-gray-500 font-header text-start text-lg md:text-xl lg:text-2xl whitespace-pre-wrap">
              {property?.paymentPlan}
            </p>
          </div>
        </div>
      )}
      {property?.floorPlan && (
        <div className="bg-background py-6 md:py-10 px-6 md:px-12 lg:px-32">
          <div className="text-center mb-6 md:mb-12">
            <h1 className="text-3xl md:text-5xl text-primary  font-header uppercase mb-6 md:mb-10">
              floor plan
            </h1>
            <p className="text-gray-500 font-header text-start text-lg md:text-xl lg:text-2xl whitespace-pre-wrap">
              {property?.floorPlan}
            </p>
          </div>
        </div>
      )}
      {property?.masterPlan && (
        <div className="bg-background py-6 md:py-10 px-6 md:px-12 lg:px-32">
          <div className="text-center mb-6 md:mb-12">
            <h1 className="text-3xl md:text-5xl text-primary  font-header uppercase mb-6 md:mb-10">
              master plan
            </h1>
            <p className="text-gray-500 font-header text-start text-lg md:text-xl lg:text-2xl whitespace-pre-wrap">
              {property?.masterPlan}
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-flow-row md:grid-cols-2 mx-4 md:mx-20 mb-48 md:mb-20 ">
        <div className="mb-6 md:mb-0 flex flex-col h-full ">
          <iframe
            title="Valorem"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5207187704796!2d55.275683699999995!3d25.185656299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69b475eefab3%3A0x733cb58fac908c69!2sValorem%20Real%20Estate%20Brokers%20LLC!5e0!3m2!1sar!2sae!4v1707809552074!5m2!1sar!2sae"
            width="100%"
            height="100%"
            loading="lazy"
            className="w-full h-80 md:h-full "
          ></iframe>
          <div className="bg-gray-100 p-1">
            <p className="text-primary font-body mt-3">
              {property?.locationDetails}
            </p>
          </div>
        </div>
        {property?.connectivity && (
          <div className="flex flex-col justify-center md:p-14">
            <p className="capitalize font-header text-3xl text-primary font-semibold mb-6 md:mb-0">
              connectivity
            </p>
            <div className="mt-7 space-y-4 md:space-y-0 md:flex md:flex-col">
              {property?.connectivity.map((location, index) => (
                <div
                  key={index}
                  className="flex flex-row space-x-2 md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center"
                >
                  <div className="bg-gray-100 p-3 py-3 my-1 flex items-center">
                    <p className="text-hoverColor text-sm md:text-base font-body font-semibold">
                      {location.value}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 py-3 my-1 flex items-center w-3/5">
                    <p className="text-primary font-body text-sm md:text-base font-semibold">
                      {location.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-full h-[440px] md:h-[540px] lg:h-[540px] xl:h-[740px]   mb-12 ">
        <Slider {...settings} className="w-full h-full">
          {property?.gallery.map((img, index) => (
            <img
              src={img}
              alt={`Slider ${index + 1}`}
              className="w-full h-[440px] md:h-[540px] lg:h-[540px] xl:h-[740px] object-contain"
            />
          ))}
        </Slider>
      </div>
      <div className="w-full py-10">
        {property?.propertyContent &&
          property.propertyContent.map((content, index) => (
            <div key={index} className="flex flex-col items-center mb-20">
              <h1 className="text-3xl md:text-3xl text-primary font-header mb-8">
                {content.title}
              </h1>
              <h1 className="text-base md:text-lg whitespace-pre-wrap text-hoverColor font-body mb-8 w-3/4">
                {content.description}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mx-4 md:mx-20">
                {/* Carousel */}
                <Carousel
                  infinite
                  autoPlay
                  removeArrowOnDeviceType={"xs"}
                  responsive={PRODUCT_TYPE_CAROUSAL_RESPONSIVE}
                  className="w-full h-64 md:h-auto"
                >
                  {content.imgs.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`  ${imgIndex}`}
                      className="object-cover w-full h-full"
                    />
                  ))}
                </Carousel>
                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10">
                  {content.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-center p-3 my-2 border border-gray-200 rounded transform hover:scale-105 duration-300 ease-in-out"
                    >
                      {/* <img
                        src={detail.icon}
                        alt={`Icon ${detailIndex}`}
                        className="w-9 h-9 mr-3"
                      /> */}
                      <LiaAngleDoubleRightSolid className="w-6 h-6 mr-3 text-hoverColor" />
                      <p className="text-sm font-body font-thin">
                        {detail.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </motion.div>
  );
};

export default PropertyDetailsPage;
