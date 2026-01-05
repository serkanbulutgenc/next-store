import ProductList from "@/components/product/list"
import { Box,  CircularProgress,  Divider, LinearProgress, Stack, Typography } from "@mui/material"
import { Metadata } from "next"
import { Suspense } from "react"


export const metadata:Metadata = {
    title:'Shop',
    description:'Checkout all products.'
}

export default function Shop(){    

    return <>
        <Typography variant="h4" component={'h2'} gutterBottom color="textSecondary">Products </Typography>
        <Divider orientation="horizontal" flexItem/>
        <Box component={'section'} sx={{mt:2}}>
        <Suspense key={'products'} fallback={<Stack sx={{ width:'100%'}} alignItems={'center'}><CircularProgress size="3rem" color="secondary"/></Stack>}>
            <ProductList/>
        </Suspense>
        </Box>
    </>
}