import { useSelector, useDispatch } from 'react-redux';
import  { useEffect } from "react";
import { fetchPosts } from '../store/store';
import PostsShow from './PostsShow';


function PostsList(){
    const posts = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])
    
    const renderedPosts = posts.map((item) => <PostsShow title={item.post_title} content={item.post_content} postedBy={item.postedby} id={item.post_id} key={item.post_id} />)

    return(
        <div className="post-list">
            {renderedPosts}
        </div>
    )
};

export default PostsList;
