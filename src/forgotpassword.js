import React from "react";
import './forgotpassword.css' ;

import backgro from "./Forgotpassword.png";

import { useState } from "react";

import {Link} from "react-router-dom";

function Forgotpassword(){
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
    setPasswordShown(!passwordShown);}

    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');
    const [name, setName] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [passwordError1, setPasswordError1] = useState('');
   const [nameError, setNameError] = useState('');

    const [Error, setError] = useState('');

    function handleSubmit(event) {
        if (field1 !== field2) {
            setError('Passwords are not equal');
            event.preventDefault()
        } else {
          setError('');
        }
    
    if(!name){
        setNameError('This Field is Required');
        if(!field1){
            setPasswordError('This Field is Required');
            if(!field2){
                setPasswordError1('This Field is Required');
                event.preventDefault();
                return ;
            }else{
                setPasswordError1('');
                
            }
            event.preventDefault();
            return;
        }else{
            setPasswordError('');
            if(!field2){
                setPasswordError1('This Field is Required');
                event.preventDefault();
                return ;
            }else{
                setPasswordError1('');
                
            }
        }
        event.preventDefault();
        return;
    }
    else{
        setNameError('');
        if(!field1){
            setPasswordError('This Field is Required');
            if(!field2){
                setPasswordError1('This Field is Required');
                event.preventDefault();
                return ;
            }else{
                setPasswordError1('');
                
            }
            event.preventDefault();
            return;
        }else{
            setPasswordError('');
            if(!field2){
                setPasswordError1('This Field is Required');
                event.preventDefault();
                return ;
            }else{
                setPasswordError1('');
                
            }
        }
      
    }
};

    return(
        <>
            <div class="background3">
                <img src={backgro} height="700px" width="1400px"/>
            </div>
          
            <form>

                <div class='box'> </div>

                <div class='box2'> </div>

                <div class='s3'><p> V</p></div>
                <div class='s4'><p>-XPLORE</p></div>
                <div class='s1'>Forgot Password</div>

                <div class="input4">
                    <div class="input-container">
                        <input class="input-field7" type="email" placeholder="E-mail" value={name} onChange={(event) => setName(event.target.value)}/>
                    </div> 
                        <div className='alerttexts1'>
                            {nameError && <div style={{color: 'red'}}>{nameError}</div>}
                        </div>

                        <br></br>

                    <div class="input-container">
            |            <input class="input-field7" type={passwordShown ? "text" : "password" } placeholder="New Password" value={field1} onChange={handleSubmit} onChange={e=>{setField1(e.target.value);}} />
                    </div>
                        <div className='alertpasswords1'>{passwordError && <div style={{color: 'red'}}>{passwordError}</div>}</div>

                    <br></br>

                    <div class="input-container">
            |             <input class="input-field7" type={passwordShown ? "text" : "password" } placeholder="Confirm Password" value={field2} onChange={handleSubmit} onChange={e=>{setField2(e.target.value);}} />
                    </div>
                        <div className='alertpasswords2'>{passwordError1 && <div style={{color: 'red'}}>{passwordError1}</div>}</div>

                    <div class="fperr">
                        {Error && <div style={{color: 'red'}}>{Error}</div>}
                    </div>

                    <div class="showpassword2">
                        <input type="checkbox"  onClick={togglePassword} />Show Passwords
                    </div>
                    
                </div> 

                <Link to="/login">
                    <input class='fpbtn' type="submit" value="RESET" onClick={handleSubmit}/>
                </Link>
                
            </form>
        </>
      );
}

export default Forgotpassword;