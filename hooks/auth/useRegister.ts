//import { authService } from "../../services";
import { authApi, userApi } from "@/APIS";
import { UserApi } from "@/APIS/user.api";
import Cookies from "js-cookie";

export const useRegister = () => {
    
  const register = async (name:string, password:string, email:string, photo_url:string, role:string) => {
    //console.log("este es el serviceId " + serviceId + '\n este es el language_id ' + languageId + "\n este es el city_id" + cityId + "\n este es el speciality_id " + specialityId);
    const user = await userApi.createUser(name, password, email, photo_url, role);
    console.log(" Este es el usuario AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + user)
    if (user) {
      Cookies.remove("currentUser")
    }
    return user;
  };

  return { register };
  
};