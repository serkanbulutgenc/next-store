import {createSlice} from '@reduxjs/toolkit'

type CartItem={
    id:number,
    thumbnail?:string
    title:string
    price:number
    qty:number
}

type InitialstateProps = {
    cartItems:Array<CartItem>
}

const initialState:InitialstateProps = {
    cartItems:[] as Array<CartItem>
}

export const cartSlice = createSlice({
    name:'cart',
    initialState, 
    reducers:{
        addToCart:(state, action)=>{
            console.log("from slice ->", state, action)
            //add to cartItems action.payload {id:number, qty:1}
        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer