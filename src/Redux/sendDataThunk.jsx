import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://zomatomdkaif.onrender.com/usermessage";
export const SendTextMessage = createAsyncThunk('sendTextMessage/sendMessage', async (data, { rejectWithValue }) => {
    try {
        const { res } = await axios.post(`${url}`, data);
        return res;
    } catch (e) {
        rejectWithValue(e.response.data);
    }
});