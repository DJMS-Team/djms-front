//import { authService } from "../../services";
import { authApi } from "@/APIS";
import Cookies from "js-cookie";

export const useLogin = () => {
    
  const login = async (username: string, password: string) => {
    const res = await authApi.login(username, password);
    // console.log(res.data);
    if (res) {
      Cookies.set("currentUser", JSON.stringify(res.data));
    }
    return res.data;
  };

  return { login };
  
};