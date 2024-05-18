import { apiInterceptor } from "../axiosClient";
import { RestfulUrls } from "../restfulUrls";

export const postForgetPasswordService = async (data) => {
  return await apiInterceptor
    .post(`${RestfulUrls.FORGOT_PASSWORD}`, data)
    .then((res) => {
      return res;
    });
};

export const putForgetPasswordService = async (data) => {
  return await apiInterceptor
    .put(`${RestfulUrls.FORGOT_PASSWORD}?type=verify`, data)
    .then((res) => {
      return res;
    });
};

export const getNewForgetOtpService = async (data) => {
  return await apiInterceptor
    .put(`${RestfulUrls.FORGOT_PASSWORD}?type=resend`, data)
    .then((res) => {
      return res;
    });
};
