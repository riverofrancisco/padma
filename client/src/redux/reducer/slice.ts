import { createSlice } from "@reduxjs/toolkit";
import { Sale, Product, Client, blankClient, blankProduct, blankSaleState } from "../../interfaces/interfaces";


interface InitialState {
    value: number,
    status: string,
    employees: any,
    sales: { list: Sale[], selectedSale: Sale},
    clients: Client[],
    products: Product[]
}

const initialState: InitialState = {
value: 0,
status: "ok",
products: [],
employees: {
    list: [],
    selectedEmployee: { id: "",
                        firstName: "",
                        lastName: "",
                        role: "",
                        email: ""}},
sales: {
    list: [],
    selectedSale: blankSaleState},
clients: []
}

export const global = createSlice({
    name: "global",
initialState,
reducers: {
    valueAdder: (state, {payload}) => {
        state.value = state.value + payload
    },
    changeStatus: (state, {payload}) => {
        if(state.status === "ok"){
            state.status = "loading"
        } if(state.status === "loading")
        state.status = "ok"
    },
    productsUpdate: (state, {payload}) => {
        state.products = payload
    },
    employeesListUpdate: (state, {payload}) => {
        state.employees.list = payload
    },
    selectedEmployee: (state, {payload}) => {
        state.employees.selectedEmployee = payload
    },
    salesListUpdate: (state, {payload}) => {
        state.sales.list = payload
    },
    selectedSale: (state, {payload}) => {
        state.sales.selectedSale = payload
    },
}
})

export const reducer = global.actions;