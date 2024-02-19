import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurBrands = () => {
  const agentLogos = [
    "https://i.imgur.com/8dxfsBY.png",
    "https://i.imgur.com/8dxfsBY.png",
    "https://i.imgur.com/8dxfsBY.png",
    "https://i.imgur.com/8dxfsBY.png",
    "https://i.imgur.com/8dxfsBY.png",
    "https://i.imgur.com/8dxfsBY.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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
    <div className="bg-background  py-10">
      <div className="text-center">
        <p className="text-hoverColor font-header mb-3 text-lg md:text-xl lg:text-2xl">
          STRONG NETWORK IN DUBAI & UAE
        </p>
        <h1 className="text-3xl md:text-5xl text-primary font-header mb-8">
          OUR BRANDS COLLABORATION
        </h1>

        <p className="font-body mx-4 md:mx-16 lg:mx-44 md:text-lg lg:text-xl">
          Valorem has established strong alliances with leading developers and
          brands in Dubai and the United Arab Emirates, enabling us to offer our
          clients the finest options available in the market.
        </p>
        <Slider {...settings} className="mx-14">
          {agentLogos.map((logo, index) => (
            <div key={index}>
              <img
                src={logo}
                alt={`Agent Logo ${index + 1}`}
                className="mx-auto w-32 h-32 object-contain "
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurBrands;
