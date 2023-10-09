import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "@/services/UserService";
import { toast } from 'react-toastify';

const initialState: any = {
    account: {
        email: '',
        auth: null,
        token: ''
    },
    isLoading: false,
    isError: false

};

export const handleLoginRedux = createAsyncThunk<any, any, any>(
    'users/handleLoginRedux',
    async ({ email, password }) => {
        const response = await loginApi(email, password)
        // const response = await loginApi('eve.holt@reqres.in', '123')
        // console.log(">>>check response: ", response) 
        return response
    }
)

export const loginSlide = createSlice({
    name: "users",
    initialState,
    reducers: {
        handleLogoutRedux: (state: any, action) => {
            state.account.email = ''
            state.account.auth = false
            state.account.token = ''
        },
        handleSetAuthNull: (state: any, action) => {
            state.account.auth = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(handleLoginRedux.pending, (state, action) => {
                // console.log(">>> check action pending:", action)
                state.isLoading = true
                state.isError = false
            })
            .addCase(handleLoginRedux.fulfilled, (state, action: any) => {
                // console.log(">>> check action:", action)
                if (!action || !action.payload || !action.payload.token) {
                    state.isLoading = false
                    toast.error("Email or Password is required!")
                } else {
                    state.account = {
                        email: action.meta.arg.email,
                        token: action.payload.token,
                        auth: true
                    }
                    state.isLoading = false
                    state.isError = false
                }


            })
            .addCase(handleLoginRedux.rejected, (state, action) => {
                // console.log(">>> check action rejected:", action)
                state.isLoading = false
                state.isError = true
            })
    },
});

export const { handleLogoutRedux, handleSetAuthNull } = loginSlide.actions;
export default loginSlide.reducer;