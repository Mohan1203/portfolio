import React from "react";
import Aboutme from "./aboutme";
import Skill from "./skills";
import Projects from "./projects";
import Funfact from "./funfact";
import "../style/body.css"

function Body() {

    

    return (
        <div>
            <div>
                    
                    <Aboutme/>
                    <Skill />
                    <Projects/>
                    <Funfact/>
                  
            </div>
        </div>
    )
}

export default Body;