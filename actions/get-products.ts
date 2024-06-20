import { getAuthorizationHeader } from '@/APIS/getAuthorizationHeader';
import axios from 'axios';

export interface Product {
  id: string;
  product_name: string;
  description: string | null;
  price: number;
  photo_url: string;
  size?: string;
  order_details?: any[];
  reviews?: any[];
  product_category: any;
  comments?: any[];
  inventory: any;
  seller: any;
}

export const getProducts = async (page = 1, take = 10, order = 'ASC') => {
  try {
    const response = await axios.get('http://localhost:3001/products', {
      headers: getAuthorizationHeader(),
      params: {
        page,
        take,
        order
      }
    });
    const { data, meta } = response.data;
    return { products: data, meta };

  } catch (error) {
    console.error('Failed to fetch products:', error);
    return { products: [], meta: null };
  }
}
