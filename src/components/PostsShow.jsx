function PostsShow(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p>{props.id}</p>
        </div>
    )
};

export default PostsShow;

