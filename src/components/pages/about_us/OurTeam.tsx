import React from "react";
import TeamMemberItem from "../../items/about_us/TeamMemberItem";
import { useGetOurTeamInfoQuery } from "../../../api/our_team/queries";
import LoadingPage from "../../../pages/loadingPage/LoadingPage";

const OurTeam = () => {
  const { data: ourTeamInfo, isLoading, isError } = useGetOurTeamInfoQuery();
  if (isLoading) return <LoadingPage />;
  if (isError) return <div></div>;

  return (
    <div className="bg-background py-10">
      <div className="">
        <h1 className="text-3xl md:text-5xl text-primary font-header  text-center mb-5 lg:mb-16">
          Our Management Team
        </h1>
        <p className="text-hoverColor font-header text-center mb-16 text-lg md:text-xl lg:text-2xl w-3/4 mx-auto">
          {ourTeamInfo?.description}
        </p>
        <div className=" grid grid-flow-row  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center md:mx-30 lg:mx-60">
          {ourTeamInfo?.team.map((member, index) => (
            <TeamMemberItem
              id={index}
              name={member.name}
              jobTitle={member.jobTitle}
              description={member.jobTitle}
              img={member.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
