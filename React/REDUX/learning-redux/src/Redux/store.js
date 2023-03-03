import {configureStore} from '@reduxjs/toolkit';
import colorReducer from './color/colorSlice';
import countReducer from './Count/countSlice'

export default  configureStore({
    reducer:{
        color:colorReducer,
        count:countReducer
    }
})

