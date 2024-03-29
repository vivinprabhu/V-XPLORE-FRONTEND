import React from "react";
import './home.css' ;

import { Link } from "react-router-dom";


import imge from './home page img.png';

import aids from './ai.png' ;
import aiml from './aiml.png' ;
import civil from './civil.png' ;
import cse from './Cse.png' ;
import cyber from './cybersecurity.png' ;
import ece from './ece.png' ;
import eee from './eee.png' ;
import it from './it.png' ;
import mech from './mech.png' ;
import metro from './mechatronics.png' ;

import notes from './notes1.png' ;
import ques from './question.png' ;
import video from './video-lecture.png' ;
import placement from './promotion.png' ;

import twitter from './twitter.png' ;
import insta from './instagram.png' ;
import git from './github.png' ;

function Home()
{
    return(
    <>
        <div class='logo'>

                <div class="h11">
                    <p>V-XPLORE</p>
                </div>

                <div id="log">
                    <Link to="/login">Logout</Link>
                </div>
                
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#upload'>Upload</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#departments'>Departments</a></li>
                <li><Link to="/Tempnote"><a class="size">Notes</a></Link></li>
                <li><Link to="/Feedback"><a class="size">Feedback</a></Link></li>
                <li><a href='#contact'>Contact us</a></li>
            </ul>

        </div>

        <div id='home'>
            <br></br>
            <div id='content'>

                <div class="h12">
                    <p>OUR MOTTO</p>
                </div>

               <p>
                    V-XPLORE is a open community and a global platform for students for learning through online. As most of the online websites provide courses and contents with premium payments we providing a economy-free courses.<br></br><br></br><br></br>
                    As a V-XPLORE user and , as a V-XPLORE contributor you can both gain knowledge and share your knowledge to help others to gain their knowledge. <br></br> <br></br><br></br>
                    As you grow , the society will also grow with you.
                </p>

                <div id="btn">
                    <a href="#services">More details</a>
                    <br></br>
                </div>

                <br></br>
            </div>

            <div id="image">
                <img class="imr"src={imge} alt="Imge" />
            </div>  
        </div>



        <div id='upload'>
            <div id='content1'>
                <div class="h12">  <br></br>
                    <p>UPLOAD FILES</p>
                </div>

                    <p>
                        Help us to grow bigger by uploading study materials. <br></br>
                        People can upload their subject notes, question papers, reference books also video lectures.<br></br><br></br>
                        Upload Files Securely, Anonymous, Fast and Free!
                    </p>

                    <Link to="/Upload"><div class="upload">
                        <button>Upload Here</button>
                    </div></Link>

            </div>
        </div>




        <div id="services">
            <div id="col">   <br></br>

                    <div class="h12">
                        <p>SERVICES</p>
                    </div>

                    <p> An engineering education will “exercise” your brain, developing your ability to think logically and solve problems.
                    <br></br> If you like to question, explore, invent, discover, and create, then engineering could be the ideal profession for you.<br></br><br></br>
                    1. SUBJECT NOTES---Our notes are updated regularly. Dont miss to check this out!<br/>
                    2. QUESTION PAPERS---Not satisfied? Try answering to previous year question papers!<br/>
                    3. VIDEO LECTURES---Can't understand by reading? No problem see our video lectures!<br/>
                    4. PLACEMENT PREPARATION---You have to make your placements with love these days!
                    </p>

                <div id="c1">
                    <img class="ima1"src={notes} alt="STUDY"/>
                    <a>Subject Notes</a>
                </div>

                <div id="c2">
                    <img class="ima2"src={ques} alt="STUDY"/>
                    <a>Question Papers</a>
                </div>

                <div id="c3">
                    <img class="ima3"src={video} alt="STUDY"/>
                    <a>Video Lectures</a>
                </div>

                <div id="c4">
                    <img class="ima4"src={placement} alt="STUDY"/>
                    <a>Placement Preparation</a>
                </div>
                <p>_________________________________________________________________________________________________</p>
            </div>
        </div>



        <div id='departments'>

            <div class="h12">
                <p>DEPARTMENTS</p>
            </div>

                <p>There is no shortage of solutions to be discovered in engineering. There is no single answer, 
                    <br></br> no answer in the back of the book, no professor to tell you that you are right or wrong. 
                    <br></br> You must devise a solution and persuade others that your solution is the best one.
                    <br></br><br></br>
                    REMIND IT AND SELECT YOUR DEPARTMENT BELOW !
                </p>

                    <div id="i1">
                    <Link to="/Four">
                        <div class="card">
                        <img src={aids} alt="AIDS"/>
                        <div class="info">
                        <a>AIDS</a>
                        </div>
                    </div></Link>
                    </div>

                    <div id="i1">
                    <Link to="/Four"><div class="card">
                        <img src={aiml} alt="AIML"/>
                        <div class="info">
                            <a>AIML</a>
                        </div> 
                    </div></Link>
                    </div>

                    <div id="i1">
                    <Link to="/Four"><div class="card">
                        <img src={civil} alt="CIVIL"/>
                        <div class="info">
                            <a>CIVIL</a>
                        </div>
                    </div></Link>
                    </div>

                    <div id="i1">
                    <Link to="/CseFour"><div class="card">
                        <img src={cse} alt="CSE"/>
                        <div class="info">
                            <a>CSE</a>
                        </div>
                    </div></Link>
                    </div>

                    <div id="i1">
                    <Link to="/Four"><div class="card">
                        <img src={cyber} alt="CS"/>
                        <div class="info">
                            <a>CYBER SECURITY</a>
                        </div>
                    </div></Link>
                    </div>

                    <div id="i1">
                    <Link to="/Four"><div class="card">
                        <img src={ece} alt="ECE"/>
                        <div class="info">
                            <a>ECE</a>
                        </div>
                    </div></Link>
                    </div>

                    <div id="i1">
                    <Link to="/Four"><div class="card">
                        <img src={eee} alt="EEE"/>
                        <div class="info">
                            <a>EEE</a>
                        </div>
                    </div></Link>
                    </div>

                    <div id="i1">
                    <Link to="/Four"><div class="card">
                        <img src={it} alt="IT"/>
                        <div class="info">
                            <a>IT</a>
                        </div>
                    </div></Link>
                    </div>
                    
                    <div id="i1">
                    <Link to="/Four"><div class="card">
                        <img src={mech} alt="MECH"/>
                        <div class="info">
                            <a>MECHANICAL</a>
                        </div> 
                    </div></Link>
                    </div> 

                    <div id="i1">
                    <Link to="/Four"><div class="card">
                        <img src={metro} alt="mtro"/>
                        <div class="info">
                            <a>MECHATRONICS</a>
                        </div>   
                    </div></Link>
                    </div>

                <div class="underline"><p>________________</p></div>
        </div>





        <div id="contact">      <br></br> 
            <div class="h18">
                GET IN TOUCH
                    <div><br></br><a href="https://twitter.com/xplore_v"><img class="twitter" src={twitter} alt="twitter"/></a></div>
                    <div><a href="https://www.instagram.com/v_xplore__/"><img class="insta" src={insta} alt="insta"/></a></div>
                    <div><a href="https://github.com/XPLORE-V"><img class="git" src={git} alt="git"/></a></div>

                    <div class="team">
                        <p>TEAM: </p>
                    </div>

                    <div class="linkedin">
                        <a href="https://www.linkedin.com/in/s-sainarendar-504351254">Sai Narendar</a><br></br>
                        <a href="https://www.linkedin.com/in/sherylin-rajan-0661391b0">Sherylin M Rajan</a><br></br>
                        <a href="https://www.linkedin.com/in/shreena-christopher-609962215">Shreena Christoper</a><br></br>
                        <a href="https://www.linkedin.com/in/tanushri-a-d-581374250">Tanushri</a><br></br>
                        <a href="https://www.linkedin.com/in/vishnu-m-849062257">Vishnu</a><br></br>
                        <a href="https://www.linkedin.com/in/vivinprabhu">Vivinprabhu</a><br></br>
                        
                    </div>

                    <div class="quries">
                        <p>Quries :</p>
                    </div>

                    <Link to="/about"><div class="faq"><p>FAQ</p></div></Link>
                    <Link to="/about"><div class="pp"><p>Privacy Policy</p></div></Link>
                    <Link to="/about"><div class="toc"><p>Terms of services</p></div></Link>
                
                    <div class="stt">Special Thanks to:</div>

                    <div class="linkedin2">
                        <a href="https://www.linkedin.com/in/vaish-navi-78b5a9245/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BkYKXSopySbC4Wh54yi8iNA%3D%3D&original_referer=">Vaishnavi</a><br></br>
                        <a href="@">Sakthibala</a><br></br>
                    </div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
        </div>
                <div class="copyright">
                    <p>COPYRIGHT ©️ All rights reserved</p>
                </div>
                                
</>             
    );
}

export default Home ;