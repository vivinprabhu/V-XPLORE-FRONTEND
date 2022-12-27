import React from 'react';
import ReactDOM from 'react-dom/client';

import Login from "./login";
import Firstpage from "./firstpage";
import Signup from "./Signup";
import Home from "./home";
import Upload from "./upload";
import Forgotpassword from "./forgotpassword";
import Feedback from "./Feedback";
import Tempnote from "./tempnote";
import Four from "./fourbutton";
import Nofile from "./nofile";
import About from "./about";

import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

export default function RouteApp(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Firstpage/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/forgotpassword" element={<Forgotpassword/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/Home" element={<Home/>}></Route>
                <Route path="/Upload" element={<Upload/>}></Route>
                <Route path="/Feedback" element={<Feedback/>}></Route>
                <Route path="/Tempnote" element={<Tempnote/>}></Route>
                <Route path="/Four" element={<Four/>}></Route>
                <Route path="/Nofile" element={<Nofile/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);