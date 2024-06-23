// En un archivo utilitario, por ejemplo, cookies.ts
import { FilterProductsDto } from '@/interfaces/filter-products-dto';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getProductsFiltered = async (query: FilterProductsDto) => {
  try {
    console.log('haciendo filter products')
    const response = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/products/filter', {
      params: {
        query
      }
    });

    const { data } = response.data;

    cookies.set('filteredProducts', JSON.stringify(data), { path: '/' });

    return data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};

export const getFilteredProductsFromCookie = () => {
  const storedProducts = cookies.get('filteredProducts');
  if (storedProducts) {
    return JSON.parse(storedProducts);
  }
  return [];
};

export const clearFilteredProductsCookie = () => {
  cookies.remove('filteredProducts', { path: '/' });
};
