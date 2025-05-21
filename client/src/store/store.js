import { configureStore } from '@reduxjs/toolkit';
import postSlice from "./slices/postsSlice"


const store = configureStore({
    reducer: {
        posts: postSlice
    }
});


export default store;
export * from "./thunks/postsThunk";

