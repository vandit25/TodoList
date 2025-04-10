import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categories/categoriesReducer"

export const store = configureStore({   
    reducer: {
        categories: categoriesReducer
    }
})

export default store;