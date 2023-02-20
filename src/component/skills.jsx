import React from "react";
import "../style/skills.css";
import { TiPencil } from "react-icons/ti"
import {FaRobot} from "react-icons/fa"
import {DiNodejs} from "react-icons/di"
import {MdOutlineOndemandVideo} from "react-icons/md"

function Skill() {
    return (
        <div>
            <div className="main">
                <h1 className="skill-heading">What can i do</h1>
                <div className="skill-name">
                    <div className="box">
                        <div className="indivisual">
                            <div className="box-1"><TiPencil size={50} style={{color:"#0081C9"}} /></div>
                            <div className="box-2">
                                <h3>Front-end</h3>
                                <p>Front-end developer with skill of CSS,tailwindcss,Bootstrap and framework like React.js and good grip on Js as well</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="indivisual">
                            <div className="box-1"><DiNodejs size={50} style={{color:"#0081C9"}}/></div>
                            <div className="box-2">
                                <h3>Full-Stack developer</h3>
                                <p>Full-stack with MERN technology Nodejs,Mongodb,Express,React and also make project in it as well</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="indivisual">
                            <div className="box-1"><FaRobot size={50} style={{color:"#0081C9"}}/></div>
                            <div className="box-2">
                                <h3>Developer who use AI</h3>
                                <p>I integrate AI in my project and AI is emerging so i will help in integrate AI in your next project as well</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="indivisual">
                            <div className="box-1"><MdOutlineOndemandVideo size={50} style={{color:"#0081C9"}}/></div>
                            <div className="box-2">
                                <h3>Video Editor</h3>
                                <p>I am a good video editor so I will help you in that way in your organization as well</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Skill;