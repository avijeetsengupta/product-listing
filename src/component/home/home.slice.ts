import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  productdata: [],
  isLoading: false,
  productFilter: [],
  isActive: false,
  modalData: [],
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
  },
});

export const { setProductData, setIsloading, setFilterProduct, setIsActive, setModalData } =
  productListingSlice.actions;

export default productListingSlice.reducer;
