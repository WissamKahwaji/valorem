import API_ROUTES from "../../constants/apiRoutes";
import publicInstance from "../publicInstance";
import { InterPropertyInfo } from "./type";

const getInterPropertyInfo = async () => {
  const res = await publicInstance.get<InterPropertyInfo[]>(
    API_ROUTES.INTERPROPERTY.GET.All
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
