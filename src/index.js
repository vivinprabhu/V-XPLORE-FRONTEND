import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

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

export default function RouteApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Tempnote" element={<Tempnote />} />
        <Route path="/Four" element={<Four />} />
        <Route path="/Nofile" element={<Nofile />} />
        <Route path="/about" element={<About />} />

        <Route path="/CseFour" element={<CseFour />} />

        <Route path="/Csesn" element={<Csesn />} />
        <Route path="/Csevl" element={<Csevl />} />
        <Route path="/Cserefbook" element={<Cserefbook />} />
        <Route path="/Cseqp" element={<Cseqp />} />

        <Route path="/Csemathq" element={<Csemathq />} />
        <Route path="/Csejavaq" element={<Csejavaq />} />
        <Route path="/Csewebq" element={<Csewebq />} />

        <Route path="/Csemath" element={<Csemath />} />
        <Route path="/Csejava" element={<Csejava />} />
        <Route path="/Cseweb" element={<Cseweb />} />
      </Routes>
    </Router>
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<RouteApp />);
