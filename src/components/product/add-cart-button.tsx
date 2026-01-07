"use client";
import { IconButton, IconButtonProps } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useUpdateCartMutation } from "@/store/services/cartApi";

export default function AddCartButton({
  productId,
  ...rest
}: IconButtonProps & { productId: number }) {
  const { cartId } = useAppSelector((state) => state.cart);
  const [updateCart, { data, isLoading, isError }] = useUpdateCartMutation();
  return (
    <IconButton
      //onClick={() => dispatch(addToCart({ id: productId, qty: 1 }))}
      onClick={() =>
        updateCart({ cartId, products: [{ id: productId, quantity: 1 }] })
      }
      disabled={isLoading}
      {...rest}
    >
      <AddShoppingCartIcon fontSize="small" />
    </IconButton>
  );
}
