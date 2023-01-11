import React from "react";
import './Feedback.css'

import feedbackimg from "./imgg.jpg"

import {Link} from "react-router-dom";

import { useState } from "react";

function Feedback(){

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setemail] = useState('');
    const [emailError, setemailError] = useState('');
    const [feedbak, setfeedbak] = useState('');
    const [feedbakError, setfeedbakError] = useState('');

    function handleSubmit(event) {
      
    if(!name){
        setNameError('The Username is required');
        if(!email){
            setemailError('The Email is required');
            if(!feedbak){
                setfeedbakError('The FeedBack is Required');
                event.preventDefault();
                return;
            }else{
                setfeedbak('');
            }
            event.preventDefault();
            return;
        }else{
            setemailError('');
        }
        event.preventDefault();
        return;
  
  
      }
      if(name){
        setNameError('');
        if(!email){
          setemailError('The Email is required');
          if(!feedbak){
              setfeedbakError('The FeedBack is Required');
              event.preventDefault();
              return;
          }else{
            setfeedbak('');
          }
          event.preventDefault();
          return;
        }else{
            if(!feedbak){
                setfeedbakError('The FeedBack is Required');
                event.preventDefault();
            }else{
              setfeedbakError('');
            } 
            setemailError('');
        }
      }
      
    }
    return(
        <>
            <div class="background5">
                <img src={feedbackimg} height="742px" width="1600px"/>
            </div>

                <div class="Back">
                    <form>
                        <div class="heads">
                            <div class="h14">
                                <p>FEEDBACK</p>
                            </div>
                        </div>

                        <div>
                            <input type={"text"} placeholder="NAME" class="ntext"  onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className="alerttext">

                            {nameError && <div style={{color: 'red'}}>{nameError}</div>}
                        </div>

                        <div>
                            <input type={"email"} placeholder="E-MAIL" class="etext"   onChange={(event) => setemail(event.target.value)}  />
                        </div>
                        <div className="alertemail1">
                            {emailError && <div style={{color: 'red'}}>{emailError}</div>}
                        </div>

                        <div>
                            <textarea type={"text"} placeholder="Enter your Feedback here" class="ftext"  onChange={(event) => setfeedbak(event.target.value)}  />
                        </div>
                        <div className="alertfeedback">
                            {feedbakError && <div style={{color: 'red'}}>{feedbakError}</div>}
                        </div>


                        <div>
                            <Link to="/Home"><input  type='submit' placeholder="SUBMIT" class='submit' onClick={handleSubmit}/></Link>
                        </div>
                    </form>
                </div>
                </>
        );
}

export default Feedback;