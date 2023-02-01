import React, { useState } from "react";
import './tempnote.css'

function Tempnote(){
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleDownload = () => {
        const textBlob = new Blob([text], {type: "text/plain"});
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(textBlob);
        downloadLink.download = "Your_Notes.txt";
        downloadLink.click();
    }

    return(
        <>
        <form>

            <br></br><br></br>

            <div class="tempnote">Temperory Notes</div>   

                <div class="note">

                    <br></br><br></br>

                    <div class="text">
                        <textarea rows="30" cols="190" placeholder="Notes..." onChange={handleTextChange} value={text}></textarea>
                    </div>

                    <br></br>

                    <div>
                        <input class="btntemp" type="button" value="DOWNLOAD" onClick={handleDownload}/>
                    </div>
                </div>

        </form>
        </>
    );
}

export default Tempnote;