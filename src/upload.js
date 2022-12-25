import React from "react";
import './upload.css' ;

import {Link} from "react-router-dom";

class Upload extends React.Component{

    render(){
        const mystyle={
            height:'100vh',
            width:'100vh',
        };

    return(
        <div class="background4">
        <div style={mystyle}>

        <div class="back2">

            <div class="h10">
                <p>UPLOAD DOCUMENTS</p>
            </div>
        
            <div class='input0'>
                <input class='input-field3' type="text" placeholder="Uploader Name" required/>
            </div>

            <div class='input1'>
                <select class="input-field4">
                    <option value="Select Department"></option>
                    <option>ARTIFICAL INTELLIGENCE & DATA SCIENCE</option>
                    <option>ARTIFICAL INTELLIGENCE & MACHINE LEARNING</option>
                    <option>CIVIL ENGINEERING</option>
                    <option>COMPUTER SCIENCE AND ENGINEERING</option>
                    <option>CYBER SECURITY</option>
                    <option>ELECTRONICS AND COMMUNICATION ENGINEERING</option>
                    <option>ELECTRICAL AND ELECTRONICS ENGINEERING</option>
                    <option>INFORMATION TECHNOLOGY</option>
                    <option>MECHANICAL ENGINEERING</option>
                    <option>MECHATRONICS</option>
                </select>
            </div>

        <div class='input2'>
            <select class="input-field5">
                <option value="Select Department"></option>
                <option>SUBJECT NOTES</option>
                <option>QUESTION PAPERS</option>
                <option>VIDEO LECTURES</option>
                <option>REFERENCE BOOKS</option>
            </select>
        </div>

        <div class='input3'>
             <input class="input-field6" type="file" placeholder='Upload Files'/>
        </div>

        <div>
            <input class='btn8' type='submit' value='Upload'></input>
        </div>

        <div>
        <Link to="/home"><input class='btn9' type='submit' value='Back'></input></Link>
        </div>

        </div>

    </div>
    </div>

    );
}
}

export default Upload;