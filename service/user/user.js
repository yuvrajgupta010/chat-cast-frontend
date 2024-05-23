import { apiInterceptor } from "../axiosClient";
import { RestfulUrls } from "../restfulUrls";

export const putProfileUpdateService = async (data) => {
  return await apiInterceptor
    .put(
      `${RestfulUrls.PROFILE_UPDATE}?update=${data.updateType}`,
      data.userData
    )
    .then((res) => {
      return res;
    });
};
