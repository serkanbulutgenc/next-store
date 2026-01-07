import { TProduct } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

type TCartItem = Pick<
  TProduct,
  "id" | "price" | "discountPercentage" | "title" | "thumbnail"
> & {
  total: number;
  quantity: number;
  discountedTotal: number;
};

export type TCart = {
  id?: number;
  products: Array<TCartItem> | null;
  total: number;
  discountedTotal: number;
  userId: number | null;
  totalProducts: number;
  totalQuantity: number;
};

type InitialstateProps = { cartId: number | null };

const initialState: InitialstateProps = { cartId: null };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartId: (state, action) => {
      state.cartId = action.payload;
    },
  },
});

export const { setCartId } = cartSlice.actions;

export default cartSlice.reducer;
