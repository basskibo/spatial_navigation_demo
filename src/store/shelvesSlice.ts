import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface ShelfConfig {
    type: string;
    title: string;
    data: any[];
    [key: string] : unknown;
}

interface ShelvesState {
    shelves: ShelfConfig[];
    loading: boolean;
    error: string | null;
}

const initialState: ShelvesState = {
    shelves: [],
    loading: false,
    error: null
}

export const fetchShelves = createAsyncThunk('shelves/fetchShelves', async ()=> {
    const res = await fetch('/shelves.json')
    if(!res.ok) throw new Error('Failed to load shelves')
    return res.json()
})

const shelvesSlice = createSlice({
    name: 'shelves',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchShelves.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchShelves.fulfilled, (state, action) => {
            state.shelves = action.payload;
            state.loading = false;
        })
        .addCase(fetchShelves.rejected, (state, action) => {
            state.error = action.error.message || 'Uknonwn error';
            state.loading = false;
        })
    }
})

export default shelvesSlice.reducer