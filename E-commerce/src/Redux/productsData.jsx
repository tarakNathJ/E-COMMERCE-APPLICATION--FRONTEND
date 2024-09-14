import { createSlice } from "@reduxjs/toolkit";


const ProductDataSlice = createSlice({
    name:"itmesData",
    initialState:{
        data:[],
    },
    reducers:{
        setItmes(state,action){
            state.data = action.payload;
           
        } ,
        removeItmes(state){
            state.data=[];
        }

    }
})

export const {setItmes,removeItmes} = ProductDataSlice.actions;
export default ProductDataSlice.reducer;