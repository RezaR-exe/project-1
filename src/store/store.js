import { configureStore } from '@reduxjs/toolkit';
import postSlice from "./slices/postsSlice"


const store = configureStore({
    reducer: postSlice
});


export default store;
