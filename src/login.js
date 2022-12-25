import React from "react";
import './login.css'

import {Link} from "react-router-dom";

class Login extends React.Component{

   render(){
    const mystyle={
        height:'100vh',
        width:'100vh',
    };
   
    return(
        <div class="background2">
            <div style={mystyle}>

            <form>

                <div className='back'>
    
                    <div>
                        <h3>LOGIN</h3>
                    </div>
                
                    <input className='input-field' type="email" placeholder="Enter Email" required />

                    <input className='input-field1' type="password" placeholder="Enter Password" minLength={8} required />

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

            </div>
        </div>
           
        );
    }
}

export default Login;