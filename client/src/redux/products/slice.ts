import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    value: number,
    status: string,
    products: any,
}

const initialState: InitialState = {
value: 0,
status: "ok",
products: []
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
    }
}

})

export const reducer = global.actions;