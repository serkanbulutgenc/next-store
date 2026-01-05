import { TProduct } from "./types"

type TProductResponse = {
    products:Array<TProduct>,
    skip:number,
    limit:number,
    total:number
}

export async function productsData(){
    //await new Promise((resolve, reject)=>setTimeout(resolve, 2000))
    const response = await fetch('https://dummyjson.com/products')

    if(!response.ok) throw new Error('An error occured while getting products')

    return response.json() as Promise<TProductResponse>
}