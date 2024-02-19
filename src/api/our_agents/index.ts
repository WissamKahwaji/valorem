import API_ROUTES from "../../constants/apiRoutes";
import publicInstance from "../publicInstance";
import { OurAgentsInfo } from "./type";

const getOurAgentsInfo = async () => {
  const res = await publicInstance.get<OurAgentsInfo[]>(
    API_ROUTES.OUR_AGENTS.GET
  );
  return res.data;
};

export { getOurAgentsInfo };
