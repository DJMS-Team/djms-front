import { Address } from './address.interface';
import { Order } from './order.interface';
import { Comment } from './comment.interface';
import { Review } from './review.interface';
import { Inventory } from './inventory.interface';
import { Role } from '@/enums/roles.enum';
import { Product } from './product.interface';

export interface User {
  id: string;
  name: string;
  password: string;
  email: string;
  role: Role;
  addresses: Address[];
  orders?: Order[];
  comments: Comment[];
  reviews: Review[];
  inventory?: Inventory;
  products?: Product[];
  photo_url: string;
  favorites: Product[];
}