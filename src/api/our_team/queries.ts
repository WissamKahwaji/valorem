import { useQuery } from "@tanstack/react-query";
import { getOurTeamInfo } from ".";

const useGetOurTeamInfoQuery = () =>
  useQuery({ queryKey: ["our-team-info"], queryFn: () => getOurTeamInfo() });
export { useGetOurTeamInfoQuery };
