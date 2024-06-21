import { Address } from "./address";

export interface User {
    id:string,
    name: string,
    password:string,
    email:string,
    role: string,
    addresses: Address[]
}