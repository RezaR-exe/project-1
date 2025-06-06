import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from "../store/store";
import { useNavigate } from "react-router";


function Login() {
    const navigate = useNavigate()
    const users = useSelector((state) => state.users)
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

    useEffect(() => {
        if (users.isUserLoggedIn) {
            navigate("/")
        }
    }, [users])


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
