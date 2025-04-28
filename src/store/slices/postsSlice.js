import { createSlice } from "@reduxjs/toolkit";


const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: []
    },
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        removePost: (state, action) => {
            state.posts.filter((item) => {
                return action.payload.id != item.id
            })
        }
    }
});

export const { addPost, removePost } = postsSlice.actions;
export default postsSlice.reducer;
