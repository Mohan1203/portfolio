import React from "react";
import "../style/aboutme.css";
import profile from "../media/profilePic.webp";

function AboutMe(){
    return (
        <div className="container">
             <div className="intro">
                    <div>
                        <img src={profile} alt="profile pic" id="profilephoto"/>
                    </div>
                    <div className="intro-content">
                        <h3>Full-stack developer</h3>
                        <h1>Mohan Dhila</h1>
                        <p className="intro-para">scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <div className="intro-btn">
                            <button className="btn1">Download CV</button>
                            <button className="btn2">Contact</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default AboutMe;