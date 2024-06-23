import { FilterProductsDto } from '@/interfaces/filter-products-dto';
import axios from 'axios';
import Cookies from 'js-cookie';
import { emitCookieChangeEvent } from './cookies-change';

export const getProductsFiltered = async (query: FilterProductsDto) => {
  try {
    console.log('Sending filters:', query);
    const response = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/products/filter', {
      params: query
    });

    Cookies.set('filteredProducts', JSON.stringify(response.data), {
      path: '/',
    });

    emitCookieChangeEvent(); // Emite el evento cuando se actualiza la cookie

    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};

export const getFilteredProductsFromCookie = () => {
  const storedProducts = Cookies.get('filteredProducts');

  if (storedProducts) {
    try {
      return JSON.parse(storedProducts);
    } catch (error) {
      console.error('Failed to parse stored products:', error);
      return [];
    }
  }
  return [];
};

export const clearFilteredProductsCookie = () => {
  Cookies.remove('filteredProducts', { path: '/' });
  emitCookieChangeEvent(); // Emite el evento cuando se borra la cookie
};
