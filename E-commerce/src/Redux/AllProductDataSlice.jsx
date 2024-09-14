import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze(
    {
        SUCCESS : 'SUCCESS',
        ERROR:'error',
        loading:"LOADING"
    }
)

const ProductSlice = createSlice({
    name:"Product",
    initialState:{
        data:[],
        status:STATUSES.SUCCESS

    },
    reducers:{
        setProductData(state, action){
            state.data = action.payload
        },
        setStatus(state, action){
            state.status = action.payload
        }
    }

})

export const {setProductData,setStatus} = ProductSlice.actions;
export default ProductSlice.reducer;

// middleware
export function fetchProduct (){
    return async function fetchProductThunk(dispatch){
        dispatch(setStatus(STATUSES.loading));
        try{
            const res = await fetch("http://localhost:4000/api/v1/productManager/ShowAllItme");
            const data = await res.json();
            await  dispatch(setProductData(data));
           
            await dispatch(setStatus(STATUSES.SUCCESS));
        }catch(error){
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR));

        }
    }
}