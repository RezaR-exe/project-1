import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        try {
            const response = await axios.get("http://localhost:8080/export")
            return response.data
        } catch(error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Fetching posts failed");
        }
        
    }
);

const createPost = createAsyncThunk(
    'posts/createPost',
    async (data) => {
        try {
            const response = await axios.post("http://localhost:8080/import", {
            title: data.post_title,
            content: data.post_content
            })
            return response.data
        } catch(error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Creating post failed");
        }
        
    }
)



export { fetchPosts, createPost }
