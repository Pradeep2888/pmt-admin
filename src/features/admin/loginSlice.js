import { createSlice } from "@reduxjs/toolkit"


const initialState = ""

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginDetailFethure: (state, action) => {
            console.log(state, action)
        }
    }
})

export const {loginDetailFethure}=loginSlice.actions

export default loginSlice.reducer

