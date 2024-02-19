import { useQuery } from "@tanstack/react-query";
import { getStatisticsInfo } from ".";

const useGetStatisticsInfoQuery = () =>
  useQuery({
    queryKey: ["statistics-info"],
    queryFn: () => getStatisticsInfo(),
  });
export { useGetStatisticsInfoQuery };
