import API_ROUTES from "../../constants/apiRoutes";
import publicInstance from "../publicInstance";
import { PropertyInfo } from "./type";

const getPropertyInfo = async (queryParams?: Record<string, any>) => {
  const res = await publicInstance.get<PropertyInfo[]>(
    API_ROUTES.PROPERTY.GET.All,
    { params: queryParams }
  );
  return res.data;
};
const getPropertyById = async (id: string | undefined) => {
  const res = await publicInstance.get<PropertyInfo>(
    API_ROUTES.PROPERTY.GET.BY_ID(id)
  );
  return res.data;
};

const getLastPropertyInfo = async () => {
  const res = await publicInstance.get<PropertyInfo[]>(
    API_ROUTES.PROPERTY.GET.Last
  );
  return res.data;
};

const getMinPricePropertyInfo = async () => {
  const res = await publicInstance.get<PropertyInfo[]>(
    API_ROUTES.PROPERTY.GET.Min
  );
  return res.data;
};

export {
  getPropertyInfo,
  getLastPropertyInfo,
  getMinPricePropertyInfo,
  getPropertyById,
};
