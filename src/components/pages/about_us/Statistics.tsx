import React from "react";
import { useGetStatisticsInfoQuery } from "../../../api/statistics/queries";

const Statistics = () => {
  const { data: statisticsInfo } = useGetStatisticsInfoQuery();

  return (
    <div className="mx-4 md:mx-8 lg:mx-24 my-14">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {statisticsInfo &&
          statisticsInfo.map((statistic, index) => (
            <div
              key={index}
              className="flex flex-col items-center my-4 md:my-0 md:mx-4"
            >
              <h1 className="text-4xl md:text-3xl lg:text-6xl font-header text-primary pb-2 md:pb-4">
                {statistic.number}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-serif text-subTitle">
                {statistic.title}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Statistics;
