
import axios from 'axios';

export const updateUser = async (id:string, name:string, password:string, email:string, photo_url:string, role:string) => {
    try {
        const response = await axios.patch(process.env.NEXT_PUBLIC_API_BASE_URL+`users/${id}`, {
            
             
                    name: name,
                    email: email,
                    role: role, 
                    photo_url: photo_url
            
           
            
                          
        });
        console.log("User role updated:", response.data);
        return response.data;
    }catch(error) {
        console.error("Error updating user role:", error);
        return error;
    }
}