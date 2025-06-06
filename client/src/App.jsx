import PostsList from "./components/Postslist";
import PostsCreate from "./components/PostsCreate";
import PanelList from "./components/PanelList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Routes, Route } from "react-router";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import "./styles/style.css";


function App() {

    return (
        <div>
            <PanelList />
                <Routes>
                    <Route path="/" element={<PostsList />} />
                    <Route path="/create" element={<PostsCreate />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/edit-profile" element={<ProfileEdit />} />
                </Routes>
        </div>
    )
}

export default App;
