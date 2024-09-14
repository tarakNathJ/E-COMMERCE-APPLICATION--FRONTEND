import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze(
    {
        SUCCESS : 'SUCCESS',
        ERROR:'error',
        loading:"LOADING"
    }
)


const  ProductSearching = createSlice({
    name:"ProductSearching",
    initialState:{
        UomData:[],
        ProfileDetails:"ProfileInformetion",
        status:STATUSES.SUCCESS

    },
    reducers:{
        SetUpcomingItem(state , action){
            state.UomData=action.payload;
        },
        setStatus(state, action){
            state.status = action.payload
        },
       
        setUpCommingProfileData(state,action){
            state.ProfileDetails = action.payload;

        },
        RemoveProfileData(state){
            state.ProfileDetails ="ProfileInformetion"
        }
    }
})

export const {SetUpcomingItem,setUpCommingProfileData,RemoveProfileData,setStatus} = ProductSearching.actions;
export default ProductSearching.reducer;



// export function fetchProduct (){
//     return async function fetchProductThunk(dispatch){
//         dispatch(setStatus(STATUSES.loading));
//         try{
//             const res = await fetch("http://localhost:4000/api/v1/productUOMdata");
//             const data = await res.json();
//             await  dispatch(SetUpcomingItem(data));
           
//             await dispatch(setStatus(STATUSES.SUCCESS));
//         }catch(error){
//             console.log(error);
//             dispatch(setStatus(STATUSES.ERROR));

//         }
//     }
// }