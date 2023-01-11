import React from "react";
import './upload.css' ;

import background4 from "./Upload.png";

import {Link} from "react-router-dom";

import { useState } from "react";

function Upload() {
    
    const [uploaderName, setUploaderName] = useState("");
    const [department, setDepartment] = useState("Select Department");
    const [documentType, setDocumentType] = useState("Select Department");
    const [file, setFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
    
        if (uploaderName === "") {
            alert("Uploader Name is required.");
            isValid = false;
        }
    
        if (department === "Select Department") {
            alert("Department is required.");
            isValid = false;
        }
    
        if (documentType === "Select Department") {
            alert("Document Type is required.");
            isValid = false;
        }
    
        if (!file) {
            alert("File is required.");
            isValid = false;
        }
    
        if (isValid) {
            
        }
    }    

    return(
        <form>
            <div class="background4">
                <img src={background4} height="700px" width="1100px"/>
            </div>

            <div class="back2">

                <div class="h10">
                    <p>UPLOAD DOCUMENTS</p>
                </div>
            
                <div class='input0'>
                    <input 
                        class='input-field3' 
                        type="text" 
                        placeholder="Uploader Name" 
                        required
                        value={uploaderName}
                        onChange={(event) => setUploaderName(event.target.value)}
                    />
                </div>

                <div class='input1'>
                    <select 
                        class="input-field4"
                        value={department}
                        onChange={(event) => setDepartment(event.target.value)}
                    >
                        <option value="Select Department"></option>
                        <option>ARTIFICAL INTELLIGENCE AND DATA SCIENCE</option>
                        <option>ARTIFICAL INTELLIGENCE AND MACHINE LEARING</option>
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
                <select 
                    class="input-field5"
                    value={documentType}
                    onChange={(event) => setDocumentType(event.target.value)}
                >
                    <option value="Select Department"></option>
                    <option>SUBJECT NOTES</option>
                    <option>VIDEO LECTURES</option>
                    <option>REFERENCE BOOKS</option>
                    <option>QUESTION PAPERS</option>
                </select>
            </div>

            <div class='input3'>
                <input 
                    class="input-field6" 
                    type="file" 
                    placeholder='Upload Files' 
                    onChange={(event) => setFile(event.target.files[0])}
                />
            </div>

            <div> <input class='btn8' type='submit' value='Upload'  onClick={handleSubmit} /></div>

            <div>
                <Link to="/home"><input class='btn9' type='submit' value='Back'/></Link>
            </div>
            </div>
    </form>
);
}

export default Upload;