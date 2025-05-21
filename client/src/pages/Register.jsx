import { useState } from "react";


function Register() {
    const [userRegisterData, setUserRegisterData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        if (event.target.name === "email") {
            setUserRegisterData({...userRegisterData, email: event.target.value})
        } else if (event.target.name === "password") {
            setUserRegisterData({...userRegisterData, password: event.target.value})
        }
    }

    const handleForm = (event) => {
        event.preventDefault();
    }


    return (
        <div>
            <h1>Welcome to register page</h1>
            <form onSubmit={handleForm}>
                <label htmlFor="email">Email: </label>
                <input onChange={handleChange} name="email" id="email" value={userRegisterData.email} type="email" />
                <label htmlFor="password">Password: </label>
                <input onChange={handleChange} name="password" id="password" value={userRegisterData.password} type="password" />
            </form>
        </div>
    )
};



export default Register;
