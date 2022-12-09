import { Dispatch } from '@reduxjs/toolkit';
import { setIsloading, setProductData } from './home.slice';
import { getProductService } from "./service/home-service"


export const getProductListData = (data?: any) => {
    return (dispatch: Dispatch) =>{
            getProductService().then((response:any) => {
                dispatch(setProductData(response.data.products))
                dispatch(setIsloading(true));
            }).catch((error: any) => {
                console.log(error.data);
            })
    }
}