import { apiInterceptor } from "../axiosClient";
import { RestfulUrls } from "../restfulUrls";

export const logoutService = async (data) => {
  return await apiInterceptor.get(RestfulUrls.LOGOUT).then((res) => {
    return res;
  });
};
