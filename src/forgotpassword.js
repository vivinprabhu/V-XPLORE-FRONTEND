import React from "react";
import './forgotpassword.css' ;

import {Link} from "react-router-dom";

class Forgotpassword extends React.Component{

    render(){
     const mystyle={
         height:'100vh',
         width:'100vh',
     };

    return(
      <div class="background3">
            <div style={mystyle}>
          
          <form>

          <div class='box'> </div>

          <div class='box2'> </div>

          <div class='s1'>Forgot Password</div>
          <div class='s2' ><p> Enter E-mail Address:</p> <br></br><p>Create Password:</p><br></br><p>Confirm Password:</p></div>
          <div class='s3'><p> V</p></div>
          <div class='s4'><p>-LEARN</p></div>

          <div class="input4">
          <div class="input-container">
              <input class="input-field7" type="email" placeholder="E-mail" required></input>
          </div> 

          <br></br>

          <div class="input-container">
|             <input class="input-field7" type="password" placeholder="New Password" minLength={8} required></input>
          </div>

          <br></br>

          <div class="input-container">
|             <input class="input-field7" type="password" placeholder="Confirm Password" minLength={8} required></input>
          </div>
          </div> 

          <Link to="/login"><input class='fpbtn' type="submit" value="RESET" /></Link>
          </form>

          </div>
          </div>
      );
  }
}

export default Forgotpassword;