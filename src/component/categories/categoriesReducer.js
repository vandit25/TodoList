import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    colorCategory: {},
    clickedCategory: "",
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            const {name, color} = action.payload
            if(name !== "" && !state.categories.includes(name.trim())){
                state.categories.push(name)
                state.colorCategory[name] = color;
            }else{
                alert("Given Category is already added")
            }
        },
    }
}); 

export const { addCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;