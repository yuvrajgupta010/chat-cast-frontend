import { BASE_URL } from "@/service/restfulUrls";

export const googleAuthPage = () => {
  window.location.href = `${BASE_URL}/auth/google`;
};
