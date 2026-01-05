'use client'
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleDrawer } from "@/store/features/drawer/drawerSlice";
import { Alert, Box, Button, Drawer } from "@mui/material";

export default function CartDrawer() {
    const open = useAppSelector(state => state.drawer.status)
    const dispatch = useAppDispatch()

    return <Drawer open={open} anchor="right" onClose={() => dispatch(toggleDrawer())}>
        <Box sx={{ minWidth: 400, p: 1 }}>
            <Alert variant="outlined" color="info" >
                No item found in your cart.
            </Alert>
            <Button variant="contained" color="secondary" size="medium" fullWidth onClick={() => dispatch(toggleDrawer())}>Close</Button>
        </Box>
    </Drawer>
}