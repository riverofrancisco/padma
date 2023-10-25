import { Timestamp } from "firebase/firestore";

export interface Sale {
   
    product: Product,
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

export const blankClient: Client = {
    name: "",
    lastName: "",
    address: "",
    location: "",
    postalcode: 0,
    province: "",
    phone: "",
  };
  
 export const blankProduct: Product = {
    model: "",
    lateral: false,
    height: 0,
    length: 0,
    fabric: "",
    colour: "",
  };
  
 export const blankSaleState = {
    product: blankProduct,
    client: blankClient,
    date: "",
    delivery: {
      company: "padma",
      cost: 0,
      date: "2023-04-24",
    },
    isDelivered: false,
  };