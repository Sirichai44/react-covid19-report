import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./Reducer";

export default configureStore({
    reducer: {
        data: dataSlice
    }
})