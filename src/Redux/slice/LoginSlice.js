import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name:'loginslice',
    initialState:{
        isLogin:false
    },
    reducers:{
        LoginUser:(state,action)=>{
            state.isLogin=action.payload
        }
    }
})

export const {LoginUser} = LoginSlice.actions
export default LoginSlice.reducer