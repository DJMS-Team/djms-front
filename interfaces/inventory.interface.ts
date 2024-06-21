import { Product } from "./product.interface";
import { User } from "./user.interface";

export interface Inventory {
  id: string;
  quantity: number;
  products: Product[];
  user: User;
}