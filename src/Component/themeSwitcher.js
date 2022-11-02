// import React,{useContext, useState} from "react";

// import ThemeContext from "../Context/ThemeContext";

// const Switcher=()=>{
//     const [theme,setTheme]=useContext(ThemeContext);
//     console.log("set theme "+setTheme);
//     return (
//         <div onClick={()=>{
//             setTheme(theme === "light" ? "dark" : "light" );
//         }}>
//             <span>{theme==="light" ? "Turn on Dark Mode" : "Turn on Light Mode" }</span>
//         </div>
//     )
// }

// export default Switcher;


import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";

const Switcher = () => {

    const [themeMode, setThemeMode] = useContext(ThemeContext);

    console.log(setThemeMode);

    return (
        <div onClick={() => {
            setThemeMode(themeMode === "light" ? "dark" : "light");
        }}>
        <span>{themeMode === "light" ? "Turn Off" : "Lights On"}</span>
        </div>
    );
};
export default Switcher;