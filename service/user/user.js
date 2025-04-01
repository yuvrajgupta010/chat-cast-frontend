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

export const getProfilePictureUploadUrlService = async (data) => {
  return await apiInterceptor
    .post(`${RestfulUrls.GET_PROFILE_UPLOAD_URL}`, data)
    .then((res) => {
      return res;
    });
};

export const searchUsersService = async (query) => {
  return await apiInterceptor
    .get(`${RestfulUrls.SEARCH_USERS}?search=${query}`)
    .then((res) => {
      return res;
    });
};
