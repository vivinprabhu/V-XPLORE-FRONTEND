import React from "react";
import './forgotpassword.css' ;

import backgro from "./Forgotpassword.png";

import { useState } from "react";

import {Link} from "react-router-dom";

function Forgotpassword(){
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
    setPasswordShown(!passwordShown);
    };

   
    return(
        <>
            <div class="background3">
                <img src={backgro} height="700px" width="1400px"/>
            </div>
          
            <form>

                <div class='box'> </div>

                <div class='box2'> </div>

                <div class='s1'>Forgot Password</div>
                <div class='s2' ><p> Enter E-mail Address:</p> <br></br><p>Create Password:</p><br></br><p>Confirm Password:</p></div>
                <div class='s3'><p> V</p></div>
                <div class='s4'><p>-XPLORE</p></div>

                <div class="input4">
                    <div class="input-container">
                        <input class="input-field7" type="email" placeholder="E-mail" required></input>
                    </div> 

                    <br></br>

                    <div class="input-container">
            |             <input class="input-field7" type={passwordShown ? "text" : "password" } placeholder="New Password" minLength={8} required></input>
                    </div>


                    <br></br>

                    <div class="input-container">
            |             <input class="input-field7" type={passwordShown ? "text" : "password" } placeholder="Confirm Password" minLength={8} required></input>
                    </div>

                    <div class="showpassword2">
                        <input type="checkbox"  onClick={togglePassword} />Re-check Passwords
                    </div>
                    
                </div> 

                <Link to="/login"><input class='fpbtn' type="submit" value="RESET" /></Link>
            </form>
        </>
      );
}

export default Forgotpassword;