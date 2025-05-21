import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await axios.get("http://localhost:8080/export")
        return response.data
    }
);

const createPost = createAsyncThunk(
    'posts/createPost',
    async (data) => {
        await axios.post("http://localhost:8080/import", {
            title: data.post_title,
            content: data.post_content
        }).then(response => {
            console.log("user created", response.data)
        }).catch(error => {
            console.error("error", error)
        })
    }
)



export { fetchPosts, createPost }
