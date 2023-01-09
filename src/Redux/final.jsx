import { createSlice } from "@reduxjs/toolkit";
import { Kuchbhi } from "./nowiUnderStand";
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
export const {addFinalText}  = final.actions;
export default final.reducer;
// ? Steps to create slice with createAsyncThunk to initiate the data with default value or initial value
// * create a slice  and define its state , reducer and extra reducer (Here the promise will be resolved)
// * create a function inside of slice or import it from outside 
// * Import thunk function in the desired compoenent from whrere you want to dispatch it.
// * And it is not neccessary to have the promise handler of thunk function in slice you can use it directly to call api but syntax is still unknown to me