import React from "react";
import './signup.css'

import backgr from "./Login and signup img.jpeg";

import { useState } from "react";

import {Link} from "react-router-dom";

function Signup(){
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
    setPasswordShown(!passwordShown);
    };


    return(
            <>

            <div class="background2">
                <img src={backgr} height="700px" width="800px"/>
            </div>

        <form>

        <div class="back1">

        <h5>SIGN UP</h5>

            <div class="fname">
                <input class="input-field2" type="text" placeholder="FIRST NAME" required/>
            </div>

            <div class="lname">
                <input class="input-field2" type="text" placeholder="LAST NAME" required/>
            </div>
            
            <div class="password">
                <input class="input-field2" type={passwordShown ? "text" : "password"} placeholder="ENTER PASSWORD   " minLength={8} required/>
            </div>

            <div class="showpassword1">
                <input type="checkbox"  onClick={togglePassword} />Check Password
            </div>

            <div class="cpassword">
                <input class="input-field2" type={passwordShown ? "text" : "password"} placeholder="CONFIRM PASSWORD" minLength={8} required/>
            </div>

            <div class="email1">
                <input class="input-field2" type="email" placeholder="EMAIL" required/>
            </div>
               
            <Link to="/login"><input class="btn5" type="submit" value="SIGNUP"/></Link>


            <h6>Already have an account?</h6> 


        <div>
            <Link to="/login"><input class="btn6" type="submit" value="LOGIN"/></Link>
        </div>

        </div>

        </form>

        </>    
    );
}


export default Signup;