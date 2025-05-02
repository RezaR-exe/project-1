import PostsList from "./components/Postslist";
import PostsCreate from "./components/PostsCreate";
import PanelList from "./components/PanelList";
import "./styles/style.css";


function App() {

    return (
        <div>
            <PanelList />
            {/* <PostsCreate /> */}
            <PostsList />
        </div>
    )

}

export default App;
