"use client";
import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from './slice/menuSlice';

export const store = configureStore({
    reducer: {
        menu: MenuReducer,
    }
})

// this is solely for typescript purposes. In useSelectorHook, you are supposed to add in the type of state. Or give any, if you dont want to be hired. 
export type RootState = ReturnType<typeof store.getState>