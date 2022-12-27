import React from "react";
import './tempnote.css'

function Tempnote(){

    return(
        <>
        <form>

            <br></br><br></br>

            <div class="tempnote">Temperory Notes</div>
                    
                    <div class="note">

                        <br></br><br></br>

                        <div class="text">
                            <textarea rows="30" cols="200" placeholder="Notes..."></textarea>
                        </div>

                        <br></br>

                        <input type="submit" value="SUBMIT"/>

                </div>
        </form>

        </>
    );
}

export default Tempnote;