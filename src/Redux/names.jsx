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
        },
        removeThisName: (state, action) => {
            state.names.splice(state.names.indexOf(action.payload), 1);
        }
    }
})
export const { addName, removeLastName, removeThisName } = nameSave.actions;
export default nameSave.reducer;