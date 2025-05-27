import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/store";
import { useNavigate } from "react-router";


function Register() {
    const users = useSelector((state) => state.users)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [userRegisterData, setUserRegisterData] = useState({
        email: "",
        first_name: "",
        last_name: "",
        nickname: "",
        birth_date: "",
        password: ""
    });

    const handleChange = (event) => {
        switch (event.target.name) {
            case "email":
                setUserRegisterData({...userRegisterData, email: event.target.value});
                break;
            case "first_name":
                setUserRegisterData({...userRegisterData, first_name: event.target.value});
                break;
            case "last_name":
                setUserRegisterData({...userRegisterData, last_name: event.target.value});
                break;
            case "nickname":
                setUserRegisterData({...userRegisterData, nickname: event.target.value});
                break;
            case "birth_date":
                setUserRegisterData({...userRegisterData, birth_date: event.target.value});
                break;
            case "password":
                setUserRegisterData({...userRegisterData, password: event.target.value});
                break;
        }
    }

    const handleForm = async (event) => {
        event.preventDefault();

        try {
            await dispatch(addUser(userRegisterData)).unwrap();
            navigate("/login")
        } catch (err) {
            console.error(err)
        }
    }


    useEffect(() => {
        if (users.isUserLoggedIn) {
            navigate("/")
        }
    }, [users])


    return (
        <div>
            <h1>Welcome to register page</h1>
            <form onSubmit={handleForm}>
                <label htmlFor="email">Email: </label>
                <input onChange={handleChange} name="email" id="email" value={userRegisterData.email} type="email" required />
                <label htmlFor="first_name">First Name: </label>
                <input onChange={handleChange} name="first_name" id="first_name" value={userRegisterData.first_name} type="text" required />
                <label htmlFor="last_name">Last Name: </label>
                <input onChange={handleChange} name="last_name" id="last_name" value={userRegisterData.last_name} type="text" required />
                <label htmlFor="nickname">Nickname: </label>
                <input onChange={handleChange} name="nickname" id="nickname" value={userRegisterData.nickname} type="text" required />
                <label htmlFor="birth_date">Birth Date: </label>
                <input onChange={handleChange} name="birth_date" id="birth_date" value={userRegisterData.birth_date} type="date" required />
                <label htmlFor="password">Password: </label>
                <input onChange={handleChange} name="password" id="password" value={userRegisterData.password} type="password" required />
                <button>Submit</button>
            </form>
        </div>
    )
};



export default Register;
