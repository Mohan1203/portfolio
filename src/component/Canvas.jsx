import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "../style/canvas.css"
import { AiOutlineClose } from "react-icons/ai";

function OffCanvasExample(props) {
 

  return (
    <div>
      <div className="canvas-header" >
                <div  className="list-header">
                   
                  <ul className="mt-3 px-2">
                    <li className="header-items" onClick={props.closeMenu}><Link to="/" style={{textDecoration:'none'}}>Home</Link></li>
                    <li className="header-items" onClick={props.closeMenu}><Link to="/about"style={{textDecoration:'none'}}>about</Link></li>
                    <li className="header-items" onClick={props.closeMenu}><Link to="/contactme"style={{textDecoration:'none'}}>contactme</Link></li>
                    <li className="header-items" onClick={props.closeMenu}><Link to="/"style={{textDecoration:'none'}}>Blog</Link></li>
                    
                </ul>
                </div>
                <button onClick={props.closeMenu} className="close-btn"><AiOutlineClose size={25}/></button>
            </div>
    </div>
               
  );
}

export default OffCanvasExample;
