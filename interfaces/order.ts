import { Address } from "./address";
import { OrderDetail } from "./order_detail";

export interface Order {

    status: string,
    date: Date,
    order_details: OrderDetail[] ,
    address: Address

}