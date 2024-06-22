import { Review } from "./review.interface";
import { OrderDetail } from "./order-detail.interface";
import { ProductCategory } from "./product-category.interface";
import { Comment } from "./comment.interface";
import { Inventory } from "./inventory.interface";
import { User } from "./user.interface";

export interface Product {
  id: string;
  product_name: string;
  description: string | null;
  price: number;
  photo_url: string;
  size?: string;
  quantity: number;
  order_details?: OrderDetail[];
  reviews?: Review[];
  product_category: ProductCategory;
  comments?: Comment[];
  inventory: Inventory;
  seller: User;
}