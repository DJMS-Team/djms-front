import axios from 'axios';

export const getUserById = async (id:string, token: string) => {
    console.log(id)
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL+`users/${id}`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjllNDBmZWFhLTJhNmItNDM4Mi05NDJkLTJlZDY3ZjcyYzliOSIsImVtYWlsIjoicGFibG9AcGFibG8uY29tIiwibmFtZSI6InBhYmxvIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNzE4NzU2MjE0LCJleHAiOjE3MTg4NDI2MTR9.kfDBU4IItRum_DXw12wNYUBEtKwE-gJqTMrH-U0Z4mY`
            }
        
        }); 
        const user = response.data
        console.log(user)
        return user
      } catch (error) {
            console.error("User not found:", error);
        return error
      }
}