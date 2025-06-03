import { configureStore } from "@reduxjs/toolkit";
import shelvesReducer from './shelvesSlice'

export const store = configureStore({
    reducer: {
        shelves: shelvesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 