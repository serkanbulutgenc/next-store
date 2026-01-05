import { configureStore } from '@reduxjs/toolkit'
import dashboard from '@/store/features/dashboard/dashboardSlice'
import drawer from '@/store/features/drawer/drawerSlice'
import cart from '@/store/features/cart/cartSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      dashboard,
      cart,
      drawer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']