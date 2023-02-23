import React from "react";
import "../style/funfact.css"
import { BsSmartwatch } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { BsFillAwardFill } from "react-icons/bs";
import { IoLanguage } from "react-icons/io5";

function Funfact() {
    return (
        <div className="funfact-container">
            <h1 className="funfact-heading">Fun fact</h1>
            <div className="funfact-box">
                <div className="funfact-boxes">
                    <div className="funfact-content">
                        <span><BsSmartwatch size={50} style={{ color: "#0081C9" }} /></span>
                        <h3>Working hours</h3>
                        <h1>200</h1>
                    </div>
                    <div className="funfact-content">
                        <span><AiFillProject size={50} style={{ color: "#0081C9" }} /></span>
                        <h3>Total Projects</h3>
                        <h1>5</h1>
                    </div>
                    <div className="funfact-content">
                        <span><BsFillAwardFill size={50} style={{ color: "#0081C9" }} /></span>
                        <h3>Award Won</h3>
                        <h1>0</h1>
                    </div>
                    <div className="funfact-content">
                        <span><IoLanguage size={50} style={{ color: "#0081C9" }} /></span>
                        <h3>Language</h3>
                        <h1>4</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Funfact;