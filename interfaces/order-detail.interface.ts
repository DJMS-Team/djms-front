import { Order } from "./order.interface";
import { Product } from "./product.interface";

export interface OrderDetail {
  id: string;
  quantity: string;
  order: Order;
  product: Product;
}