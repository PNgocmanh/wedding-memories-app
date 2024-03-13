import AxiosInstance from "./AxiosInstance";
import Cookies from "js-cookie";

export const userService = {
  login: async (body) => {
    try {
      const res = await AxiosInstance.post("users", body);
      if(body.checked){
        Cookies.set('username', body.username, { expires: 365 });
        Cookies.set('password', body.password, { expires: 365 })
      } else {
        Cookies.remove('username');
        Cookies.remove('password')
      }
      return res;      
    } catch (error) {
      const errorMessage = error.response?.data?.message
        ? error.response.data.message
        : "Username or password is incorrect";
      throw new Error(errorMessage);
    }
  },
  signup: async (body) => {
    try {
      const res = await AxiosInstance.post("users", body);
      if (res.user?.errors?.length > 0) {
        throw new Error(res.user.errors[0]);
      }
      return true;
    } catch (error) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error(error.message);
      }
    }
  },
};
