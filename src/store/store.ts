import { configureStore } from '@reduxjs/toolkit'
import { productsSlice, ProductsState } from "./slices/products";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export interface AppState {
  products: ProductsState
}

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
