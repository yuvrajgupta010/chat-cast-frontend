import { apiInterceptor } from "../axiosClient";
import { RestfulUrls } from "../restfulUrls";

export const postLoginService = async (data) => {
  return await apiInterceptor.post(`${RestfulUrls.LOGIN}`, data).then((res) => {
    return res;
  });
};
