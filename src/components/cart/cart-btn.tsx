"use client";

import { IconButton, IconButtonProps } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppDispatch } from "@/hooks";
import { toggleDrawer } from "@/store/features/drawer/drawerSlice";
import { useEffect, useState } from "react";
import { cartApi } from "@/store/services/cartApi";

export default function CartButton(props: IconButtonProps) {
  const [addCart, { data }] = cartApi.endpoints.addCart.useMutation();

  useEffect(() => {
    (async () => {
      await addCart();
    })();
  }, []);

  const dispatch = useAppDispatch();
  return (
    <IconButton
      role="button"
      color="inherit"
      onClick={() => dispatch(toggleDrawer())}
    >
      <ShoppingCartIcon fontSize="small" />
    </IconButton>
  );
}
