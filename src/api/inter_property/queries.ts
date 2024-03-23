import { useQuery } from "@tanstack/react-query";
import { getInterPropertyById, getInterPropertyInfo } from ".";

const useGetInterPropertiesInfoQuery = (queryParams?: Record<string, any>) =>
  useQuery({
    queryKey: ["inter-properties-info"],
    queryFn: () => getInterPropertyInfo(queryParams),
  });
const useGetInterPropertiesInfoByIdQuery = (id: string | undefined) =>
  useQuery({
    queryKey: ["inter-properties-info-by-id"],
    queryFn: () => getInterPropertyById(id),
    enabled: !!id,
  });

export { useGetInterPropertiesInfoQuery, useGetInterPropertiesInfoByIdQuery };
