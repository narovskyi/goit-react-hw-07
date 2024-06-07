import { createSlice } from "@reduxjs/toolkit";

let filterInitialState = '';

const filtersSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilter(state, action) {
            state = action.payload;
            return state;
        }
    }
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;