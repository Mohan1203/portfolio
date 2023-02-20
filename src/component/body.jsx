import React from "react";
import "../style/body.css";
import profile from "../media/profilePic.webp";
import Skill from "./skills";
import Projects from "./projects";
import Funfact from "./funfact";
import Footer from "./footer";

function Body() {

    function photoshackle(e){
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        document.getElementById("profilephoto").style.transform = "translate(+"+x*10+"px,+"+y*10+"px)";
    

    }

    return (
        <div>
            <div className="container" onMouseMove={photoshackle}>
                <div className="header">
                    <div>
                        <h1>Header</h1>
                    </div>
                    <div>
                        <ul className="list">
                            <li className="list-items">About me</li>
                            <li className="list-items">Resume</li>
                            <li className="list-items">Portfolio</li>
                            <li className="list-items">Blog</li>
                        </ul>
                    </div>
                </div>
                <div className="intro">
                    <div>
                        <img src={profile} alt="profile pic" id="profilephoto"/>
                    </div>
                    <div className="intro-content">
                        <h3>Full-stack developer</h3>
                        <h1>Mohan Dhila</h1>
                        <p className="intro-para">I am Mohan Dhila full stack web developer from Gujarat India. I like to design webite and make it full function with modern technology like React,Nodejs,Mongodb and many more. I am available for any type of job full time or part time</p>
                        <div className="intro-btn">
                            <button className="btn1">Download CV</button>
                            <button className="btn2">Contact</button>
                        </div>
                    </div>
                </div>
                    <Skill />
                    <Projects/>
                    <Funfact/>
                    <Footer/>
            </div>
        </div>
    )
}

export default Body;