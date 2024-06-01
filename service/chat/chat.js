import { apiInterceptor } from "../axiosClient";
import { RestfulUrls } from "../restfulUrls";

export const getUserChatListService = async (data) => {
  return await apiInterceptor
    .get(`${RestfulUrls.GET_USER_CHAT_LIST}`)
    .then((res) => {
      return res;
    });
};

export const postSendMessageService = async (data) => {
  return await apiInterceptor
    .post(`${RestfulUrls.SEND_MESSAGE}`, data)
    .then((res) => {
      return res;
    });
};

export const postUpdateMessageStatusService = async (data) => {
  return await apiInterceptor
    .post(`${RestfulUrls.UPDATE_MESSAGE_STATUS}/${data.chatId}`, data.data)
    .then((res) => {
      return res;
    });
};

export const getChatMessagesService = async (data) => {
  return await apiInterceptor
    .get(
      `${RestfulUrls.GET_CHAT_MESSAGES}/${data.chatId}?offset=${
        data.offset ?? 1
      }&limit=${data.limit ?? 12}`
    )
    .then((res) => {
      return res;
    });
};

export const getUploadFileUrlService = async (data) => {
  return await apiInterceptor
    .post(`${RestfulUrls.GET_UPLOAD_FILE_URL}`, data)
    .then((res) => {
      return res;
    });
};

export const getDownloadFileUrlService = async (data) => {
  return await apiInterceptor
    .post(`${RestfulUrls.GET_DOWNLOAD_FILE_URL}`, data)
    .then((res) => {
      return res;
    });
};
