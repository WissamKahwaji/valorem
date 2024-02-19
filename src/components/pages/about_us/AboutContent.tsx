import React from "react";
import AboutContentItem from "../../items/about_us/AboutContentItem";

const AboutContent = () => {
  const aboutContent = [
    {
      title: "OUR MISSION",
      subTitle: "PROVIDING EXCELLENCE & PROFESSIONALISM",
      description:
        " We will achieve our vision through our people centric philosophy, our educational system, the development and use of state-of-the-art technology.",
      img: "https://static.wixstatic.com/media/33db19_d62d0be944464052bf0f6bcd3bb03d36~mv2.jpg/v1/fill/w_951,h_510,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/33db19_d62d0be944464052bf0f6bcd3bb03d36~mv2.jpg",
    },
    {
      title: "OUR VISION",
      subTitle: "SETTING NEW INDUSTRY STANDARDS",
      description:
        "Our Vision is very simple: We want to become the #1 Choice for customers and employees when it comes to choosing a real estate company.",
      img: "https://static.wixstatic.com/media/33db19_2bf13775da3443fc9bb36bd45fb4e648~mv2.jpg/v1/fill/w_948,h_530,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/33db19_2bf13775da3443fc9bb36bd45fb4e648~mv2.jpg",
    },
    // {
    //   title: "OUR VALUES",
    //   subTitle: "SETTING NEW INDUSTRY STANDARDS",
    //   description:
    //     "We envision a future where our team stands at the forefront of the real estate brokerage industry. Delivering top-notch solutions to our clients, we want to set new industry standards and exemplifying the true essence of professionalism and trust. With our strong partner network in the UAE, we want to be trusted advisors for all queries related to real estate, company formation and residency.",
    //   img: "https://www.sobharealty.com/media/kqof1qh4/1920x1120-2.jpg?width=1920&height=1120&rnd=133477180482370000",
    // },
  ];
  return (
    <div>
      {aboutContent.map((content, index) => (
        <AboutContentItem
          key={index}
          title={content.title}
          subtitle={content.subTitle}
          description={content.description}
          img={content.img}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default AboutContent;
