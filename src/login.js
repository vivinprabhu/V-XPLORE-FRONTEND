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

    const [email,setEmail]=useState('');
    const [emailerror,setemailError]=useState('');
    const [password,setPassword]=useState('');
    const [passworderror,setPasswordError]=useState('');
    

    function handleSubmit(event) {
    
        if(!email){
          setemailError('The Email is required');
          if(!password){
            setPasswordError('The Password is required');
            event.preventDefault();
            return;
          }else{
            setemailError('The Email is required');
            setPasswordError('')
          }
          event.preventDefault();
          return;
    
    
        }
        if(email){
          setemailError('');
          if (!password) {
            setPasswordError('The Password is required');
            event.preventDefault();
            return;
          }
        }
        
        else{
          setemailError('');
          setPasswordError('');
          
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
                
                    <input className='input-field' type="email" placeholder="Enter Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <div class="alertemail">
                        {emailerror && <div style={{color: 'red'}}>{emailerror}</div>}    
                    </div>

                    <input className='input-field1' type={passwordShown ? "text" : "password"} placeholder="Enter Password"  onChange={(event) => setPassword(event.target.value)} />
                    <div className="alertPass">
                        {passworderror && <div style={{color: 'red'}}>{passworderror}</div>}
                    </div>
                     
                    <div class="showpassword">
                        <input type="checkbox"  onClick={togglePassword} />Show Password
                    </div>

                    <div>
                        <Link to="/home"><input className='btn3' type='submit' value='Proceed' onClick={handleSubmit}></input></Link>
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