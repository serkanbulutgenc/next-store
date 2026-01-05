import { z} from 'zod'
import { ProductSchema } from './schemas'

export type TProduct = z.infer<typeof ProductSchema>