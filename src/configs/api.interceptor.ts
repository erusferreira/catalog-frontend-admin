import { localStorageService } from "../services/localstorage-service";
import { axiosConfig } from "../configs/axios.config";

export const http = {
  getToken: () => {
    const lsService = localStorageService();
    try {
      const user = lsService.getData('user');
      return user.token;
    } catch (error) {
      return error;
    }
  },
  get: async (url: string) => {
    const token = http.getToken();
    const { data } = await axiosConfig.get(url, { headers: { Authorization: token } });
    return data;
  }
}