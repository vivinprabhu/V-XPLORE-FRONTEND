import React from "react";
import './home.css' ;

import { Link } from "react-router-dom";


import imge from './E-learning.png';

import cse from './Cse.png' ;
import it from './it.png' ;
import ece from './ece.png' ;
import eee from './eee.png' ;
import mech from './mech.png' ;
import civil from './civil.png' ;
import aids from './ai.png' ;
import aiml from './aiml.png' ;
import cyber from './cybersecurity1.png' ;
import metro from './mechatronics.png' ;

import notes from './notes1.png' ;
import ques from './question.png' ;
import video from './video-lecture.png' ;
import placement from './promotion.png' ;

import email from './gmail.png' ;
import insta from './instagram.png' ;
import git from './github.png' ;

function Home()
{
    return(
    <>
        <div class='logo'>

            <div class="h11">
                <p>V-Learn</p>
            </div>

            <div id="log">
                <Link to="/login">Logout</Link>
            </div>
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#departments'>Departments</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#upload'>Upload</a></li>
            <li><Link to="/Feedback"><a class="size">Feedback</a></Link></li>
            <li><a href='#contact'>Contact us</a></li>
        </ul>
        </div>


        <div id='home'>
            <div id='content'>
                <div class="h12">
                    <p>Our Story</p>
                </div>
                <div class="justify">
               <p>
                    V-LEARN is a open community and a global platform for students for learning through online. As most of the online websites provide courses and contents with premium payments we providing a economy-free courses.<br></br><br></br>
                    LEARNING IS A CONSTANT PROCESS-THAT NEVER ENDS <br></br><br></br>
                    As a V-learn user and , as a VLEARN contributor you can both gain knowledge and share to help others to gain their knowledge.
                    
                </p>
                </div>

                <div id="btn">
                    <a href="#services">More details</a>
                    <br></br>
                </div>
            </div>
            <div id="image">
                <img class="imr"src={imge} alt="Imge" />
            </div>  
        </div>

        <div id='upload'>
            <div id='content1'>
                <div class="h12">
                <br></br>
                    <p>UPLOAD FILES</p>
                </div>
            <p>
                Help us to grow bigger by uploading study materials. <br></br>
                People can upload their subject notes, question papers, reference books also video lectures.<br></br><br></br>

                Upload Files Securely, Anonymous, Fast and Free!
            </p>

            <div class="upload">
                <Link to="/Upload"><button>Upload Here</button></Link>
            </div>

            </div>
        </div>


        <div id="services">
            <div id="col">
                <div class="h12">
                    <p>SERVICES</p>
                </div>
            <p>1. SUBJECT NOTES---Our notes are updated regularly. Dont miss to check this out.<br/>
            2. QUESTION PAPERS---Not satisfied with your performance? Try answering to previous year question papers!<br/>
            3. VIDEO LECTURES---We update dependencies to keep things fresh.<br/>
            4. PLACEMENT PREPARATION---You have to make your placements with love these days!</p>

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
            </div>
        </div>
        <div id='departments'>
            <div class="h12">
                <p>DEPARTMENTS</p>
            </div>
                <p>We are providing the below listed departments study materials .<br></br>Make use of the materials. Keep Learning .  </p>
                <div id="i1">
                <Link to="/Four"><div class="card">
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
                <Link to="/Four"><div class="card">
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
        </div>

        <div id="contact">
            <div class="h13">
                <p>Contact us</p>
            </div>
            <div><a href="@"><img class="email" src={email} alt="email"/></a></div>
            <div><a href="@"><img class="insta" src={insta} alt="insta"/></a></div>
            <div><a href="@"><img class="git" src={git} alt="git"/></a></div>

            <Link to="/about"><div class="mi"><p>More info</p></div></Link>
        </div>
</>
    );
}

export default Home ;