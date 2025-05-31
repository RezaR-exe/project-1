import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../store/store';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router';


function PostsCreate(){
    const navigate = useNavigate();
    const user = useSelector((state) => state.users)
    const [postObject, setPostObject] = useState({});
    const dispatch = useDispatch();

    const handleObjectChange = (event) => {
        if (event.target.name === "title") {
            setPostObject({...postObject, title: event.target.value})
        } else if (event.target.name === "content") {
            setPostObject({...postObject, content: event.target.value})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createPost({post_title: postObject.title, post_content: postObject.content, postedBy: user.userData.nickname}))
    }

    useEffect(() => {
        if (user.isUserLoggedIn != true) {
            navigate("/")
        }
    }, [user])


    return(
        <div className="create-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input id="title" name="title" type="text" onChange={handleObjectChange} />

                <label htmlFor="content">Content: </label>
                <input id="content" name="content" type="text" onChange={handleObjectChange} />
                <button>submit</button>
            </form>
        </div>
    )
};

export default PostsCreate;
