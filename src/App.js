import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Blog from './BlogPage/Blog'
import Citations from "./CitationPage/Citations";
import Frontend from "./FrontendPage/Frontend";
import Header from './BlogPage/Header';


const sections = [
    { title: 'Technology', url: './frontend', disable: false },
    { title: 'Citations', url: './citations', disable: false },
    { title: 'Opinion', url: '#', disable: true },
    { title: 'Science', url: '#', disable: true },
    { title: 'Health', url: '#', disable: true },
    { title: 'Style', url: '#', disable: true },
    { title: 'Travel', url: '#', disable: true },
    { title: 'Design', url: '#', disable: true },
    { title: 'Culture', url: '#', disable: true },
    { title: 'Business', url: '#', disable: true },
];
    


export default function App() {

    const [prod, setProd] = useState(true)
    return (
        <Router>
            {prod?<div onClick={() => setProd(false)} style={{position: 'fixed', margin: '30vh 30vw', width: '40vw', height: '40vh', backgroundColor: '#ccc', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: '1', borderRadius: '30px'}}>
            <p>...In Production...</p>
            <p>Click to dismiss</p>
            </div>:''}
            <div>
            <Header title="Demut" sections={sections} />
            </div>
            <Switch>
                <Route exact path="/">
                    <Blog />
                </Route>
                <Route path="/frontend">
                    <Frontend />
                </Route>
                <Route path="/citations">
                    <Citations />
                </Route>
            </Switch>
        </Router>
    )
}