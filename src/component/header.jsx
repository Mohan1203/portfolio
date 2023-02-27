import React,{useState} from "react";
import "../style/header.css";
import { Link } from "react-router-dom";
import Canvas from "./Canvas";


function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const closeMenu = () => {
    setNavOpen(!navOpen);
    }
    return (

    <div>
        <div className="header">
            <div>
                <h1>Header</h1>
            </div>
          

            <div className="list-items">
                <ul className="list">
                    <Link to={"/"}><li className="list-items">Home</li></Link>
                    <Link to={"/about"} className="link"><li className="list-items">About me</li></Link>
                    <Link to={"/contactme"}><li className="list-items">ContactMe</li></Link>
                    <Link to={"/"}><li className="list-items">Blog</li></Link>
                </ul>
            
            </div>
            <div className="canvas">
            <div className="">
                    <button className="menu-btn"   onClick={closeMenu}>
                         <div className="menu-items"></div>
                         <div className="menu-items"></div>
                         <div className="menu-items"></div>
                    </button>
                      {navOpen?<div>
                            <Canvas closeMenu={closeMenu}/>
                            
                      </div>:""}

                 </div>
            </div>
           
        </div>
    </div>
    )
}

export default Header;