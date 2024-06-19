import { Review } from './review';
import { ProductCategory } from './product-category';

export interface Product {
    id: string;
    product_name: string;
    description: string;
    price: number;
    photo_url: string;
    sellerId: string;
    product_category: ProductCategory;
    reviews: Review[];
}