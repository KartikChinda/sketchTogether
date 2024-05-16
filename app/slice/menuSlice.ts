"use client";
import { createSlice } from "@reduxjs/toolkit";
import { menuItems } from "../contants";
// Slices in redux are essentially a collection of action logic for a given component (menu here). In a nutshell, it is a glorified way or writing organised code. 

const initialState = {
    // What does this menu state contain, ie what are we sharing in the store. Here, we are sharing just the fact that which item has been clicked and is currently active. 
    activeMenuItem: menuItems.PENCIL,
    actionMenuItem: null, // so this is the distinction in the types of icons in the menuBar. Pencil and eraser are actionable items with visual cue changes in the toolbar, but undo redo and download dont affect the toolbar at all. But they still need to be highlighted. Hence, we are creating a different reducer for them as well. 
}

export const menuSlice = createSlice({
    // how to access 
    name: 'menu',
    // when this action is used, what is the initial state/value that menu will bind to. 
    initialState,
    // What functions are we using and how are we manipulating the data. 
    reducers: {
        menuitemClick: (state, action) => {
            state.activeMenuItem = action.payload;
        },
        actionitemClick: (state, action) => {
            state.actionMenuItem = action.payload;
        }
    }
})


// Boilerplate redux code. 
export const { menuitemClick, actionitemClick } = menuSlice.actions;
export default menuSlice.reducer; 