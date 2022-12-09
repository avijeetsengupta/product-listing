import { makeGet } from "../../shared/services/api.service";

export const getProductService = () => {
    const url = `https://dummyjson.com/products?limit=100`;
    return makeGet(url);
  };