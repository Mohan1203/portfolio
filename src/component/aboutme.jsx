import React from "react";
import "../style/aboutme.css";
import profile from "../media/profilePic.webp";
import myPic from "../media/mypic.jpg";
import {Link} from "react-router-dom";

function AboutMe(){
    return (
        <div className="container">
             <div className="intro">
                    <div>
                        <img src={myPic} alt="profile pic" id="profilephoto"/>
                    </div>
                    <div className="intro-content">
                        <h3>Full-stack developer</h3>
                        <h1>Mohan Dhila</h1>
                        <p className="intro-para">scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <div className="intro-btn">
                            <a href="https://docs.google.com/document/d/1ZekshKHBgwFafqQixvsV2BZ45aLCmJDR/edit?usp=share_link&ouid=109134305148480031744&rtpof=true&sd=true"><button className="btn1">View CV</button></a>
                            <Link to={"/contactme"}><button className="btn2">Contact</button></Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default AboutMe;