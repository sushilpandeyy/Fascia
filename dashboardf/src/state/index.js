import { createSlice } from "@reduxjs/toolkit";

const initialstate={
    mode: "dark"
};

export const globalSlice = createSlice({
    name: "global",
    reducers: {
        setMode: (state) => {
            state.mode = state.mpde === 'light' ? "dark" : "light";
        }
    }
})

export const {setMode} = globalSlice.reducer;
