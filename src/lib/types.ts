import { z } from "zod";
import { ProductSchema, UserSchema } from "./schemas";

export type TProduct = z.infer<typeof ProductSchema>;
export type TUser = z.infer<typeof UserSchema>;
