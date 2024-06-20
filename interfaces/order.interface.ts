import { User } from './user.interface';
import { PaymentMethod } from './payment-method.interface';
import { OrderDetail } from './order-detail.interface';
import { Status } from '@/enums/status.enum';

export interface Order {
  id: string;
  status: Status;
  date: Date;
  customer: User;
  payment_method: PaymentMethod;
  order_details: OrderDetail[];
}