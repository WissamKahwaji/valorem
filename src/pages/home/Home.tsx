import React, { useEffect } from "react";
import HomeSlider from "../../components/pages/home/HomeSlider";
import BreifSection from "../../components/pages/home/BreifSection";
import PropertySection from "../../components/pages/home/PropertySection";
import Statistics from "../../components/pages/about_us/Statistics";
import BackgroundImage from "../../components/items/about_us/BackgroundImage";
import FeaturedSection from "../../components/pages/home/FeaturedSection";
import AboutContentItem from "../../components/items/about_us/AboutContentItem";
import OurAgents from "../../components/pages/about_us/OurAgents";

import ContactFooter from "../../components/items/home/ContactFooter";
import { motion } from "framer-motion";
import { useGetAboutUsInfoQuery } from "../../api/about_us/queries";
import InterPropertySection from "../../components/pages/home/InterPropertySection";
import ReactGA from "react-ga4";

const Home = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Home Page",
    });
  }, []);

  const { data: aboutUsInfo } = useGetAboutUsInfoQuery();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HomeSlider />
      <BreifSection breif={aboutUsInfo?.brief} />
      <AboutContentItem
        key={1}
        title={aboutUsInfo?.content[1].title ?? ""}
        subtitle="PROVIDING EXCELLENCE & PROFESSIONALISM"
        description={aboutUsInfo?.content[1].description ?? ""}
        img={aboutUsInfo?.content[1].img ?? ""}
        reverse={true}
      />
      <Statistics />
      <BackgroundImage
        minHeight={"min-h-[300px] md:min-h-[700px]"}
        url="https://i.imgur.com/rVm3Jf6.jpeg"
      />
      <FeaturedSection />
      <PropertySection />
      <BackgroundImage
        minHeight={"min-h-[300px] md:min-h-[700px]"}
        url="https://i.imgur.com/B3cgZWd.png"
      />
      <InterPropertySection />
      <OurAgents />
      <ContactFooter />
    </motion.div>
  );
};

export default Home;
