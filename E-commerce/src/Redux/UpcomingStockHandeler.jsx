import { createSlice } from "@reduxjs/toolkit";

const  UpcomingStock = createSlice({
    name:"UpcomingStock",
    initialState:{
        Data:[]
    },
    reducers:{
        SetUpcomingItem(state , action){
            state.Data = action.payload
        },
        RemoveUpcommingStock(state){
            state.Data = [];
        }
    }
})

export const {SetUpcomingItem,RemoveUpcommingStock} = UpcomingStock.actions;
export default UpcomingStock.reducer;