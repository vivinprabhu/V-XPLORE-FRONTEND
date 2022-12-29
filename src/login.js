import React from "react";
import './login.css'

import backgr from "./Login and signup img.jpeg";

import { useState } from "react";

import {Link} from "react-router-dom";

function Login(){
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

                <div className='back'>
    
                    <div>
                        <h3>LOGIN</h3>
                    </div>
                
                    <input className='input-field' type="email" placeholder="Enter Email" required />

                    <input className='input-field1' type={passwordShown ? "text" : "password"} placeholder="Enter Password" minLength={8} required />
                    
                    <div class="showpassword">
                        <input type="checkbox"  onClick={togglePassword} />Show Password
                    </div>

                    <div>
                        <Link to="/home"><input className='btn3' type='submit' value='Proceed'></input></Link>
                    </div>

                    <Link to="/forgotpassword">
                        <div class="fp">
                            <p>Forgot password</p>
                        </div>
                    </Link>
                
                    <div>
                        <h4>Don't have an account?</h4>
                    </div>
                
                    <div>
                        <Link to="/signup"><input className='btn4' type='submit' value='Sign Up'></input></Link>
                    </div>

                </div>

            </form>

            </>
           
        );
}

export default Login;