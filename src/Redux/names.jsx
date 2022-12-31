import { createSlice } from "@reduxjs/toolkit";
export const nameSave = createSlice({
    name: 'names',
    initialState: {
        names: []
    },
    reducers: {
        addName: (state, action) => {
            state.names.push(action.payload);
        },
        removeLastName: (state) => {
            state.names.pop();
        }
    }
})
export const { addName, removeLastName } = nameSave.actions;
export default nameSave.reducer;