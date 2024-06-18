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
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ZTQwZmVhYS0yYTZiLTQzODItOTQyZC0yZWQ2N2Y3MmM5YjkiLCJlbWFpbCI6InBhYmxvQHBhYmxvLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcxODY2NjU5NiwiZXhwIjoxNzE4NzUyOTk2fQ.mlWtUlYIykDMRekqtIRnjJBgg2XMRlvJT5VC6RDrKJE'
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