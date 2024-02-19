import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const customerReviews = [
    {
      id: 1,
      content:
        "I am very satisfied with the professional consultation. I have been advised for an investment, and after checking out different options, I found a great one with them.",
      author: "John Doe",
    },
    {
      id: 2,
      content:
        "I am very satisfied with the professional consultation. I have been advised for an investment, and after checking out different options, I found a great one with them.",
      author: "Jane Smith",
    },
    // Add more reviews as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <img
        src="https://cloud.famproperties.com/project/large/al-habtoor-city-344694-143939.jpg"
        alt="Background"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-blue-900/70 z-1"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-2 w-3/4 mx-auto">
        <Slider {...settings}>
          {customerReviews.map(review => (
            <div key={review.id} className="text-start p-3 lg:px-14 lg:py-14">
              <p className="md:mt-4 lg:mt-4 md:text-2xl lg:text-2xl font-bold font-header text-subTitle ">
                {review.author}
              </p>
              <p className="md:mt-4 md:text-2xl lg:mt-4 lg:text-4xl font-serif ">
                {review.content}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
