import React, { useState } from "react";
import TeamMemberItem from "../../items/about_us/TeamMemberItem";
import { useGetOurTeamInfoQuery } from "../../../api/our_team/queries";
import LoadingPage from "../../../pages/loadingPage/LoadingPage";

const OurTeam = () => {
  const { data: ourTeamInfo, isLoading, isError } = useGetOurTeamInfoQuery();
  const [showFullBrief, setShowFullBrief] = useState(false);

  const toggleBrief = () => {
    setShowFullBrief(!showFullBrief);
  };
  const teamArray = ourTeamInfo?.team.slice(1);
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

        <div className=" flex flex-col md:flex-row md:space-x-5 md:mx-10 lg:mx-60 mx-2 justify-start items-start md:justify-start md:items-start">
          <div className="w-full md:w-[350px] overflow-hidden border border-gray-300 rounded-lg shadow-lg group">
            <img
              src={ourTeamInfo?.team.at(0)?.img}
              alt={ourTeamInfo?.team.at(0)?.name}
              className="w-full h-full object-cover transition-transform transform scale-100 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-start items-start space-y-5 w-full">
            <p className="md:text-2xl text-lg text-primary font-header font-semibold uppercase">
              {ourTeamInfo?.team.at(0)?.name}
            </p>
            <p className="text-base md:text-lg text-hoverColor font-body uppercase">
              {ourTeamInfo?.team.at(0)?.jobTitle}
            </p>
            <div className="text-gray-600 whitespace-pre-wrap font-serif text-sm">
              {showFullBrief
                ? ourTeamInfo?.team.at(0)?.brief
                : ourTeamInfo?.team.at(0)?.brief.slice(0, 500)}
              {ourTeamInfo?.team.at(0)?.brief &&
                ourTeamInfo?.team.at(0)?.brief.length! > 100 && (
                  <span
                    className="cursor-pointer text-subTitle"
                    onClick={toggleBrief}
                  >
                    {showFullBrief ? " Show Less" : " Show More"}
                  </span>
                )}
            </div>
          </div>
        </div>
        <hr className="w-3/4 mx-auto my-10" />
        <div className=" grid grid-flow-row  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 justify-center items-center  md:mx-10 lg:mx-60">
          {teamArray &&
            teamArray.map((member, index) => (
              // <TeamMemberItem
              //   id={index}
              //   name={member.name}
              //   jobTitle={member.jobTitle}
              //   description={member.jobTitle}
              //   img={member.img}
              // />
              <div className=" md:mb-10 flex  flex-row space-x-2 md:space-x-5 mx-2 justify-start items-start md:justify-start md:items-start ">
                <div className="w-full h-[150px] md:w-[350px] md:h-[200px] overflow-hidden border border-gray-300 rounded-lg shadow-lg group">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform transform scale-100 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-start items-start space-y-5 w-full">
                  <p className="md:text-lg text-sm text-primary font-header font-semibold uppercase">
                    {member.name}
                  </p>
                  <p className="text-xs md:text-base text-hoverColor font-body uppercase">
                    {member.jobTitle}
                  </p>
                  {/* <div className="text-gray-600 whitespace-pre-wrap font-serif text-sm">
                    {showFullBrief
                      ? ourTeamInfo?.team.at(0)?.brief
                      : ourTeamInfo?.team.at(0)?.brief.slice(0, 500)}
                    {ourTeamInfo?.team.at(0)?.brief &&
                      ourTeamInfo?.team.at(0)?.brief.length! > 100 && (
                        <span
                          className="cursor-pointer text-subTitle"
                          onClick={toggleBrief}
                        >
                          {showFullBrief ? " Show Less" : " Show More"}
                        </span>
                      )}
                  </div> */}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
