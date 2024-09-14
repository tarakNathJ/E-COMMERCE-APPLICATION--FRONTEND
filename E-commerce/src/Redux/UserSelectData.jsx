import { createSlice } from "@reduxjs/toolkit";

const UserSelectedData = createSlice({
    name:"userSelectData",
    initialState:{
        UomData :null,

    },
    reducers:{
        SetUOM_data(state,action){
            state.UomData = action.payload;
        },
        RemoveUomData(state){
            state.UomData = null;
        }
    }
})

export const {SetUOM_data, RemoveUomData} =UserSelectedData.actions;
export default  UserSelectedData.reducer;