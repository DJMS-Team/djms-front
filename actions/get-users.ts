import axios from 'axios';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}
export const getUsers = async (page = 1 , take = 10 , order = 'ASC') => {
    try {
        
        const response = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL+`users`, {   
                headers:{
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjllNDBmZWFhLTJhNmItNDM4Mi05NDJkLTJlZDY3ZjcyYzliOSIsImVtYWlsIjoicGFibG9AcGFibG8uY29tIiwibmFtZSI6InBhYmxvIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzE4NzU2MjE0LCJleHAiOjE3MTg4NDI2MTR9.kfDBU4IItRum_DXw12wNYUBEtKwE-gJqTMrH-U0Z4mY'
                },
                params: {
                    page,
                    take,
                    order
                }
            }
        ); 
        const {data, meta} = response.data;
        return {users: data, meta}
        
        
      } catch (error) {
        console.error("Error fetching users:", error);
        return {users: [], meta: null}
      }
}