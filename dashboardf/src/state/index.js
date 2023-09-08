import { createSlice } from "@reduxjs/toolkit";

const initialstate={
    mode: "dark",
    userId: "63701cc1f03239b7f700000e"
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
