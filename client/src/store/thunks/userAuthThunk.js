import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const addUser = createAsyncThunk(
    "user/addUser",
    async (userData) => {
        await axios.post("http://localhost:8080/register", {
            email: userData.email,
            first_name: userData.first_name,
            last_name: userData.last_name,
            nickName: userData.nickName,
            birth: userData.birth,
            password: userData.password
        }).then(response => {
            console.log("user succsesfully registered", response.data)
        }).catch(error => {
            console.error("error", error)
        })
    }
)

const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (userData) => {
        await axios.post("http://localhost:8080/login", {
            email: userData.email,
            password: userData.password
        }).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.error("error", error)
        })
    } 
)


export { fetchUser, addUser }
