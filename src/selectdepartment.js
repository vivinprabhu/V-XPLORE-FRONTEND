import React from "react";
import './selectdepartment.css';

import aero from './aeronautical.png'
import ai from './ai.png'
import bio from './biomedical.png'
import chem from './chemical.png'
import civil from './civil.png'
import cse from './Cse.png'
import ece from './ece.png'
import eee from './eee.png'
import it from './it.png'
import mech from './mech.png'

const Sd1=()=>{
    return(
    <>

        <h1>SELECT DEPARTMENT</h1>
        
        <div class="wrapper1">
            <div class="card"><img src={aero} alt="aero"/>
                <div class="info">
                    <button>Aeronautical Engineering</button>
                </div>
            </div>
        </div>

            <div class="wrapper2">
            <div class="card"><img src={ai} alt="ai"/>
                <div class="info">
                    <button>Artificial Intelligence</button>
                </div>
            </div>
            </div>

            <div class="wrapper3">
            <div class="card"><img src={bio} alt="bio"/>
                <div class="info">
                    <button>Bio Medical</button>
                </div>
            </div>
            </div>

            <div class="wrapper4">
            <div class="card"><img src={chem} alt="chem"/>
                <div class="info">
                    <button>Chemical Engineering</button>
                </div>
            </div>
            </div>

            <div class="wrapper5">
            <div class="card"><img src={civil} alt="civil"/>
                <div class="info">
                    <button>Civil Engineering</button>
                </div>
            </div>
            </div>

            <div class="wrapper6">
            <div class="card"><img src={cse} alt="cse"/>
                <div class="info">
                    <button>Computer Science Engineering</button>
                </div>
            </div>
            </div>

            <div class="wrapper7">
            <div class="card"><img src={ece} alt="ece"/>
                <div class="info">
                    <button>Electrical Communication & Engineering</button>
                </div>
            </div>
            </div>

            <div class="wrapper8">
            <div class="card"><img src={eee} alt="eee"/>
                <div class="info">
                    <button>Electrical & Electronics Engineering</button>
                </div>
            </div>
            </div>

            <div class="wrapper9">
            <div class="card"><img src={it} alt="it"/>
                <div class="info">
                    <button>Information Technology</button>
                </div>
            </div>
            </div>

            <div class="wrapper10">
            <div class="card"><img src={mech} alt="mech"/>
                <div class="info">
                    <button>Mechanical Engineering</button>
                </div>
            </div>
            </div>

            <div>
            <input class='btn' type='submit' value='Upload'></input>
            </div>

            <div>
            <input class='btn2' type='submit' value='Logout'></input>
            </div>

    </>
    );
}

export default Sd1;