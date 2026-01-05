'use client'

import { IconButton, IconButtonProps } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppDispatch } from "@/hooks";
import { toggleDrawer } from "@/store/features/drawer/drawerSlice";


export default function CartButton(props: IconButtonProps) {
    const dispatch = useAppDispatch()
    return <IconButton role="button" color="inherit" onClick={()=>dispatch(toggleDrawer())}>
        <ShoppingCartIcon fontSize="small" />
    </IconButton>
}