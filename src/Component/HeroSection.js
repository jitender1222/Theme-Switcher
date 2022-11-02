import {useContext } from "react";

import ThemeContext from "../Context/ThemeContext";

import AppTheme from "../Color";


const HeroSection=()=>{

    const theme=useContext(ThemeContext);
    const currentTheme=AppTheme[theme];
    return (
        <div 
        style={{
            padding:"1rem",
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.color}`,
            textAlign:"Center"
        }}
        >
            <h3>Context API Theme Toggler</h3>
            <p>THis is a Nice Paragraph</p>

            <button
            style={{
                backgroundColor:"#26ae60",
                padding:"10px 150px",
                fontSize:"20px",
                color:"#fff",
                border:`${currentTheme.border}`
            }}
            >Click Me</button>
        </div>
    )
}


export default HeroSection;