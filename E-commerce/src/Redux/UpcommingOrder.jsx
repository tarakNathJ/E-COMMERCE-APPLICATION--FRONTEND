import { createSlice } from "@reduxjs/toolkit";

const UpcommingOrder = createSlice({
        name:"UpcommingOrder",
        initialState:{
            StockTransfer:[],
            PurchaseOrderLine:[]
        },
        reducers:{
            SetStockTransfer(state,action){
                state.StockTransfer =action.payload;
            },
            SetPurchaseOrderLine(state,action){
                state.PurchaseOrderLine = action.payload;
            },

            RemoveDataHendeler(state){
                state.PurchaseOrderLine=[],
                state.StockTransfer =[]

            }
        }
})
export const {SetStockTransfer ,SetPurchaseOrderLine,RemoveDataHendeler} = UpcommingOrder.actions;
export default UpcommingOrder.reducer