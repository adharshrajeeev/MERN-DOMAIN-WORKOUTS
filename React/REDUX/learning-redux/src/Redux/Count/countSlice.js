import { createSlice } from "@reduxjs/toolkit";

export const countSlice=createSlice({
    name:"count",
    initialState:{
        value:0
    },
    reducers:{
        increase_Count:(state)=>{
            state.value +=1;
        },
        decrease_Count:(state)=>{
            state.value -=1
        }
    }
})


export const {increase_Count,decrease_Count}=countSlice.actions

export default countSlice.reducer