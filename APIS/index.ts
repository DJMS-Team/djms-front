import { AddresApi } from "./address.api";
import { AuthApi } from "./auth.api";
//import { InventoryApi } from "./inventory.api";
import { OrderApi } from "./order.api";
import { ProductApi } from "./product.api";
import { ResourceApi } from "./resource.api";
import { UserApi } from "./user.api";

export const authApi = new AuthApi('http://localhost:3001')

export const userApi = new UserApi('http://localhost:3001')

export const resourceApi = new ResourceApi('http://localhost:3001')

export const productApi = new ProductApi('http://localhost:3001')

export const orderApi = new OrderApi('http://localhost:3001')

//export const inventoryApi = new InventoryApi('http://localhost:3001')

export const addressApi = new AddresApi('http://localhost:3001')