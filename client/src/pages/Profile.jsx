import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom"
import PostsShow from "../components/PostsShow";


function Profile() {
    const user = useSelector((state) => state.users)
    const posts = useSelector((state) => state.posts.posts)
    const navigate = useNavigate();

    useEffect(() => {
        if (user.isUserLoggedIn != true) {
            navigate("/login")
        }
    }, [user])

    const renderedUserPosts = posts.map((item) => item.postedby === user.userData.nickname ? <PostsShow title={item.post_title} content={item.post_content} postedBy={item.postedby} id={item.post_id} key={item.post_id} /> : "")

    return (
        <div>
            <div className="profile-card">
                <h2>Hello, {user.userData.first_name?.charAt(0).toUpperCase() + user.userData.first_name?.slice(1)} {user.userData.last_name?.charAt(0).toUpperCase() + user.userData.last_name?.slice(1)}</h2>
                <h3>@{user.userData.nickname}</h3>
                <h3>Bio: {user.userData.bio}</h3>
                <h3>Location: {user.userData.location}</h3>
                <h3>Born {user.userData.birth_date}</h3>
                <Link to="/edit-profile"><button>Edit Profile</button></Link>
                <h3>Posts</h3>
                {renderedUserPosts}
            </div>
        </div>
    )
};

export default Profile;
