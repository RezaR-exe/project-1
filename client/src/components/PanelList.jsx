import { Link } from "react-router-dom"


function PanelList() {
    return(
        <div className="panel">
            <h1>WebGram</h1>
            <div className="links-layout">
                <Link to="/">Home</Link>
                <p>Search</p>
                <Link to="/messages/user">Messages</Link>
                <Link to="/notifications/user">Notifications</Link>
                <Link to="/create">Create</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>

    )
};

export default PanelList;