import { createSlice } from "@reduxjs/toolkit";
export const dummy = createSlice({
    name: 'names',
    initialState: {
        text: "",
    },
    reducers:{
        addText: (state, actions) => {
            state.text += actions.payload;
        }
    }
})
export const { addText } = dummy.actions;
export default dummy.reducer;