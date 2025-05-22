import { configureStore } from '@reduxjs/toolkit';
import postSlice from "./slices/postsSlice";
import usersSlice from "./slices/usersSlice";


const store = configureStore({
    reducer: {
        posts: postSlice,
        users: usersSlice
    }
});


export default store;
export * from "./thunks/postsThunk";
export * from "./thunks/userAuthThunk";

