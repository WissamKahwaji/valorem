import React from "react";
import { IdParams } from "./type";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import HeaderSection from "../../components/pages/property_page/HeaderSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LiaAngleDoubleRightSolid } from "react-icons/lia";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useGetInterPropertiesInfoByIdQuery } from "../../api/inter_property/queries";

const InterPropertyDetailsPage = () => {
  const { id } = useParams<IdParams>();
  const { data: property } = useGetInterPropertiesInfoByIdQuery(id);
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
      <div className=" ">
        <div className="py-8 md:py-16 lg:py-20 bg-seconBackground flex flex-col items-center justify-center">
          <p className="text-lg md:text-3xl lg:text-3xl text-primary font-header text-center capitalize ">
            PROPERTY & RESIDENCES OVERVIEW
          </p>
        </div>
        <div className="flex flex-col">
          {property?.propertyInterContent?.map((content, index) => (
            <div
              className={`grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ${
                index % 2 !== 0 ? "bg-seconBackground" : "bg-background"
              }`}
            >
              <img
                src={content.img}
                alt={content.title}
                className={`w-full h-full object-cover  ${
                  index % 2 !== 0 ? "lg:order-1" : ""
                } `}
              />
              <div className="  md:my-4  mx-4 lg:my-4">
                <div className=" mb-2 lg:mb-10">
                  <h1 className="text-2xl lg:text-5xl mb-0 lg:mb-10 lg:mt-3 text-primary font-header">
                    {content.title}
                  </h1>

                  <div className="py-2">
                    <p className="text-sm md:text-lg mb-1  lg:text-2xl font-body text-subTitle  whitespace-pre-wrap">
                      {content.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default InterPropertyDetailsPage;
