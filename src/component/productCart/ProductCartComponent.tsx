import { setCartData, setCount } from "../home/home.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import "./style.scss";

const ProductCartComponent = () => {
  const cartData: any = useAppSelector((state: RootState) => state.product.cartData);
  const isCart: boolean = useAppSelector((state: RootState) => state.product.isCart);
  const dispatch = useAppDispatch();
  const emptyCart = () => {
    dispatch(setCartData([]));
    dispatch(setCount(0));
  };
  return (
    <>
      {isCart ? (
        <div className="prodCard">
          <div>
            <img src={cartData.thumbnail} alt="img" />
          </div>
          <div>{cartData.title}</div>
          <div>{cartData.price}</div>
          <div onClick={emptyCart} className={"emptyBtn"}>
            Empty the Card ?
          </div>
        </div>
      ) : (
        <div className="empty">Cart Empty</div>
      )}
    </>
  );
};

export default ProductCartComponent;
