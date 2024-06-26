import axios from 'axios';

export const getOrders = async () => {
    try {
        
        const response = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL+`/reports/orders`); 

        //console.log('aqui',response)

        
       
        return response.data;
        
        
      } catch (error) {
            
        return []
      }
}