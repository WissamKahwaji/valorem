import React, { useState } from "react";
import {
  AiOutlineCloseSquare,
  AiOutlineMenu,
  AiOutlineDown,
  AiOutlineRight,
} from "react-icons/ai";
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
    {
      title: "Properties",
      path: "/properties",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "All Properties",
          path: "/properties/all",
          state: { type: "all" },
        },
        {
          title: "UAE Properties",
          path: "/properties/uae",
          state: { type: "uae" },
          hasDropdown: true,
          dropdownItems: [
            {
              title: "Commercial Projects",
              path: "/properties/uae?propertyType=commercial",
            },
            {
              title: "Residential Projects",
              path: "/properties/uae?propertyType=residential",
              hasDropdown: true,
              dropdownItems: [
                {
                  title: "Off Plan Projects",
                  path: "/properties/uae?propertyType=residential&propertySubType=off plan",
                },
                {
                  title: "Secondary Projects",
                  path: "/properties/uae?propertyType=residential&propertySubType=secondary projects",
                },
              ],
            },
          ],
        },
        {
          title: "International Properties",
          path: "/properties/international",
          state: { type: "international" },
          hasDropdown: true,
          dropdownItems: [
            {
              title: "Commercial Projects",
              path: "/properties/international?propertyType=commercial",
            },
            {
              title: "Residential Projects",
              path: "/properties/international?propertyType=residential",
              hasDropdown: true,
              dropdownItems: [
                {
                  title: "Off Plan Projects",
                  path: "/properties/international?propertyType=residential&propertySubType=off plan",
                },
                {
                  title: "Secondary Projects",
                  path: "/properties/international?propertyType=residential&propertySubType=secondary projects",
                },
              ],
            },
          ],
        },
      ],
    },
    { title: "Services", path: "/services" },
    { title: "About Us", path: "/about-us" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  const [showDrawer, setShowDrawer] = useState(false);
  // const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [dropdownStates, setDropdownStates] = useState(
    Array(navItems.length).fill(false)
  );

  // const [subDropdownIndex, setSubDropdownIndex] = useState<number | null>(null);
  const [subDropdownIndex, setSubDropdownIndex] = useState(
    Array(2).fill(false)
  );

  // const [subsubDropdownIndex, setSubSubDropdownIndex] = useState<number | null>(
  //   null
  // );
  const [subsubDropdownIndex, setSubSubDropdownIndex] = useState(
    Array(2).fill(false)
  );

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const toggleDropdown = (index: number) => {
    setDropdownStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const toggleSubDropdown = (index: number) => {
    setSubDropdownIndex(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const toggleSubSubDropdown = (index: number) => {
    setSubSubDropdownIndex(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
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
            className="md:hidden  text-primary hover:text-hoverColor transition duration-300 text-2xl focus:outline-none"
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
                  <div key={index} className="w-full">
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(index)}
                          className={`flex flex-row justify-start items-center border-b-2 w-full border-b-hoverColor/50 font-header px-4 py-2 text-white  uppercase  `}
                        >
                          {item.title}
                          <AiOutlineDown
                            className={`ml-1 transition duration-300 transform ${
                              dropdownStates[index] === true ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {dropdownStates[index] === true && (
                          <div className="pl-8">
                            {item.dropdownItems.map(
                              (dropdownItem, dropdownIndex) => (
                                <div key={dropdownIndex}>
                                  {dropdownItem.hasDropdown ? (
                                    <div>
                                      <button
                                        onClick={() =>
                                          toggleSubDropdown(dropdownIndex)
                                        }
                                        className={`flex flex-row text-start items-center  font-body   py-2 text-gray-200  uppercase `}
                                      >
                                        {dropdownItem.title}
                                        <AiOutlineDown
                                          className={`ml-1 transition duration-300 transform ${
                                            subDropdownIndex[dropdownIndex] ===
                                            true
                                              ? "rotate-180"
                                              : ""
                                          }`}
                                        />
                                      </button>
                                      {subDropdownIndex[dropdownIndex] ===
                                        true && (
                                        <div className="pl-4">
                                          {dropdownItem.dropdownItems.map(
                                            (
                                              subDropdownItem,
                                              subDropdownIndex
                                            ) =>
                                              subDropdownItem.hasDropdown ? (
                                                <>
                                                  <button
                                                    onClick={() =>
                                                      toggleSubSubDropdown(
                                                        subDropdownIndex
                                                      )
                                                    }
                                                    className={`flex flex-row justify-center items-center font-serif  py-2 text-hoverColor  capitalize `}
                                                  >
                                                    {subDropdownItem.title}
                                                    <AiOutlineDown
                                                      className={`ml-1 transition duration-300 transform ${
                                                        subsubDropdownIndex[
                                                          subDropdownIndex
                                                        ] === true
                                                          ? "rotate-180"
                                                          : ""
                                                      }`}
                                                    />
                                                  </button>
                                                  {subsubDropdownIndex[
                                                    subDropdownIndex
                                                  ] === true &&
                                                    subDropdownItem.dropdownItems.map(
                                                      (item, index) => (
                                                        <Link
                                                          onClick={toggleDrawer}
                                                          to={item.path}
                                                          className={`block font-body px-4 py-2 text-gray-300  capitalize ${
                                                            item.path ===
                                                            currentPath
                                                              ? "bg-hoverColor/20"
                                                              : ""
                                                          }`}
                                                        >
                                                          {item.title}
                                                        </Link>
                                                      )
                                                    )}
                                                </>
                                              ) : (
                                                <>
                                                  <Link
                                                    onClick={toggleDrawer}
                                                    to={subDropdownItem.path}
                                                    className={`block font-serif  py-2 text-hoverColor  capitalize ${
                                                      subDropdownItem.path ===
                                                      currentPath
                                                        ? "bg-hoverColor/20"
                                                        : ""
                                                    }`}
                                                  >
                                                    {subDropdownItem.title}
                                                  </Link>
                                                </>
                                              )
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    <Link
                                      onClick={toggleDrawer}
                                      to={dropdownItem.path}
                                      state={dropdownItem.state}
                                      className={`block font-body  py-2 text-gray-200   uppercase ${
                                        dropdownItem.path === currentPath
                                          ? "bg-hoverColor/20"
                                          : ""
                                      }`}
                                    >
                                      {dropdownItem.title}
                                    </Link>
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        onClick={toggleDrawer}
                        to={item.path}
                        className={`block font-header border-b-2 w-full border-b-hoverColor/50 px-4 py-2 text-white hover:bg-hoverColor uppercase ${
                          item.path === currentPath ? "bg-hoverColor/20" : ""
                        }`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
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
            <div key={index} className="relative">
              {item.hasDropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className={`flex items-center text-primary font-header hover:text-hoverColor transition duration-300 text-lg ${
                      item.path === currentPath
                        ? "border-b-2 border-hoverColor"
                        : ""
                    }`}
                  >
                    {item.title}
                    <AiOutlineDown
                      className={`ml-1 transition duration-300 transform ${
                        dropdownStates[index] === true ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {dropdownStates[index] === true && (
                    <div className="absolute top-full left-full md:left-0 z-[1000] bg-white shadow-md rounded-md mt-1 md:mt-0 md:ml-1">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <div key={dropdownIndex}>
                          {dropdownItem.hasDropdown ? (
                            <div className="">
                              <button
                                onClick={() => toggleSubDropdown(dropdownIndex)}
                                className={`flex flex-row text-start justify-center items-center font-body px-2 py-2 text-gray-800 hover:bg-gray-200 uppercase ${
                                  dropdownItem.path === currentPath
                                    ? "bg-gray-200"
                                    : ""
                                }`}
                              >
                                {dropdownItem.title}{" "}
                                <AiOutlineRight
                                  className={`ml-1 transition duration-300 transform ${
                                    subDropdownIndex[dropdownIndex] === true
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>

                              {subDropdownIndex[dropdownIndex] === true && (
                                <div className=" md:absolute md:left-full md:top-14 z-[1001] bg-white shadow-md rounded-md mt-2  mx-1">
                                  {dropdownItem.dropdownItems.map(
                                    (subDropdownItem, subDropdownIndex) =>
                                      subDropdownItem.hasDropdown ? (
                                        <>
                                          <button
                                            onClick={() =>
                                              toggleSubSubDropdown(
                                                subDropdownIndex
                                              )
                                            }
                                            className={`flex flex-row text-start justify-center items-center font-serif px-2 py-2 text-subTitle hover:bg-gray-200 capitalize ${
                                              subsubDropdownIndex[
                                                subDropdownIndex
                                              ] === true
                                                ? "bg-gray-200"
                                                : ""
                                            }`}
                                          >
                                            {subDropdownItem.title}
                                            <AiOutlineDown
                                              className={`ml-1 transition duration-300 transform ${
                                                subsubDropdownIndex[
                                                  subDropdownIndex
                                                ] === true
                                                  ? "rotate-180"
                                                  : ""
                                              }`}
                                            />
                                          </button>
                                          {subsubDropdownIndex[
                                            subDropdownIndex
                                          ] === true &&
                                            subDropdownItem.dropdownItems.map(
                                              (item, index) => (
                                                <Link
                                                  onClick={() => {
                                                    toggleDropdown(index);
                                                  }}
                                                  to={item.path}
                                                  className={`md:flex md:left-full md:top-16 font-body px-4 py-2 text-gray-400 bg-white hover:bg-gray-200  capitalize ${
                                                    item.path === currentPath
                                                      ? "bg-gray-300"
                                                      : ""
                                                  }`}
                                                >
                                                  {item.title}
                                                </Link>
                                              )
                                            )}
                                        </>
                                      ) : (
                                        <>
                                          <Link
                                            onClick={() => {
                                              toggleDropdown(index);
                                            }}
                                            key={subDropdownIndex}
                                            to={subDropdownItem.path}
                                            className={`block font-serif px-2 py-2 text-subTitle hover:bg-gray-200 capitalize ${
                                              subDropdownItem.path ===
                                              currentPath
                                                ? "bg-gray-200"
                                                : ""
                                            }`}
                                          >
                                            {subDropdownItem.title}
                                          </Link>
                                        </>
                                      )
                                  )}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              onClick={() => toggleDropdown(index)}
                              to={dropdownItem.path}
                              state={dropdownItem.state}
                              className={`block  font-body px-2 py-2 text-gray-800 hover:bg-gray-200 uppercase ${
                                dropdownItem.path === currentPath
                                  ? "bg-gray-200"
                                  : ""
                              }`}
                            >
                              {dropdownItem.title}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`text-primary font-header hover:text-hoverColor transition duration-300 text-lg ${
                    item.path === currentPath
                      ? "border-b-2 border-hoverColor"
                      : ""
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
