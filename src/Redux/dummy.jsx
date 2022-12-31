import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const dummyApi = "https://baconipsum.com/api/?type=meat-and-filler";
export const getLorem = createAsyncThunk(
    "dummy/getData",
    async (arg, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(dummyApi);
            return data;
        } catch (e) {
            rejectWithValue(e.response.data);
        }
    })
export const dummy = createSlice({
    name: 'names',
    initialState: {
        text: "",
        isSuccess: false,
        loading: false,
        message: ""
    },
    reducers: {
        addText: (state, actions) => {
            state.text += actions.payload;
        }
    },
    extraReducers: {
        [getLorem.pending]: (state) => {
            state.loading = true;
        },
        [getLorem.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.text = payload;
            state.isSuccess = false;
        },
        [getLorem.rejected]: (state, { payload }) => {
            state.message = payload;
            state.loading = false;
            state.isSuccess = false;
        },
    }
})
export const { addText } = dummy.actions;
export default dummy.reducer;