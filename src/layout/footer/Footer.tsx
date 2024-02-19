import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaSnapchatSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetContactUsInfo } from "../../api/contact_us/query";

const Footer = () => {
  const { data: contactUsInfo } = useGetContactUsInfo();

  return (
    <footer className="bg-primary border-t-2 border-subTitle text-gray-200">
      <div className="max-w-7xl mx-auto p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 md:gap-2">
          <div className="mb-8 flex flex-col">
            <a href="/">
              <img
                src="https://i.imgur.com/RCTjuUc.png"
                alt=""
                className="h-12 w-32 lg:w-auto mb-4 "
              />
            </a>
            <h4 className="text-xl pb-3">VALOREM REAL ESTATE BROKERS</h4>
            <p className="text-gray-500">
              UAE, Dubai <br />
              Business Bay <br /> Opal Tower, Office 1608
              <br />
              <div
                className="cursor-pointer"
                onClick={() => {
                  window.location.href = `tel:${contactUsInfo?.content.mobileOne}`;
                }}
              >
                <strong>Phone : </strong>
                {contactUsInfo?.content.phoneNumber}
              </div>
              {/* <br /> */}
              <div
                className="cursor-pointer"
                onClick={() => {
                  window.location.href = `mailto:${contactUsInfo?.content.email}`;
                }}
              >
                <strong>Email : </strong>
                {contactUsInfo?.content.email}
              </div>
            </p>
          </div>

          <div className="mb-8">
            <h4 className="pb-3 text-xl font-bold">Useful Links</h4>
            <ul>
              <li className="pb-3">
                <Link to="/" className="hover:text-hoverColor">
                  Home
                </Link>
              </li>
              <li className="pb-3">
                <Link to="/properties" className="hover:text-hoverColor">
                  Properties
                </Link>
              </li>
              <li className="pb-3">
                <Link to="/services" className="hover:text-hoverColor">
                  Services
                </Link>
              </li>
              <li className="pb-3">
                <Link to="/about-us" className="hover:text-hoverColor">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="pb-3 text-xl font-bold">Properties Types</h4>
            <ul>
              <li className="pb-3">
                <Link to="/" className="hover:text-hoverColor">
                  Type 1
                </Link>
              </li>
              <li className="pb-3">
                <Link to="/" className="hover:text-hoverColor">
                  Type 2
                </Link>
              </li>
              <li className="pb-3">
                <Link to="/" className="hover:text-hoverColor">
                  Type 3
                </Link>
              </li>
              <li className="pb-3">
                <Link to="/" className="hover:text-hoverColor">
                  Type 4
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="pb-3 text-xl font-bold">Join Our Team</h4>
            <p className="text-gray-500 pb-2">
              Join Our Valorem Team, send your message
            </p>
            <form action="" className="flex flex-col items-start">
              <input
                type="text"
                className="text-gray-500 w-full p-2 mb-2 focus:border-hoverColor"
                placeholder="Your Message"
              />
              <button className="p-2 w-full bg-hoverColor text-white hover:bg-white hover:text-hoverColor">
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-gray-500 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-2 sm:mb-0">
            <div>
              Copyright{" "}
              <strong>
                <span>Valorem</span>
              </strong>{" "}
              company. All Rights Reserved
            </div>
            <div>
              Designed By{" "}
              <a href="/" className="text-hoverColor">
                Sii Media
              </a>
            </div>
          </div>
          <ul className="flex gap-2">
            <li>
              <Link to={contactUsInfo?.content.faceBook ?? "/"} target="_blank">
                <FaFacebookSquare className="h-8 w-8" />
              </Link>
            </li>
            <li>
              <Link
                to={contactUsInfo?.content.instagram ?? "/"}
                target="_blank"
              >
                <FaInstagramSquare className="h-8 w-8" />
              </Link>
            </li>
            <li>
              <Link
                to={`https://wa.me/${contactUsInfo?.content.whatsApp}`}
                target="_blank"
              >
                <FaWhatsappSquare className="h-8 w-8" />
              </Link>
            </li>
            <li>
              <Link to={contactUsInfo?.content.snapChat ?? "/"} target="_blank">
                <FaSnapchatSquare className="h-8 w-8" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
