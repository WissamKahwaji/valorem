import React from "react";
import FirstSection from "../../components/pages/about_us/FirstSection";
import Statistics from "../../components/pages/about_us/Statistics";
import AboutContent from "../../components/pages/about_us/AboutContent";
import OurTeam from "../../components/pages/about_us/OurTeam";
import OurAgents from "../../components/pages/about_us/OurAgents";
import OurBrands from "../../components/pages/about_us/OurBrands";
import BackgroundImage from "../../components/items/about_us/BackgroundImage";
import Reviews from "../../components/pages/about_us/Reviews";
import OurValues from "../../components/pages/about_us/OurValues";
import { motion } from "framer-motion";
import LoadingPage from "../loadingPage/LoadingPage";
import { useGetAboutUsInfoQuery } from "../../api/about_us/queries";
import AboutContentItem from "../../components/items/about_us/AboutContentItem";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const { data: aboutUsInfo, isLoading, isError } = useGetAboutUsInfoQuery();
  const navigate = useNavigate();
  if (isLoading) return <LoadingPage />;
  if (isError) return <div></div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="flex w-full h-20 md:h-32 lg:h-32 bg-primary">
          <h1 className="text-2xl lg:text-5xl font-header text-white text-center  my-auto mx-auto">
            {aboutUsInfo?.title}
          </h1>
        </div>
        <FirstSection
          subTitle={aboutUsInfo?.brief.title ?? ""}
          title="WHO WE ARE ?"
          description={aboutUsInfo?.brief.description ?? ""}
          buttonOnClick={() => {
            navigate("/contact-us");
          }}
        />
        <Statistics />
        <div>
          {aboutUsInfo?.content.map((content, index) => (
            <AboutContentItem
              key={index}
              title={content.title}
              // subtitle="SETTING NEW INDUSTRY STANDARDS"
              description={content.description}
              img={content.img}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
        <OurValues values={aboutUsInfo?.ourValues ?? []} />
        {/* <BackgroundImage
          minHeight={"min-h-[200px] md:min-h-[950px]"}
          url="https://cloud.famproperties.com/project/large/al-habtoor-city-344694-143939.jpg"
        /> */}
        <div
          className={`w-full bg-no-repeat bg-cover  bg-fixed min-h-[400px] md:min-h-[550px]`}
          style={{
            backgroundImage: `url(https://cloud.famproperties.com/project/large/al-habtoor-city-344694-143939.jpg)`,
          }}
        ></div>
        <OurTeam />
        <OurAgents />
        <BackgroundImage
          minHeight={"min-h-[300px] md:min-h-[700px]"}
          url="https://i.imgur.com/B3cgZWd.png"
        />
        {/* <OurBrands /> */}
        {/* <Reviews /> */}
      </div>
    </motion.div>
  );
};

export default AboutUs;
