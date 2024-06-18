import axios, { AxiosInstance } from "axios";
import { getAuthorizationHeader } from "./getAuthorizationHeader";


export class UserApi {
    protected readonly instance: AxiosInstance;
    public constructor(url: string) {

        
        this.instance = axios.create({
          baseURL: url,
          timeout: 30000,
          timeoutErrorMessage: "Time out!",
          headers: {
            'Access-Control-Allow-Origin': '*', // Allow all origins
          },
          
        });
    }

    createUser = async (name:string, password:string, email:string, photo_url:string, role:string) =>{
        try{
            const res = await this.instance
            .post('/users', {
                name: name,
                password: password,
                email: email,
                photo_url: photo_url,
                role: role
            })

            return res.data
        }catch(error){
            throw error
        }
    }

    findUsers = async ()=>{
        try{
            const res = await this.instance
            .get('/users',{
                headers: getAuthorizationHeader()
            })
            return res.data
        }catch(error){
            throw error;
        }
    }

    findOneUser = async (id:string) =>{
        try{
            const res = await this.instance
                .get(`/users/${id}`,{
                    headers: getAuthorizationHeader()
                })
            return res.data
        }catch(error){
            throw error;
        }
    }

    updateOneUser = async (id:string, name:string, password:string, email:string, photo_url:string, role:string)=>{
        try{
            const res = await this.instance
                .patch(`/users/${id}`,{
                    name: name,
                    password: password,
                    email: email,
                    photo_url: photo_url,
                    role: role
                },{
                    headers: getAuthorizationHeader()
                })
            
            return res.data
        }catch(error){
            throw error;
        }
    }

    deleteUser = async(id:string) =>{
        try{
            const res = await this.instance
                .delete(`/users/${id}`,{
                    headers: getAuthorizationHeader()
                })
        }catch(error){

        }
    }

    recievedOrders = async(userId: string) =>{
        try{
            const res = await this.instance
            .get(`/${userId}/orders/received`,{
                headers: getAuthorizationHeader()
            })
            return res.data;
        }catch(error){
            throw error;
        }
    }

    addFavoriteProduct = async(userId:string, productId: string) =>{
        try{
            const res = await this.instance
                .post(`/${userId}/favorite`,{
                    product_id: productId
                },
                {
                    headers: getAuthorizationHeader()
                }
            )

            return res.data
        }catch(error){
            throw error;
        }
    }

    favorites = async(id:string) =>{
        try{
            const res = await this.instance
                .get(`/${id}/favorite`,{
                    headers: getAuthorizationHeader()
                })

            return res.data;
        }catch{

        }
    }

}