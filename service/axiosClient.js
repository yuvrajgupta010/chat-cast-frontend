import axios from "axios";
import { BASE_URL } from "./restfulUrls";

const StatusCode = {
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  TooManyRequests: 429,
  InternalServerError: 500,
};

const headers = {
  "Content-Type": "application/json; charset=utf-8",
};

const injectToken = async (config) => {
  try {
    let accessToken = localStorage.getItem("accessToken");
    accessToken = JSON.parse(accessToken);
    // not show but the accessToken is cached and it's passed to sign in APi as well
    // this will fix prev user sign in. PLease DO NOT OPTIMIZE THIS CODE
    // if (config.url == "/auth/sign" || config.url == "users/sign_in") {
    //   config.headers = {
    //     ...config.headers,
    //     Authorization: "",
    //   };
    // } else {
    if (accessToken != null && config.headers) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
    // }

    return config;
  } catch (_error) {
    return config;
  }
};

class Interceptor {
  instance = null;

  get axiosInstance() {
    return this.instance != null ? this.instance : this.initInterceptor();
  }
  initInterceptor() {
    const createInstance = axios.create({
      baseURL: BASE_URL,
      headers,
      // withCredentials: true,
    });

    createInstance.interceptors.request.use(injectToken, (error) =>
      Promise.reject(error)
    );

    createInstance.interceptors.response.use(
      (response) => {
        if (response.headers["authorization"]) {
          const accessToken = response.headers.authorization.replace(
            /Bearer /,
            ""
          );
          localStorage.setItem("accessToken", JSON.stringify(accessToken));
          createInstance.defaults.headers["Authorization"] =
            response.headers.authorization;
        }
        return response;
      },
      (error) => {
        const { response } = error;
        return this.handleError(response);
      }
    );

    this.instance = createInstance;
    return createInstance;
  }

  request(config) {
    return this.axiosInstance.request(config);
  }

  get(url, config) {
    return this.axiosInstance.get(url, config);
  }

  post(url, data, config) {
    return this.axiosInstance.post(url, data, config);
  }

  put(url, data, config) {
    return this.axiosInstance.put(url, data, config);
  }

  patch(url, data, config) {
    return this.axiosInstance.patch(url, data, config);
  }

  putFormData(url, formData, config) {
    // Use FormData and set "multipart/form-data" headers
    const formDataConfig = {
      ...config,
      headers: {
        ...config.headers,
        "Content-Type": "multipart/form-data",
      },
    };
    return this.axiosInstance.put(url, formData, formDataConfig);
  }

  delete(url, config) {
    return this.axiosInstance.delete(url, config);
  }

  async handleError(error) {
    const status = error?.status;

    switch (status) {
      case StatusCode.InternalServerError: {
        break;
      }
      case StatusCode.Forbidden: {
        break;
      }
      case StatusCode.Unauthorized: {
        const config = error?.config;
        try {
          console.log("error", error);
          // if (error?.data?.invalid_user) {
          localStorage.clear();
          window.location.href = "/";
          // }
          return axios(config);
        } catch (err) {
          console.log("axios Catch", err);
        }
        break;
      }
      case StatusCode.NotFound: {
        break;
      }
      case StatusCode.TooManyRequests: {
        break;
      }
    }

    return Promise.reject(error);
  }
}

export const apiInterceptor = new Interceptor();
