import { useState } from "react";


function Login() {
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

    const handleForm = (event) => {
        event.preventDefault();
    }


    return (
        <div>
            <h1>Welcome to Login page</h1>
            <form onSubmit={handleForm}>
                <label htmlFor="email">Email: </label>
                <input onChange={handleChange} name="email" id="email" value={userLoginData.email} type="email" />
                <label htmlFor="password">Password: </label>
                <input onChange={handleChange} name="password" id="password" value={userLoginData.password} type="password" />
            </form>
        </div>
    )
};



export default Login;
