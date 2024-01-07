import { configureStore } from "@reduxjs/toolkit";
import farmReducer from './farmSlice';

export default configureStore({
    reducer: {
      farm: farmReducer
    }
})