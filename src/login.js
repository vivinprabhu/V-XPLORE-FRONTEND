import React from "react";
import './login.css'

import backgr from "./Login and signup img.jpeg";

import { useState } from "react";

import {Link} from "react-router-dom";

function Login(){
    const [email,setEmail]=useState('');
    const [error,setError]=useState('');
    const [msg,setMsg]=useState('');
    const [password,setPassword]=useState('');
    const [msgg,setMsgg]=useState('');
    const [errorr,setErrorr]=useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
    setPasswordShown(!passwordShown);
    };
const handleChange=(e)=>{
    setPassword(e.target.value);
    if(/^[A-Za-z0-9#@%]{7}$/.test(password)===false){
        setErrorr('Password should contain 8 characters');
    }
    else{
        setErrorr('');
        return true;
    }

}
const checkEmail=(e)=>
{
    setEmail(e.target.value);
    if(/^[0-9a-z.]+@[0-9a-z.-]+\.[a-z]{2,4}$/.test(email)===false){
        setError('Please enter valid email');
    }
    else{
        setError('');
        return true;
    }
}
   
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
                
                    <input className='input-field' type="email" placeholder="Enter Email" onChange={checkEmail} />
                    <p style={{color:"red"}}className="chkemail">{error}</p>

                    <input className='input-field1' type={passwordShown ? "text" : "password"} placeholder="Enter Password" onChange={handleChange} />
                    <p style={{color:"red"}} className='chkPass'>{errorr}</p>
                    
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