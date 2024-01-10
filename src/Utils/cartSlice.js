import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "card",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

// we will export our action and  reducer

export const { addItem, removeItem, clearCart } = cartSlice.actions;


export default cartSlice.reducer