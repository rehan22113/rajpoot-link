import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        category: [],
        industry:[],
        principal:[]   
  }
const ProductSlice = createSlice({
    name:'productfilter',
    initialState,
    reducers:{
        updatefilter:(state,action)=>{
           return { ...state, ...action.payload }
        }
    }
})

export const {updatefilter} = ProductSlice.actions
export default ProductSlice.reducer