import React, { useEffect } from "react";
import { motion } from "framer-motion";

import ContactInfoSection from "../../components/pages/contact_us/ContactInfoSection";
import ContactForm from "../../components/pages/contact_us/ContactForm";
import { useGetContactUsInfo } from "../../api/contact_us/query";
import ReactGA from "react-ga4";

const ContactUs = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Contact Us Page",
    });
  }, []);

  const { data: contactUsInfo } = useGetContactUsInfo();
  console.log(contactUsInfo?.content);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex w-full h-20 md:h-32 lg:h-32 bg-primary">
        <h1 className="text-2xl lg:text-5xl font-header text-white text-center  my-auto mx-auto w-full">
          Contact Us
        </h1>
      </div>
      <div className="grid grid-flow-row md:grid-cols-2  mx-auto">
        <ContactInfoSection
          email={contactUsInfo?.content.email ?? ""}
          facebook={contactUsInfo?.content.faceBook ?? ""}
          instagram={contactUsInfo?.content.instagram ?? ""}
          location={contactUsInfo?.content.location ?? ""}
          mobile={contactUsInfo?.content.mobileOne ?? ""}
          phone={contactUsInfo?.content.phoneNumber ?? ""}
          snapChat={contactUsInfo?.content.snapChat ?? ""}
          threads={contactUsInfo?.content.threads ?? ""}
          whatsApp={contactUsInfo?.content.whatsApp ?? ""}
          youtube={contactUsInfo?.content.youtube ?? ""}
          linkedIn={contactUsInfo?.content.linkedIn ?? ""}
        />
        <ContactForm />
      </div>
      <div className="relative w-full h-[300px] overflow-hidden">
        <img
          src="https://cloud.famproperties.com/project/large/al-habtoor-city-344694-143939.jpg"
          alt="Background"
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-blue-900/70 z-1"></div>
        <div className="absolute flex flex-col py-10 top-0 left-0 w-full h-full   text-white z-1 ">
          <p className="capitalize font-header text-5xl text-center my-10">
            location map
          </p>
          <p className="capitalize font-header text-2xl text-center">
            {contactUsInfo?.content.location}
          </p>
        </div>
      </div>
      <div>
        <iframe
          title="Valorem"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5207187704796!2d55.275683699999995!3d25.185656299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69b475eefab3%3A0x733cb58fac908c69!2sValorem%20Real%20Estate%20Brokers%20LLC!5e0!3m2!1sar!2sae!4v1707809552074!5m2!1sar!2sae"
          width="600"
          height="450"
          loading="lazy"
          className="w-full"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default ContactUs;
