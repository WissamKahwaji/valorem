import React from "react";
import InfoCard from "../../items/home/InfoCard";
import { useNavigate } from "react-router-dom";

type Props = {
  breif?: {
    title: string;
    description: string;
  };
};
const BreifSection = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-start bg-seconBackground pb-20 pt-10 h-[500px] md:h-auto lg:h-screen">
      <div className="relative flex items-center mx-2">
        <img
          src="https://static.wixstatic.com/media/885e42_eb6bb511c6164dc7bf322de320a71857~mv2.jpg/v1/crop/x_688,y_0,w_1523,h_1350/fill/w_894,h_793,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Skyline.jpg"
          alt=""
          className="  w-[250px]  h-[300px]  md:w-3/4 md:h-auto lg:w-3/4 lg:h-auto object-cover"
        />
        <InfoCard
          title="WHO WE ARE ?"
          subtitle={props.breif?.title ?? ""}
          description={props.breif?.description ?? ""}
          buttonText="Get In Touch"
          buttonOnClick={() => {
            navigate("/contact-us");
          }}
        />
      </div>
    </div>
  );
};

export default BreifSection;
