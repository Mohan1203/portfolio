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
                    <a href="https://github.com/Mohan1203" ><AiFillGithub size={40} style={{color:"#0081C9"}} className="footer-icons"/></a>
                    <a href="https://www.facebook.com/mohan.ahir.140" ><FaFacebookSquare size={40} style={{color:"#0081C9"}}  className="footer-icons"/></a>
                    <a href="https://twitter.com/mrahir101" ><FaTwitterSquare size={40} style={{color:"#0081C9"}} className="footer-icons"/></a>
                    <a href="https://www.instagram.com/mr_ahir_101/" ><FaInstagramSquare size={40} style={{color:"#0081C9"}} className="footer-icons"/></a>
                </div>
                <div className="footer-box2">
                    <p>© 2023 Mohan Dhila. All rights reserved.</p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;