import React from "react";
import './cserefbook.css'

import search from "./search.png"

import book1 from "./book1.jpg"
import book2 from "./book2.jpg"
import book3 from "./book3.jpg"
import book4 from "./book4.png"
import book5 from "./book5.jpg"
import book6 from "./book6.jpg"

function Cserefbook()
{

    return(
        <>
                <div class="background100">

                <div className='header'>
                </div>

                <div className='headvideo'>
                    <p>REFERENCE BOOKS</p>
                </div>

                <div class="Search"></div>
                <form>
                    <input class="in" type="text" placeholder="Search" />
                    <button type="submit" class="btn100"><img class="searching" src={search}/> </button>  
                </form>

                <div class="book1">
                    <img src={book1} height="250px" width="200px" />
                        <div class="bookname1">
                            <p>Discrete Mathematics</p>
                            <a href="https://drive.google.com/file/d/1WMMx-ZMH699MH3txR7GIzPsEIU4Ispr9/view?usp=sharing">Read online</a> <br></br>
                            <a href="https://drive.google.com/uc?id=1WMMx-ZMH699MH3txR7GIzPsEIU4Ispr9&export=download">Download</a>
                        </div>
                </div>

                <br></br><br></br><br></br>

                <div class="book1">
                    <img src={book2} height="250px" width="200px" />
                        <div class="bookname2">
                            <p>Software Engineering - A Practitioner's Approach</p>
                            <a href="https://drive.google.com/file/d/1STspeJqFqfJazsXWSHE7ZwBhBNAhfbuG/view?usp=share_link">Read online</a> <br></br>
                            <a href="https://drive.google.com/uc?id=1STspeJqFqfJazsXWSHE7ZwBhBNAhfbuG&export=download">Download</a>
                        </div>
                </div>
                
                <br></br><br></br><br></br>

                <div class="book1">
                    <img src={book3} height="250px" width="200px" />
                        <div class="bookname3">
                            <p>Software Engineering Sommerville 9th Edition</p>
                            <a href="https://drive.google.com/file/d/1qwB8VIyymufazGAsJU6MJt9ZlSwcSkoY/view?usp=sharing">Read online</a> <br></br>
                            <a href="https://drive.google.com/uc?id=1qwB8VIyymufazGAsJU6MJt9ZlSwcSkoY&export=download">Download</a>
                        </div>
                </div>
                
                <br></br><br></br><br></br>

                <div class="book1">
                    <img src={book4} height="250px" width="200px" />
                        <div class="bookname4">
                            <p>Python - Digital Edition</p>
                            <a href="https://drive.google.com/file/d/1uy8rDbW1X1lLFXiUQvKsRd7LKv5WdsfH/view?usp=sharing">Read online</a> <br></br>
                            <a href="https://drive.google.com/uc?id=1uy8rDbW1X1lLFXiUQvKsRd7LKv5WdsfH&export=download">Download</a>
                        </div>
                </div>
                
                <br></br><br></br><br></br>

                <div class="book1">
                    <img src={book5} height="250px" width="200px" />
                        <div class="bookname5">
                            <p>Introduction to Java Programming</p>
                            <a href="https://drive.google.com/file/d/1Gr8yGBWsTEU4bh3_JV8gZMHVbhRbZRvm/view?usp=sharing">Read online</a> <br></br>
                            <a href="https://drive.google.com/uc?id=1Gr8yGBWsTEU4bh3_JV8gZMHVbhRbZRvm&export=download">Download</a>
                        </div>
                </div>

                <br></br><br></br><br></br>

                <div class="book1">
                    <img src={book6} height="250px" width="200px" />
                        <div class="bookname6">
                            <p>JavaScript Basics - Rebecca Murphey</p>
                            <a href="https://drive.google.com/file/d/1iNOPezDws9qKmdNDsQsFx7gpu6409DGW/view?usp=share_link">Read online</a> <br></br>
                            <a href="https://drive.google.com/uc?id=1iNOPezDws9qKmdNDsQsFx7gpu6409DGW&export=download">Download</a>
                        </div>
                </div>
                        
                        <br></br><br></br><br></br>
                </div>

        </>
    );
}

export default Cserefbook;