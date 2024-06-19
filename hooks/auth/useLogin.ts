//import { authService } from "../../services";
import { authApi } from "@/APIS";
import Cookies from "js-cookie";

export const useLogin = () => {
    
  const login = async (username: string, password: string) => {
    const res = await authApi.login(username, password);
    console.log(res);
    if (res) {
      Cookies.set("currentUser", JSON.stringify(res));
    }
    return res.data;
  };

  return { login };
  
};