import { useQuery } from "@tanstack/react-query";
import { getInterPropertyById, getInterPropertyInfo } from ".";

const useGetInterPropertiesInfoQuery = () =>
  useQuery({
    queryKey: ["inter-properties-info"],
    queryFn: () => getInterPropertyInfo(),
  });
const useGetInterPropertiesInfoByIdQuery = (id: string | undefined) =>
  useQuery({
    queryKey: ["inter-properties-info-by-id"],
    queryFn: () => getInterPropertyById(id),
    enabled: !!id,
  });

export { useGetInterPropertiesInfoQuery, useGetInterPropertiesInfoByIdQuery };
