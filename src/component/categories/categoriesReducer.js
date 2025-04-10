import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    colorCategory: {},
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            const {name, color} = action.payload
            if(name !== "" && !state.categories.includes(name)){
                state.categories.push(name)
                state.colorCategory[name] = color;
            }
        },
    }
}); 

export const { addCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;