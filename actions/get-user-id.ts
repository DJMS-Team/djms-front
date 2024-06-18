import axios from 'axios';

export const getUserById = async (id:string, token: string) => {
    console.log(id)
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL+`users/${id}`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ZTQwZmVhYS0yYTZiLTQzODItOTQyZC0yZWQ2N2Y3MmM5YjkiLCJlbWFpbCI6InBhYmxvQHBhYmxvLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcxODcyNDY1NywiZXhwIjoxNzE4ODExMDU3fQ.BSOoOiOLF-NW4cVkac7Q8Mq6ApWVmywYAmmUHVZWHaw`
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