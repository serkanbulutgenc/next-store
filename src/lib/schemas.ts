import z from "zod"

const DimensionSchema=z.object({
  width:z.number().positive(),
  height:z.number().positive(),
  depth: z.number().positive()
})

export const ProductSchema = z.object({    
  id:z.number().positive(),
  title: z.string().min(3).max(100),
  price: z.number().positive().gt(0),
  tags:z.array(z.string()).nullable(),
  discountPercentage:z.number().positive().nullable(),
  rating: z.number().min(0).max(5),
  stock: z.number().int().positive(),
  description: z.string().nullable(),
  brand:z.string().nullable(),
  sku: z.string().nullable(),
  weight: z.number().positive().nullable(),
  dimensions:DimensionSchema.nullable(),
  category: z.string().nullable(),
  thumbnail: z.httpUrl(),
  images:z.array(z.httpUrl()).nullable()
})