import { Timestamp } from "firebase/firestore";

export interface Sale {
    id: number,
    cart: Product[],
    client: Client,
    date: string,
    delivery: {
        company: string,
        cost: number,
        date: string
    },
    isDelivered: boolean    
}

export interface Product {
    model: string,
    lateral: boolean,
    height: number,
    length: number,
    fabric: string,
    colour: string
}

export interface Client {
 name: string,
 lastName: string,
 address: string,
 location: string,
 postalcode: number,
 province: string,
 phone: string,
}