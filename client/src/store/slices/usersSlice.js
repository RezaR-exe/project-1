import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../store";


const usersSlice = createSlice({
    name: "users",
    initialState: {
        isUserLoggedIn: false,
        userData: {},
        isLoading: false
    },
    extraReducers(builder) {
        builder.addCase(fetchUser.pending, (state, action) => {
            state.isLoading = true;
            
        }),
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isUserLoggedIn =  true
            state.userData = action.payload;
        }),
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.isLoading= false;
            state.error = action.error;
        })
    }
});



export default usersSlice.reducer;


