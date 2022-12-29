import React from "react";
import './csesn.css'

import math from "./math.jpg"
import java from "./java.jpg"
import web from "./web.jpg"

import {Link} from "react-router-dom";

class Cseqp extends React.Component{

   render(){
    const mystyle={
        height:'100vh',
        width:'100vh',
    };
   
    return(
        <>

        <div class="selsub">
            <p>SELECT SUBJECT</p>
        </div>

        <div class="wrapper1">
            <div class="card0">
                <img src={math}/>
            <div class="info">
                <p>Mathematical Structures<br></br><br></br>Course Code - 21CSMS1</p>
                <Link to="/Csemathq"><button>Solve</button></Link>
            </div>
            </div>
        </div>

        <div class="wrapper2">   
            <div class="card0"><img src={java}/>
            <div class="info">
                <p>OOP's using Java<br></br><br></br>Course Code - 21CSJA01</p>
                <Link to="/Csejavaq"><button>Debug</button></Link>
            </div>
            </div>
        </div>
        
        <div class="wrapper3">
        <div class="card0"><img src={web}/>
            <div class="info">
            <p>Web Development<br></br><br></br>Course Code - 21CSWE01</p>
            <Link to="/Csewebq"><button>Crack</button></Link>
            </div>
        </div>
        </div>
  
        </>
    );
}
}

export default Cseqp;