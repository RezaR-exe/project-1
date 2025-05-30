import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { editUserData } from "../store/store";


function ProfileEdit() {
    const dispatch = useDispatch();
    const [newUserData, setNewUserData] = useState({
        nickname: "",
        first_name: "",
        last_name: "",
        bio: "",
        birth_date: "",
        location: ""
    })
    const user = useSelector((state) => state.users)
    const navigate = useNavigate();

    useEffect(() => {
        if (user.isUserLoggedIn != true) {
            navigate("/login")
        }
    }, [user])

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editUserData({...newUserData, email: user.userData.email}))
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case "first_name":
                setNewUserData({...newUserData, first_name: event.target.value});
                break;
            case "last_name":
                setNewUserData({...newUserData, last_name: event.target.value});
                break;
            case "nickname":
                setNewUserData({...newUserData, nickname: event.target.value});
                break;
            case "bio":
                setNewUserData({...newUserData, bio: event.target.value});
                break;
            case "birth_date":
                setNewUserData({...newUserData, birth_date: event.target.value});
                break;
            case "location":
                setNewUserData({...newUserData, location: event.target.value});
                break;
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first_name">First Name: </label>
                <input placeholder={user.userData.first_name} id="first_name" name="first_name" type="text" value={newUserData.first_name} onChange={handleChange} />

                <label htmlFor="last_name">Last Name: </label>
                <input placeholder={user.userData.last_name} id="last_name" name="last_name" type="text" value={newUserData.last_name} onChange={handleChange} />

                <label htmlFor="nickname">Nickname: </label>
                <input placeholder={user.userData.nickname} id="nickname" name="nickname" type="text" value={newUserData.nickname} onChange={handleChange} />

                <label htmlFor="bio">Bio: </label>
                <input placeholder={user.userData.bio} id="bio" name="bio" type="textarea" value={newUserData.bio} onChange={handleChange} />

                <label htmlFor="bio">Birth Date: </label>
                <input placeholder={user.userData.birth_date} id="birth_date" name="birth_date" type="date" value={newUserData.birth_date} onChange={handleChange} />

                <label htmlFor="location">Location: </label>
                <input placeholder={user.userData.first_name} id="location" name="location" type="text" value={newUserData.location} onChange={handleChange} />
                
                <button>Save</button>


            </form>
        </div>
    )
};

export default ProfileEdit;

