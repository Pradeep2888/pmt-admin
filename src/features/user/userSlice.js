import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { GetAllUserApi } from "../../service/operations/userApi";




// Async thunk to fetch all users
export const fetchAllUsers = createAsyncThunk(
    'user/fetchAllUsers',
    async (_, { rejectWithValue }) => {
        try {
            const data = await GetAllUserApi();
            return data.data;
        } catch (error) {
            // Handle error
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);




const initialState = {
    data: [],
    loading: false,
    error: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
})


export default userSlice.reducer

