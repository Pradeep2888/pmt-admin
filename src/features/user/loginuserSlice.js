import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { GetSingleUserApi } from "../../service/operations/userApi";




// Async thunk to fetch all users
export const fetchLoginUser = createAsyncThunk(
    'user/fetchLoginUser',
    async (id, { rejectWithValue }) => {
        try {
            const data = await GetSingleUserApi(id);
            return data.user; // Pass the fetched data to the fulfilled action
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

const loginUserSlice = createSlice({
    name: 'loginuser',
    initialState,
    reducers: {
        resetUser(state) {
            state.data = [];
            state.loading = false;
            state.error = null;
        },
    },    
    extraReducers: (builder) => {
        builder
            .addCase(fetchLoginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLoginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchLoginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
})

export const {resetUser}=loginUserSlice.actions


export default loginUserSlice.reducer

