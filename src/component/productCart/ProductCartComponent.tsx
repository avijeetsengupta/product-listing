import React from "react";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const ProductCartComponent = () => {
  const cartData: any = useAppSelector((state: RootState) => state.product.cartData);

  console.log(cartData);

  return (
    <div className="prodCard">
      <div>
        <img src={cartData.thumbnail} alt="img" />
      </div>
      <div>{cartData.title}</div>
      <div>{cartData.price}</div>
    </div>
  );
};

export default ProductCartComponent;
