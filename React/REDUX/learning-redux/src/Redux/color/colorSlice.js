import {createSlice} from '@reduxjs/toolkit'


export const colorSlice=createSlice({
    name:"color",
    initialState:{
        value:"red"
    },
    reducers:{
        change_Color:(state,action)=>{
            state.value=action.payload.color
        }
    }
})

export const {change_Color}=colorSlice.actions

export default colorSlice.reducer