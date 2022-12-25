import React from "react";
import './fourbutton.css';

import {Link} from "react-router-dom";

import note from "./note.jpg"
import vvd from "./vvd.png"
import subb from "./subb.png"
import question from "./question.png"

class Four extends React.Component{

   render(){
    const mystyle={
        height:'69vh',
        width:'100vh',
    };
   
    return(
        <div class="background6">

            <div style={mystyle}>

            <div>
                <div className='header'>
            </div>

            <div className='headv'>
                <p>V</p>
            </div>

            <div className='headl'>
                <p>- LEARN</p>
            </div>
            
            <Link to="/Nofile"><div class="App1">
                <div class="card1"><img src={note} alt="note"/>
                    <div class="info1">
                        <div>
                            <input class='btn11' type='submit' value='SUBJECT NOTES'></input>
                        </div>
                    </div>
                </div>
            </div></Link>

            <Link to="/Nofile"><div className="App2">
                <div class="card2"><img src={vvd} alt="vvd"/>
                    <div class="info2">
                        <div>
                            <input class='btn12' type='submit' value='VIDEO LECTURES'></input>
                        </div>
                    </div>
                </div>
            </div></Link>

            <Link to="/Nofile"><div className="App3">
                <div class="card3"><img src={question} alt="question"/>
                    <div class="info3">
                        <div>
                            <input class='btn13' type='submit' value='QUESTIONS PAPERS'></input>
                        </div>
                    </div>
                </div>
            </div></Link>

            <Link to="/Nofile"><div className="App4">
                <div class="card4"><img src={subb} alt="subb"/>
                    <div class="info4">
                        <div>
                            <input class='btn14' type='submit' value='REFERENCE BOOKS'></input>
                        </div>
                    </div>
                </div>
            </div></Link>

        </div>
        </div>
        </div>
    );
}
}

export default Four;