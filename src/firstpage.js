import React from "react";
import './firstpage.css' ;
import {Link} from "react-router-dom";

class Firstpage extends React.Component{

    render(){
     const mystyle={
        height:'100vh',
        width:'100vh',
     };
    
    return(
        <div class="background1">
        <div style={mystyle}>

        <form>

            <div>
                <h1>V</h1>
    
                <h2>-LEARN</h2>

                <Link to="/login"><input class='btn' type='submit' value='LOGIN'></input></Link>

    
                <Link to="/signup"><input class='btn2' type='submit' value="Don't have an account"></input></Link>
        
            </div>

         </form>

        </div>
        </div>
    );
}
}

export default Firstpage;