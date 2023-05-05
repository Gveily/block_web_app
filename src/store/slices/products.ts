import { AppState } from "../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AddedProductInterface {
  baseProductId: number,
  amountToBuy: number,
  areaId: number,
  areaName: string,
  img: string,
  weight: string,
  price: string,
  name: string,
  amount: number,
}

export interface ProductsState {
  addedProducts: Array<AddedProductInterface>
}

const initialState: ProductsState = {
  addedProducts: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<AddedProductInterface>) => {
      const iterateCallback = (el: AddedProductInterface) => (
        el.baseProductId === action.payload.baseProductId && el.areaName === action.payload.areaName
      );
      const isExist = state.addedProducts.some(iterateCallback);

      if (isExist) {
        const item = state.addedProducts.find(iterateCallback) as AddedProductInterface;
        const idx = state.addedProducts.indexOf(item);
        state.addedProducts[idx] = action.payload;
        return;
      }

      state.addedProducts.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<AddedProductInterface>) => {
      const item = state.addedProducts.find(el => el.baseProductId === action.payload.baseProductId) as AddedProductInterface;
      const idx = state.addedProducts.indexOf(item);

      if (action.payload.amountToBuy === 0) {
        state.addedProducts.splice(idx, 1);
        return;
      }

      state.addedProducts[idx] = action.payload;
    }
  },
})


export const ProductsSelector = (state: AppState): ProductsState => state.products;

export const { addProduct, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;