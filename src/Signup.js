import React from "react";
import './signup.css'

import {Link} from "react-router-dom";

class Signup extends React.Component{

   render(){
    const mystyle={
        height:'100vh',
        width:'100vh',
    };

    return(
        <div class="background2">
        <div style={mystyle}>

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
                <input class="input-field2" type="password" id = "pass" placeholder="ENTER PASSWORD   " minLength={8} required/>
            </div>

            <div class="cpassword">
                <input class="input-field2" type="password" id = "pass1" placeholder="CONFIRM PASSWORD     " minLength={8} required/>
            </div>
            
            <div class="email">
                <input class="input-field2" type="email" placeholder="EMAIL" required/>
            </div>
               
            <Link to="/login"><input class="btn5" type="submit" value="SIGNUP"/></Link>


            <h6>Already have an account?</h6> 


        <div>
            <Link to="/login"><input class="btn6" type="submit" value="LOGIN"/></Link>
        </div>

        </div>

        </form>  
        </div>  
        </div>    
    );
    }
}

export default Signup;