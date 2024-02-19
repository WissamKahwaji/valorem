import API_ROUTES from "../../constants/apiRoutes";
import publicInstance from "../publicInstance";
import { StatisticsInfo } from "./type";
const getStatisticsInfo = async () => {
  const res = await publicInstance.get<StatisticsInfo[]>(
    API_ROUTES.STATISTICS.GET
  );
  return res.data;
};

export { getStatisticsInfo };
