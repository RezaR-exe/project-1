import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const addUser = createAsyncThunk(
    "user/addUser",
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:8080/register", {
                email: userData.email,
                first_name: userData.first_name,
                last_name: userData.last_name,
                nickname: userData.nickname,
                birth_date: userData.birth_date,
                password: userData.password
            });
            return response.data
        } catch (error) {
            console.error("Registration error:", error.response?.data || error.message);
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Registration failed");
        }
    }
)

const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:8080/login", {
            email: userData.email,
            password: userData.password
            })
            return response.data
        } catch(error) {
            console.error("Registration error:", error.response?.data || error.message);
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Registration failed");
        }
    }
)


const editUserData = createAsyncThunk(
    "user/editUser",
    async (userData, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:8080/edit-user", {
                first_name: userData.first_name,
                last_name: userData.last_name,
                nickname: userData.nickname,
                birth_date: userData.birth_date,
                location: userData.location,
                email: userData.email
            })
            return response.data
        } catch(error) {
            console.error(error);
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Registration failed");
        }
    } 
)


export { fetchUser, addUser, editUserData }
