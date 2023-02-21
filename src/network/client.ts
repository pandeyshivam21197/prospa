import axios, {AxiosRequestConfig, AxiosInstance} from 'axios';

class ApiClient {
  apiclient: AxiosInstance;

  constructor() {
    let axiosInstance = axios.create({
      baseURL: 'https://',
      timeout: 600000,
    });

    this.apiclient = axiosInstance;
  }

  request = async (config: AxiosRequestConfig) => {
    try {
      const res = await this.apiclient?.request(config);
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  get = (url: string, params = {}) => {
    return this.request({
      method: 'GET',
      url,
      params,
    });
  };
}

const apiClient = new ApiClient();

export {apiClient as ApiClient};
