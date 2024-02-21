import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetOurAgentsInfoQuery } from "../../../api/our_agents/queries";
import LoadingPage from "../../../pages/loadingPage/LoadingPage";

const OurAgents = () => {
  const {
    data: ourAgentsInfo,
    isLoading,
    isError,
  } = useGetOurAgentsInfoQuery();
  if (isLoading) return <LoadingPage />;
  if (isError) return <div></div>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="bg-seconBackground py-10">
      <div className="text-center">
        <p className="text-hoverColor font-header mb-3 text-lg md:text-xl lg:text-2xl">
          STRONG NETWORK IN DUBAI & UAE
        </p>
        <h1 className="text-3xl md:text-5xl text-primary font-header mb-8">
          OUR AGENTS
        </h1>

        <p className="font-body mx-4 md:mx-16 lg:mx-44 md:text-lg lg:text-xl">
          Valorem has established strong alliances with leading developers and
          brands in Dubai and the United Arab Emirates, enabling us to offer our
          clients the finest options available in the market.
        </p>
        <Slider {...settings} className="mx-14 mt-3 py-8 gap-x-2">
          {ourAgentsInfo &&
            ourAgentsInfo.map((agent, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <img
                  src={agent.logo}
                  alt={`Agent Logo ${index + 1}`}
                  className="mx-auto w-72 h-40 object-contain "
                />
                <p className="text-base md:text-lg text-gray-500 font-header font-semibold uppercase">
                  {agent.name}
                </p>
                <p className="text-sm text-gray-400 font-body text-center px-4">
                  {agent.bio}
                </p>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurAgents;
