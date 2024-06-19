import axios from 'axios';

export const getIncome = async () => {
    try {
        
        const response = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL+`reports/income`); 

        //console.log('aqui',response)

        
       
        return response.data;
        
        
      } catch (error) {
            console.log("Error fetching income:", error);
        return []
      }
}