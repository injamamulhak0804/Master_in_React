import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './cartSlice'


const appStore = configureStore({
    //Add a Slice
    reducer: {
        cart: cartReducer
    }
});

export default appStore;

