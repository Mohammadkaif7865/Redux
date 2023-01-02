import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const url = 'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=';
export const ExtraText = createAsyncThunk('extraText/getExtraText', async (arg, { rejectWithValue }) => {
    try {
        const { data } = await axios.get(`${url}${arg}`);
        return data;
    } catch (e) {
        rejectWithValue(e.response.data);
    }
});