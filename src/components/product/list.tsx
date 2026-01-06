import { productsData } from "@/lib/product-fetcher";
import { Alert, Grid } from "@mui/material";
import ProductCard from "./card";
import { TProduct } from "@/lib/types";

export default async function ProductList() {
  const { products } = await productsData();

  return (
    <>
      <Grid container spacing={1}>
        {products.length > 0 ? (
          products.map((product: TProduct) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <ProductCard product={product} />
            </Grid>
          ))
        ) : (
          <Alert variant="filled" color="info">
            No products found
          </Alert>
        )}
      </Grid>
    </>
  );
}
