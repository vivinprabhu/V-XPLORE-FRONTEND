import React from "react";
import './Feedback.css'

import {Link} from "react-router-dom";

class Feedback extends React.Component{

   render(){
    const mystyle={
        height:'76vh',
        width:'100vh',
    };
   
    return(
        <div class="background5">
            <div style={mystyle}>
        
        
            <div class="Back">
            <form>

            <div class="heads">
                <div class="h14">
                    <p>FEEDBACK</p>
                </div>
            </div>

            <div>
                <input type={"text"} placeholder="NAME" class="ntext" required/>
            </div>

            <div>
                <input type={"text"} placeholder="Enter your Feedback here" class="ftext" required />
            </div>

            <div>
                <input type={"email"} placeholder="E-MAIL" class="etext" required />
            </div>

            <div>
                <Link to="/Home"><input  type='submit' placeholder="SUBMIT" class='submit' /></Link>
            </div>
            
            </form>
    </div>
    </div>
    </div>
    );
}
}

export default Feedback;