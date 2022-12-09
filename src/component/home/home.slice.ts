import { StatArrow } from "@chakra-ui/react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  productdata: [],
  isLoading: false,
  productFilter: [],
  isActive: false,
  modalData: [],
  cartData: [],
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
  },
});

export const { setProductData, setIsloading, setFilterProduct, setIsActive, setModalData, setCartData } =
  productListingSlice.actions;

export default productListingSlice.reducer;
