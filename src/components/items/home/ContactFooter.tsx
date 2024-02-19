import React from "react";
import IconWithText from "../../ui/IconWithText";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useGetContactUsInfo } from "../../../api/contact_us/query";

const ContactFooter = () => {
  const { data: contactUsInfo } = useGetContactUsInfo();

  return (
    <div className="relative w-full h-[700px] md:h-[600px]  overflow-hidden">
      <img
        src="https://cloud.famproperties.com/project/large/al-habtoor-city-344694-143939.jpg"
        alt="Background"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-blue-900/70 z-1"></div>

      <div className="absolute top-0 left-0 w-full h-full z-1 flex flex-col items-center justify-center">
        <a href="/">
          <img
            src="https://i.imgur.com/RCTjuUc.png"
            alt=""
            className="h-auto w-64 sm:h-auto sm:w-64 md:h-auto md:w-64 lg:h-auto lg:w-64 object-cover mb-3 lg:mb-10 md:mb-14"
          />
        </a>
        <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start lg:items-start w-full max-w-6xl mx-auto  px-4 md:px-3">
          <div className="flex flex-col justify-between  h-full mb-8 md:mb-0 md:w-1/2 md:mr-2">
            <p className="font-header font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-white mb-4 text-center md:text-left">
              REGISTER YOUR INTEREST
            </p>
            <IconWithText
              icon={
                <FaEnvelope className="w-6 h-6 mb-4 md:mb-8 text-subTitle" />
              }
              phoneNumber={contactUsInfo?.content.email ?? ""}
            />

            <IconWithText
              icon={
                <FaPhoneAlt className="w-6 h-6 mb-4 md:mb-8 text-subTitle" />
              }
              phoneNumber={contactUsInfo?.content.mobileOne ?? ""}
            />
            <IconWithText
              icon={
                <FaMapMarkerAlt className="w-6 h-6 mb-4 md:mb-8 text-subTitle" />
              }
              phoneNumber={contactUsInfo?.content.location ?? ""}
            />
          </div>

          <div className="flex flex-col md:w-1/2">
            <form action="" className="flex flex-col items-center space-y-4">
              <input
                type="text"
                className="text-gray-500 rounded-md w-full p-4 mb-2 focus:border-hoverColor"
                placeholder="First Name"
              />
              <input
                type="text"
                className="text-gray-500 rounded-md w-full p-4 mb-2 focus:border-hoverColor"
                placeholder="Last Name"
              />
              <input
                type="text"
                className="text-gray-500 rounded-md w-full p-4 mb-2 focus:border-hoverColor"
                placeholder="Email"
              />
              <input
                type="text"
                className="text-gray-500 rounded-md w-full p-4 mb-2 focus:border-hoverColor"
                placeholder="Phone Number"
              />
              <button className="p-2 w-full rounded-md bg-hoverColor text-white hover:bg-white hover:text-hoverColor">
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
