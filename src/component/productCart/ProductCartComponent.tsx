import React from "react";
import { setCount } from "../home/home.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const ProductCartComponent = () => {
  const cartData: any = useAppSelector((state: RootState) => state.product.cartData);
  const dispatch = useAppDispatch();
  const emptyCart = () => {
    dispatch(setCount(0));
  };
  return (
    <>
      {cartData ? (
        <div className="prodCard">
          <div>
            <img src={cartData.thumbnail} alt="img" />
          </div>
          <div>{cartData.title}</div>
          <div>{cartData.price}</div>
          <div onClick={emptyCart}>Empty the Card ?</div>
        </div>
      ) : (
        <>Cart Empty</>
      )}
    </>
  );
};

export default ProductCartComponent;
