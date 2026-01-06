"use client";
import { IconButton, IconButtonProps } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useAppDispatch } from "@/hooks";
import { addToCart } from "@/store/features/cart/cartSlice";
import { useAddCartMutation } from "@/store/services/cartApi";

export default function AddCartButton({
  productId,
  ...rest
}: IconButtonProps & { productId: number }) {
  const dispatch = useAppDispatch();
  const [addCart, { isLoading, isError, isSuccess }] = useAddCartMutation();

  return (
    <IconButton
      //onClick={() => dispatch(addToCart({ id: productId, qty: 1 }))}
      onClick={() => addCart({ userId: productId, foo: "bar" })}
      disabled={isLoading}
      {...rest}
    >
      <AddShoppingCartIcon fontSize="small" />
    </IconButton>
  );
}
