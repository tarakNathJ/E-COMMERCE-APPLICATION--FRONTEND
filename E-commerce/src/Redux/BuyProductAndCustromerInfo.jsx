import { createSlice } from "@reduxjs/toolkit";


const ProductAndCustromerInfo = createSlice({
    name:"PRODUCT_CUstromer_INFO",
    initialState:{
        ProductData:[],
        CustromerData:[]
    },
    reducers:{
        setProductData(state,action){
            state.ProductData = action.payload;
           
        } ,
        SetCustromerData(state,action){
            state.CustromerData = action.payload;  
        },
        removeInformation(state){
            state.ProductData=[];
            state.CustromerData=[];
        }

    }
})

export const {setProductData,SetCustromerData,removeInformation} =ProductAndCustromerInfo.actions;
export default ProductAndCustromerInfo.reducer;