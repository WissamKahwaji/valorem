import API_ROUTES from "../../constants/apiRoutes";
import publicInstance from "../publicInstance";
import { OurServices } from "./type";

const getOurServicesInfo = async () => {
  const res = await publicInstance.get<OurServices[]>(
    API_ROUTES.OUR_SERVICES.GET
  );
  return res.data;
};

export { getOurServicesInfo };
