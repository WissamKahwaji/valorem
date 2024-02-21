import React from "react";

type TeamMemberType = {
  id: number;
  name: string;
  img: string;
  jobTitle: string;
  description: string;
};

const TeamMemberItem = (props: TeamMemberType) => {
  return (
    <div
      key={props.id}
      className="relative w-[350px] h-[350px] overflow-hidden border border-gray-300 group"
    >
      <img
        src={props.img}
        alt=""
        className="w-full h-full object-cover transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute bottom-1/3 left-0 w-full h-2/3 bg-black/50 flex items-center justify-center transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="text-white text-start font-body text-base px-3 py-3 overflow-y-auto max-h-full">
          {props.description}
        </div>
      </div>
      <div className="absolute bottom-10 p-4">
        <p className="text-black text-base font-semibold">{props.name}</p>
        <p className="text-gray-400 text-start font-semibold text-sm">
          {props.jobTitle}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberItem;
