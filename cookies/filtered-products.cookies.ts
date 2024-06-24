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

    if (query.category) {
      Cookies.set('category', JSON.stringify(query.category), {
        path: '/',
      });
    }

    if (query.search) {
      Cookies.set('search', JSON.stringify(query.search), {
        path: '/',
      });
    }

    if (query.priceMax) {
      Cookies.set('priceMax', JSON.stringify(query.priceMax), {
        path: '/',
      });
    }

    if (query.priceMin) {
      Cookies.set('priceMin', JSON.stringify(query.priceMin), {
        path: '/',
      });
    }

    emitCookieChangeEvent();

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

export const getQueryTypeFromCookie = () => {
  var queryType = undefined;

  const search = Cookies.get('search');
  const category = Cookies.get('category');
  const priceMax = Cookies.get('priceMax');
  const priceMin = Cookies.get('priceMin');

  if (search) {
    const value = JSON.parse(search);
    queryType = 'Búsqueda por palabras claves';
    return {queryType, value}
  }
  if (category) {
    const value = JSON.parse(category)
    queryType = 'Búsqueda por categoría';
    return {queryType, value}
  }
  if (priceMax) {
    const value = JSON.parse(priceMax)
    queryType = 'Búsqueda por precio máximo';
    return {queryType, value}
  }
  if (priceMin) {
    const value = JSON.parse(priceMin)
    queryType = 'Búsqueda por precio mínimo';
    return {queryType, value}
  }
}

export const clearFilteredProductsCookie = () => {
  Cookies.remove('filteredProducts', { path: '/' });
  Cookies.remove('search', { path: '/' });
  Cookies.remove('category', { path: '/' });
  Cookies.remove('priceMax', { path: '/' });
  Cookies.remove('priceMin', { path: '/' });
  emitCookieChangeEvent(); 
};
