import { configureStore } from "@reduxjs/toolkit";
import dashboard from "@/store/features/dashboard/dashboardSlice";
import drawer from "@/store/features/drawer/drawerSlice";
import cart from "@/store/features/cart/cartSlice";
import user from "@/store/features/user/userSlice";
import { cartApi } from "./services/cartApi";
import userApi from "./services/userApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [cartApi.reducerPath]: cartApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      dashboard,
      user,
      cart,
      drawer,
    },
    middleware(getDefaultMiddleware) {
      return getDefaultMiddleware()
        .concat(cartApi.middleware)
        .concat(userApi.middleware);
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
