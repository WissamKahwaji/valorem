import API_ROUTES from "../../constants/apiRoutes";
import publicInstance from "../publicInstance";
import { InterPropertyInfo } from "./type";

const getInterPropertyInfo = async (queryParams?: Record<string, any>) => {
  const res = await publicInstance.get<InterPropertyInfo[]>(
    API_ROUTES.INTERPROPERTY.GET.All,
    { params: queryParams }
  );
  return res.data;
};
const getInterPropertyById = async (id: string | undefined) => {
  const res = await publicInstance.get<InterPropertyInfo>(
    API_ROUTES.INTERPROPERTY.GET.BY_ID(id)
  );
  return res.data;
};

export { getInterPropertyInfo, getInterPropertyById };
