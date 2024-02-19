import { useQuery } from "@tanstack/react-query";
import { getOurServicesInfo } from ".";

const useGetOurServicesInfoQuery = () =>
  useQuery({
    queryKey: ["our-servies-info"],
    queryFn: () => getOurServicesInfo(),
  });
export { useGetOurServicesInfoQuery };
