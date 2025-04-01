import { apiInterceptor } from "../axiosClient";
import { RestfulUrls } from "../restfulUrls";

export const postSignupService = async (data) => {
  return await apiInterceptor
    .post(`${RestfulUrls.SIGN_UP}`, data)
    .then((res) => {
      return res;
    });
};
