import { useState } from "react";
import { useDispatch } from 'react-redux';
import { fetchUser } from "../store/store";


function Login() {
    const dispatch = useDispatch();
    const [userLoginData, setUserLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        if (event.target.name === "email") {
            setUserLoginData({...userLoginData, email: event.target.value})
        } else if (event.target.name === "password") {
            setUserLoginData({...userLoginData, password: event.target.value})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchUser({email: userLoginData.email, password: userLoginData.password}));
    }


    return (
        <div>
            <h1>Welcome to Login page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input onChange={handleChange} name="email" id="email" value={userLoginData.email} type="email" />
                <label htmlFor="password">Password: </label>
                <input onChange={handleChange} name="password" id="password" value={userLoginData.password} type="password" />
                <button>Submit</button>
            </form>
        </div>
    )
};



export default Login;
