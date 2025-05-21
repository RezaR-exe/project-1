import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../store";


const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        isLoading: false
    },
    extraReducers(builder) {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.isLoading = true;
        }),
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        }),
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading= false;
            state.error = action.error;
        })
    }
});

export const { addPost, removePost } = postsSlice.actions;
export default postsSlice.reducer;
