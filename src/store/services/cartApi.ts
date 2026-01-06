import {
  createApi,
  fetchBaseQuery,
  BaseQueryApi,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "..";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/carts" }),
  endpoints: (build) => ({
    addCart: build.mutation({
      //query: ({ ...data }) => ({ url: `/add`, method: "POST", body: data }),
      queryFn: async (arg, queryApi, extraOptions, baseQuery) => {
        await new Promise((res, rej) => setTimeout(res, 2000));
        console.log("arg", arg);
        const state = queryApi.getState() as RootState;
        console.log("state", state);
        return { data: "Invalid" };
      },
    }),
    getCartByUser: build.query({
      query: (userId: number) => `/user/${userId}`,
      transformResponse(baseQueryReturnValue, meta, arg) {},
    }),
    updateCart: build.mutation({
      query: ({ cartId, ...data }) => ({
        url: `/${cartId}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddCartMutation,
  useGetCartByUserQuery,
  useUpdateCartMutation,
} = cartApi;
