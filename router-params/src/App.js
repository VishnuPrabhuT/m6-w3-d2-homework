import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
    Outlet,
} from "react-router-dom";
import "./App.css";

export default function App() {
    //Insert router, links here
    let urls = [
        [
            "Netflix",
            "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
        ],
        [
            "HBO Max",
            "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
        ],
        [
            "Hulu",
            "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg",
        ],
        [
            "Prime Video",
            "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
        ],
    ];
    return (
        <div className="container">
            <h1>TV APPS</h1>
            <Router>
                <nav style={{ margin: 10 }}>
                    {urls.map((url) => {
                        return (
                            <Link to={`/${url[0]}`} style={{ padding: 5 }}>
                                <img src={url[1]} />
                            </Link>
                        );
                    })}
                </nav>
                <Routes>
                    <Route path="/" element={<Child />}>
                        <Route path=":id" element={<Child />}></Route>
                    </Route>
                </Routes>
            </Router>
            <Outlet />
        </div>
    );
}

function Child(props) {
    // Below this comment, there's one major key script missing
    let { id } = useParams();

    return (
        <div>
            <h3>
                You Selected:<span>{id || "Netflix"}</span>
            </h3>
        </div>
    );
}
