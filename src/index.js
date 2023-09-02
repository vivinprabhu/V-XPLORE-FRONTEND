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
import CseFour from "./csefourbutton";
import Csesn from "./csesn";
import Csevl from "./csevl";
import Cserefbook from "./cserefbook";
import Cseqp from "./cseqp";
import Csemath from "./csemath";
import Csejava from "./csejava";
import Cseweb from "./cseweb";
import Csemathq from "./csemathq";
import Csejavaq from "./csejavaq";
import Csewebq from "./csewebq";

import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

export default function RouteApp(){
    return(
        <Router>
            <Routes>
                <Route path="/V-XPLORE-FRONTEND" element={<Firstpage/>}></Route>
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

                <Route path="/CseFour" element={<CseFour/>}></Route>

                <Route path="/Csesn" element={<Csesn/>}></Route>
                <Route path="/Csevl" element={<Csevl/>}></Route>
                <Route path="/Cserefbook" element={<Cserefbook/>}></Route>
                <Route path="/Cseqp" element={<Cseqp/>}></Route>

                <Route path="/Csemathq" element={<Csemathq/>}></Route>
                <Route path="/Csejavaq" element={<Csejavaq/>}></Route>
                <Route path="/Csewebq" element={<Csewebq/>}></Route>

                <Route path="/Csemath" element={<Csemath/>}></Route>
                <Route path="/Csejava" element={<Csejava/>}></Route>
                <Route path="/Cseweb" element={<Cseweb/>}></Route>
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);