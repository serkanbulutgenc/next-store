import {
  createApi,
  fetchBaseQuery,
  BaseQueryApi,
} from "@reduxjs/toolkit/query/react";
import { setCartId, TCart } from "../features/cart/cartSlice";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/carts" }),
  endpoints: (build) => ({
    addCart: build.mutation<TCart, void>({
      //query: ({ ...data }) => ({ url: `/add`, method: "POST", body: data }),
      queryFn: async (arg, queryApi, extraOptions, baseQuery) => {
        const response = await baseQuery({
          url: `/add`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: { userId: 142, products: [{}] },
        });

        /*
        if (false) {
          return {
            error: {
              status: 500,
              statusText: "Internal server error",
              data: "Invalid Id provided",
            },
          };
        }*/
        //console.log("data..", response?.data);
        const dispatch = queryApi.dispatch;
        if (response.data) {
          dispatch(setCartId(response?.data?.id));
        }
        return { data: response.data };
      },
    }),
    getCartByUser: build.query({
      query: (userId: number) => `/user/${userId}`,
      transformResponse(baseQueryReturnValue, meta, arg) {},
    }),
    updateCart: build.mutation({
      query: ({ cartId, ...data }) => ({
        url: `/15`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: { merge: true, ...data },
      }),
    }),
  }),
});

export const {
  useAddCartMutation,
  useGetCartByUserQuery,
  useUpdateCartMutation,
} = cartApi;
