import API_ROUTES from "../../constants/apiRoutes";
import publicInstance from "../publicInstance";
import { OurTeamInfo } from "./type";

const getOurTeamInfo = async () => {
  const res = await publicInstance.get<OurTeamInfo>(API_ROUTES.OUT_TEAMS.GET);
  return res.data;
};

export { getOurTeamInfo };
