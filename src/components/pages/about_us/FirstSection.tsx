import React from "react";
import BackgroundImage from "../../items/about_us/BackgroundImage";

type FirstSectionProps = {
  subTitle: string;
  title: string;
  description: string;
  buttonOnClick: () => void;
};

const FirstSection = (props: FirstSectionProps) => {
  // const iconsItem = [
  //   {
  //     url: "https://static.wixstatic.com/media/33db19_e0bc83f1ee964117816990f68330e4c2~mv2.png/v1/fill/w_164,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2013_4x.png",
  //   },
  //   {
  //     url: "https://static.wixstatic.com/media/33db19_e0bc83f1ee964117816990f68330e4c2~mv2.png/v1/fill/w_164,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2013_4x.png",
  //   },
  //   {
  //     url: "https://static.wixstatic.com/media/33db19_e0bc83f1ee964117816990f68330e4c2~mv2.png/v1/fill/w_164,h_66,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%2013_4x.png",
  //   },
  // ];
  return (
    <div className="relative flex flex-col">
      <div className="hidden lg:w-full h-64 md:h-64 lg:h-72 lg:bg-background lg:relative lg:flex "></div>
      {/* <BackgroundImage
        minHeight={"min-h-[400px] md:min-h-[550px]"}
        url="https://goldenbricks.ae/wp-content/uploads/2023/09/Exploring-the-Luxury-Real-Estate-Market-in-Dubai-A-Buyers-Perspective-Golden-Bricks-Real-Estate-01.jpg"
      /> */}
      <div
        className={`w-full bg-no-repeat bg-cover  bg-fixed min-h-[400px] md:min-h-[550px]`}
        style={{
          backgroundImage: `url(https://goldenbricks.ae/wp-content/uploads/2023/09/Exploring-the-Luxury-Real-Estate-Market-in-Dubai-A-Buyers-Perspective-Golden-Bricks-Real-Estate-01.jpg)`,
        }}
      ></div>

      <div className="relative ">
        <div className="absolute bottom-1/2 md:bottom-1/2 lg:bottom-40 lg:left-1/2 transform lg:-translate-x-3/4 -translate-y-1/2 md:-translate-y-1/2   lg:-translate-y-1/2 lg:flex lg:flex-row lg:justify-start lg:items-start flex flex-col-reverse ">
          <div className="text-center text-white mx-2 md:mx-8 lg:mx-0 ">
            <div className="bg-white px-2 py-2 lg:px-10 lg:py-10 shadow-md flex flex-col justify-start items-start rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              <h2 className="text-base md:text-lg lg:text-xl font-semibold mb-2 text-subTitle text-gray-700">
                {props.subTitle}
              </h2>
              <h3 className="font-header text-primary text-base md:text-2xl lg:text-4xl mb-1 md:mb-3 lg:mb-4">
                {props.title}
              </h3>
              <p className="text-gray-700 my-2 md:my-4 text-xs md:text-sm lg:text-base text-start">
                {props.description}
              </p>
              <button
                className="bg-subTitle text-white px-6 md:px-10 py-2 md:py-3 rounded-md text-xs md:text-sm lg:text-base transition-all duration-300 ease-in-out transform hover:bg-primary hover:scale-110"
                onClick={props.buttonOnClick}
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* <div className="hidden lg:flex lg:flex-row flex-col items-start lg:ml-4 lg:mt-5 mb-2">
            {iconsItem.map((icon, index) => (
              <img
                key={index}
                className="mx-auto my-7 lg:mx-3 lg:size-3/4 size-1/3"
                src={icon.url}
                alt={`icon-${index}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
