import { Timestamp } from "firebase/firestore";

export interface Sale {
    id: string,
    cart: Product[],
    client: Client,
    date: Timestamp,
    delivery: {
        company: string,
        cost: number,
        date: Timestamp
    },
    isDelivered: boolean    
}

export interface Product {
    model: string,
    lateral: boolean,
    measures: {
        height: number,
        length: number,
    },
    fabric: string,
    colour: string
}

export interface Client {
 name: string,
 lastName: string,
 deliveryPlace: {
    address: string,
    location: string,
    postalcode: number,
    province: string,
    telephone: string,
 }
}