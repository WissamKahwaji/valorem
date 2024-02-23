import React, { useState } from "react";
import { AiOutlineCloseSquare, AiOutlineMenu } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useGetContactUsInfo } from "../../api/contact_us/query";
import LanguageButton from "../../components/ui/LanguageButton";

const Navbar = () => {
  const { data: contactUsInfo } = useGetContactUsInfo();
  const location = useLocation();
  const currentPath = location.pathname;

  const socialMediaIcons = [
    { icon: <FaInstagram />, link: contactUsInfo?.content.instagram },
    { icon: <FaFacebook />, link: contactUsInfo?.content.faceBook },

    { icon: <FaYoutube />, link: contactUsInfo?.content.youtube },
  ];

  const navItems = [
    { title: "Home", path: "/" },
    { title: "Properties", path: "/properties" },
    { title: "Services", path: "/services" },
    { title: "About Us", path: "/about-us" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <header className="fixed left-0 top-0 z-[1001] w-screen bg-white border-b border-border shadow-sm">
      {/* First Nav with Social Media Icons and Contact Info (hidden on small screens) */}
      <nav className="hidden md:flex md:flex-col md:items-center md:justify-between md:bg-primary md:py-4 md:px-8 md:space-y-4 md:h-full">
        <div className="w-full flex items-center justify-between space-x-4">
          <div className="flex flex-row space-x-4">
            <div
              className="flex flex-row items-center  text-white cursor-pointer"
              onClick={() => {
                window.location.href = `mailto:${contactUsInfo?.content.email}`;
              }}
            >
              <FaEnvelope />
              <span className="ml-2 text-lg">
                {contactUsInfo?.content.email}
              </span>
            </div>
            <div
              className="flex flex-row items-center  text-white cursor-pointer"
              onClick={() => {
                window.location.href = `tel:${contactUsInfo?.content.mobileOne}`;
              }}
            >
              <FaPhoneAlt />
              <span className="ml-2 text-lg">
                {contactUsInfo?.content.mobileOne}
              </span>
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            {socialMediaIcons.map((socialMedia, index) => (
              <Link
                key={index}
                to={socialMedia.link ?? ""}
                className="flex items-center text-white hover:text-hoverColor transition duration-300"
              >
                {socialMedia.icon}
              </Link>
            ))}
            <LanguageButton />
          </div>
        </div>
      </nav>

      {/* Second Nav with Logo and Navigation Links */}
      <nav className="flex flex-col md:flex-row items-center justify-between px-3 lg:px-8 md:px-16  lg:justify-between  lg:items-center  w-full">
        <div className=" flex items-center justify-between w-full lg:w-auto md:w-auto lg:justify-start space-x-8 md:space-x-0 md:justify-center">
          <div className="text-2xl md:text-4xl font-bold text-primary">
            <a href="/">
              <img
                src="https://i.imgur.com/a3JKetK.png"
                alt=""
                className="h-auto w-24 sm:h-auto sm:w-32 md:h-32 md:w-32 lg:h-24 lg:w-52 object-cover "
              />
            </a>
          </div>
          <button
            onClick={toggleDrawer}
            className="md:hidden  text-gray-700 hover:text-hoverColor transition duration-300 text-2xl focus:outline-none"
          >
            <AiOutlineMenu />
          </button>
        </div>
        {showDrawer && (
          <div className="md:hidden fixed inset-0 bg-transparent bg-opacity-90 flex flex-row w-full backdrop-filter backdrop-blur-sm">
            <div className=" bg-primary bg-opacity-80 z-[1002] transition  duration-300 transform translate-x-0 w-[75%]">
              <div className="flex flex-col items-start mx-2 space-y-4 py-8">
                <div className="mb-5">
                  <LanguageButton />
                </div>
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className="text-white hover:text-hoverColor transition duration-300 text-lg border-b-2 w-full border-b-hoverColor/50"
                  >
                    {item.title}
                  </a>
                ))}
                <div className="flex flex-col space-y-4">
                  <div
                    className="flex flex-row items-center  text-white cursor-pointer"
                    onClick={() => {
                      window.location.href = `mailto:${contactUsInfo?.content.email}`;
                    }}
                  >
                    <FaEnvelope />
                    <span className="ml-2 text-lg">
                      {contactUsInfo?.content.email}
                    </span>
                  </div>
                  <div
                    className="flex flex-row items-center  text-white cursor-pointer"
                    onClick={() => {
                      window.location.href = `tel:${contactUsInfo?.content.mobileOne}`;
                    }}
                  >
                    <FaPhoneAlt />
                    <span className="ml-2 text-lg">
                      {contactUsInfo?.content.mobileOne}
                    </span>
                  </div>
                  <div className="flex flex-row space-x-4">
                    {socialMediaIcons.map((socialMedia, index) => (
                      <Link
                        key={index}
                        to={socialMedia.link ?? ""}
                        className="flex items-center text-white hover:text-hoverColor transition duration-300"
                      >
                        {socialMedia.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[60px] w-[15%] bg-transparent flex justify-center items-center ml-6 mt-3">
              <button
                onClick={toggleDrawer}
                className="text-white text-lg focus:outline-none"
              >
                <AiOutlineCloseSquare className="text-6xl text-hoverColor" />
              </button>
            </div>
          </div>
        )}
        <div className="hidden md:flex items-center space-x-8 md:justify-center ">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-primary font-header  hover:text-hoverColor transition duration-300 text-lg ${
                item.path === currentPath ? "border-b-2 border-hoverColor" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
