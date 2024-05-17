import { createSlice } from "@reduxjs/toolkit";
import { menuItems, colors } from "../contants";


const initialState = {
    // Adding objects here with different color properties because we cannot have the same color for pencil and eraser. Otherwise we could've just had the initial state as {color: , size: }
    [menuItems.PENCIL]: {
        color: colors[0],
        size: 4
    },
    [menuItems.ERASER]: {
        // default screen color
        color: "#F1F1F1",
        size: 6,
    },
    [menuItems.UNDO]: {

    },
    [menuItems.REDO]: {

    },
    [menuItems.DOWNLOAD]: {

    },
};

export const toolsSlice = createSlice({
    name: "tools",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state[action.payload.item].color = action.payload.color;
        },

        changeSize: (state, action) => {
            state[action.payload.item].size = action.payload.size;
        }
    }
})


// Boilerplate redux code. 
export const { changeColor, changeSize } = toolsSlice.actions;
export default toolsSlice.reducer; 