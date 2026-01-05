import { TProduct } from "@/lib/types";
import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton } from "@mui/material";
import AddCartButton from "./add-cart-button";

export default function ProductCard({ product }: { product: TProduct }) {
    return <Card>
        <CardActionArea>
            <CardMedia src={product.thumbnail} />
            <CardHeader title={product.title} subheader={product.price} />
            <CardContent></CardContent>
        </CardActionArea>
        <CardActions>
            <AddCartButton productId={product.id} color="warning"/>
        </CardActions>

    </Card>
}