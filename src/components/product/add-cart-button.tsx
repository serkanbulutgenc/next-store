'use client'
import { IconButton, IconButtonProps } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useAppDispatch } from "@/hooks";
import { addToCart } from "@/store/features/cart/cartSlice";

export default function AddCartButton({productId, ...rest}:IconButtonProps&{productId:number}){
    const dispatch = useAppDispatch()
    return <IconButton onClick={()=>dispatch(addToCart({id:productId, qty:1}))} {...rest} >
                <AddShoppingCartIcon fontSize="small" />
            </IconButton>
}