function PostsShow(props){
    return(
        <div className="post-container">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p>{props.id}</p>
            <p>@{props.postedBy}</p>
        </div>
    )
};

export default PostsShow;

