import React from "react";
import './csevl.css'

import search from "./search.png"

function Csevl()
{

    return(
        <div class="background100">

            <div className='header'>
            </div>

            <div className='headvideo'>
                <p>VIDEO LECTURES</p>
            </div>

            <div class="Search"></div>
            <form>
                <input class="in" type="text" placeholder="Search" />
                <button type="submit" class="btn100"><img class="searching" src={search}/> </button>  
            </form>


                <div class="vl-search">
                        <ul1>
                            <li class="li1"><a href='#html'>HTML</a></li>
                            <li class="li1"><a href='#css'>CSS</a></li>
                            <li class="li1"><a href='#js'>JavaScript</a></li>
                            <li class="li1"><a href='#python'>Python</a></li>
                            <li class="li1"><a href='#java'>Java</a></li>
                        </ul1>
                </div>

                <div id="html">
                <div id='content1'>

                    <div class="tittleforlang">HTML</div>

                    <div class="htmll1">
                        <p>HTML Tutorial for Beginners</p>
                        <a href="https://youtu.be/qz0aGYrrlhU"><input className='btn101' type='submit' value='Link' /></a>
                    </div>

                    <div class="htmll1">
                        <p>Learn HTML Advanced</p>
                        <a href="https://youtu.be/GE2qnXC8UMg"><input className='btn101' type='submit' value='Link' /></a>
                    </div>

                    <div class="htmll1">
                        <p>HTML Playlist</p>
                        <a href="https://www.youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB"><input className='btn101' type='submit' value='Link' /></a>
                    </div>

                </div>
                </div>


                <div id="css">
                <div id='content1'>
                <br></br> <br></br> <br></br> <br></br>

                    <div class="tittleforlang">CSS</div>

                    <div class="htmll1">
                        <p>CSS Tutorial – Full Course for Beginners</p>
                        <a href="https://youtu.be/OXGznpKZ_sA"><input className='btn101' type='submit' value='Link' /></a>
                    </div>

                    <div class="htmll1">
                        <p>CSS - teach by freeCodeCamp.org</p>
                        <a href="https://youtu.be/1Rs2ND1ryYc"><input className='btn101' type='submit' value='Link' /></a>
                    </div>

                    <div class="htmll1">
                        <p>CSS Advanced tricks</p>
                        <a href="https://youtu.be/3c5uVqkYcKA"><input className='btn101' type='submit' value='Link' /></a>
                    </div>

                </div>
                </div>



                <div id="js">
                <div id='content1'>
                <br></br> <br></br> <br></br> <br></br>

                    <div class="tittleforlang">JavaScript</div>

                    <div class="htmll1">
                        <p>JavaScript Basics</p>
                        <a href="https://youtu.be/W6NZfCO5SIk"><input className='btn101' type='submit' value='Link' /></a>
                    </div>

                    <div class="htmll1">
                        <p>JS 7 hours course - freeCodeCamp.org</p>
                        <a href="https://youtu.be/jS4aFq5-91M"><input className='btn101' type='submit' value='Link' /></a>
                    </div>

                    <div class="htmll1">
                        <p>JavaScript Playlist</p>
                        <a href="https://www.youtube.com/playlist?list=PLsyeobzWxl7qtP8Lo9TReqUMkiOp446cV"><input className='btn101' type='submit' value='Link' /></a>
                    </div>

                </div>
                </div>


                <div id="python">
                <div id='content1'>
                <br></br> <br></br> <br></br> <br></br>

                    <div class="tittleforlang">Python</div>

                    <div class="htmll1">
                        <p>Basics of Python</p>
                        <a href="https://youtu.be/kqtD5dpn9C8"><input className='btn101' type='submit' value='Link' /></a>
                    </div>

                    <div class="htmll1">
                        <p>Python - full course</p>
                        <a href="https://youtu.be/_uQrJ0TkZlc"><input className='btn101' type='submit' value='Link' /></a>
                    </div>

                    <div class="htmll1">
                        <p>Python for Beginners</p>
                        <a href="https://youtu.be/rfscVS0vtbw"><input className='btn101' type='submit' value='Link' /></a>
                    </div>

                </div>
                </div>



                <div id="java">
                <div id='content1'>
                <br></br> <br></br> <br></br> <br></br>

                    <div class="tittleforlang">Java</div>

                    <div class="htmll1">
                        <p>Java Basics - Mosh</p>
                        <a href="https://youtu.be/eIrMbAQSU34"><input className='btn101' type='submit' value='Link' /></a>
                    </div>

                    <div class="htmll1">
                        <p>Java Interfaces</p>
                        <a href="https://youtu.be/JFuMei9Wwk4"><input className='btn101' type='submit' value='Link' /></a>
                    </div>

                    <div class="htmll1">
                        <p>Java Course - edureka</p>
                        <a href="https://youtu.be/hBh_CC5y8-s"><input className='btn101' type='submit' value='Link' /></a>
                    </div>

                </div>
                </div>


        </div>       
    );
}

export default Csevl;