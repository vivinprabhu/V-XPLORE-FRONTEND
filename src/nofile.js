import React from "react";
import './nofile.css'

import {Link} from "react-router-dom";

class Nofile extends React.Component{

   render(){
    const mystyle={
        height:'65vh',
        width:'100vh',
    };
   
    return(
        <div class="background8">
            <div style={mystyle}>
                <div class="notyet">
                <p>Not yet Uploaded</p>
                </div>
            </div>

            <div>
                <Link to="/Home"><button>BACK</button></Link>
            </div>
        </div>
    );
   }
}

export default Nofile;