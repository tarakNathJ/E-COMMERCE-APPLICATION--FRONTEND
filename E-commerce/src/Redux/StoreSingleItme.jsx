import { createSlice } from "@reduxjs/toolkit";

const SingleItme = createSlice({
    name :"SingleProduct",
    initialState:{
        data:{},
    },
    reducers:{
        setProduct(state,action){
            state.data = action.payload;
        },
        removeProduct(state){
            state.data = {};
        }
    }
})

export const {setProduct,removeProduct} = SingleItme.actions;
export default SingleItme.reducer;