import { useQuery } from "@tanstack/react-query";
import { getOurAgentsInfo } from ".";

const useGetOurAgentsInfoQuery = () =>
  useQuery({
    queryKey: ["our-agents-info"],
    queryFn: () => getOurAgentsInfo(),
  });
export { useGetOurAgentsInfoQuery };
