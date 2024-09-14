import { createSlice } from "@reduxjs/toolkit";


const UserData = createSlice({
    name:"User",
    initialState:{
        data:[],
        
    },
    reducers:{
        UserProfileData(state,action){
            state.data = action.payload;

        },
        
        removeUserprofileData(state){
            state.data =[];
        }
    }
})

export const {UserProfileData,removeUserprofileData}  = UserData.actions;

export default UserData.reducer;