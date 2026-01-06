import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "..";
import { TUser } from "@/lib/types";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/users" }),
  endpoints: (build) => ({
    getUserById: build.query<TUser, void>({
      query: () => `/30`,
    }),
  }),
});

export const { useGetUserByIdQuery } = userApi;

export default userApi;
