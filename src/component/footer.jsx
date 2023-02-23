import React from "react";
import "../style/footer.css"
import {FaFacebookSquare} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import{AiFillGithub} from "react-icons/ai";

function Footer(){
    return(
        <div className="footer-container">
            <hr className="footer-line"/>
            <div className="footer-box">
                <div className="footer-box1">
                    <a href="#" ><AiFillGithub size={40} style={{color:"#0081C9"}} className="footer-icons"/></a>
                    <a href="#" ><FaFacebookSquare size={40} style={{color:"#0081C9"}}  className="footer-icons"/></a>
                    <a href="#" ><FaTwitterSquare size={40} style={{color:"#0081C9"}} className="footer-icons"/></a>
                    <a href="#" ><FaInstagramSquare size={40} style={{color:"#0081C9"}} className="footer-icons"/></a>
                </div>
                <div className="footer-box2">
                    <p>© 2023 Mohan Dhila. All rights reserved.</p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;