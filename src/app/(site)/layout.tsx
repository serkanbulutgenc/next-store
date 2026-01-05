import SiteAppbar from "@/components/common/Appbar";
import CartDrawer from "@/components/cart/cart-drawer";
import { Container } from "@mui/material";
import React from "react";

export default function SiteLayout({ children }: React.PropsWithChildren) {
    return <>
        <SiteAppbar />
        <Container maxWidth="lg" component="main" sx={{ mt: 5 }}>
            {children}
        </Container>
        <CartDrawer/>
    </>
}