import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { ContentModal } from "../../shared/components/Modal";
import { getProductListData } from "../home.action";
import { setModalData } from "../home.slice";
import "./style.scss";

const HomeComponent = () => {
  const demoData: any = useAppSelector((state: RootState) => state.product.productdata);
  const modalData: any = useAppSelector((state: RootState) => state.product.modalData);
  const isLoading: boolean = useAppSelector((state: RootState) => state.product.isLoading);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const isActive = useAppSelector((state: RootState) => state.product.isActive);
  const productFilter = useAppSelector((state: RootState) => state.product.productFilter);
  const dispatch = useAppDispatch();
  const handleProduct = () => {
    dispatch(getProductListData());
  };
  var newData = demoData.reduce(function (obj: any, v: any, i: any) {
    obj[v.category] = obj[v.category] || [];
    obj[v.category].push(v);
    return obj;
  }, {});
  var productList = Object.keys(newData).map(function (key) {
    return <option value={key}>{newData[key]}</option>;
  });
  function filterValue(obj: any, key: any, value: any) {
    return obj.find(function (v: any) {
      return v[key] === value;
    });
  }
  const showModal = (val: any) => {
    setIsProfileOpen(true);
    dispatch(setModalData(filterValue(demoData, "id", val)));
  };
  const handlePromt = () => {
    if (modalData.stock < 50) {
      return "hurry! only a few items left";
    }
  };
  const addToCart = (key: number) => {
    console.log(key);
    setIsProfileOpen(false);
  };
  return (
    <div className="home">
      {isLoading ? (
        <>
          {isActive ? (
            <div className={"filterProductShow"}>
              {productFilter.map((val: any, index: number) => {
                return (
                  <div key={index} className="description" onClick={() => showModal(val.id)}>
                    <div className="image">
                      <img src={val.thumbnail} alt="prodImg" />
                    </div>
                    <div className="text">{val.title}</div>
                    <div className="price">{val.price}﹩</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="productLising">
              {productList?.map((val: any) => {
                return (
                  <div style={{ background: "#FAF8F1" }}>
                    <div className="category">{val.props.value}</div>
                    <div className="productCard">
                      {val.props.children?.map((val: any) => {
                        return (
                          <div className="description" onClick={() => showModal(val.id)}>
                            <div className="image">
                              <img src={val.thumbnail} alt="prodImg" />
                            </div>
                            <div className="text">{val.title}</div>
                            <div className="price">{val.price}﹩</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <>
          <div onClick={handleProduct} className="click">
            Click me
          </div>
        </>
      )}
      <ContentModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        onAction={() => {
          setIsProfileOpen(false);
        }}
      >
        {
          <div className="modalWrapper">
            <img src={modalData.thumbnail} alt="prodImg" />
            <div className="mainWrapper">{modalData.title}</div>
            <div className="price">{modalData.price}﹩</div>
            <div className="desc">{modalData.description}</div>
            <div
              className="star-icons"
              style={{ width: `${modalData.rating * 10}%`, maxWidth: "80px", display: "flex" }}
            >
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <div style={{ color: "red", marginTop: "5px" }}>{handlePromt()}</div>
            <div className="prodModal">
              <Button onClick={() => addToCart(modalData.id)}>Add to cart</Button>
              <Button onClick={() => setIsProfileOpen(false)}>cancel</Button>
            </div>
          </div>
        }
      </ContentModal>
    </div>
  );
};

export default HomeComponent;
