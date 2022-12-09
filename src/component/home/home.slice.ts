import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  productdata: [],
  isLoading: false,
  isCart: false,
  productFilter: [],
  isActive: false,
  modalData: [],
  cartData: [],
  count: 0,
};

export const productListingSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setProductData: (state, action: PayloadAction<any>) => {
      state.productdata = action.payload;
    },
    setIsloading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsCart: (state, action: PayloadAction<boolean>) => {
      state.isCart = action.payload;
    },
    setFilterProduct: (state, action: PayloadAction<any>) => {
      state.productFilter = action.payload;
    },
    setIsActive: (state, action: PayloadAction<any>) => {
      state.isActive = action.payload;
    },
    setModalData: (state, action: PayloadAction<any>) => {
      state.modalData = action.payload;
    },
    setCartData: (state, action: PayloadAction<any>) => {
      state.cartData = action.payload;
    },
    setCount: (state, action: PayloadAction<any>) => {
      state.count = action.payload;
    },
  },
});

export const {
  setProductData,
  setIsloading,
  setFilterProduct,
  setIsActive,
  setModalData,
  setCartData,
  setCount,
  setIsCart,
} = productListingSlice.actions;

export default productListingSlice.reducer;
