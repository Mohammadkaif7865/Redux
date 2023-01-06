import { createSlice } from "@reduxjs/toolkit";
import { Kuchbhi } from "./nowIunderStand";
export const final = createSlice({
    name: "final",
    initialState: {
        finalText: "",
        isFinalLoading: false,
        isFinalSuccess: false,
        finalMessage: "",
    },
    reducers: {
        addFinalText: (state, actions) => {
            state.finalText += actions.payload;
        }
    },
    extraReducers: {
        [Kuchbhi.pending]: (state) => {
            state.isFinalLoading= true;
        },
        [Kuchbhi.fulfilled]: (state, {payload}) => {
            state.isFinalLoading= false;
            state.finalText = payload;
            state.isFinalSuccess = true;
        },
        [Kuchbhi.rejected]: (state,{payload}) => {
          state.isFinalSuccess = false;
          state.finalMessage = payload;
          state.isFinalLoading = false;
        },
    }
});
export const {addFinalText}  = Kuchbhi.actions;
export default Kuchbhi.reducers;