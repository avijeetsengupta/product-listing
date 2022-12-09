import { configureStore } from '@reduxjs/toolkit';
import productList from '../home/home.slice'



export const store = configureStore({
    reducer: {
        product: productList
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
