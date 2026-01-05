import { Divider, Paper, Typography } from "@mui/material";
import ProductTable from "../products/_components/ProductTable";


export default function Dashboard(){
    return <>
    <Paper variant="outlined" sx={{p:1}}>
        <Typography variant="h4" component="div" color="textPrimary">
            Products
        </Typography>
    </Paper>
        <ProductTable pagination showToolbar />
    </>
}