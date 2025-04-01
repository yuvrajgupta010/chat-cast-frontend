import { apiInterceptor } from "../axiosClient";
import { RestfulUrls } from "../restfulUrls";

export const verifyAccountService = async (data) => {
  return await apiInterceptor
    .post(`${RestfulUrls.ACCOUNT_VERIFICATION}?type=verify`, data)
    .then((res) => {
      return res;
    });
};

export const resendAccountVerificationOtpService = async (data) => {
  return await apiInterceptor
    .post(`${RestfulUrls.ACCOUNT_VERIFICATION}?type=resend`, data)
    .then((res) => {
      return res;
    });
};
