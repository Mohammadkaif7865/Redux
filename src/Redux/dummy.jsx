import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ExtraText } from "./moretex";
import { SendTextMessage } from "./sendDataThunk";
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
        extraText: "",
        isSuccess: false,
        loading: false,
        message: "",
        isExtraSuccess: false,
        extraLoading: false,
        extraMessage: "",
        messageSend: false
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
            state.isSuccess = true;
        },
        [getLorem.rejected]: (state, { payload }) => {
            state.message = payload;
            state.loading = false;
            state.isSuccess = false;
        },
        [ExtraText.pending](state) {
            state.extraLoading = true;
        },
        [ExtraText.fulfilled](state, { payload }) {
            state.extraLoading = false;
            state.extraText = payload;
            state.isExtraSuccess = true;
        },
        [ExtraText.rejected](state, { payload }) {
            state.extraMessage = payload;
            state.isSuccess = false;
            state.extraLoading = false;
        },
        [SendTextMessage.pending](state) {
            state.messageSend= false;
        },
        [SendTextMessage.fulfilled](state, { payload }) {
            state.messageSend = true;
        },
        [SendTextMessage.rejected](state, { payload }) {
            state.messageSend = false;
        },
    }
})
export const { addText } = dummy.actions;
export default dummy.reducer;
// ? Here i am using the redux-toolkit not react-redux