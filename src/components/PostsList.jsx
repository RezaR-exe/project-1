import { useSelector } from 'react-redux';
import PostsShow from './PostsShow';


function PostsList(){
    const posts = useSelector((state) => state.posts.posts)
    const renderedPosts = posts.map((item) => <PostsShow title={item.title} content={item.content} id={item.id} key={item.id} />)

    return(
        <div className="post-list">
            {renderedPosts}
        </div>
    )
};

export default PostsList;
