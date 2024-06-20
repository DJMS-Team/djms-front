
import axios from 'axios';

interface Product {
    id: string;
    name: string;
    email: string;
    role: string;
}
export const getUsers = async (page = 1 , take = 10 , order = 'ASC') => {
    try {
        
        const response = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL+`/products`, {   

            }
        ); 
        const products = response.data;
        return products
        
        
      } catch (error) {
        
        console.error("Error fetching products:", error);
      }
}