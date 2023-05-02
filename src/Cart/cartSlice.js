import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"



const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart: (state) =>{
            state.amount = 0;
        },
        increaseCart: (state, action) =>{
            state.amount += action.payload;
            
        }
    }


})

export const {clearCart,increaseCart} = cartSlice.actions;
export default cartSlice.reducer