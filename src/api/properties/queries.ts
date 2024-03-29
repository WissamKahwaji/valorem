import { useQuery } from "@tanstack/react-query";
import {
  getLastPropertyInfo,
  getMinPricePropertyInfo,
  getPropertyById,
  getPropertyInfo,
} from ".";

const useGetPropertiesInfoQuery = (queryParams?: Record<string, any>) =>
  useQuery({
    queryKey: ["properties-info"],
    queryFn: () => getPropertyInfo(queryParams),
  });
const useGetPropertiesInfoByIdQuery = (id: string | undefined) =>
  useQuery({
    queryKey: ["properties-info-by-id"],
    queryFn: () => getPropertyById(id),
    enabled: !!id,
  });

const useGetLastPropertiesInfoQuery = () =>
  useQuery({
    queryKey: ["last-properties-info"],
    queryFn: () => getLastPropertyInfo(),
  });

const useGetMinPricePropertiesInfoQuery = () =>
  useQuery({
    queryKey: ["min-price-properties-info"],
    queryFn: () => getMinPricePropertyInfo(),
  });

export {
  useGetPropertiesInfoQuery,
  useGetLastPropertiesInfoQuery,
  useGetMinPricePropertiesInfoQuery,
  useGetPropertiesInfoByIdQuery,
};
