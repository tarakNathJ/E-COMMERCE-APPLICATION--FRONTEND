import { configureStore } from "@reduxjs/toolkit";
import AllProuctReduser from "./AllProductDataSlice";
import AllitmeList from "./productsData";
import singleSellingProduct from './StoreSingleItme';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {combineReducers} from "@reduxjs/toolkit";
import { version } from "react";
import UserProfile from "./UserData"
import ProductAndCustromerInfo from "./BuyProductAndCustromerInfo";
import UpcommingOrderStore from './UpcommingOrder'
import UpcomngStockHandler from './UpcomingStockHandeler'
import ChoseProfileClice from './ProductSearchimgData'
import UserSelectedData from './UserSelectData';


const persistConfig = {
    key:"root",
    version:1,
    storage,
};
const reducer  = combineReducers({
    ItmeList:AllitmeList,
    AllProduct:AllProuctReduser,
    single:singleSellingProduct,
    Profile:UserProfile,
    SellProductInfo:ProductAndCustromerInfo,
    UpcommingOrder:UpcommingOrderStore,
    UpcomingStocK:UpcomngStockHandler,
    ChoseProfile:ChoseProfileClice,
    UserSelectedData:UserSelectedData
   
});


const persistedReducer = persistReducer(persistConfig,reducer);

const store = configureStore({
    reducer:persistedReducer,
    
   
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({serializableCheck:false}),
});

export default store;