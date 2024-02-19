import React from "react";
import { OurValuesContent } from "../../../api/about_us/type";

interface Props {
  values: OurValuesContent[];
}

const OurValues: React.FC<Props> = ({ values }) => {
  return (
    <div className="bg-seconBackground py-10">
      <div className="text-center mb-12">
        <p className="text-hoverColor font-header mb-3 text-lg md:text-xl lg:text-2xl">
          SETTING NEW INDUSTRY STANDARDS
        </p>
        <h1 className="text-3xl md:text-5xl text-primary font-header">
          OUR VALUES
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-8 max-w-7xl mx-3 md:mx-8 lg:mx-auto ">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-md shadow-md flex flex-col justify-between transition duration-500 hover:bg-primary"
          >
            <div>
              {/* <img
                src="https://i.imgur.com/xK3TpQ5.png"
                alt={value.title}
                className="w-24 h-auto object-cover mx-auto mb-4"
              /> */}
              <h2 className="text-lg  text-subTitle font-semibold font-header mb-4">
                {value.title}
              </h2>
              <p className="text-gray-400  font-body">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
