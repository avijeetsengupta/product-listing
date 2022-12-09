import { useHistory } from "react-router-dom";
import { setFilterProduct, setIsActive } from "../home/home.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import "./style.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";

const TopBarComponent = () => {
  const demoData = useAppSelector((state: RootState) => state.product.productdata);
  const dispatch = useAppDispatch();
  const onChange = (e: any) => {
    if (e.target.value.length > 0) {
      dispatch(setIsActive(true));
    } else {
      dispatch(setIsActive(false));
    }
    searchFilter(e.target.value, demoData);
  };
  const history = useHistory();
  const searchFilter = (keyword: any, property: any) => {
    if (keyword.length > 0) {
      let result = property
        .map(({ id, category, brand, title, description, thumbnail, price, raiting }: any) => ({
          id,
          category,
          brand,
          title,
          description,
          thumbnail,
          price,
          raiting,
        }))
        .filter((row: any) => {
          if (
            row.category.toLowerCase().search(keyword.toLowerCase()) > -1 ||
            row.category.toLowerCase().search(keyword.toLowerCase()) > -1 ||
            row.category.toLowerCase().search(keyword.toLowerCase()) > -1 ||
            row.category.toLowerCase().search(keyword.toLowerCase()) > -1
          ) {
            return true;
          }
          if (
            row.brand.toLowerCase().search(keyword.toLowerCase()) > -1 ||
            row.brand.toLowerCase().search(keyword.toLowerCase()) > -1 ||
            row.brand.toLowerCase().search(keyword.toLowerCase()) > -1 ||
            row.brand.toLowerCase().search(keyword.toLowerCase()) > -1
          ) {
            return true;
          }
          return false;
        });
      dispatch(setFilterProduct(result));
    } else {
      dispatch(setFilterProduct([]));
    }
  };

  return (
    <div className="topbar">
      <div onClick={() => history.push("/product-home")}>Product page</div>
      <div className="menuBar">
        <span className="searchArea">
          <input
            type={"text"}
            placeholder={"search category, brand."}
            className="searchBox"
            onChange={onChange}
            autoFocus
          />
        </span>
        <div className="cart" onClick={() => history.push("/product-cart")}>
          <AiOutlineShoppingCart width={"1.5rem"} height={"1.5rem"} color={"black"} />
        </div>
        <div className="addProd">0</div>
      </div>
    </div>
  );
};

export default TopBarComponent;
